//server/api/otp/register.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { phoneNumber , fullname , email } = await readBody(event);

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return { code: '400', detail: 'Email already exists' };
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        phoneNumber,
        fullname,
      },
    });

    return newUser;
  } catch (error) {
    console.error('Error registering user:', error);
    return { code: '500', detail: 'Internal Server Error' };
  }
});
