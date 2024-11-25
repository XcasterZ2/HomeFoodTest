<script setup>
import Search from '~/components/user/Search.vue';
import Star from '~/components/user/icons/Star.vue';
import { useAuthStore } from '#build/imports';
const authStore = useAuthStore()
const restaurants = ref([])
const isLoading = ref(false)

const fetchRestaurant = async () => {
    isLoading.value = true;
    try {
        const response = await fetch('/api/restaurant', {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        restaurants.value = data.filter(restaurant => restaurant.ownerId === authStore.user.id);
    } catch (err) {
        console.error('Error fetching courses:', err);
    } finally {
        isLoading.value = false;
    }
};

const setRestaurantId = (id) => {
    localStorage.setItem('restaurantId', id);
};

onMounted(async () => {
    await fetchRestaurant()
    console.log('res : ', restaurants.value)
    console.log('id : ', authStore.user.id)
})
</script>
<template>
    <div class=" shadow-lg max-w-4xl mx-auto rounded-lg">
        <div class="p-4 flex font-prompt mx-auto max-w-7xl sm:max-w-4xl mt-6">
            <RouterLink to="/profile"
                class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
                        fill="#0D1217" />
                </svg>
            </RouterLink>
            <div class="flex-1 mt-3">
                <h2 class="text-xl mx-16 font-bold">ศนย์ธุรกิจของฉัน</h2>
            </div>
        </div>
        <div class="flex justify-center mt-5">
            <Search />
        </div>
        <div v-if="isLoading" class="text-center mt-5 font-prompt">
            <span class="loading loading-spinner loading-xl text-orange-500"></span>
            <h2 class="mt-2 mx-2 text-base font-semibold">Loading...</h2>
        </div>
        <div
            class="sm:max-w-3xl sm:mx-auto sm:mt-7 w-full grid sm:grid-cols-3 grid-cols-2 gap-y-3 gap-3 mt-5 p-4 font-prompt">
            <RouterLink v-for="restaurant in restaurants" :key="restaurant.id"
                to="/businesscenter/restaurant/detail"
                class="bg-white w-full h-[215px] rounded-2xl shadow-md"
                @click="setRestaurantId(restaurant.restaurant_Id)">
                <div class="flex flex-col h-full p-2">
                    <div class="flex justify-center items-start">
                        <img src="/restuarant/9c80947e0408d3d81f78f309e848d61e.png" alt="pic-restuarant"
                            class="h-[100px] object-cover rounded-2xl">
                    </div>
                    <div class="mt-2">
                        <p class="font-medium">{{ restaurant.name }}</p>
                    </div>
                    <div class="mt-2 flex gap-2">
                        <div class="mt-1">
                            <Star />
                        </div>
                        <p>4.9</p>
                    </div>
                    <div class="mt-2 flex justify-between">
                        <p class=" text-[#FF6347] font-bold">สถานะร้าน</p>
                        <input type="checkbox" class="toggle peer" checked="checked" />
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}

.toggle:checked {
    background-color: #34D399;
}
</style>