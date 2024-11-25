<template>
    <adminLayouts>
        <div v-if="isLoading" class="text-center mt-5">
            <span class="loading loading-spinner loading-xl text-orange-500"></span>
            <h2 class="mt-2 mx-2 text-base">Loading...</h2>
        </div>
        <div v-else class="container mx-auto p-4 bg-base-100 rounded-lg font-prompt">
            <div class="flex justify-center items-center bg-[#FF8128] w-full h-20 shadow-md rounded-full bg-opacity-50">
                <h2 class="sm:text-5xl text-3xl font-bold text-[#fefeff] text-stroke tracking-wide">จัดการร้านค้า
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
                                <p class="text-center">ชื่อร้าน</p>
                            </th>
                            <th>
                                <p class="text-center">เจ้าของร้าน</p>
                            </th>
                            <th>
                                <p class="text-center">เบอร์โทรศัพท์</p>
                            </th>
                            <th>
                                <p class="text-center">ที่อยู่</p>
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(restaurant, index) in restaurants" :key="restaurant.id">
                            <td>
                                <p class="text-center">{{ restaurant.restaurant_Id }}</p>
                            </td>
                            <td>
                                <div class="flex justify-center">
                                    <img src="/restuarant/9c80947e0408d3d81f78f309e848d61e.png" alt="restaurant" class="w-24 h-24 rounded-md">
                                </div>
                            </td>
                            <td>
                                <p class="text-center">{{ restaurant.name }}</p>
                            </td>
                            <td>
                                <p class="text-center">{{ restaurant.ownerFullname }}</p>
                            </td>
                            <td>
                                <p class="text-center">{{ restaurant.phoneNumber }}</p>
                            </td>
                            <td>
                                <p class="text-center">{{ restaurant.location }}</p>
                            </td>
                            <td>
                                <div class="flex gap-2 justify-center">
                                    <button class="btn" @click="deleteRestaurant(restaurant.restaurant_Id)">
                                        <Trash />
                                    </button>
                                    <button class="btn btn-accent" @click="editUser(restaurant.restaurant_Id)">
                                        <Edit />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
const restaurants = ref([])
const router = useRouter()

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
        restaurants.value = data
    } catch (err) {
        console.error('Error fetching courses:', err);
    } finally {
        isLoading.value = false;
    }
};

const deleteRestaurant = async (id) => {
    try {
        const { isConfirmed } = await Swal.fire({
            title: 'ยืนยันการลบ?',
            text: "คุณแน่ใจหรือไม่ว่าต้องการลบร้านค้านี้",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'ลบ',
            cancelButtonText: 'ยกเลิก',
            customClass: {
                title: 'font-prompt',
                content: 'font-prompt',
                confirmButton: 'font-prompt',
                cancelButton: 'font-prompt',
                text: 'font-prompt',
            }
        });
        if (isConfirmed) {
            const response = await fetch(`/api/restaurant?restaurantId=${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete restaurant');
            }
            const result = await response.json();
            Swal.fire('ลบสำเร็จ!', result.message, 'success');
            await fetchRestaurant();
        }
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        Swal.fire('ลบไม่สำเร็จ!', 'เกิดข้อผิดพลาด', 'error');
    }
};
const editUser = (id) => {
    router.push(`/admin/restaurants/edit/${id}`);
};
onMounted(async () => {
    await fetchRestaurant()
    console.log('user: ', restaurants.value)
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