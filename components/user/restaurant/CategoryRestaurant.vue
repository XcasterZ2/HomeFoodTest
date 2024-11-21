<template>
  <div class="grid grid-cols-3">
    <div class="w-[105px] h-[100px] rounded-2xl"
      :style="{ background: 'linear-gradient(to bottom, #FFEFED, #FF826C)' }">
      <div class="flex flex-col mt-5 gap-2">
        <div class="flex justify-center">
          <img src="/public/restuarant/cart.png" alt="" class="w-10 h-10">
        </div>

        <div class="flex justify-center">
          <h2 class="font-light text-white text-shadow-lg text-[14px]">รายการสินค้า</h2>
        </div>
      </div>
    </div>

    <div class="w-[105px] h-[100px] rounded-2xl"
      :style="{ background: 'linear-gradient(to bottom, #FFEFED, #FF826C)' }">
      <div class="flex flex-col mt-5 gap-2">
        <div class="flex justify-center">
          <img src="/public/restuarant/payment.png" alt="" class="w-10 h-10">
        </div>

        <div class="flex justify-center">
          <h2 class="font-light text-white text-shadow-lg text-[14px]">รายได้การขาย</h2>
        </div>
      </div>
    </div>

    <div class="w-[105px] h-[100px] rounded-2xl flex flex-col justify-center items-center"
      :style="{ background: 'linear-gradient(to bottom, #FFEFED, #FF826C)' }">
      <div class="flex flex-col mt-2 gap-2">
        <div class="flex justify-center">
          <img src="/public/restuarant/deal.png" alt="Deal Icon" class="w-10 h-10">
        </div>
        <div class="flex justify-center">
          <h2 class="font-light text-white text-shadow-lg text-[14px]">
            ดิลเด็ดผู้ขาย
          </h2>
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