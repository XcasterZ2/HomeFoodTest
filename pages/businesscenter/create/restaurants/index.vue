<script setup>
import { useAuthStore } from '~/stores/auth';
import Swal from 'sweetalert2';
const authStore = useAuthStore()
const phoneNumber = ref('')
const email = ref('')
const fullname = ref('')
const name = ref('')
const location = ref('')
const daystartOpen = ref('เลือกวันเปิดร้าน')
const timestartOpen = ref('')
const daycloseOpen = ref('เลือกวันปิดร้าน')
const timecloseOpen = ref('')
const paymentMethod = ref('บัญชีธนาคาร')
const router = useRouter()
const submitForm = async () => {
  const data = {
    phoneNumber: phoneNumber.value,
    email: email.value,
    ownerFullname: fullname.value,
    name: name.value,
    location: location.value,
    daystartOpen: daystartOpen.value,
    timestartOpen: timestartOpen.value,
    dayscloseOpen: daycloseOpen.value,
    timecloseOpen: timecloseOpen.value,
    paymentMetod: paymentMethod.value,
    status: 'open',
    ownerId: authStore.user.id,
  };
  try {
    const response = await fetch('/api/user/restaurant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log('result : ', result);
    if (response.ok) {
      await Swal.fire({
        title: 'เพิ่มร้านค้าสำเร็จ!',
        text: 'ร้านค้าของคุณถูกเพิ่มเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง',
      });
      router.push('/profile');
    } else {
      console.error('Error adding restaurant:', result);
      await Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'ไม่สามารถเพิ่มร้านค้าได้',
        icon: 'error',
        confirmButtonText: 'ตกลง',
      });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    await Swal.fire({
      title: 'เกิดข้อผิดพลาด!',
      text: 'ไม่สามารถเพิ่มร้านค้าได้',
      icon: 'error',
      confirmButtonText: 'ตกลง',
    });
  }
};
watch(timecloseOpen, (newValue) => {
  console.log('data:', newValue)
})
</script>
<template>
  <div class="p-4 flex font-prompt mx-auto max-w-7xl sm:max-w-3xl mt-6">
    <RouterLink to="/businesscenter/create"
      class="mt-1 flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
          fill="#0D1217" />
      </svg>
    </RouterLink>
    <div class="flex-1 mt-3">
      <h2 class="text-2xl mx-16 font-bold">ธุรกิจขายอาหาร</h2>
    </div>
  </div>
  <div class="flex justify-center mt-5">
    <div class="avatar">
      <div class=" w-36 rounded-full">
        <img src="/public/photo-user.png" alt="logo-user" />
      </div>
    </div>
  </div>
  <div class="flex justify-center font-prompt">
    <div class="flex flex-col">
      <div class="flex font-prompt flex-col">

        <label class="form-control w-full mt-2">
          <div class="label">
            <span class="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input v-model="phoneNumber" type="text" placeholder="เบอร์โทรศัพท์" class="input input-bordered w-[300px] bg-zinc-100" />
        </label>

        <label class="form-control w-full mt-2">
          <div class="label">
            <span class="label-text">อีเมล</span>
          </div>
          <input v-model="email"  type="text" placeholder="อีเมล" class="input input-bordered w-[300px] bg-zinc-100" />
        </label>

        <label class="form-control w-full mt-2">
          <div class="label">
            <span class="label-text">ชื่อเจ้าของร้าน</span>
          </div>
          <input v-model="fullname" type="text" placeholder="ชื่อเจ้าของร้าน" class="input input-bordered w-[300px] bg-zinc-100" />
        </label>

        <label class="form-control w-full mt-2">
          <div class="label">
            <span class="label-text">ชื่อร้านอาหาร</span>
          </div>
          <input v-model="name" type="text" placeholder="ชื่อร้านอาหาร" class="input input-bordered w-[300px] bg-zinc-100" />
        </label>

        <label class="form-control w-full mt-2">
          <div class="label">
            <span class="label-text">ที่อยู่</span>
          </div>
          <input v-model="location" type="text" placeholder="ที่อยู่" class="input input-bordered w-[300px] bg-zinc-100" />
        </label>
        <div class="divider"></div>
      </div>
      <!-- วันเวลาเปิดร้าน -->
      <div class="flex gap-3">
        <div class="flex-1">
          <p>วันเปิดร้าน</p>
          <label class="form-control w-full max-w-xs">
            <select v-model="daystartOpen" class="select select-bordered bg-zinc-100">
              <option disabled selected>เลือกวันเปิดร้าน</option>
              <option>วันอาทิตย์</option>
              <option>วันจันทร์</option>
              <option>วันอังคาร</option>
              <option>วันพุธ</option>
              <option>วันพฤหัสบดี</option>
              <option>วันศุกร์</option>
              <option>วันเสาร์</option>
            </select>
          </label>
        </div>
        <div class="flex-1">
          <p>เวลาเปิดร้าน</p>
          <input v-model="timestartOpen" type="time" class="input input-bordered bg-zinc-100 w-full"
            placeholder="เวลาเปิดร้าน">
        </div>
      </div>
      <!-- วันเวลาปิดร้าน -->
      <div class="flex gap-3">
        <div class="flex-1">
          <p>ถึงวัน</p>
          <label class="form-control w-full max-w-xs">
            <select v-model="daycloseOpen" class="select select-bordered bg-zinc-100">
              <option disabled selected>เลือกวันปิดร้าน</option>
              <option>วันอาทิตย์</option>
              <option>วันจันทร์</option>
              <option>วันอังคาร</option>
              <option>วันพุธ</option>
              <option>วันพฤหัสบดี</option>
              <option>วันศุกร์</option>
              <option>วันเสาร์</option>
            </select>
          </label>
        </div>
        <div class="flex-1">
          <p>เวลาปิดร้าน</p>
          <input v-model="timecloseOpen" type="time" class="input input-bordered bg-zinc-100 w-full"
            placeholder="เวลาเปิดร้าน">
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <label class="form-control w-full max-w-xs">
          <select v-model="paymentMethod" class="select select-bordered bg-zinc-100 text-lg">
            <option disabled selected>บัญชีธนาคาร</option>
            <option>ธนาคารกรุงเทพ</option>
            <option>ธนาคารกสิกรไทย</option>
            <option>ธนาคารออมสิน</option>
            <option>ธนาคารไทยพาณิชย์</option>
            <option>ธนาคารกรุงศรีอยุธยา</option>
            <option>ธนาคารทหารไทยธนชาต</option>
            <option>ธนาคารทิสโก้</option>
            <option>ธนาคารยูโอบี</option>
          </select>
        </label>
      </div>
      <div class="mt-5 mb-5">
        <div @click="submitForm"
          class="w-full bg-[#FF6347] h-[55px] rounded-full flex justify-center items-center cursor-pointer hover:-translate-y-1 transition-all duration-500 group">
          <p class="text-white font-medium">ดำเนินการต่อ</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scope>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>