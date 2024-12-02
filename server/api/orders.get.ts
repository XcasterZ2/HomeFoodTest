import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event); // รับ query parameters
  const { userId } = query;

  if (!userId) {
    return { statusCode: 400, body: { error: 'User ID is required' } };
  }

  try {
    // ดึงข้อมูล Order พร้อมความสัมพันธ์
    const orders = await prisma.order.findMany({
      where: {
        userId: parseInt(userId),
      },
      include: {
        orderItems: {
          include: {
            menu: true, // รวมข้อมูลเมนูใน orderItems
          },
        },
        restaurant: true, // รวมข้อมูลร้านอาหาร
      },
      orderBy: {
        createdAt: 'desc', // เรียงตามเวลาที่สร้าง (ล่าสุดก่อน)
      },
    });

    return { statusCode: 200, body: orders };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: { error: 'Failed to fetch orders' } };
  }
});
