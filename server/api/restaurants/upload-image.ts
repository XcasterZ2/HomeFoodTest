import fs from 'fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Only allow POST method
  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    // Parse the multipart form data
    const formData = await readMultipartFormData(event)
    
    if (!formData) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No file uploaded'
      })
    }

    // Find the file and restaurant ID from form data
    const fileField = formData.find(field => field.name === 'file')
    const restaurantIdField = formData.find(field => field.name === 'restaurantId')

    if (!fileField || !restaurantIdField) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing file or restaurant ID'
      })
    }

    const restaurantId = parseInt(restaurantIdField.data.toString())
    
    // Generate a unique filename
    const filename = `restaurant_image_${Date.now()}${path.extname(fileField.filename || '')}`
    
    // Create upload directory
    const uploadDir = path.join(process.cwd(), 'public', 'upload', `restaurant_${restaurantId}`)
    fs.mkdirSync(uploadDir, { recursive: true })

    // Full path for the file
    const filePath = path.join(uploadDir, filename)
    
    // Save the file
    fs.writeFileSync(filePath, fileField.data)

    // Construct the public URL path
    const publicUrlPath = `/upload/restaurant_${restaurantId}/${filename}`

    // Update restaurant image in database
    const updatedRestaurant = await prisma.restaurant.update({
      where: { restaurant_Id: restaurantId },
      data: { 
        restaurantImage: publicUrlPath 
      }
    })

    return {
      message: 'Image uploaded successfully',
      imageUrl: publicUrlPath
    }
  } catch (error) {
    console.error('Restaurant image upload error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error uploading restaurant image'
    })
  } finally {
    await prisma.$disconnect()
  }
})

// Configure to handle file uploads
export const config = {
  api: {
    bodyParser: false
  }
}