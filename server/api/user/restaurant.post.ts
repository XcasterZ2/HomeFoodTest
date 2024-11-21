import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        const newRestaurant = await prisma.restaurant.create({
            data: {
                email: body.email,
                name: body.name,
                phoneNumber: body.phoneNumber,
                ownerFullname: body.ownerFullname,
                location: body.location,
                paymentMetod: body.paymentMetod,
                status: body.status,
                daystartOpen: body.daystartOpen,
                timestartOpen: body.timestartOpen,
                dayscloseOpen: body.dayscloseOpen,
                timecloseOpen: body.timecloseOpen,
                ownerId: body.ownerId,
            },
        });
        return {
            success: true,
            message: 'สร้างร้านค้าสำเร็จ',
            restaurant: newRestaurant,
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: 'สร้างร้านค้าไม่สำเร็จ',
            error: error.message,
        };
    }
});