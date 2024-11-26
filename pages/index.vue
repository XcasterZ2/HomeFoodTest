<template>
  <userLayouts>
    <div class="sm:mx-3 mx-0">
      <Promotion v-if="isDesktop" />
      <PromotionSlide v-else />
    </div>
    <div class="mt-5 flex justify-center">
      <Search />
    </div>

    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-5 p-3 mt-5 font-prompt">
        <RouterLink to="/orderfood"
          class="sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden">
          <div class="absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]"
            style="background: linear-gradient(180deg, #FF96843D, transparent);"></div>
          <div class="relative flex items-center justify-center w-full h-full z-10">
            <div>
              <div class="flex justify-center items-center">
                <img src="/public/user/Orderfood.png" alt="orderfood" class="sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]">
              </div>
              <div class="mt-1">
                <h1 class="sm:text-lg text-[14px] text-white">สั่งอาหาร</h1>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/ordershop"
          class="sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden">
          <div class="absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]"
            style="background: linear-gradient(180deg, #FF96843D, transparent);"></div>
          <div class="relative flex items-center justify-center w-full h-full z-10">
            <div>
              <div class="flex justify-center items-center">
                <img src="/public/user/shopping.png" alt="orderfood" class="sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]">
              </div>
              <div class="mt-1">
                <h1 class="sm:text-lg text-[14px] text-white">สั่งของ</h1>
              </div>
            </div>
          </div>
        </RouterLink>
        <RouterLink to="/packet"
          class="sm:w-36 sm:h-36 w-24 h-24 rounded-lg bg-gradient-to-b from-[#FFEFED] to-[#FF826C] relative overflow-hidden">
          <div class="absolute inset-0 rounded-lg border-[2px] border-[#FF96843D]"
            style="background: linear-gradient(180deg, #FF96843D, transparent);"></div>
          <div class="relative flex items-center justify-center w-full h-full z-10">
            <div>
              <div class="flex justify-center items-center">
                <img src="/public/user/packet.png" alt="orderfood" class="sm:w-[64px] sm:h-[64px] w-[36px] h-[36px]">
              </div>
              <div class="mt-1">
                <h1 class="sm:text-lg text-[14px] text-white">แพ็กเกจ</h1>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="flex mt-5 font-prompt">
      <div class="flex-1 flex p-4">
        <div>
          <svg class="sm:w-[48px] sm:h-[48px]" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18.9983 18H5.00169C5.01188 19.3969 5.08343 20.9119 5.58579 21.4142C6.17157 22 7.11438 22 9 22H15C16.8856 22 17.8284 22 18.4142 21.4142C18.9166 20.9119 18.9881 19.3969 18.9983 18Z"
              fill="#FF826C" />
            <path opacity="0.5"
              d="M7 5C4.23858 5 2 7.23858 2 10C2 12.0503 3.2341 13.8124 5 14.584V18H19L19 14.584C20.7659 13.8124 22 12.0503 22 10C22 7.23858 19.7614 5 17 5C16.7495 5 16.5033 5.01842 16.2626 5.05399C15.6604 3.27806 13.9794 2 12 2C10.0206 2 8.33961 3.27806 7.73736 5.05399C7.49673 5.01842 7.25052 5 7 5Z"
              fill="#FF826C" />
          </svg>
        </div>
        <div class="font-prompt mx-2 mt-0">
          <h1 class="font-bold sm:mt-2 sm:text-2xl text-[16px]">รวมร้านแนะนำ</h1>
        </div>
      </div>

      <div class="p-3 flex-1 flex font-prompt justify-end mt-1 sm:mt-2">
        <RouterLink to="/recommendedshops" class="font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]">ดูทั้งหมด
        </RouterLink>
        <svg class="sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
    <RecommendedShops />

    <div class="flex mt-3 font-prompt">
      <div class="flex-1 flex p-4">
        <div>
          <svg class="sm:w-[48px] sm:h-[48px]" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M1.28849 2.76303C1.41947 2.37008 1.84421 2.15771 2.23717 2.28869L2.50208 2.37699C2.51528 2.38139 2.52844 2.38578 2.54156 2.39015C3.16793 2.59892 3.69726 2.77534 4.11349 2.96898C4.55593 3.1748 4.93982 3.42989 5.23092 3.83377C5.52201 4.23764 5.64262 4.6825 5.69797 5.16732C5.75004 5.62343 5.75002 6.18138 5.75 6.84163L5.75 9.5002C5.75 10.9356 5.75159 11.9367 5.85315 12.6921C5.9518 13.4259 6.13225 13.8144 6.40901 14.0912C6.68577 14.368 7.07435 14.5484 7.80812 14.6471C8.56347 14.7486 9.56458 14.7502 11 14.7502H18C18.4142 14.7502 18.75 15.086 18.75 15.5002C18.75 15.9144 18.4142 16.2502 18 16.2502H10.9451C9.57754 16.2502 8.47522 16.2502 7.60825 16.1337C6.70814 16.0127 5.95027 15.7538 5.34835 15.1519C4.74643 14.5499 4.48754 13.7921 4.36652 12.892C4.24996 12.025 4.24998 10.9227 4.25 9.55508L4.25 6.88324C4.25 6.17024 4.24887 5.69848 4.20765 5.33747C4.16862 4.99562 4.10047 4.83074 4.01405 4.71083C3.92763 4.59093 3.79276 4.47414 3.4808 4.32901C3.15135 4.17575 2.70415 4.02549 2.02774 3.80002L1.76283 3.71172C1.36987 3.58073 1.1575 3.15599 1.28849 2.76303Z"
              fill="#FF826C" />
            <path opacity="0.5"
              d="M5.74525 6C5.75022 6.25912 5.75021 6.53957 5.7502 6.8414L5.7502 9.5C5.7502 10.9354 5.75179 11.9365 5.85335 12.6919C5.86817 12.8021 5.88484 12.9046 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7523C18.2128 12.5045 18.4017 12.0636 18.7797 11.1818L19.2082 10.1818C20.0177 8.29294 20.4225 7.34853 19.9779 6.67426C19.5333 6 18.5058 6 16.4508 6H5.74525Z"
              fill="#FF826C" />
            <path
              d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z"
              fill="#FF826C" />
            <path
              d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
              fill="#FF826C" />
            <path
              d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z"
              fill="#FF826C" />
          </svg>
        </div>
        <div class="font-prompt mx-2 mt-0">
          <h1 class="font-bold sm:mt-2 sm:text-2xl text-[16px]">สินค้าลดราคา</h1>
        </div>
      </div>

      <div class="p-3 flex-1 flex font-prompt justify-end mt-1">
        <RouterLink to="/productsale" class="font-bold sm:mt-0 sm:text-xl text-[14px] text-[#FF6347]">ดูทั้งหมด
        </RouterLink>
        <svg class="sm:w-[28px] sm:h-[28px] w-[18px] h-[18px] text-[#FF6347]" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
    <ProductSale />

    <DiscountCoupon />

    <div class="flex items-center space-x-2 cursor-pointer" @click="handleLikeClick">
      <div class="relative w-6 h-6 transition duration-300">
        <input type="checkbox" class="absolute w-full h-full opacity-0 z-20 cursor-pointer" id="Give-It-An-Id"
          v-model="checked" />
        <div class="flex justify-center items-center w-full h-full">
          <svg viewBox="0 0 24 24" class="absolute fill-pink-500" :class="{ 'hidden': checked }">
            <path
              d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" />
          </svg>
          <svg v-show="checked" viewBox="0 0 24 24" class="absolute fill-pink-500">
            <path
              d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" />
          </svg>
        </div>
      </div>
      <div class="text-pink-500 text-sm">{{ likes }}</div>
    </div>

  </userLayouts>
