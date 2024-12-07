<template>
  <div class="mx-auto max-w-7xl pb-24 font-prompt">
    <div class="fixed top-0 left-0 right-0 z-50 sm:hidden">
      <div class="mx-auto p-2">
        <div class="flex justify-between">
          <div>
            <div v-if="!openStatus" class="">
              <div @click="clickOpenStatus" class="p-3 bg-gray-500 rounded-full w-24 h-12 mt-2 cursor-pointer">
                <p class="text-white font-semibold text-base text-center">รายได้</p>
              </div>
            </div>
            <div v-else>
              <transition name="fade">
                <div>
                  <div @click="clickCloseStatus" class="bg-zinc-100 shadow-lg rounded-full w-12 h-12 cursor-pointer">
                    <div class="flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 mt-3">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                      </svg>
                    </div>
                  </div>
                  <div class="p-3 bg-gray-400 rounded-lg w-28 mt-2">
                    <p class="text-white">รายได้</p>
                    <p class="text-white">฿</p>
                  </div>
                  <div class="p-3 bg-gray-400 rounded-lg mt-2">
                    <p class="text-white w-fit">เครดิสในกระเป๋า</p>
                    <p class="text-white">฿</p>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="">
            <div class="w-16 h-16 rounded-full">
              <img src="/public/photo-user.png" class="rounded-full w-16 h-16 bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Slot comes after -->
    <div class="flex justify-center items-start">
      <slot />
    </div>

    <div class="fixed bottom-5 left-2 right-0 z-50 sm:hidden">
      <div class="bg-gray-600 rounded-md h-[170px] p-3 flex shadow-md w-[350px] justify-center">
        <div class="flex gap-5">

          <div>
            <div class="bg-gray-400 rounded-full w-14 h-14 cursor-pointer">
              <div class="flex justify-center">
                <Car class="mt-3" />
              </div>
            </div>
            <div class="mt-2">
              <p class="text-[10px] text-center text-white">ประเภทบริการ</p>
            </div>
          </div>

          <div>
            <div class="bg-gray-400 rounded-full w-14 h-14 cursor-pointer">
              <div class="flex justify-center">
                <Auto class="mt-3" />
              </div>
            </div>
            <div class="mt-2">
              <p class="text-[10px] text-center text-white">รับงานอัตโนมัติ</p>
            </div>
          </div>

          <div>
            <div class="bg-gray-400 rounded-full w-14 h-14 cursor-pointer">
              <div class="flex justify-center">
                <Chat class="mt-3"></Chat>
              </div>
            </div>
            <div class="mt-2">
              <p class="text-[10px] text-center text-white">ข้อความ</p>
            </div>
          </div>

          <div>
            <div class="bg-gray-400 rounded-full w-14 h-14 cursor-pointer">
              <div class="flex justify-center">
                <Order class="mt-3 ml-2" />
              </div>
            </div>
            <div class="mt-1">
              <p class="text-[10px] text-center text-white ">รับงาน</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="hidden sm:block fixed bottom-[40%] left-0 z-50"></div>
  </div>
</template>


<script lang="ts" setup>
import Car from '~/components/rider/Car.vue';
import Chat from '~/components/rider/Chat.vue';
import Auto from '~/components/rider/Auto.vue';
import Order from '~/components/rider/Order.vue';

const openStatus = ref(false)

const clickOpenStatus = () => {
  openStatus.value = true
}

const clickCloseStatus = () => {
  openStatus.value = false
}
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>