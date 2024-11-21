<template>
  <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
    <RouterLink to="/"
      class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
          fill="#0D1217" />
      </svg>
    </RouterLink>

    <div class="flex-1 mt-3">
      <h2 class="text-xl mx-16 font-bold">สินค้าลดราคา</h2>
    </div>
  </div>

  <div class="flex justify-center">
    <Search />
  </div>

  <div class="relative font-prompt mt-10 p-4">
    <div class="flex justify-center">
      <button @click="isOpen = !isOpen"
        class="select select-bordered h-14 w-full flex items-center justify-between p-4">
        <div class="flex items-center gap-5">
          <iconSaleInput />
          <div>
            <span v-if="!selectedItem">เลือกประเภทสินค้า</span>
            <span v-else>{{ selectedItem }}</span>
          </div>
        </div>
      </button>
    </div>

    <div v-if="isOpen === true" class="top-full left-0 right-0 bg-white shadow-md mt-2 rounded-md">
      <ul class="p-2">
        <li @click="selectItem('A')" class="p-2 hover:bg-gray-200">A</li>
        <li @click="selectItem('B')" class="p-2 hover:bg-gray-200">B</li>
        <li @click="selectItem('C')" class="p-2 hover:bg-gray-200">C</li>
        <li @click="selectItem('D')" class="p-2 hover:bg-gray-200">D</li>
        <li @click="selectItem('E')" class="p-2 hover:bg-gray-200">E</li>
      </ul>
    </div>
  </div>

  <ProductSale />
</template>

<script setup>
import Search from '~/components/user/Search'
import ProductSale from '~/components/user/ProductSale.vue'
import iconSaleInput from '~/components/user/icons/iconSaleInput.vue';

const isOpen = ref(false)
const selectedItem = ref('')

const selectItem = (item) => {
  selectedItem.value = item
  isOpen.value = false
};
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>
