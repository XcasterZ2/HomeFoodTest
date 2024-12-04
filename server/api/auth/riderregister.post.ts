//server/api/auth/riderregister.post.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { fullname, email, phoneNumber } = await readBody(event);

    const existingUser = await prisma.user.findUnique({
        where: { phoneNumber },
    });

    if (existingUser) {
        throw createError({
            statusCode: 400,
            message: 'ผู้ใช้นี้มีอยู่ในระบบแล้ว',
        });
    }

    // Create new user
    const newUser = await prisma.user.create({
        data: {
            email,
            fullname,
            phoneNumber,
            role: 'rider'
        },
    });

    return {
        message: 'สมัครสมาชิกไรเดอร์เสร็จสิ้น',
        user: newUser,
    };
});