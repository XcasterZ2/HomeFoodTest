<template>
  <userLayouts>
    <div class="container sm:max-w-4xl mx-auto p-4 font-prompt">
      <div class="flex items-center mb-6">
        <RouterLink to="/" class="mr-4 flex items-center justify-center w-10 h-10 bg-white shadow-md rounded-full">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
              fill="#0D1217" />
          </svg>
        </RouterLink>
        <h1 class="text-2xl font-semibold">เมนูที่ฉันชอบ</h1>
      </div>

      <div v-if="isLoading" class="flex justify-center items-center w-full sm:h-dvh">
        <span class="loading loading-spinner loading-xl text-orange-500"></span>
        <h2 class="mt-2 mx-2 text-base font-semibold">Loading...</h2>
      </div>

      <div v-else-if="likedMenus.length === 0" class="text-center py-12">
        <div class="mb-4">
          <svg class="mx-auto w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <p class="text-lg text-gray-600">คุณยังไม่มีเมนูที่ชอบ</p>
        <RouterLink to="/" class="mt-4 btn btn-primary">
          สำรวจเมนู
        </RouterLink>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="menu in likedMenus" :key="menu.id"
          class="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer mt-2 sm:mt-5" @click="navigateToMenu(menu.id)">
          <!-- Menu Image -->
          <div class="relative">
            <img :src="menu.image && JSON.parse(menu.image).length > 0
              ? JSON.parse(menu.image)[0]
              : '/restuarant/menu.png'" :alt="menu.name" class="w-full h-48 object-cover" />

            <!-- Like Button -->
            <button class="absolute top-2 right-2 bg-white rounded-full p-2" @click.stop="removeMenuLike(menu.id)">
              <Heart :filled="true" class="w-6 h-6 text-red-500" />
            </button>
          </div>

          <!-- Menu Details -->
          <div class="p-3">
            <h3 class="font-semibold text-base mb-2">{{ menu.name }}</h3>

            <div class="flex justify-between items-center">
              <div class="flex items-center gap-2">
                <span class="bg-[#FF9684] bg-opacity-30 px-2 py-1 rounded-full text-[#FF6347] text-xs">
                  ขายดี
                </span>
              </div>
              <span class="text-[#FF6347] font-bold">฿{{ menu.price }}</span>
            </div>

            <!-- Restaurant Name -->
            <div class="mt-2 text-sm text-gray-500">
              {{ menu.restaurant?.name || 'ร้านอาหาร' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </userLayouts>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

import userLayouts from '~/layouts/userLayoutsNoNav.vue'
import Heart from '~/components/user/icons/Heart.vue'

const router = useRouter()
const authStore = useAuthStore()

const likedMenus = ref([])
const isLoading = ref(true)

const navigateToMenu = (id) => {
  router.push(`/menu/detail/${id}`)
}

const fetchLikedMenus = async () => {
  try {
    if (!authStore.user || !authStore.user.id) {
      throw new Error('User not authenticated')
    }

    const userId = authStore.user.id
    const response = await $fetch(`/api/menulike?userId=${userId}`, {
      method: 'GET'
    })

    likedMenus.value = response.map(like => like.menu)
  } catch (error) {
    console.error('Error fetching liked menus:', error)
  } finally {
    isLoading.value = false
  }
}

// Remove menu like
const removeMenuLike = async (menuId) => {
  try {
    if (!authStore.user || !authStore.user.id) {
      throw new Error('User not authenticated')
    }

    const userId = authStore.user.id
    await $fetch(`/api/menulike?userId=${userId}&menuId=${menuId}`, {
      method: 'DELETE'
    })

    // Remove from local state
    likedMenus.value = likedMenus.value.filter(menu => menu.id !== menuId)
  } catch (error) {
    console.error('Error removing menu like:', error)
    // Optionally show error message
  }
}

onMounted(fetchLikedMenus)
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>