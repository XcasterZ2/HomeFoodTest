<template>
  <div class="mx-auto  items-center h-screen overflow-y-auto flex flex-col font-prompt">
    <div v-if="otpSent === false" class="mt-5 w-[288px] h-[337px] flex flex-col gap-[32px] ">
      <h1
        class="h-[33px] px-[8px] mt-5 text-[22px] font-extrabold leading-[33.26px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF6347] to-[#FF826C] text-center">
        การลงทะเบียน
      </h1>

      <div class="w-[288px] h-auto gap-[24px] flex flex-col">

        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px]">
          <input v-model="phoneNumber" type="tel" ref="phoneInputRef"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px] "
            placeholder="เบอร์โทรศัพท์" /> <!-- @blur="validateNumber()" -->
        </div>
        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px] flex items-center">
          <Email />
          <input v-model="email" type="text"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            placeholder="อีเมล">
        </div>
        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px] flex items-center">
          <User />
          <input v-model="fullname" type="text"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            placeholder="ชื่อเต็ม">
        </div>

        <div class="w-[288px] h-[24px] gap-[12px] flex justify-center">
          <div class="relative w-[24px] h-[24px]">
            <input type="checkbox"
              class="peer appearance-none w-[24px] h-[24px] border border-[#E9EAEB] rounded-[4px] checked:bg-[#FF6347] checked:border-[#FF6347] cursor-pointer">
            <svg
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden peer-checked:block"
              width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="white" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
          <div class="w-[139px] h-[24px] font-normal text-[16px] leading-[24.19px]">
            จดจำข้อมูลของฉันไว้
          </div>
        </div>

      </div>
    </div>

    <div v-if="otpSent === true" class="mt-5">
      <div class="font-prompt flex flex-col items-center h-screen w-full">
        <p class="mt-4">ส่งโค้ดไปที่ (+66) แล้ว</p>
        <input v-model="otpCode" type="text" placeholder="Enter OTP" required class=" input input-bordered mt-5" />

        <div @click="handleVerifyOtp" class="btn btn-neutral mt-5">ยืนยันOTP</div>
      </div>
    </div>

    <div class="absolute top-[488px] w-[288px] flex flex-col gap-[32px]  h-[181px] ">
      <button @click="handleRegister"
        class="w-[288px] h-[58px] rounded-[28px] flex items-center bg-[#FF6347] justify-center gap-[14px] font-prompt text-white font-semibold text-[18px] leading-[27.22px]">
        ลงทะเบียน
      </button>

      <div class="font-normal h-[24px] text-[16px] leading-[24.19px] text-[#6D6C69] flex items-center justify-between">
        <div class="w-[66.5px] border-[0.5px] border-[#6D6C69]"></div>
        หรือเข้าสู่ระบบด้วย
        <div class="w-[66.5px] border-[0.5px] border-[#6D6C69]"></div>
      </div>

      <div class="w-[288px] h-[40px] gap-[16px] flex justify-center">
        <button class="hover:opacity-80 transition-opacity">
          <Google />
        </button>
        <button class="hover:opacity-80 transition-opacity">
          <Facebook />
        </button>
        <button class="hover:opacity-80 transition-opacity">
          <Line />
        </button>
        <button class="hover:opacity-80 transition-opacity">
          <Apple />
        </button>

      </div>
    </div>
  </div>
  <!-- <div class="p-4">
    สมัคร
  </div>
  <div class="max-w-2xl mx-auto">
    <form class="flex flex-col gap-y-2">
      <input v-model="email" type="email" placeholder="Email" required  class=" input input-bordered"/>
      <input v-model="phoneNumber" type="tel" placeholder="Phone Number" required class=" input input-bordered"/>
      <input v-model="fullname" type="text" placeholder="Full Name" required class=" input input-bordered"/>
      <div @click="handleRegister" class="btn btn-accent">Register</div>
    </form>
    <div v-if="otpSent === true">
      <input v-model="otpCode" type="text" placeholder="Enter OTP" required  class=" input input-bordered"/>
      <div @click="handleVerifyOtp" class="btn btn-accent">Verify OTP</div>
    </div>
  </div> -->
</template>

<script setup>
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'

import Line from '~/components/user/icons/Line.vue'
import Apple from '~/components/user/icons/Apple.vue'
import Facebook from '~/components/user/icons/Facebook.vue'
import Google from '~/components/user/icons/Google.vue'
import Email from '~/components/user/icons/Email.vue'
import User from '~/components/user/icons/User.vue'

