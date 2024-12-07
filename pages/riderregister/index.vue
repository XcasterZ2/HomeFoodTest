<template>
  <div class="max-w-3xl mx-auto font-prompt">
    <div class="flex-col justify-center w-full">
      <div class="mt-6 flex justify-center">
        <p class="font-bold text-2xl text-[#FF6347]">ลงทะเบียนไรเดอร์</p>
      </div>

      <div class="flex-col flex justify-center items-center mt-10">
        <div class="form-control">
          <input v-model="phoneNumber" type="text" placeholder="เบอร์โทรศัพท์" class="input input-bordered w-full bg-zinc-100" />
        </div>

        <div class="form-control mt-3">
          <input v-model="email" type="text" placeholder="อีเมล" class="input input-bordered w-full bg-zinc-100" />
        </div>

        <div class="form-control mt-3">
          <input v-model="fullname" type="text" placeholder="ชื่อ - นามสกุล" class="input input-bordered w-full bg-zinc-100" />
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <button @click="registerRider"
          class="w-[288px] h-[58px] rounded-[28px] flex items-center bg-[#FF6347] justify-center gap-[14px] font-prompt text-white font-semibold text-[18px] leading-[27.22px]">
          ลงทะเบียน
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

const phoneNumber = ref('')
const email = ref('')
const fullname = ref('')

const router = useRouter()

const registerRider = async () => {
  try {
    const response = await fetch('/api/auth/riderregister', {
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
    console.log('Rider registered:', data);
    router.push('/login')
  } catch (error) {
    console.error('Error registering Rider:', error);
  }
};

</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>