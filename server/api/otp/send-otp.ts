//server/api/otp/send-otp.ts
export default defineEventHandler(async (event) => {
  const { phoneNumber } = await readBody(event);

  try {
    const response = await fetch('https://portal-otp.smsmkt.com/api/otp-send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api_key': 'b93544bfab41990ae31f2120c8dfb262',
        'secret_key': 'yCQ6E9ks247t4lL7',
      },
      body: JSON.stringify({
        project_key: '3e2e018472',
        phone: phoneNumber,
      }),
    });

    const data = await response.json();
    // console.log('dataAPIotp: ' , data)
    return data;
  } catch (error) {
    console.error('Error sending OTP:', error);
    return { code: '500', detail: 'Internal Server Error' };
  }
});
