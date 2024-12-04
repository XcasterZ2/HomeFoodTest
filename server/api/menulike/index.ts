// File: server/api/menulike/index.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const method = event.method

  if (method === 'POST') {
    return createMenuLike(event)
  } else if (method === 'DELETE') {
    return removeMenuLike(event)
  } else if (method === 'GET') {
    return getMenuLikes(event)
  }
})

// Create a menu like
async function createMenuLike(event) {
  try {
    const body = await readBody(event)
    const { userId, menuId } = body

    // Check if the like already exists
    const existingLike = await prisma.menuLike.findUnique({
      where: {
        userId_menuId: {
          userId: parseInt(userId),
          menuId
        }
      }
    })

    if (existingLike) {
      throw createError({
        statusCode: 400,
        message: 'You have already liked this menu item'
      })
    }

    // Create the menu like
    const menuLike = await prisma.menuLike.create({
      data: {
        userId: parseInt(userId),
        menuId
      }
    })

    // Update like count in Menu model
    await prisma.menu.update({
      where: { id: menuId },
      data: { likeCount: { increment: 1 } }
    })

    return menuLike
  } catch (error) {
    console.error('Error creating menu like:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to create menu like'
    })
  }
}

// Remove a menu like
async function removeMenuLike(event) {
  try {
    const query = getQuery(event)
    const { userId, menuId } = query

    if (!userId || !menuId) {
      throw createError({
        statusCode: 400,
        message: 'User ID and Menu ID are required'
      })
    }

    // Check if the like exists
    const existingLike = await prisma.menuLike.findUnique({
      where: {
        userId_menuId: {
          userId: Number(userId),
          menuId: Number(menuId)
        }
      }
    })

    if (!existingLike) {
      throw createError({
        statusCode: 404,
        message: 'Menu like not found'
      })
    }

    // Remove the menu like
    await prisma.menuLike.delete({
      where: {
        userId_menuId: {
          userId: Number(userId),
          menuId: Number(menuId)
        }
      }
    })

    // Decrement like count in Menu model
    await prisma.menu.update({
      where: { id: Number(menuId) },
      data: { likeCount: { decrement: 1 } }
    })

    return { message: 'Menu like removed successfully' }
  } catch (error) {
    console.error('Error removing menu like:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to remove menu like'
    })
  }
}

// Get menu likes for a specific menu or user
async function getMenuLikes(event) {
  try {
    const query = getQuery(event)
    const { menuId, userId } = query

    const whereCondition: any = {}
    if (menuId) whereCondition.menuId = Number(menuId)
    if (userId) whereCondition.userId = Number(userId)

    const menuLikes = await prisma.menuLike.findMany({
      where: whereCondition,
      include: {
        user: true,
        menu: true
      }
    })

    return menuLikes
  } catch (error) {
    console.error('Error fetching menu likes:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch menu likes'
    })
  }
}