<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';

const otpInputs = ref(['', '', '', '', '', '']);
const otpCode = ref('');
const countdown = ref(60);
let timer = null; 

const router = useRouter();
const phone = ref(router.currentRoute.state.phone);

otpInputs.value.forEach((_, index) => {
  watch(() => otpInputs.value[index], (newValue) => {
    console.log(`ช่องที่ ${index + 1}: ${newValue}`);
  });
});

watch(otpInputs, (newOtp) => {
  otpCode.value = newOtp.join('');
});


// ฟังก์ชันเมื่อกรอกข้อมูล OTP
const handleInput = (index, event) => {
  const value = event.target.value;
  if (/^\d$/.test(value)) {
    otpInputs.value[index] = value;
    // ถ้ามีข้อมูลแล้วให้ข้ามไปช่องถัดไป
    if (index < otpInputs.value.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  }
};

// ฟังก์ชันเมื่อกด Backspace
const handleKeyDown = (index, event) => {
  if (event.key === 'Backspace') {
    // ถ้าช่องปัจจุบันว่างให้ไปช่องก่อนหน้า
    if (otpInputs.value[index] === '' && index > 0) {
      otpInputs.value[index - 1] = '';
      document.getElementById(`otp-${index - 1}`).focus();
    }
  }
};

// ฟังก์ชันนับเวลาถอยหลัง
const startCountdown = () => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      clearInterval(timer);
    }
  }, 1000); // ลดลงทุกๆ 1 วินาที
};

// ฟังก์ชันหยุดการนับเวลาเมื่อ component ถูกทำลาย
onUnmounted(() => {
  clearInterval(timer); // หยุดการนับเวลาถอยหลังเมื่อ component ถูกทำลาย
});

onMounted(() => {
  startCountdown();
});
</script>

<template>
  <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
    <RouterLink to="/"
      class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
          fill="#0D1217" />
      </svg>
    </RouterLink>

    <div class="flex-1 mt-3">
      <p class="text-2xl mx-16 font-bold text-[#FF6347]">การยืนยัน</p>
    </div>
  </div>
  <div class="font-prompt flex flex-col items-center h-screen w-full">
    <p class="mt-4">ส่งโค้ดไปที่ (+66) {{ }} แล้ว</p>

    <!-- ช่องกรอก OTP -->
    <div class="flex gap-2 mt-5">
      <input v-for="(input, index) in otpInputs" :key="index" :id="'otp-' + index" v-model="otpInputs[index]"
        type="text" maxlength="1" inputmode="numeric"
        class="w-[40px] h-[40px] text-center text-lg font-bold border rounded-md focus:outline-none"
        @input="handleInput(index, $event)" @keydown="handleKeyDown(index, $event)" />
    </div>

    <div class="flex gap-4 mt-5">
      <svg class="mt-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M9.99984 2.29167C5.74264 2.29167 2.2915 5.7428 2.2915 10C2.2915 14.2572 5.74264 17.7083 9.99984 17.7083C14.257 17.7083 17.7082 14.2572 17.7082 10C17.7082 5.7428 14.257 2.29167 9.99984 2.29167ZM1.0415 10C1.0415 5.05245 5.05229 1.04167 9.99984 1.04167C14.9474 1.04167 18.9582 5.05245 18.9582 10C18.9582 14.9475 14.9474 18.9583 9.99984 18.9583C5.05229 18.9583 1.0415 14.9475 1.0415 10ZM9.99984 6.04167C10.345 6.04167 10.6248 6.32149 10.6248 6.66667V9.74112L12.5251 11.6414C12.7692 11.8855 12.7692 12.2812 12.5251 12.5253C12.281 12.7694 11.8853 12.7694 11.6412 12.5253L9.5579 10.4419C9.44069 10.3247 9.37484 10.1658 9.37484 10V6.66667C9.37484 6.32149 9.65466 6.04167 9.99984 6.04167Z"
          fill="#0D1217" />
      </svg>
      <p class="text-base mt-4">00 : {{ countdown }} วินาที</p>
    </div>

    <!-- ปุ่มตรวจสอบ -->
    <div class=" w-[85%] h-[53px] bg-[#FF6347] rounded-full mt-5 flex justify-center items-center">
      <p class=" font-medium text-white text-[18px]">ตรวจสอบ</p>
    </div>

    <div class="flex gap-2 mt-5">
      <h2>กลับไปที่</h2>
      <h2 class="font-bold text-[#FF6347]">เข้าสู่ระบบ</h2>
    </div>
  </div>
</template>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

input:focus {
  border-color: #ff6347;
}
</style>
