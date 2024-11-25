import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const restaurantId = Number(event.context.params?.id)
    
    const menus = await prisma.menu.findMany({
      where: { restaurantId },
      include: {
        reviews: true
      }
    })

    return menus

  } catch (error) {
    return createError({
      statusCode: 500,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลเมนู'
    })
  }
})