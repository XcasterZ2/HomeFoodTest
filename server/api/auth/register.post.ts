import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { email, phoneNumber, fullname, otpToken, otpCode } = await readBody(event);

  const existingUser = await prisma.user.findUnique({
    where: { phoneNumber },
  });

  if (existingUser) {
    throw createError({
      statusCode: 400,
      message: 'มีผู้ใช้อยู่แล้ว.',
    });
  }

  // OTP validation configuration
  const otpValidateData = {
    token: otpToken,
    otp_code: otpCode,
  };

  try {
    const response = await fetch('https://portal-otp.smsmkt.com/api/otp-validate', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "api_key": "793979ca69c1b4a28e813e0e78f6fdd7",
        "secret_key": "Telzcc8Xy2WB06Qp",
      },
      body: JSON.stringify(otpValidateData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw createError({
        statusCode: 400,
        message: 'OTP validation failed: ' + (errorData.detail || response.statusText),
      });
    }

    const otpResponse = await response.json();
    console.log('otpResVadi : ' , otpResponse)

    if (otpResponse.code === "000" && otpResponse.result.status === true) {
      const newUser = await prisma.user.create({
        data: {
          email,
          phoneNumber,
          fullname,
        },
      });

      return {
        message: 'User registered successfully',
        user: newUser,
      };
    } else {
      throw createError({
        statusCode: 400,
        message: 'Invalid OTP code.',
      });
    }
  } catch (error) {
    console.error('Error validating OTP or registering user:', error);
    throw createError({
      statusCode: 400,
      message: 'OTP validation failed.',
    });
  }
});
