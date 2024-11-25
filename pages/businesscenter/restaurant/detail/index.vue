<script setup>
import { useRoute } from 'vue-router';
import { useAuthStore } from '~/stores/auth';
import Menu from '~/components/user/icons/restaurant/Menu.vue';
import userLayoutsNoNav from '~/layouts/userLayoutsNoNav.vue';
import NoteWhite from '~/components/user/icons/restaurant/NoteWhite.vue';

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
const restaurants2 = ref([])
const isLoading = ref(false)

const restaurant_Id = localStorage.getItem('restaurantId');

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

const fetchRestaurant2 = async () => {
  isLoading.value = true;
  try {
    const restaurantId = localStorage.getItem('restaurantId');
    if (!restaurantId) {
      throw new Error('No restaurant ID found in localStorage');
    }

    const response = await fetch(`/api/restaurant?restaurantId=${restaurantId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch restaurant');
    }

    const data = await response.json();
    if (data) {
      restaurants2.value = [data];
    } else {
      throw new Error('Restaurant not found');
    }
  } catch (err) {
    console.error('Error fetching restaurant:', err);
  } finally {
    isLoading.value = false;
  }
};


onMounted(async () => {
  await fetchRestaurant()
  await fetchRestaurant2()
  console.log('Restaurant ID get:', restaurant_Id);
  console.log('Restaurant2:', restaurants2.value);
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
          <h2 class="sm:text-[30px] text-[20px] mx-14 font-bold">ร้านค้าของคุณ</h2>
        </div>

        <div @click="openModal"
          class=" shadow-md rounded-full w-[42px] h-[42px] flex justify-center items-center cursor-pointer">
          <Menu />
        </div>
      </div>

      <div v-for="restaurant in restaurants2" :key="restaurant.name" class=" font-prompt">
        <div class=" w-full flex sm:justify-center">

          <div class="flex gap-7 p-2">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="/regisRestairant.png" />
              </div>
            </div>

            <div class="w-[125px] flex items-center">
              <p class="font-semibold text-[18px] text-gradient">
                {{ restaurant.name || 'ไม่พบข้อมูลร้านอาหาร' }}
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
          <Search class="mt-5 ml-5 sm:ml-2" />
        </div>
      </div>

      <div v-for="restaurant in restaurants2" :key="restaurant.name" class="p-4 font-prompt mt-5">
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
                      <h2 class=" font-medium text-[16px]">เพจ{{ restaurant.name || 'ไม่พบข้อมูลร้านอาหาร' }}</h2>
                    </div>
                  </div>

                  <div class="flex-1 flex justify-end">
                    <div
                      class="flex justify-center items-center cursor-pointer sm:hover:bg-slate-100 rounded-full w-6 h-6 sm:w-10 sm:h-10">
                      <editPage />
                    </div>
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
        class="bg-white rounded-2xl h-[80%] w-full max-w-md p-6 relative transform overflow-x-hidden transition-all duration-300 ease-in-out"
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
            <RouterLink to="/businesscenter/restaurant/setting"
              class="flex">
              <svg class="w-[22px] h-[22px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.8852 2.5C19.2685 2.49997 15.6504 2.49995 12.8274 2.87949C9.93794 3.26797 7.65789 4.07865 5.86827 5.86827C4.07865 7.65789 3.26797 9.93794 2.87949 12.8274C2.49995 15.6504 2.49997 19.2685 2.5 23.8852V24.1148C2.49997 28.7315 2.49995 32.3496 2.87949 35.1726C3.26797 38.0621 4.07865 40.3421 5.86827 42.1317C7.65789 43.9213 9.93794 44.732 12.8274 45.1205C15.6504 45.5 19.2685 45.5 23.8853 45.5H24.1147C28.7315 45.5 32.3496 45.5 35.1726 45.1205C38.0621 44.732 40.3421 43.9213 42.1317 42.1317C43.9213 40.3421 44.732 38.0621 45.1205 35.1726C45.5 32.3496 45.5 28.7315 45.5 24.1147V21C45.5 20.1716 44.8284 19.5 44 19.5C43.1716 19.5 42.5 20.1716 42.5 21V24C42.5 28.7565 42.4968 32.1729 42.1473 34.7728C41.8035 37.3297 41.1497 38.8711 40.0104 40.0104C38.8711 41.1497 37.3297 41.8035 34.7728 42.1473C32.1729 42.4968 28.7565 42.5 24 42.5C19.2436 42.5 15.8271 42.4968 13.2272 42.1473C10.6703 41.8035 9.12891 41.1497 7.98959 40.0104C6.85028 38.8711 6.1965 37.3297 5.85274 34.7728C5.50319 32.1729 5.5 28.7565 5.5 24C5.5 19.2436 5.50319 15.8271 5.85274 13.2272C6.1965 10.6703 6.85028 9.12891 7.98959 7.98959C9.12891 6.85028 10.6703 6.1965 13.2272 5.85274C15.8271 5.50319 19.2436 5.5 24 5.5H27C27.8284 5.5 28.5 4.82843 28.5 4C28.5 3.17157 27.8284 2.5 27 2.5H23.8852Z"
                  fill="#0D1217" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M38 2.5C33.8579 2.5 30.5 5.85787 30.5 10C30.5 14.1421 33.8579 17.5 38 17.5C42.1421 17.5 45.5 14.1421 45.5 10C45.5 5.85787 42.1421 2.5 38 2.5ZM33.5 10C33.5 7.51472 35.5147 5.5 38 5.5C40.4853 5.5 42.5 7.51472 42.5 10C42.5 12.4853 40.4853 14.5 38 14.5C35.5147 14.5 33.5 12.4853 33.5 10Z"
                  fill="#0D1217" />
                <path
                  d="M12.5 28C12.5 27.1716 13.1716 26.5 14 26.5H32C32.8284 26.5 33.5 27.1716 33.5 28C33.5 28.8284 32.8284 29.5 32 29.5H14C13.1716 29.5 12.5 28.8284 12.5 28Z"
                  fill="#0D1217" />
                <path
                  d="M14 33.5C13.1716 33.5 12.5 34.1716 12.5 35C12.5 35.8284 13.1716 36.5 14 36.5H26C26.8284 36.5 27.5 35.8284 27.5 35C27.5 34.1716 26.8284 33.5 26 33.5H14Z"
                  fill="#0D1217" />
              </svg>

              <p class="text-base">เพิ่มข้อมูลภายในร้าน</p>
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/businesscenter/restaurant/menu"
              class="flex">
              <svg class="w-[22px] h-[22px]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23.8852 2.5C19.2685 2.49997 15.6504 2.49995 12.8274 2.87949C9.93794 3.26797 7.65789 4.07865 5.86827 5.86827C4.07865 7.65789 3.26797 9.93794 2.87949 12.8274C2.49995 15.6504 2.49997 19.2685 2.5 23.8852V24.1148C2.49997 28.7315 2.49995 32.3496 2.87949 35.1726C3.26797 38.0621 4.07865 40.3421 5.86827 42.1317C7.65789 43.9213 9.93794 44.732 12.8274 45.1205C15.6504 45.5 19.2685 45.5 23.8853 45.5H24.1147C28.7315 45.5 32.3496 45.5 35.1726 45.1205C38.0621 44.732 40.3421 43.9213 42.1317 42.1317C43.9213 40.3421 44.732 38.0621 45.1205 35.1726C45.5 32.3496 45.5 28.7315 45.5 24.1147V21C45.5 20.1716 44.8284 19.5 44 19.5C43.1716 19.5 42.5 20.1716 42.5 21V24C42.5 28.7565 42.4968 32.1729 42.1473 34.7728C41.8035 37.3297 41.1497 38.8711 40.0104 40.0104C38.8711 41.1497 37.3297 41.8035 34.7728 42.1473C32.1729 42.4968 28.7565 42.5 24 42.5C19.2436 42.5 15.8271 42.4968 13.2272 42.1473C10.6703 41.8035 9.12891 41.1497 7.98959 40.0104C6.85028 38.8711 6.1965 37.3297 5.85274 34.7728C5.50319 32.1729 5.5 28.7565 5.5 24C5.5 19.2436 5.50319 15.8271 5.85274 13.2272C6.1965 10.6703 6.85028 9.12891 7.98959 7.98959C9.12891 6.85028 10.6703 6.1965 13.2272 5.85274C15.8271 5.50319 19.2436 5.5 24 5.5H27C27.8284 5.5 28.5 4.82843 28.5 4C28.5 3.17157 27.8284 2.5 27 2.5H23.8852Z"
                  fill="#0D1217" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M38 2.5C33.8579 2.5 30.5 5.85787 30.5 10C30.5 14.1421 33.8579 17.5 38 17.5C42.1421 17.5 45.5 14.1421 45.5 10C45.5 5.85787 42.1421 2.5 38 2.5ZM33.5 10C33.5 7.51472 35.5147 5.5 38 5.5C40.4853 5.5 42.5 7.51472 42.5 10C42.5 12.4853 40.4853 14.5 38 14.5C35.5147 14.5 33.5 12.4853 33.5 10Z"
                  fill="#0D1217" />
                <path
                  d="M12.5 28C12.5 27.1716 13.1716 26.5 14 26.5H32C32.8284 26.5 33.5 27.1716 33.5 28C33.5 28.8284 32.8284 29.5 32 29.5H14C13.1716 29.5 12.5 28.8284 12.5 28Z"
                  fill="#0D1217" />
                <path
                  d="M14 33.5C13.1716 33.5 12.5 34.1716 12.5 35C12.5 35.8284 13.1716 36.5 14 36.5H26C26.8284 36.5 27.5 35.8284 27.5 35C27.5 34.1716 26.8284 33.5 26 33.5H14Z"
                  fill="#0D1217" />
              </svg>

              <p class="text-base">เมนูอาหารในร้านค้าทั้งหมด</p>
            </RouterLink>
          </li>

          <div class="divider"></div>

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

div::-webkit-scrollbar {
  display: none;
}

/* ปิดการเลื่อน (ป้องกันการ scroll) */
div {
  -ms-overflow-style: none;
  /* สำหรับ Internet Explorer */
  scrollbar-width: none;
  /* สำหรับ Firefox */
}
</style>