import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { method } = event.req;

  const { id } = event.context.params; // Get the ID from URL params for PUT/DELETE

  // Handling GET request (fetch a menu or all menus)
  if (method === 'GET') {
    if (id) {
      // Fetch a specific menu by ID
      const menu = await prisma.menu.findUnique({
        where: { id: parseInt(id) },
        include: {
          reviews: true, // Include related reviews if needed
        },
      });
      return menu;
    } else {
      // Fetch all menus
      const menus = await prisma.menu.findMany({
        include: {
          restaurant: true, // Include restaurant information if needed
        },
      });
      return menus;
    }
  }

  // Handling PUT request (update an existing menu)
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

  // Handling DELETE request (delete a specific menu)
  if (method === 'DELETE') {
    if (!id) {
      return { message: 'Menu ID is required' };
    }

    await prisma.menu.delete({
      where: { id: parseInt(id) },
    });

    return { message: `Menu with ID ${id} deleted` };
  }

  return { message: 'Method not allowed' };
});
