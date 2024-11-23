<template>
  <div class="grid grid-cols-3 gap-2">
    <div class="flex">
      <div
        class="sm:w-[200px] sm:h-[150px] w-full h-[100px] rounded-2xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
        :style="{ background: 'linear-gradient(to bottom, #FFEFED, #FF826C)' }">
        <div class="flex flex-col gap-2 h-full w-full">
          <div class="flex justify-center items-center h-full">
            <div class="flex flex-col">
              <div class="flex justify-center">
                <img src="/public/restuarant/cart.png" alt="" class="w-10 h-10 sm:w-14 sm:h-14">
              </div>

              <div class="mt-1">
                <h2 class="font-light sm:text-[18px] text-white text-shadow-lg text-[14px]">รายการสินค้า</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="sm:w-[200px] sm:h-[150px] w-full h-[100px] rounded-2xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
        :style="{ background: 'linear-gradient(to bottom, #FFEFED, #FF826C)' }">
        <div class="flex flex-col gap-2 h-full w-full">
          <div class="flex justify-center items-center h-full">
            <div class="flex flex-col">
              <div class="flex justify-center">
                <img src="/public/restuarant/payment.png" alt="" class="w-10 h-10 sm:w-14 sm:h-14">
              </div>

              <div class="mt-1">
                <h2 class="font-light sm:text-[18px] text-white text-shadow-lg text-[14px]">รายได้การขาย</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div
        class="sm:w-[200px] sm:h-[150px] w-full h-[100px] rounded-2xl flex flex-col justify-center items-center hover:-translate-y-1 transition-all duration-500 group cursor-pointer"
        :style="{ background: 'linear-gradient(to bottom, #FFEFED, #FF826C)' }">
        <div class="flex flex-col mt-2 gap-2 h-full w-full">
          <div class="flex justify-center items-center h-full">
            <div class="flex flex-col">
              <div class="flex justify-center">
                <img src="/public/restuarant/deal.png" alt="Deal Icon" class="w-10 h-10 sm:w-14 sm:h-14">
              </div>
              <div class="mt-1">
                <h2 class="font-light text-white text-shadow-lg sm:text-[18px] text-[14px]">
                  ดิลเด็ดผู้ขาย
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>
.text-shadow-lg {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
</style>