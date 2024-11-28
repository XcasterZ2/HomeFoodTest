import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event);

  if (!userId) {
    return { error: 'User ID is required' };
  }

  try {
    const cartItems = await prisma.cartItem.findMany({
      where: {
        userId: parseInt(userId as string),
      },
      include: {
        menu: true,
      },
    });

    return { success: true, cartItems };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to fetch cart items' };
  }
});
