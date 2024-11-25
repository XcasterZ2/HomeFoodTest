import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const { name, description, price, category, restaurantId } = await readBody(event);

    if (!name || !price || !restaurantId) {
      throw createError({
        statusCode: 400,
        message: 'กรุณากรอกข้อมูลที่จำเป็น (ชื่อเมนู, ราคา, และรหัสร้านอาหาร)',
      });
    }

    const restaurant = await prisma.restaurant.findUnique({
      where: { restaurant_Id: restaurantId },
    });

    if (!restaurant) {
      throw createError({
        statusCode: 404,
        message: 'ไม่พบข้อมูลร้านอาหาร',
      });
    }

    const newMenu = await prisma.menu.create({
      data: {
        name,
        description,
        price: Number(price),
        category: category,
        restaurantId,
      },
    });

    return { statusCode: 200, message: 'เมนูถูกสร้างเรียบร้อย', data: newMenu };
  } catch (error) {
    console.error('Error:', error);
    return createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'เกิดข้อผิดพลาดในการเพิ่มเมนู',
    });
  }
});
