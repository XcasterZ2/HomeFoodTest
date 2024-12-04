import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { restaurantId } = query;

  if (!restaurantId) {
    return { statusCode: 400, body: { error: 'Restaurant ID is required' } };
  }

  try {
    const restaurantIdInt = parseInt(restaurantId, 10);

    if (isNaN(restaurantIdInt)) {
      return { statusCode: 400, body: { error: 'Restaurant ID must be a valid number' } };
    }

    // ดึงข้อมูล Order ที่เกี่ยวข้องกับร้านอาหาร
    const orders = await prisma.order.findMany({
      where: {
        restaurantId: restaurantIdInt,
      },
      include: {
        orderItems: {
          include: {
            menu: true,
          },
        },
        user: true, // หากต้องการข้อมูลผู้ใช้ที่สั่ง
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (orders.length === 0) {
      return { statusCode: 200, body: { message: 'ไม่มีออเดอร์สำหรับร้านอาหารนี้' } };
    }

    return { statusCode: 200, body: orders };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: { error: 'Failed to fetch orders' } };
  }
});
