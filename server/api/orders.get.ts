import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { userId } = query;

  if (!userId) {
    return { statusCode: 400, body: { error: 'User ID is required' } };
  }

  try {
    const userIdInt = parseInt(userId, 10);

    if (isNaN(userIdInt)) {
      return { statusCode: 400, body: { error: 'User ID must be a valid number' } };
    }

    // ดึงข้อมูล Order พร้อมความสัมพันธ์
    const orders = await prisma.order.findMany({
      where: {
        userId: userIdInt,
      },
      include: {
        orderItems: {
          include: {
            menu: true,
          },
        },
        restaurant: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (orders.length === 0) {
      return { statusCode: 200, body: { message: 'ไม่มีออเดอร์' } };
    }

    return { statusCode: 200, body: orders };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: { error: 'Failed to fetch orders' } };
  }
});
