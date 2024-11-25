import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    
    const menu = await prisma.menu.findUnique({
      where: { id },
      include: {
        reviews: true,
        restaurant: true
      }
    })

    if (!menu) {
      return createError({
        statusCode: 404,
        message: 'ไม่พบเมนูที่ต้องการ'
      })
    }

    return menu

  } catch (error) {
    return createError({
      statusCode: 500,
      message: 'เกิดข้อผิดพลาดในการดึงข้อมูลเมนู'
    })
  }
})