</template>

<script lang="ts" setup>
import userLayouts from '~/layouts/userLayouts.vue'

import { useAuthStore } from '#build/imports'
import Search from '~/components/user/Search.vue'
import RecommendedShops from '~/components/user/RecommendedShops.vue'
import ProductSale from '~/components/user/ProductSale.vue'
import Promotion from '~/components/user/Promotion.vue'
import PromotionSlide from '~/components/user/PromotionSlide.vue'
import DiscountCoupon from '~/components/user/DiscountCoupon.vue'
import { useRoute } from 'vue-router'

const isDesktop = ref(false)
const authStore = useAuthStore()
const route = useRoute()

const checked = ref(false);
const likes = ref(0);

const handleLikeClick = () => {
    if (checked.value) {
        likes.value--;
    } else {
        likes.value++;
    }
    checked.value = !checked.value;
};


function handleResize() {
  isDesktop.value = window.innerWidth >= 640
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)

  const authParam = route.query.auth
  if (authParam) {
    try {
      const authData = JSON.parse(decodeURIComponent(authParam))
      authStore.login(authData)

      const newURL = window.location.pathname
      window.history.replaceState({}, document.title, newURL)
    } catch (error) {
      console.error('Error processing auth data:', error)
    }
  }

  console.log('user : ', authStore.user)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>