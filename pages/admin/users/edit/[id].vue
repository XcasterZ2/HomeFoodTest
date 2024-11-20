<template>
  <adminLayouts>
    <div v-if="loading" class="text-center mt-5">
      <span class="loading loading-spinner loading-xl text-orange-500"></span>
      <h2 class="mt-2 mx-2 text-base">Loading...</h2>
    </div>
    <div v-else class="flex justify-center p-4">
      <form @submit.prevent="handleSubmit" class="w-full">
        <label class="form-control w-full mt-3">
          <div class="label">
            <span class="label-text">ชื่อเต็ม</span>
          </div>
          <input type="text" v-model="form.fullname" class="input input-bordered w-full" required />
        </label>

        <label class="form-control w-full mt-3">
          <div class="label">
            <span class="label-text">อีเมล</span>
          </div>
          <input type="text" v-model="form.email" class="input input-bordered w-full" required />
        </label>

        <label class="form-control w-full mt-3">
          <div class="label">
            <span class="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input type="text" v-model="form.phoneNumber" class="input input-bordered w-full" required />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">role</span>
          </div>
          <select class="select select-bordered" v-model="form.role">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </label>

        <div class="flex sm:justify-end justify-center gap-5">
          <RouterLink to="/admin/users" class="btn btn-accent font-light my-5 text-white sm:w-60 w-36">
            ย้อนกลับ
          </RouterLink>
          <div>
            <button type="submit" class="btn btn-accent my-5 text-white font-light sm:w-60 w-36">ยืนยันการแก้ไข</button>
          </div>
        </div>
      </form>
    </div>
  </adminLayouts>
</template>

<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue'
import { useAuthStore } from '~/stores/auth'
import Swal from 'sweetalert2';

const loading = ref(true);

const form = ref({
  email: '',
  fullname: '',
  phoneNumber: '',
  birthDate: '',
  gen: '',
  role: ''
});

const email = ref('')
const fullname = ref('')
const phoneNumber = ref('')
const birthDate = ref(null);
const gen = ref('')

const authStore = useAuthStore()

const fetchUser = async (userId) => {
  try {
    const response = await fetch(`/api/admin/user/${userId}`, {
      method: 'GET',
    });
    if (!response.ok) throw new Error('ไม่สามารถดึงข้อมูลผู้ใช้ได้');
    const user = await response.json()
    form.value = {
      email: user.email,
      fullname: user.fullname,
      phoneNumber: user.phoneNumber,
      gen: user.gen,
      birthDate: user.birthDate,
      role: user.role,
    };
    loading.value = false
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
      body: JSON.stringify(form.value),
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
    router.push('/admin/users');
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

watch(gen, (newValue, oldValue) => {
  console.log('gen changed from', oldValue, 'to', newValue);
});

onMounted(async () => {
  const userId = authStore.user.id
  await fetchUser(userId);
})
</script>

<style>

</style>