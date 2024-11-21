//server/api/restaurant.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const method = event.req.method;
    if (method === 'GET') {
        // GET: ดึงข้อมูลร้านทั้งหมดหรือร้านที่ระบุ
        const { restaurantId } = getQuery(event);
        try {
            if (restaurantId) {
                const restaurant = await prisma.restaurant.findUnique({
                    where: { restaurant_Id: Number(restaurantId) },
                });
                if (!restaurant) {
                    throw createError({
                        statusCode: 404,
                        statusMessage: 'Restaurant not found.',
                    });
                }
                return restaurant;
            } else {
                const restaurants = await prisma.restaurant.findMany();
                return restaurants;
            }
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Error fetching restaurants.',
            });
        }
    }
    if (method === 'POST') {
        const body = await readBody(event);
        const { phoneNumber,
            email,
            ownerFullname,
            name,
            location,
            daystartOpen,
            timestartOpen,
            dayscloseOpen,
            timecloseOpen,
            paymentMetod,
            status,
            ownerId
        } = body;
        if (!ownerId || !name) {
            throw createError({
                statusCode: 400,
                statusMessage: 'ไม่สามารถสร้างได้กรอกไม่ครบ',
            });
        }
        try {
            const newRestaurant = await prisma.restaurant.create({
                data: {
                    name: name,
                    ownerId: ownerId,
                    phoneNumber: phoneNumber,
                    email: email,
                    ownerFullname: ownerFullname,
                    location: location,
                    daystartOpen: daystartOpen,
                    timestartOpen: timestartOpen,
                    dayscloseOpen: dayscloseOpen,
                    timecloseOpen: timecloseOpen ,
                    paymentMetod: paymentMetod,
                    status: status,
                },
            });
            return newRestaurant;
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Error creating restaurant.',
            });
        }
    }
    if (method === 'PUT') {
        // PUT: อัปเดตข้อมูลร้าน
        const body = await readBody(event);
        const { restaurantId, name, location, phoneNumber, restaurantImage, paymentMethod, license } = body;
        if (!restaurantId || !name || !location) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields: restaurantId, name, or location.',
            });
        }
        try {
            const updatedRestaurant = await prisma.restaurant.update({
                where: { restaurant_Id: Number(restaurantId) },
                data: {
                    name,
                    location,
                    phoneNumber,
                    restaurantImage,
                    paymentMetod: paymentMethod,
                    License: license,
                },
            });
            return updatedRestaurant;
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Error updating restaurant.',
            });
        }
    }
    if (method === 'DELETE') {
        // DELETE: ลบร้านอาหาร
        const { restaurantId } = getQuery(event);
        if (!restaurantId) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing restaurantId.',
            });
        }
        try {
            const deletedRestaurant = await prisma.restaurant.delete({
                where: { restaurant_Id: Number(restaurantId) },
            });
            return { message: 'ลบร้านค้าเรียบร้อย', restaurant: deletedRestaurant };
        } catch (error) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Error deleting restaurant.',
            });
        }
    }
    throw createError({
        statusCode: 405,
        statusMessage: `Method ${method} not allowed.`,
    });
});