<script setup>
import { useRoute } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import Menu from '~/components/user/icons/restaurant/Menu.vue';
import userLayoutsNoNav from '~/layouts/userLayoutsNoNav.vue';

import Notifications from '~/components/user/icons/restaurant/Notifications.vue';
import Message from '~/components/user/icons/restaurant/Message.vue';
import Search from '~/components/user/Search.vue';
import profilePage from '~/components/user/icons/restaurant/profilePage.vue';
import editPage from '~/components/user/icons/restaurant/editPage.vue'
import ShoppingLight from '~/components/user/icons/restaurant/ShoppingLight.vue';
import FoodKitchen from '~/components/user/icons/restaurant/FoodKitchen.vue';

import PurchasesOrder from '~/components/user/restaurant/PurchasesOrder.vue';
import CategoryRestaurant from '~/components/user/restaurant/CategoryRestaurant.vue';

const authStore = useAuthStore()
const route = useRoute();
const restaurantId = route.params.id;
const restaurants = ref([])
const isLoading = ref(false)

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const fetchRestaurant = async () => {
  isLoading.value = true;
  try {
    const response = await fetch('/api/restaurant', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    restaurants.value = data.filter(restaurant => restaurant.ownerId === authStore.user.id);
  } catch (err) {
    console.error('Error fetching courses:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await fetchRestaurant()
  updateDate();
  console.log('Restaurant ID:', restaurantId);
  console.log('Restaurant Data :', restaurants.value[0].name);
});
</script>

<template>
  <div class="sm:max-w-5xl sm:mx-auto">
    <userLayoutsNoNav v-if="!isModalOpen">
      <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
        <RouterLink to="/businesscenter"
          class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
              fill="#0D1217" />
          </svg>
        </RouterLink>

        <div class="flex-1 mt-2">
          <h2 class="text-[22px] mx-14 font-bold">ร้านค้าของคุณ</h2>
        </div>

        <div @click="openModal" class=" shadow-md rounded-full w-[42px] h-[42px] flex justify-center items-center">
          <Menu />
        </div>
      </div>

      <div class="p-5 font-prompt">
        <div class=" w-full flex sm:justify-center">

          <div class="flex gap-7">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="/regisRestairant.png" />
              </div>
            </div>

            <div class="w-[140px] flex items-center">
              <p class="font-semibold text-[18px] text-gradient">
                {{ restaurants[0]?.name || 'ไม่พบข้อมูลร้านอาหาร' }}
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-2 ">
            <div
              class="bg-[#FF96843D] w-[42px] h-[42px] rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
              <Message />
            </div>

            <div
              class="bg-[#FF96843D] w-[42px] h-[42px] rounded-full flex justify-center items-center hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
              <Notifications />
            </div>
          </div>
        </div>

        <div class="sm:flex sm:justify-center">
          <Search class="mt-5" />
        </div>
      </div>
      <div class="p-4 font-prompt ">
        <div class="sm:flex sm:justify-center">
          <div class="bg-while h-[150px] sm:w-[400px] w-full rounded-xl shadow-xl">
            <div class="p-4 flex">
              <div class="w-[70px]">
                <profilePage />
              </div>

              <div class="flex flex-col w-full">

                <div class="flex w-full  h-7">
                  <div class=" flex-1 w-full">
                    <div class="w-[200px] flex justify-start">
                      <h2 class=" font-medium text-[16px]">เพจ{{ restaurants[0]?.name || 'ไม่พบข้อมูลร้านอาหาร' }}</h2>
                    </div>
                  </div>

                  <div class="flex-1 flex justify-end">
                    <editPage />
                  </div>
                </div>

                <div class="flex w-full  h-7">
                  <div class=" flex-1 w-full">
                    <div class="w-full flex justify-start gap-5">
                      <h2 class=" font-medium text-[16px] text-[#FF6347]">ผู้ติดตาม 10K</h2>
                      <h2 class=" font-medium text-[16px] text-[#FF6347]">กำลังติดตาม 10</h2>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div class="pr-4 pl-4">
              <div class="h-[2px] bg-zinc-200"></div>
            </div>

            <div class="p-4 flex justify-between">
              <h2>สถานะร้าน</h2>
              <input type="checkbox" class="toggle peer" checked="checked" />
            </div>
          </div>
        </div>

        <div class="mt-10">
          <PurchasesOrder />
        </div>

        <div class="mt-10">
          <CategoryRestaurant />
        </div>
      </div>
    </userLayoutsNoNav>
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end font-prompt"
      @click.self="closeModal">
      <div
        class="bg-white rounded-2xl h-[80%] w-full max-w-md p-6 relative transform transition-all duration-300 ease-in-out"
        :class="isModalOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'">
        <div class="flex justify-between items-center mb-6">
          <div class="flex justify-center w-full">
            <h2 class="text-xl font-semibold">เมนูร้านค้า</h2>
          </div>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul class="menu rounded-box w-full bg-white p-0">
          <li>
            <details open>
              <summary>
                <ShoppingLight />
                <h2 class="mt-1 text-base">คำสั่งซื้อ</h2>
              </summary>
              <ul>
                <li><a class="text-base">รอการยอมรับ</a></li>
                <li><a class="text-base">ที่ต้องการจัดส่ง</a></li>
                <li><a class="text-base">จัดส่งแล้ว</a></li>
                <li><a class="text-base">ส่งสำเร็จ</a></li>
                <li><a class="text-base">การยกเลิก</a></li>
                <li><a class="text-base">การคืนเงิน / คืนสินค้า</a></li>
                <li><a class="text-base">ตั้งค่าการจัดส่ง</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details open>
              <summary>
                <FoodKitchen />
                <h2 class="mt-1 text-base">สินค้าในร้านค้า</h2>
              </summary>
              <ul>
                <li><a class="text-base">รอการยอมรับ</a></li>
                <li><a class="text-base">ที่ต้องการจัดส่ง</a></li>
              </ul>
            </details>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

.text-gradient {
  background: linear-gradient(90deg, #FF6347, #FF826C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.toggle:checked {
  background-color: #34D399;
}
</style>