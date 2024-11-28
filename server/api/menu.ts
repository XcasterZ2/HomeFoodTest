//server/api/menu.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { method } = event.req;

  const { id } = event.context.params;

  if (method === 'GET') {
    if (id) {
      const menu = await prisma.menu.findUnique({
        where: { id: parseInt(id) },
        include: {
          reviews: true,
        },
      });
      return menu;
    } else {
      const menus = await prisma.menu.findMany({
        include: {
          restaurant: true,
        },
      });
      return menus;
    }
  }
  if (method === 'PUT') {
    if (!id) {
      return { message: 'Menu ID is required' };
    }

    const body = await readBody(event);
    const updatedMenu = await prisma.menu.update({
      where: { id: parseInt(id) },
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        image: body.image,
        category: body.category,
        isAvailable: body.isAvailable,
      },
    });

    return updatedMenu;
  }

  if (method === 'DELETE') {
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Menu ID is required',
      });
    }

    try {
      await prisma.menu.delete({
        where: { id: parseInt(id) },
      });

      return { message: `Menu with ID ${id} deleted` };
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Error deleting menu',
      });
    }
  }

  return { message: 'Method not allowed' };
});
