<template>
  <adminLayouts>
    <div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full mt-1 bg-opacity-70">
      <h2 class="sm:text-6xl text-4xl font-bold text-[#fefeff] text-stroke tracking-wide">DASHBOARD</h2>
    </div>
    <div class="flex justify-center mt-5 p-5 bg-white shadow-md rounded-md">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        <div class="card bg-[#2584FF] w-full shadow-xl h-44 transform-transition bg-opacity-65">
          <h2 class="card-title text-white font-light text-3xl pl-5 pt-5">สมัครชิกทั้งหมด</h2>
          <div class="flex mt-8">
            <div class="flex ml-5 w-full mt-8">
              <div v-if="useres.length" class="flex gap-3">
                <p class="text-white text-4xl mt-2">
                  {{ useres.length }}
                </p>
                <p class="text-white text-4xl mt-2">คน</p>
              </div>
              <div v-else>
                <span class="loading loading-spinner text-white"></span>
              </div>
            </div>
            <div class="absolute bottom-3 right-1 justify-end mr-5">
              <img src="https://img2.pic.in.th/pic/users_391194.png" alt="logo_user" class="w-[75px]">
            </div>
          </div>
        </div>

        <div class="card bg-[#00AC97] w-full h-44 shadow-xl transform-transition bg-opacity-65">
          <h2 class="card-title text-white font-light text-3xl pl-5 pt-5">ร้านอาหารทั้งหมด</h2>
          <div class="flex mt-8">
            <div class="flex-1 ml-5 mt-8">
              <div v-if="restaurants.length" class="flex gap-3">
                <p class="text-white text-4xl mt-2">
                  {{ restaurants.length }}
                </p>
                <p class="text-white text-4xl mt-2">ร้าน</p>
              </div>
              <div v-else>
                <span class="loading loading-spinner text-white"></span>
              </div>
            </div>
            <div class="flex-1 flex justify-end mr-5">
              <img src="https://img2.pic.in.th/pic/qc_8790314-1.png" alt="logo_user">
            </div>
          </div>
        </div>

        <div class="card bg-[#515262] w-full h-44 shadow-xl transform-transition bg-opacity-65">
          <h2 class="card-title text-white font-light text-2xl pl-5 pt-5">เมนูทั้งหมด</h2>
          <div class="flex mt-8">
            <div class="flex-1 ml-5 mt-8">
              <div v-if="menus.length" class="flex gap-3">
                <p class="text-white text-4xl mt-2">
                  {{ menus.length }}
                </p>
                <p class="text-white text-4xl mt-2">เมนู</p>
              </div>
              <div v-else>
                <span class="loading loading-spinner text-white"></span>
              </div>
            </div>
            <div class="flex-1 flex justify-end mr-5">
              <img src="https://img2.pic.in.th/pic/job_10485121.png" alt="logo_user">
            </div>
          </div>
        </div>
      </div>
    </div>
  </adminLayouts>
</template>

<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue';

const useres = ref([])
const restaurants = ref([])
const menus = ref([])

const fetchMenu = async () => {
  try {
    const response = await fetch('/api/menu', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    menus.value = data
  } catch (err) {
    console.error('Error fetching courses:', err);
  }
};

const fetchUser = async () => {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'GET',
    });
    if (!response.ok) throw new Error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ');
    useres.value = await response.json();
  } catch (err) {
    console.error('แสดงข้อมูลผู้ใช้ไม่สำเร็จ:', err);
  }
};

const fetchRestaurant = async () => {
  try {
    const response = await fetch('/api/restaurant', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    restaurants.value = data
  } catch (err) {
    console.error('Error fetching courses:', err);
  }
};

definePageMeta({
  middleware: 'auth',
});

onMounted(async () => {
  await fetchUser()
  await fetchRestaurant()
  await fetchMenu()
  console.log('restaurant  : ', menus.value)
})
</script>

<style scoped>
.text-stroke {
  text-shadow: -5px -1px 0 #FF8128, 1px -1px 0 #FF8128, -5px 1px 0 #FF8128, 1px 1px 0 #FF8128;
}
</style>