const email = ref('');
const phoneNumber = ref('');
const fullname = ref('');
const otpSent = ref(false);
const otpCode = ref('');
const otpToken = ref('');
const iti = ref(null)

const router = useRouter()

const handleRegister = async () => {
  try {
    const response = await fetch('/api/otp/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber: phoneNumber.value }),
    });
    const data = await response.json();
    console.log('dataRegisPage : ', data)

    if (data.code === '000') {
      otpSent.value = true;
      otpToken.value = data.result.token;
    }
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
};

const handleVerifyOtp = async () => {
  try {
    const response = await fetch('/api/otp/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: otpToken.value,
        otp_code: otpCode.value,
      }),
    });

    const data = await response.json();
    console.log('dataVerotp : ', data)
    if (data.status == true) {
      await registerUser()
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
  }
};


const registerUser = async () => {
  try {
    const response = await fetch('/api/otp/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        phoneNumber: phoneNumber.value,
        fullname: fullname.value,
      }),
    });
    const data = await response.json();
    console.log('User registered:', data);
    router.push('/login')
  } catch (error) {
    console.error('Error registering user:', error);
  }
};

const getErrorMessage = (errorCode) => {
  if (!window.intlTelInputUtils) return 'เบอร์โทรไม่ถูกต้อง';

  switch (errorCode) {
    case intlTelInput.validationError.IS_POSSIBLE:
      return "เบอร์โทรไม่ถูกต้องตามรูปแบบ";
    case intlTelInput.validationError.INVALID_COUNTRY_CODE:
      return "รหัสประเทศไม่ถูกต้อง";
    case intlTelInput.validationError.TOO_SHORT:
      return "เบอร์โทรสั้นเกินไป";
    case intlTelInput.validationError.TOO_LONG:
      return "เบอร์โทรยาวเกินไป";
    case intlTelInput.validationError.NOT_A_NUMBER:
      return "กรุณากรอกเฉพาะตัวเลข";
    default:
      return "เบอร์โทรไม่ถูกต้อง";
  }
}


const phoneInputRef = ref(null)
onMounted(() => {
  if (phoneInputRef.value) {
    iti.value = intlTelInput(phoneInputRef.value, {
      initialCountry: 'th',
      preferredCountries: ['th'],
      separateDialCode: true,
      formatOnDisplay: true,
      autoFormat: true,
      nationalMode: true,
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.15/build/js/utils.js'
    });
  } else {
    console.error('Phone input reference is not available');
  }

  const waitForUtils = () => {
    if (!window.intlTelInputUtils) {
      setTimeout(waitForUtils, 100);
    }
  };

  waitForUtils();
});
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

input[type="checkbox"]:checked+svg {
  display: block;
}

/* ปรับแต่ง style ของ intl-tel-input */
:deep(.iti) {
  width: 100%;
}

:deep(.iti__flag-container) {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 2px;
}

:deep(.iti__selected-flag) {
  background: transparent !important;
  padding: 0 8px 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 0;
}

:deep(.iti__country-list) {
  border-radius: 8px;
  margin-top: 8px;
  max-height: 200px;
}

:deep(.iti__country) {
  padding: 8px 12px;
}

:deep(.iti__dial-code) {
  color: #666;
}

/* ปรับแต่ง input */
input {
  font-size: 16px;
}

input:focus {
  outline: none;
}

/* แสดง arrow และจัดตำแหน่งใหม่ */
:deep(.iti__arrow) {
  display: inline-block !important;
  position: relative;
  left: 4px;
  margin-left: 4px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #555;
}

/* จัดการ layout ของ flag container */
:deep(.iti__flag-container) {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

:deep(.iti__selected-flag) {
  background: transparent !important;
  padding: 0 8px 0 0;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 0;
}

/* จัดการ selected country primary */
:deep(.iti__selected-country-primary) {
  margin-left: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
}

/* ปรับตำแหน่งธง */
:deep(.iti__flag) {
  margin-left: 0;
}

/* จัดการ dial code */
:deep(.iti__selected-dial-code) {
  order: 1;
  margin-right: 4px;
}

/* จัดการตำแหน่ง arrow */
:deep(.iti__arrow) {
  order: 2;
}

/* ปรับขนาดและสีของ arrow */
:deep(.iti__arrow--up) {
  border-top: none;
  border-bottom: 5px solid #555;
}

:deep(.iti__search-input) {
  border-radius: 4px;
  margin: 4px 8px;
  width: calc(100% - 16px);
  font-family: 'Prompt', sans-serif;
}

:deep(.iti__search-input:focus) {
  outline: none;
}
</style>
