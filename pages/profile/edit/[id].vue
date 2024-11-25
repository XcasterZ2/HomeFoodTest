<template>
  <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
    <RouterLink to="/profile"
      class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
          fill="#0D1217" />
      </svg>
    </RouterLink>

    <div class="flex-1 mt-2">
      <h2 class="text-[22px] mx-16 font-bold">โปรไฟล์ของคุณ</h2>
    </div>
  </div>

  <div class="flex justify-center mt-5">
    <div class="avatar">
      <div class="w-40 rounded-full">
        <img src="/public/photo-user.png" alt="logo-user" />
      </div>
    </div>
  </div>

  <div class="flex justify-center font-prompt">
    <div class="flex flex-col">
      <input v-model="form.phoneNumber" type="text" class=" input input-bordered w-[300px] mt-4 bg-zinc-100"
        placeholder="เบอร์โทรศัพท์">
      <input v-model="form.email" type="text" class=" input input-bordered w-[300px] mt-4 bg-zinc-100"
        placeholder="อีเมล">
      <input v-model="form.fullname" type="text" class=" input input-bordered w-[300px] mt-4 bg-zinc-100"
        placeholder="ชื่อเต็ม">
      <input v-model="form.birthDate" type="date" placeholder="วัน / เดือน / ปีเกิด"
        class="input input-bordered w-[300px] mt-4 bg-zinc-100">

      <label class="form-control w-full max-w-xs mt-4">
        <select v-model="form.gen" class="select select-bordered text-lg bg-zinc-100">
          <option disabled selected>เลือกเพศ</option>
          <option>ชาย</option>
          <option>หญิง</option>
          <option>อื่นๆ</option>
        </select>
      </label>

      <input type="text" class=" input input-bordered w-[300px] mt-4 bg-zinc-100" placeholder="ที่อยู่">
    </div>
  </div>

  <div class="flex justify-center mt-7 font-prompt">
    <div
      class="hover:-translate-y-1 transition-all duration-500 group cursor-pointer w-[300px] h-[53px] bg-[#FF6347] rounded-full flex justify-center items-center"
      @click="handleSubmit">
      <p class="text-white font-medium">ดำเนินการต่อ</p>
    </div>
  </div>

  <RouterLink to="/profile" class="flex justify-center mt-2 font-prompt">
    <div class="w-[300px] h-[53px] rounded-full flex justify-center items-center">
      <p class="text-zinc-400 ">กลับ</p>
    </div>
  </RouterLink>
</template>

<script setup>
import { useAuthStore } from '#build/imports'
import Swal from 'sweetalert2';

const email = ref('')
const fullname = ref('')
const phoneNumber = ref('')
const birthDate = ref('')
const gen = ref('')

const form = ref({
  phoneNumber: '',
  fullname: '',
  email: '',
  birthDate: '',
  gen: '',
});

const authStore = useAuthStore()

const fetchUser = async (userId) => {
  try {
    const response = await fetch(`/api/admin/user/${userId}`, {
      method: 'GET',
    });
    if (!response.ok) throw new Error('ไม่สามารถดึงข้อมูลผู้ใช้ได้');

    const user = await response.json();
    form.value = {
      phoneNumber: user.phoneNumber || '',
      fullname: user.fullname || '',
      email: user.email || '',
      gen: user.gen || '',
      birthDate: user.birthDate ? new Date(user.birthDate).toISOString().substring(0, 10) : '', // แปลงวันที่เป็น YYYY-MM-DD
    };
  } catch (err) {
    console.error('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้:', err);
  }
};

const updateUser = async (userId) => {
  const router = useRouter()
  try {
    const response = await fetch(`/api/admin/user/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber: form.value.phoneNumber,
        fullname: form.value.fullname,
        email: form.value.email,
        birthDate: form.value.birthDate ? new Date(form.value.birthDate).toISOString() : null, // แปลงวันที่ให้เป็น ISO String
        gen: form.value.gen,
      }),
    });
    if (!response.ok) throw new Error('ไม่สามารถอัปเดตข้อมูลผู้ใช้ได้');
    const updatedUser = await response.json();

    await Swal.fire({
      icon: 'success',
      title: 'อัปเดตสำเร็จ!',
      text: 'ข้อมูลผู้ใช้ถูกอัปเดตแล้ว',
      confirmButtonText: 'ตกลง',
      customClass: {
        title: 'font-prompt',
        text: 'font-prompt',
        confirmButtonText: 'font-prompt',
        content: 'font-prompt',
        confirmButton: 'font-prompt',
        cancelButton: 'font-prompt',
      }
    });
    router.push('/profile');
  } catch (err) {
    console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูลผู้ใช้:', err);
    await Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: 'ไม่สามารถอัปเดตข้อมูลผู้ใช้ได้',
      confirmButtonText: 'ลองอีกครั้ง',
    });
  }
}

const handleSubmit = async () => {
  const userId = authStore.user.id;
  await updateUser(userId);
};

onMounted(async () => {
  const userId = authStore.user.id
  await fetchUser(userId);
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

.swal2-popup {
  font-family: 'Prompt', sans-serif !important;
}

.swal2-title,
.swal2-text,
.swal2-confirm,
.swal2-cancel,
.swal2-content {
  font-family: 'Prompt', sans-serif !important;
}
</style>