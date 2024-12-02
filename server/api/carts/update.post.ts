// server/api/cart/update.post.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // รับข้อมูลจาก request body
    const { cartItemId, newQuantity } = await readBody(event)

    // ตรวจสอบความถูกต้องของข้อมูล
    if (!cartItemId || newQuantity < 1) {
      return {
        success: false,
        error: 'Invalid cart item or quantity'
      }
    }

    // อัปเดตจำนวนสินค้าในฐานข้อมูล
    const updatedCartItem = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { 
        quantity: newQuantity 
      }
    })

    // ส่งข้อมูลตอบกลับ
    return {
      success: true,
      cartItem: updatedCartItem
    }

  } catch (error) {
    console.error('Error updating cart item:', error)
    
    return {
      success: false,
      error: error.message || 'Failed to update cart item'
    }
  }
})