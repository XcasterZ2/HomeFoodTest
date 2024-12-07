import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event) // รับข้อมูลที่ส่งมาจาก client

    const { restaurant_Id, name, email, phoneNumber, location } = body

    // ตรวจสอบว่าข้อมูลที่จำเป็นถูกส่งมาหรือไม่
    if (!restaurant_Id) {
      throw new Error('Restaurant ID is required')
    }

    // อัปเดตข้อมูลในฐานข้อมูล
    const updatedRestaurant = await prisma.restaurant.update({
      where: { restaurant_Id },
      data: {
        name,
        email,
        phoneNumber,
        location,
      },
    })

    // ส่งข้อมูลกลับไปยัง client
    return {
      success: true,
      message: 'Restaurant updated successfully',
      data: updatedRestaurant,
    }
  } catch (error) {
    // ส่งข้อผิดพลาดกลับไปยัง client
    return {
      success: false,
      message: error.message || 'Failed to update restaurant',
    }
  }
})
