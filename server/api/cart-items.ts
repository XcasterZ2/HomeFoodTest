// server/api/cart-items.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const method = event.req.method;

  try {
    if (method === 'GET') {
      // Fetch all cart items for a user
      const userId = parseInt(event.context.params?.userId);
      if (!userId) throw new Error('User ID is required');
      
      const cartItems = await prisma.cartItem.findMany({
        where: { userId },
        include: { menu: true }, // Include related menu data
      });
      return { success: true, data: cartItems };
    }

    if (method === 'POST') {
      // Add a new cart item
      const body = await readBody(event);
      const { userId, menuId, quantity } = body;

      if (!userId || !menuId) throw new Error('User ID and Menu ID are required');
      
      // Check if the item already exists in the cart
      const existingCartItem = await prisma.cartItem.findUnique({
        where: { userId_menuId: { userId, menuId } },
      });

      if (existingCartItem) {
        // Update the quantity if item exists
        const updatedCartItem = await prisma.cartItem.update({
          where: { userId_menuId: { userId, menuId } },
          data: { quantity: existingCartItem.quantity + (quantity || 1) },
        });
        return { success: true, data: updatedCartItem };
      } else {
        // Create a new cart item
        const newCartItem = await prisma.cartItem.create({
          data: { userId, menuId, quantity: quantity || 1 },
        });
        return { success: true, data: newCartItem };
      }
    }

    if (method === 'PUT') {
      // Update an existing cart item
      const body = await readBody(event);
      const { userId, menuId, quantity } = body;

      if (!userId || !menuId || !quantity) throw new Error('User ID, Menu ID, and Quantity are required');

      const updatedCartItem = await prisma.cartItem.update({
        where: { userId_menuId: { userId, menuId } },
        data: { quantity },
      });

      return { success: true, data: updatedCartItem };
    }

    if (method === 'DELETE') {
      // Remove an item from the cart
      const body = await readBody(event);
      const { userId, menuId } = body;

      if (!userId || !menuId) throw new Error('User ID and Menu ID are required');

      await prisma.cartItem.delete({
        where: { userId_menuId: { userId, menuId } },
      });

      return { success: true, message: 'Cart item removed successfully' };
    }

    throw new Error('Invalid HTTP Method');
  } catch (error) {
    return { success: false, error: error.message };
  }
});
