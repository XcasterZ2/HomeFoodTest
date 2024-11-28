import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  // Validate menu ID
  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Menu ID is required'
    })
  }

  try {
    // Convert ID to integer
    const menuId = parseInt(id, 10)

    // Attempt to delete the menu
    const deletedMenu = await prisma.menu.delete({
      where: { 
        id: menuId 
      }
    })

    // Return success response
    return {
      statusCode: 200,
      message: 'Menu deleted successfully',
      menu: deletedMenu
    }
  } catch (error) {
    // Handle specific Prisma errors
    if (error.code === 'P2025') {
      // Record not found
      throw createError({
        statusCode: 404,
        message: `Menu with ID ${id} not found`
      })
    }

    // Handle other potential errors
    console.error('Delete menu error:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to delete menu'
    })
  }
})