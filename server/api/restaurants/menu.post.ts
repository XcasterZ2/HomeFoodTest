// server/api/restaurants/menu.post.ts
import { PrismaClient } from '@prisma/client'
import { createError } from 'h3'
import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Parse multipart form data
    const formData = await readMultipartFormData(event)
    
    if (!formData) {
      throw createError({
        statusCode: 400,
        message: 'ไม่พบข้อมูลที่ส่งมา',
      })
    }

    // Extract fields from form data
    const getField = (name: string) => 
      formData.find(part => part.name === name)?.data.toString()

    const name = getField('name')
    const description = getField('description')
    const price = getField('price')
    const category = getField('category')
    const restaurantId = getField('restaurantId')

    // Validate required fields
    if (!name || !price || !restaurantId) {
      throw createError({
        statusCode: 400,
        message: 'กรุณากรอกข้อมูลที่จำเป็น (ชื่อเมนู, ราคา, และรหัสร้านอาหาร)',
      })
    }

    // Verify restaurant exists
    const restaurant = await prisma.restaurant.findUnique({
      where: { restaurant_Id: parseInt(restaurantId) },
    })

    if (!restaurant) {
      throw createError({
        statusCode: 404,
        message: 'ไม่พบข้อมูลร้านอาหาร',
      })
    }

    // Process image uploads
    const imageFiles = formData.filter(part => part.name === 'images')
    const imageUrls: string[] = []

    // สร้างโฟลเดอร์ upload ถ้ายังไม่มี
    const uploadDir = path.join(process.cwd(), 'public', 'upload', `restaurant_${restaurantId}`)
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true })
    }

    for (const imageFile of imageFiles) {
      if (imageFile.data.length > 5 * 1024 * 1024) { // 5MB limit
        throw createError({
          statusCode: 400,
          message: 'ขนาดไฟล์รูปภาพต้องไม่เกิน 5MB',
        })
      }

      // สร้างชื่อไฟล์แบบสุ่ม
      const fileExtension = path.extname(imageFile.filename || '.jpg')
      const fileName = `${uuidv4()}${fileExtension}`
      const filePath = path.join(uploadDir, fileName)

      // บันทึกไฟล์
      fs.writeFileSync(filePath, imageFile.data)

      // บันทึก URL ของภาพ (ไม่รวม public)
      const imageUrl = `/upload/restaurant_${restaurantId}/${fileName}`
      imageUrls.push(imageUrl)
    }

    // Convert imageUrls to JSON string
    const imageUrlsString = JSON.stringify(imageUrls)

    // Create menu item with image URLs
    const newMenu = await prisma.menu.create({
      data: {
        name,
        description: description || '',
        price: Number(price),
        category: category || '',
        restaurantId: parseInt(restaurantId),
        image: imageUrlsString, // บันทึกเป็น JSON string
      },
    })

    return { 
      statusCode: 200, 
      message: 'เมนูถูกสร้างเรียบร้อย', 
      data: newMenu 
    }
  } catch (error) {
    console.error('Error:', error)
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'เกิดข้อผิดพลาดในการเพิ่มเมนู',
    })
  }
})