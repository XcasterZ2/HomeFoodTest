import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  
  // Validate the ID
  if (!id || isNaN(Number(id))) {
    return {
      statusCode: 400,
      body: 'Invalid ID'
    };
  }

  try {
    const menu = await prisma.menu.findUnique({
      where: { id: Number(id) }
    });

    if (!menu) {
      return {
        statusCode: 404,
        body: 'Menu not found'
      };
    }

    return {
      statusCode: 200,
      body: menu
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal server error'
    };
  }
});
