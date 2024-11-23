<template>
  <adminLayouts>
    <div v-if="loading" class="text-center mt-5">
      <span class="loading loading-spinner loading-xl text-orange-500"></span>
      <h2 class="mt-2 mx-2 text-base">Loading...</h2>
    </div>
    <div v-else class="container mx-auto p-4 bg-base-100 rounded-lg font-prompt">
      <div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full bg-opacity-50">
        <h2 class="sm:text-5xl text-3xl font-bold text-[#fefeff] text-stroke tracking-wide">จัดการผู้ใช้บริการ</h2>
      </div>
      <div class="overflow-x-auto mt-5">

        <table class="table">
          <thead>
            <tr>
              <th>
                <p class="text-center">ลำดับ</p>
              </th>
              <th>
                <p class="text-center">อีเมล</p>
              </th>
              <th>
                <p class="text-center">ชื่อเต็ม</p>
              </th>
              <th>
                <p class="text-center">เบอร์โทรศัพท์</p>
              </th>
              <th>
                <p class="text-center">Role</p>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in useres" :key="user.id">
              <td>
                <p class="text-center">{{ user.id }}</p>
              </td>
              <td>
                <p v-if="user.email" class="text-center">{{ user.email }}</p>
                <p v-else class="text-center text-red-500">ยังไม่ได้กรอกอีเมล</p>
              </td>
              <td>
                <p class="text-center">{{ user.fullname }}</p>
              </td>
              <td>
                <p v-if="user.phoneNumber" class="text-center">{{ user.phoneNumber }}</p>
                <p v-else class="text-center text-red-500">ยังไม่ได้ยืนยันเบอร์โทรศัพท์</p>
              </td>
              <td>
                <p class="text-center">{{ user.role }}</p>
              </td>
              <td>
                <div class="flex gap-2 justify-center">
                  <button class="btn" @click="deleteUser(user.email)">
                    <Trash />
                  </button>
                  <button class="btn btn-accent" @click="editUser(user.id)">
                    <Edit />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </adminLayouts>
</template>

<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue'

import Trash from '~/components/admin/icons/Trash.vue';
import Edit from '~/components/admin/icons/Edit.vue';
import Swal from 'sweetalert2'
const loading = ref(true);

const useres = ref([])

const router = useRouter()

const fetchUser = async () => {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'GET',
    });
    if (!response.ok) throw new Error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ');
    useres.value = await response.json();
    loading.value = false
  } catch (err) {
    console.error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ:', err);
    
  }
};

const deleteUser = async (email) => {
  const result = await Swal.fire({
    title: 'คุณแน่ใจหรือไม่?',
    text: 'คุณต้องการลบผู้ใช้นี้หรือไม่?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'ลบ',
    cancelButtonText: 'ยกเลิก',
    customClass: {
      title: 'font-prompt',
      content: 'font-prompt',
      confirmButton: 'font-prompt',
      cancelButton: 'font-prompt',
    }
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`/api/delUser?email=${email}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('ลบไม่สำเร็จ');
      useres.value = useres.value.filter((user) => user.email !== email);
      Swal.fire({
        title: 'ลบสำเร็จ!',
        text: 'ผู้ใช้ได้ถูกลบเรียบร้อยแล้ว',
        icon: 'success',
      });
    } catch (err) {
      console.error('Error deleting user:', err);
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'ไม่สามารถลบผู้ใช้ได้',
        icon: 'error',
      });
    }
  }
};

const editUser = (id) => {
  router.push(`/admin/users/edit/${id}`);
};

onMounted(async () => {
  await fetchUser()
  console.log('user: ', useres.value)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif !important;
}

.text-stroke {
  text-shadow: -5px -1px 0 #FF8128, 1px -1px 0 #FF8128, -5px 1px 0 #FF8128, 1px 1px 0 #FF8128;
}
</style>