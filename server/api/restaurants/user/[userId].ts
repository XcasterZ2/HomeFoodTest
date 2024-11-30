// server/api/restaurants/user/[userId].ts
import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient()

  try {
    const userId = parseInt(getRouterParam(event, 'userId') || '')

    if (isNaN(userId)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid user ID'
      })
    }

    // ตรวจสอบก่อนว่ามี user นี้จริงๆ หรือไม่
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found'
      })
    }

    // ดึงข้อมูลร้านอาหารที่เป็นเจ้าของโดย user นี้
    const restaurants = await prisma.restaurant.findMany({
      where: { ownerId: userId },
      include: {
        menus: {
          select: {
            id: true,
            name: true,
            price: true,
            category: true,
            image: true,
            averageRating: true,
            likeCount: true
          }
        }
      }
    })

    return restaurants
  } catch (error) {
    console.error('Request error', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error fetching restaurants'
    })
  } finally {
    await prisma.$disconnect()
  }
})