//server/api/otp/verify-otp.ts
export default defineEventHandler(async (event) => {
  const { token, otp_code} = await readBody(event);

  try {
    const response = await fetch('https://portal-otp.smsmkt.com/api/otp-validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': 'b93544bfab41990ae31f2120c8dfb262',
        'secret_key': 'yCQ6E9ks247t4lL7',
      },
      body: JSON.stringify({
        token,
        otp_code,
      }),
    });

    const data = await response.json();

    if (data.result.status) {
      return { status: true };
    } else {
      return { status: false };
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return { status: false };
  }
});
