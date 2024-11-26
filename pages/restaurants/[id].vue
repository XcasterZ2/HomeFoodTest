<template>
  <userLayouts>
    <div v-if="!isLoading" class="flex justify-center items-center w-full h-dvh">
      <span class="loading loading-spinner loading-xl text-orange-500"></span>
      <h2 class="mt-2 mx-2 text-base font-semibold">Loading...</h2>
    </div>
    <div v-else>
      <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
        <RouterLink to="/"
          class="relative z-10 flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
              fill="#0D1217" />
          </svg>
        </RouterLink>
      </div>
      <div class="sm:max-w-5xl sm:mx-auto rounded-2xl">
        <div class=" absolute sm:left-[20.2%] -top-5 sm:max-w-5xl">
          <img src="/public/restuarant/Burger.png" alt="Burger" class=" rounded-b-lg sm:w-[990px] sm:h-[400px]">
        </div>

        <div class=" relative flex flex-col justify-center sm:mt-10 mt-[90px] font-prompt">
          <div class="flex justify-center">
            <div v-for="restaurant in restaurants" :key="restaurant.name"
              class="bg-white shadow-lg w-[320px] h-[160px] sm:w-[400px] sm:h-[200px] rounded-xl">
              <div class="p-4">
                <div>
                  <p class="font-semibold sm:text-xl">{{ restaurant.name }}</p>
                </div>
                <div class="mt-2 flex gap-2">
                  <Star class="mt-1" />
                  <div class="flex gap-4">
                    <h2>4.9 (206 รีวิว)</h2>
                    <svg class="mt-[6px]" width="6" height="13" viewBox="0 0 6 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0.38394 0.822928C0.619811 0.620753 0.974917 0.648069 1.17709 0.88394L5.67709 6.13394C5.85765 6.34459 5.85765 6.65543 5.67709 6.86608L1.17709 12.1161C0.974917 12.352 0.619811 12.3793 0.38394 12.1771C0.148069 11.9749 0.120753 11.6198 0.322928 11.3839L4.50915 6.50001L0.322928 1.61608C0.120753 1.38021 0.148069 1.0251 0.38394 0.822928Z"
                        fill="#FF6347" />
                    </svg>
                  </div>
                </div>

                <div class="mt-3 flex">
                  <div class="w-[100px]">
                    <p class="mt-1 font-semibold text-[#989DA3] text-[14px]">1.2 km</p>
                  </div>

                  <div class="flex gap-3">
                    <Transport />
                    <h2 class="text-[#FF6347] font-semibold">จัดส่ง</h2>
                    <h2 class="text-[#FF6347] font-semibold">฿10</h2>
                  </div>
                </div>

                <div class="flex gap-2 mt-3">
                  <coupon />
                  <h2 class="text-[#FF826C] font-medium">ร้านนี้ใช้คูปองส่วนลดได้</h2>
                </div>

              </div>
            </div>
          </div>

          <div class=" mt-10 p-3">
            <div class="rounded-xl p-1">
              <h2 class="text-[20px] font-semibold sm:mt-5">เมนูแนะนำ</h2>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div v-for="menu in menus" :key="menu.id" class="shadow-md mb-5 p-4 rounded-2xl">
                  <div v-if="menu.image && JSON.parse(menu.image).length > 0">
                    <img :src="JSON.parse(menu.image)[0]" alt="logo-Menu"
                      class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
                  </div>
                  <div v-else>
                    <img src="/public/restuarant/menu.png" alt="default-Menu"
                      class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
                  </div>
                  <div class="mt-2">{{ menu.name }}</div>
                  <div
                    class="bg-[#FF9684] mt-2 w-[65px] bg-opacity-30 h-[20px] flex rounded-full justify-center items-center">
                    <Fire />
                    <h2 class="text-[12px] text-[#FF6347]">ขายดี</h2>
                  </div>
                  <div class="flex justify-end mt-2">
                    <h2 class="text-[#FF6347] font-bold">฿{{ menu.price }}</h2>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="p-3">
            <div class="bg-white h-[200px] shadow-md rounded-xl p-1">
              <h2 class="text-[20px] font-semibold">โปรโมชั่น</h2>
            </div>
          </div>
        </div>


      </div>
    </div>
  </userLayouts>
</template>

<script setup>
import userLayouts from '~/layouts/userLayoutsNoNav.vue'


import Fire from '~/components/user/icons/restaurant/menu/Fire.vue';

import { useRoute } from 'vue-router';
import Star from '~/components/user/icons/Star.vue';
import coupon from '~/components/user/icons/coupon.vue';
import Transport from '~/components/user/icons/restaurant/setting/Transport.vue';

const route = useRoute();
const id = route.params.id;
const restaurants = ref([])
const restaurantsId = ref(null)
const isLoading = ref(false)
const menus = ref([])



const fetchRestaurant = async () => {
  isLoading.value = false;
  try {
    const id = parseInt(route.params.id);
    const response = await fetch('/api/restaurant', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    console.log('id:', id)
    restaurants.value = data.filter(restaurant => restaurant.restaurant_Id === id);

    if (restaurants.value.length > 0) {
      restaurantsId.value = restaurants.value[0].restaurant_Id  // Assign the first matching restaurant's id
    }
  } catch (err) {
    console.error('Error fetching courses:', err);
  } finally {
    isLoading.value = true;
  }
};

const fetchMenu = async () => {
  isLoading.value = false
  try {
    if (!restaurantsId.value) {
      console.error('Restaurant ID is not available')
      return
    }
    const response = await fetch(`/api/menu/restaurant/${restaurantsId.value}`, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error('Failed to fetch menu')
    }
    const data = await response.json()
    menus.value = data

    console.log('Fetched menu data:', data)
  } catch (err) {
    console.error('Error fetching menu:', err)
  } finally {
    isLoading.value = true
  }
}

onMounted(async () => {
  await fetchRestaurant()
  await fetchMenu()
  console.log('menu : ', menus.value)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>