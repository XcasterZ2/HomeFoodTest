import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { userId, menuId, quantity } = body;

  if (!userId || !menuId || quantity < 1) {
    return { error: 'Invalid input data' };
  }

  try {
    const existingCartItem = await prisma.cartItem.findUnique({
      where: {
        userId_menuId: {
          userId,
          menuId,
        },
      },
    });

    if (existingCartItem) {
      await prisma.cartItem.update({
        where: {
          userId_menuId: {
            userId,
            menuId,
          },
        },
        data: {
          quantity: existingCartItem.quantity + quantity,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          userId,
          menuId,
          quantity,
        },
      });
    }

    return { success: true, message: 'Item added to cart successfully' };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to add item to cart' };
  }
});
