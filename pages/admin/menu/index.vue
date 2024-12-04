<template>
    <adminLayouts>
        <div v-if="isLoading" class="text-center mt-5">
            <span class="loading loading-spinner loading-xl text-orange-500"></span>
            <h2 class="mt-2 mx-2 text-base">Loading...</h2>
        </div>
        <div v-else class="container mx-auto p-4 bg-base-100 rounded-lg font-prompt">
            <div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full bg-opacity-50">
                <h2 class="sm:text-5xl text-3xl font-bold text-[#fefeff] text-stroke tracking-wide">จัดการเมนู
                </h2>
            </div>
            <div class="overflow-x-auto mt-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                <p class="text-center">ลำดับ</p>
                            </th>
                            <th>
                                <p class="text-center">รูปเมนู</p>
                            </th>
                            <th>
                                <p class="text-center">ชื่อเมนู</p>
                            </th>
                            <th>
                                <p class="text-center">ชื่อร้าน</p>
                            </th>
                            <th>
                                <p class="text-center">ราคา</p>
                            </th>
                            <th>
                                <p class="text-center">หมวดหมู่</p>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(menu, index) in paginatedMenu" :key="menu.id">
                            <td>
                                <p class="text-center">{{ menu.id }}</p>
                            </td>
                            <td>
                                <div class="flex justify-center w-[100px]">
                                    <div v-if="menu.image && JSON.parse(menu.image).length > 0">
                                        <img :src="JSON.parse(menu.image)[0]" alt="logo-Menu"
                                            class="rounded-xl sm:w-[100px] sm:h-[100px] w-[100px] h-[100px]">
                                    </div>
                                    <div v-else>
                                        <img src="/public/restuarant/menu.png" alt="default-Menu"
                                            class="rounded-xl sm:w-[100px] sm:h-[100px] w-[100px] h-[100px]">
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class=" whitespace-nowrap text-center  sm:text-sm text-[12px]">{{ menu.name }}</p>
                            </td>
                            <td>
                                <p class=" whitespace-nowrap text-center  sm:text-sm text-[12px]">{{
                                    menu.restaurant.name }}</p>
                            </td>
                            <td>
                                <p class=" whitespace-nowrap text-center  sm:text-sm text-[12px]">{{ menu.price }}</p>
                            </td>
                            <td>
                                <p class=" whitespace-nowrap text-center  sm:text-sm text-[12px]">{{ menu.category }}
                                </p>
                            </td>
                            <td>
                                <div class="flex gap-2 justify-center">
                                    <button class="btn">
                                        <Trash />
                                    </button>
                                    <button class="btn btn-accent">
                                        <Edit />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="join mt-4 flex justify-center">
                    <button @click="changePage(currentPage - 1)" class="join-item btn" :disabled="currentPage === 1">
                        ก่อนหน้า
                    </button>
                    <button v-for="page in totalPages" :key="page" @click="changePage(page)"
                        :class="['join-item btn', { 'btn-active': page === currentPage }]">
                        {{ page }}
                    </button>
                    <button @click="changePage(currentPage + 1)" class="join-item btn"
                        :disabled="currentPage === totalPages">
                        ถัดไป
                    </button>
                </div>
            </div>
        </div>
    </adminLayouts>
</template>


<script setup>
import adminLayouts from '~/layouts/adminLayouts.vue'
import Trash from '~/components/admin/icons/Trash.vue';
import Edit from '~/components/admin/icons/Edit.vue';


import Swal from 'sweetalert2'
const isLoading = ref(true);

const menus = ref([])
const router = useRouter()

const currentPage = ref(1);
const itemsPerPage = ref(4);

const paginatedMenu = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return menus.value.slice(start, end);
});

const totalPages = computed(() => Math.ceil(menus.value.length / itemsPerPage.value));

const changePage = (page) => {
    currentPage.value = page;
};

const fetchMenu = async () => {
    isLoading.value = true;
    try {
        const response = await fetch('/api/menu', {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        menus.value = data
    } catch (err) {
        console.error('Error fetching courses:', err);
    } finally {
        isLoading.value = false;
    }
};



definePageMeta({
    middleware: 'auth',
});

onMounted(async () => {
    await fetchMenu()
    console.log('user: ', menus.value)
})
</script>
<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif !important;
}

.text-stroke {
    text-shadow: -5px -1px 0 #FF8128, 1px -1px 0 #FF8128, -5px 1px 0 #FF8128, 1px 1px 0 #FF8128;
}
</style>