<script setup>
import { ref, computed, onMounted } from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'
import Line from '~/components/user/icons/Line.vue'
import { useAuthStore } from '~/stores/auth'
import { googleLogin } from '~/services/googleAuth'
import { lineLogin } from '~/services/lineAuth'
import { facebookLogin } from '~/services/facebookAuth'

const authStore = useAuthStore()
const otpSent = ref(false);
const otpCode = ref('');
const otpToken = ref('');

const handleLogin = async () => {
  try {
    const response = await fetch('/api/otp/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber: phone.value }),
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
      await login()
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
  }
};

const login = async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        phoneNumber: phone.value,
      },
    });

    authStore.login(response);
  } catch (error) {
    alert('เข้าสู่ระบบไม่สำเร็จ')
    console.error('Login failed', error);
    loginError.value = 'เบอร์ไม่ถูกต้อง';
  }
};

const phoneInputRef = ref(null)
const iti = ref(null)

const formatPhoneNumber = () => {
  let phoneNumber = phone.value.replace(/\D/g, '');

  // Set the formatted phone number
  phone.value = phoneNumber;
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

onMounted(() => {
  iti.value = intlTelInput(phoneInputRef.value, {
    initialCountry: 'th',
    preferredCountries: ['th'],
    separateDialCode: true,
    formatOnDisplay: true,
    autoFormat: true,
    nationalMode: true,
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.15/build/js/utils.js'
  });
  const waitForUtils = () => {
    if (!window.intlTelInputUtils) {
      setTimeout(waitForUtils, 100);
    }
  };

  waitForUtils();
})

const phone = ref('')

watch(phone, (newValue) => {
  console.log('phone:', newValue)
})

const isButtonDisabled = computed(() => {
  return !(phone.value)
})

const handleGoogleLogin = async () => {
  try {
    const config = useRuntimeConfig();
    console.log('Runtime config:', config.public); // เพิ่ม log เพื่อ debug

    const authUrl = await googleLogin();
    if (authUrl) {
      console.log('Auth URL:', authUrl); // เพิ่ม log เพื่อ debug
      window.location.href = authUrl;
    }
  } catch (error) {
    console.error('Error initiating Google login:', error);
  }
};

const handleLineLogin = async () => {
  try {
    const config = useRuntimeConfig();
    console.log('Runtime config:', config.public);

    const authUrl = await lineLogin();
    if (authUrl) {
      console.log('Auth URL:', authUrl);
      window.location.href = authUrl;
    }
  } catch (error) {
    console.error('Error initiating Line login:', error);
  }
};


const handleFacebookLogin = async () => {
  try {
    // เข้าถึงค่าการตั้งค่าจาก RuntimeConfig
    const config = useRuntimeConfig();
    console.log('Runtime config:', config.public);

    // สมมติว่าคุณมีฟังก์ชัน `facebookLogin` ที่เตรียม URL การยืนยันตัวตนไว้
    const authUrl = await facebookLogin();
    if (authUrl) {
      console.log('Facebook Auth URL:', authUrl);
      window.location.href = authUrl;
    }
  } catch (error) {
    console.error('Error initiating Facebook login:', error);
  }
};
</script>

<template>
  <div class="mx-auto  items-center h-screen overflow-y-auto flex flex-col font-prompt">
    <div v-if="otpSent == false" class="absolute top-[78px] w-[288px] h-[177px] flex flex-col gap-[32px] ">
      <h1
        class="h-[33px] px-[8px] gap-[10px] sm:text-3xl text-[22px] font-extrabold leading-[33.26px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF6347] to-[#FF826C] text-center">
        เข้าสู่ระบบ
      </h1>

      <div class="w-[288px] h-auto gap-[24px] flex flex-col">

        <div
          class="w-[288px] h-[56px] min-h-[56px] bg-[#1F2A370D] border-[1px] border-[#E9EAEB] rounded-[8px] p-[16px] gap-[12px]">
          <input v-model="phone" ref="phoneInputRef" type="tel"
            class="w-full bg-transparent border-none outline-none font-normal text-[16px] leading-[24.19px]"
            placeholder="เบอร์โทรศัพท์" />
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

    <div class="absolute top-[325px] w-[288px] flex flex-col gap-[32px]  h-[181px] ">
      <button @click="login"
        class="hover:-translate-y-1 transition-all duration-500 group w-[288px] h-[58px] rounded-[28px] flex items-center justify-center gap-[14px] font-prompt text-white font-semibold text-[18px] leading-[27.22px] bg-[#FF6347]">
        เข้าสู่ระบบ
      </button>


      <div class="font-normal h-[24px] text-[16px] leading-[24.19px] text-[#6D6C69] flex items-center justify-between">
        <div class="w-[66.5px] border-[0.5px] border-[#6D6C69]"></div>
        หรือเข้าสู่ระบบด้วย
        <div class="w-[66.5px] border-[0.5px] border-[#6D6C69]"></div>
      </div>

      <div class="w-[288px] h-[40px] gap-[16px] flex justify-center">
        <button class="hover:opacity-80 transition-opacity" @click="handleGoogleLogin">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <path
              d="M29.8055 18.0415H29V18H20V22H25.6515C24.827 24.3285 22.6115 26 20 26C16.6865 26 14 23.3135 14 20C14 16.6865 16.6865 14 20 14C21.5295 14 22.921 14.577 23.9805 15.5195L26.809 12.691C25.023 11.0265 22.634 10 20 10C14.4775 10 10 14.4775 10 20C10 25.5225 14.4775 30 20 30C25.5225 30 30 25.5225 30 20C30 19.3295 29.931 18.675 29.8055 18.0415Z"
              fill="#FFC107" />
            <path
              d="M11.1528 15.3455L14.4383 17.755C15.3273 15.554 17.4803 14 19.9998 14C21.5293 14 22.9208 14.577 23.9803 15.5195L26.8088 12.691C25.0228 11.0265 22.6338 10 19.9998 10C16.1588 10 12.8278 12.1685 11.1528 15.3455Z"
              fill="#FF3D00" />
            <path
              d="M20.0002 30C22.5832 30 24.9302 29.0115 26.7047 27.404L23.6097 24.785C22.5719 25.5742 21.3039 26.001 20.0002 26C17.3992 26 15.1907 24.3415 14.3587 22.027L11.0977 24.5395C12.7527 27.778 16.1137 30 20.0002 30Z"
              fill="#4CAF50" />
            <path
              d="M29.8055 18.0415H29V18H20V22H25.6515C25.2571 23.1082 24.5467 24.0766 23.608 24.7855L23.6095 24.7845L26.7045 27.4035C26.4855 27.6025 30 25 30 20C30 19.3295 29.931 18.675 29.8055 18.0415Z"
              fill="#1976D2" />
          </svg>
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="handleFacebookLogin">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10 20.0558C10 25.0275 13.6108 29.1617 18.3333 30V22.7775H15.8333V20H18.3333V17.7775C18.3333 15.2775 19.9442 13.8892 22.2225 13.8892C22.9442 13.8892 23.7225 14 24.4442 14.1108V16.6667H23.1667C21.9442 16.6667 21.6667 17.2775 21.6667 18.0558V20H24.3333L23.8892 22.7775H21.6667V30C26.3892 29.1617 30 25.0283 30 20.0558C30 14.525 25.5 10 20 10C14.5 10 10 14.525 10 20.0558Z"
              fill="#1A78F1" />
          </svg>
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="handleLineLogin">
          <Line />
        </button>
        <button class="hover:opacity-80 transition-opacity" @click="goToGoogle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D6D6D6" />
            <path
              d="M27.6641 25.5861C27.3874 26.2653 27.0454 26.913 26.6436 27.5191C26.1068 28.3262 25.666 28.8839 25.3282 29.1943C24.8034 29.7015 24.2396 29.9624 23.6369 29.9772C23.2051 29.9772 22.6833 29.8477 22.0756 29.5847C21.4659 29.3227 20.9061 29.1943 20.3933 29.1943C19.8566 29.1943 19.2808 29.3227 18.6641 29.5847C18.0484 29.8477 17.5506 29.9856 17.1697 29.9982C16.593 30.0245 16.0162 29.7572 15.4415 29.1943C15.0747 28.8576 14.6159 28.2788 14.0651 27.4601C13.4754 26.5878 12.9906 25.5724 12.6107 24.4181C12.2039 23.169 12 21.961 12 20.7909C12 19.4514 12.2749 18.2949 12.8256 17.3269C13.2422 16.5666 13.8377 15.932 14.5549 15.4844C15.262 15.0378 16.0693 14.7974 16.8939 14.7878C17.3537 14.7878 17.9564 14.9372 18.7031 15.2318C19.4497 15.5264 19.9295 15.6759 20.1384 15.6759C20.2964 15.6759 20.8271 15.5001 21.7307 15.1518C22.5834 14.8288 23.3031 14.6952 23.8928 14.7478C25.4921 14.8835 26.6926 15.5464 27.4912 16.7418C26.0618 17.6541 25.3552 18.9305 25.3692 20.5689C25.3811 21.8453 25.822 22.907 26.6856 23.7499C27.0674 24.1345 27.5129 24.4423 28 24.658C27.894 24.981 27.7821 25.2893 27.6641 25.5861ZM23.9987 10.4009C23.9987 11.4005 23.6509 12.3349 22.9602 13.1988C22.1246 14.2259 21.115 14.8204 20.0205 14.7267C20.0062 14.601 19.9992 14.4745 19.9995 14.3479C19.9995 13.3872 20.3953 12.3602 21.102 11.5194C21.4539 11.0943 21.9017 10.7397 22.4444 10.4577C22.9862 10.1799 23.498 10.0263 23.9798 9.99997C23.9928 10.1347 23.9987 10.2683 23.9987 10.4009Z"
              fill="#383A3A" />
          </svg>
        </button>

      </div>
    </div>

    <div class=" h-[21px] absolute top-[526px] font-light text-[14px] leading-[21.17px] pb-[72px]">
      ยังไม่มีบัญชี? <a @click="navigateTo('/register')"
        class="text-[#FF6347] hover:underline cursor-pointer font-semibold">ลงทะเบียน</a>
    </div>
  </div>
</template>

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
  /* border: 1px solid #6D6C69 !important; */
  border-radius: 4px;
  margin: 4px 8px;
  width: calc(100% - 16px);
  font-family: 'Prompt', sans-serif;
}

:deep(.iti__search-input:focus) {
  outline: none;
  /* border-color: #6D6C69 !important; */
}
</style>