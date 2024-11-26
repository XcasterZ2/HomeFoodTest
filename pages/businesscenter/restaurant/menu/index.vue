<template>
  <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
    <RouterLink to="/businesscenter/restaurant/detail"
      class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
          fill="#0D1217" />
      </svg>
    </RouterLink>

    <div class="flex-1 mt-3">
      <h2 class="text-xl mx-16 font-bold">เมนูอาหารทั้งหมด</h2>
    </div>
  </div>

  <div class="p-5 font-prompt sm:max-w-5xl sm:mx-auto">
    <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
      <div v-for="menu in menus" :key="menu.name" class="shadow-md mb-5 p-4 rounded-2xl">
        <div v-if="menu.image && JSON.parse(menu.image).length > 0">
          <img :src="JSON.parse(menu.image)[0]" alt="logo-Menu" class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
        </div>
        <div v-else>
          <img src="/public/restuarant/menu.png" alt="default-Menu" class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
        </div>

        <div class="mt-2">{{ menu.name }}</div>

        <div class="bg-[#FF9684] mt-2 w-[65px]  bg-opacity-30 h-[20px] flex rounded-full justify-center items-center">
          <Fire />
          <h2 class="text-[12px] text-[#FF6347]">ขายดี</h2>
        </div>

        <div class="flex justify-end mt-2">
          <h2 class="text-[#FF6347] font-bold text-xl">฿{{ menu.price }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Fire from '~/components/user/icons/restaurant/menu/Fire.vue';
const route = useRoute()
const showForm = ref(false)
const menus = ref([])




const fetchMenu = async () => {
  const restaurantssId = localStorage.getItem('restaurantId');

  const restaurantsId = parseInt(restaurantssId)
  try {
    if (!restaurantsId) {
      console.error('Restaurant ID is not available')
      return
    }
    const response = await fetch(`/api/menu/restaurant/${restaurantsId}`, {
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
  }
}

onMounted(async () => {
  await fetchMenu()
  console.log('menuImg : ', menus.image)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>