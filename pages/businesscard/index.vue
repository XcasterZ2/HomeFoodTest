<template>
  <userLayoutsNoNav>
    <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
      <RouterLink to="/"
        class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
            fill="#0D1217" />
        </svg>
      </RouterLink>

      <div class="flex-1 mt-2">
        <h2 class="text-2xl mx-16 font-bold">ระบบนามบัตร</h2>
      </div>
    </div>

    <div class="mx-3">
      <Search />
    </div>

    <div class="font-prompt mt-7 p-3 flex gap-3">
      <div @click="activeTab = 'all'" :class="['btn', activeTab === 'all' ? 'bg-[#FF6B6B] text-white' : '']">
        <p class="font-light">ทั้งหมด</p>
      </div>

      <div @click="activeTab = 'businessCard'"
        :class="['btn', activeTab === 'businessCard' ? 'bg-[#FF6B6B] text-white' : '']">
        <p class="font-light">นามบัตร</p>
      </div>

      <div @click="activeTab = 'tickets'" :class="['btn', activeTab === 'tickets' ? 'bg-[#FF6B6B] text-white' : '']">
        <p class="font-light">ตั๋ว/คูปอง</p>
      </div>
    </div>

    <!-- Business Card Section -->
    <div v-if="activeTab === 'businessCard' || activeTab === 'all'" class="p-3 font-prompt">
      <p class="text-[18px]">นามบัตรของฉัน</p>

      <div v-if="isLoading" class="flex justify-center items-center w-full mt-5">
        <span class="loading loading-spinner loading-xl text-orange-500"></span>
        <h2 class="mt-2 mx-2 text-base font-light">Loading...</h2>
      </div>
      <div v-else>
        <div v-if="restaurants.length === 0" class="flex justify-center items-center w-full mt-5">
          <h2 class="text-base font-light text-gray-500">ไม่มีนามบัตร</h2>
        </div>
        <div v-else v-for="restaurant in restaurants" :key="restaurant.name"
          class="mt-2 bg-[#FFEFED] p-2 rounded-lg h-[180px] shadow-md">
          <div class="flex gap-5">
            <profilePage />
            <div class="flex flex-col">
              <p class="text-[16px]">{{ restaurant.name }}</p>
              <p class="text-[14px] text-[#6D6C69]">ตำแหน่ง เจ้าของร้าน</p>
            </div>
          </div>

          <div class="border-[1px] border-[#BABDC1] mt-4"></div>

          <div class="flex">
            <div>
              <div class="mt-2 flex gap-3">
                <Call />
                <p class="text-[14px]">{{ restaurant.phoneNumber }}</p>
              </div>

              <div class="mt-2 flex gap-3">
                <MessageWhite />
                <p class="text-[14px]">{{ restaurant.email }}</p>
              </div>

              <div class="mt-2 flex gap-3">
                <MapWhite />
                <p class="text-[14px]">{{ restaurant.location }}</p>
              </div>
            </div>

            <div class="flex justify-end w-full items-end">
              <div class="avatar">
                <div class="w-20 rounded-full">
                  <img src="/photo-user.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Tickets/Coupons Section -->
    <div v-if="activeTab === 'tickets' || activeTab === 'all'" class="p-3 font-prompt">
      <p class="text-[18px]">ตั๋ว/คูปอง</p>
      <div v-if="tickets.length === 0" class="text-center text-gray-500 mt-4">
        คุณยังไม่มีตั๋ว/คูปอง
      </div>
      <div v-else v-for="ticket in tickets" :key="ticket.id" class="mt-2 bg-[#E6F3FF] p-2 rounded-lg shadow-md">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-[16px] font-semibold">{{ ticket.name }}</p>
            <p class="text-[14px] text-[#6D6C69]">{{ ticket.description }}</p>
          </div>
          <div class="text-[14px] font-bold">
            {{ ticket.expirationDate }}
          </div>
        </div>
      </div>
    </div>
  </userLayoutsNoNav>
</template>

<script setup>
import userLayoutsNoNav from '~/layouts/userLayoutsNoNav.vue';
import Search from '~/components/user/Search.vue';
import profilePage from '~/components/user/icons/restaurant/profilePage.vue';
import MapWhite from '~/components/user/icons/restaurant/MapWhite.vue';
import Call from '~/components/user/icons/restaurant/Call.vue';
import MessageWhite from '~/components/user/icons/restaurant/MessageWhite.vue';

import { useAuthStore } from '#build/imports';

const authStore = useAuthStore()
const restaurants = ref([])
const tickets = ref([])
const activeTab = ref('all')
const isLoading = ref(false)

const fetchRestaurants = async () => {
  try {
    const userId = authStore.user.id

    if (!userId) {
      console.error('No user ID found')
      return
    }

    const { data } = await useFetch(`/api/restaurants/user/${userId}`, {
      method: 'GET'
    })

    restaurants.value = data.value || []

    isLoading.value = true
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการดึงข้อมูลร้านอาหาร:', error)
  }
}


onMounted(async () => {
  await fetchRestaurants()
  console.log('restaurants:', restaurants.value)
  console.log('tickets:', tickets.value)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

.btn {
  @apply px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300;
}
</style>