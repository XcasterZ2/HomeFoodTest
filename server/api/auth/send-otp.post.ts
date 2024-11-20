export default defineEventHandler(async (event) => {
  const { phoneNumber } = await readBody(event);

  const otpSendData = {
    project_key: "155b74a7cb",
    phone: phoneNumber,
  };

  try {
    const response = await fetch('https://portal-otp.smsmkt.com/api/otp-send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "api_key": "793979ca69c1b4a28e813e0e78f6fdd7",
        "secret_key": "Telzcc8Xy2WB06Qp",
      },
      body: JSON.stringify(otpSendData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw createError({
        statusCode: 400,
        message: 'Failed to send OTP: ' + (errorData.detail || response.statusText),
      });
    }

    const otpResponse = await response.json();
    console.log('otpResponsendOtp : ' , otpResponse)

    if (otpResponse.code === "000" && otpResponse.result.status === "OK.") {
      return {
        message: 'OTP sent successfully',
        token: otpResponse.result.token,
      };
    } else {
      throw createError({
        statusCode: 400,
        message: 'Failed to send OTP: ' + otpResponse.detail,
      });
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error sending OTP.',
    });
  }
});
