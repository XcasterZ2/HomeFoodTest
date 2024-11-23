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

    <div class="flex-1 mt-2">
      <h2 class="text-3xl mx-16 font-bold">สั่งอาหาร</h2>
    </div>
  </div>

  <userLayouts class="font-prompt">
    <div class="flex justify-center">
      <Search />
    </div>
    <div>
      <foodCategories />
    </div>
    <div>
      <StoresNear />
    </div>

  </userLayouts>
</template>

<script setup>
import userLayouts from '~/layouts/userLayouts.vue';
import Search from '~/components/user/Search'
import foodCategories from '~/components/user/foodCategories'
import StoresNear from '~/components/user/StoresNear'
</script>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>