import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    return { statusCode: 405, body: { error: 'Method not allowed' } };
  }

  try {
    const body = await readBody(event); // รับข้อมูลจาก request body
    const { userId, restaurantId, totalPrice, deliveryAddress, paymentMethod, orderItems } = body;

    // สร้าง Order ในฐานข้อมูล
    const newOrder = await prisma.order.create({
      data: {
        userId: parseInt(userId),
        restaurantId,
        totalPrice,
        deliveryAddress,
        status: 'pending',
        paymentMethod,
        orderItems: {
          create: orderItems.map((item) => ({
            menuId: item.menuId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        orderItems: true, // เพื่อดึงข้อมูล orderItems ที่สร้างมาแสดงผลด้วย
      },
    });

    // ลบ CartItem ที่เกี่ยวข้องกับ userId
    await prisma.cartItem.deleteMany({
      where: {
        userId: parseInt(userId), // ลบ CartItem ของผู้ใช้ที่ทำคำสั่งซื้อ
      },
    });

    return { statusCode: 201, body: newOrder };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: { error: 'Failed to create order' } };
  }
});
