import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { cartItemId } = event.context.params; 

  if (!cartItemId) {
    return { success: false, error: 'Cart Item ID is required' };
  }

  try {
    const deletedCartItem = await prisma.cartItem.delete({
      where: {
        id: parseInt(cartItemId),
      },
    });

    if (deletedCartItem) {
      return { success: true, message: 'Item removed from cart' };
    } else {
      return { success: false, error: 'Item not found' };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to remove item from cart' };
  }
});
