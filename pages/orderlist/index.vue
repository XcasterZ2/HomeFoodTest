<script setup>
import { useAuthStore } from '#build/imports';
import userLayoutsNoNav from '~/layouts/userLayoutsNoNav.vue';
import Search from '~/components/user/Search.vue';
import { RouterLink } from 'vue-router';
import { ref, computed } from 'vue';

const authStore = useAuthStore()
const currentImageIndex = ref({});

const getFirstImage = (imageString) => {
    try {
        const images = JSON.parse(imageString); // แปลง string เป็น array
        return images[0]; // ดึงแค่รูปแรกออกมาใช้
    } catch (error) {
        console.error('Error parsing image JSON:', error);
        return ''; // คืนค่าเปล่าในกรณีผิดพลาด
    }
};


const categories = [
    'ทั้งหมด',
    'ซื้ออาหาร',
    'ยกเลิก',
];
const selectedCategory = ref('ทั้งหมด')

const toggleCategory = (category) => {
    selectedCategory.value = category
};

const images = [
    'https://s3-alpha-sig.figma.com/img/e5e9/4c2b/8d45787e1249989e6b26cef4d7e894d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dz5AjBkRbB35Xv1YeX3dzUr9as45UMEvI9Jxha9qJmfA1TDkGrDpjLsrgzXVHUU5U1mcbTcdvB8~T800jjI9aYyRP5ifR5PrIy791ECQmOwxUj4Lc8D308cFA0El-uej3yhwIlWLjGcaVQSv5jH3hI2dLeNb7tcChicvPH0qTtZ5b805-7p-utYt9RkrwrMjWI876FOgJ2TMdfUbB8DdIvz~mYi0uK4Oc1aCVLJlDse7y3rX2aHTBu006c5qPlnuPdMXAAZm9s4kXtEYVOR7LWFl3sBFqiCq1B~V93zIxCN9EjY9MwnzepPuimNwCnIID3pC6ikLFpNNDh-NoTpAIA__',
    'https://s3-alpha-sig.figma.com/img/e006/d495/087fcf4b1c7ef579c1fd8d83dcb43977?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6Jm-EJqk8u58uraDI4jCMqW0LkrAGhyskSQS1SoSQAd0Tm2TtdLvn24Qp~psYob0f8JxGTkdATwWkWM-P1oy1A2a0XrE-tRkiDI1QQGT7dWErzVzZeOHNLhaq~59JAMNN7sn283HZa42uiyb84qBmoBjYbkQS6s5Tug1pLFdPv1MXzEjbkBdMj8PLABAb851KV8lAlhA3p42ashhJGkPqU~8dMTKFdtGwFRYDRxvTD0gMBqel4-Wy8y3RwxvnapMKDJoTwYYUmGVqFrbcsYJy9yWJB4CuRzUEbyzuGSTUfUWI3kNVTVMEpwzVvZd-j4G7SChH9THCTBu7VANxOMeA__',
    'https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAIekpWa45Hk5LvWTCeaE0y3ic8bjXGsL~tX9TuAgDmF1LTKHCgrIJ915BpanfwcYEoh9MxbaE3azrUgdr63YRtSxidLNOFaTHCBVBBwamPYpd8zT0mfg8LWkwssavf0gmj2OE2fMoQWYp2FSHVVkUuYa5MO~ptGHPxNGvDHcG9cTEv-yviqvpnXwEtMAzhharoousD7zoDQOvEOHGFtEyaJ-ljYOMG7iWGqhF1BeXvzZwJeoEkwJ3PFtwPkVnJ5AXYW~lcFHtdL0r5eIybEcVoDqqrB6K1Uk2B9V0oWiWj~WMwIWIdKK24y9-rw10kTdFkj5HbqR2AOmu5X30shWg__'
];

const order = ref([])

const orders = [
    { value: "ซื้ออาหาร", number: '0023900', price: '198.50' },
    { value: "ซื้อของ", number: '0023512', price: '258' },
    { value: "ซื้อของ", number: '0023502', price: '549' },
    { value: "ซื้ออาหาร", number: '0023450', price: '186' },
]

const fetchOrder = async () => {
    try {
        const userId = authStore.user.id
        const response = await fetch(`/api/orders?userId=${userId}`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error('แสดงข้อมูลออเดอร์ไม่สำเร็จ');
        }
        const data = await response.json();
        order.value = data.body

    } catch (err) {
        console.error('แสดงข้อมูลออเดอร์ไม่สำเร็จ:', err);

    }
};

const filteredOrders = computed(() => {
    if (selectedCategory.value === 'ทั้งหมด') {
        return orders;
    }
    return orders.filter(order => order.value === selectedCategory.value);
});

onMounted(async () => {
    await fetchOrder()
    console.log('data : ', order.value)
    order.forEach((orders) => {
        orders.orderItems.forEach((item) => {
            if (item.menu.image && JSON.parse(item.menu.image).length > 0) {
                startImageRotation(item);
            }
        });
    });
})

</script>

<template>
    <userLayoutsNoNav>
        <div class="sm:max-w-5xl sm:mx-auto">
            <div class="p-4 flex font-prompt mt-6">
                <RouterLink to="/"
                    class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
                            fill="#0D1217" />
                    </svg>
                </RouterLink>

                <div class="flex-1 mt-3 flex justify-center">
                    <h2 class="text-2xl mx-20 font-semibold">การสั่งซื้อ</h2>
                </div>
            </div>

            <div class="ml-2 sm:flex sm:justify-center">
                <Search />
            </div>

            <div class=" mt-10 overflow-x-auto scrollbar-hide sm:flex sm:justify-center">
                <div class="flex items-center gap-[8px] px-4 min-w-max">
                    <button v-for="(item, index) in categories" :key="index" @click="toggleCategory(item)" :class="[
                        'flex items-center justify-center px-4 h-[40px] rounded-[8px] whitespace-nowrap transition-colors font-prompt text-[14px] gap-1',
                        selectedCategory === item
                            ? 'bg-gradient-custom text-white'
                            : 'hover:bg-gray-100 text-[#0D1217]'
                    ]">
                        <svg v-if="selectedCategory === item" width="11" height="10" viewBox="0 0 11 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10.4107 0.779186C10.6707 1.00619 10.6975 1.40102 10.4705 1.66104L3.92289 9.16104C3.8042 9.297 3.63254 9.37501 3.45206 9.37501C3.27159 9.37501 3.09993 9.297 2.98124 9.16104L0.362194 6.16104C0.135185 5.90102 0.161952 5.50619 0.421981 5.27919C0.682009 5.05218 1.07683 5.07894 1.30384 5.33897L3.45206 7.79967L9.52886 0.838973C9.75587 0.578944 10.1507 0.552177 10.4107 0.779186Z"
                                fill="white" />
                        </svg>
                        {{ item }}
                    </button>
                </div>
            </div>

            <div class="p-5 font-prompt sm:max-w-3xl gap-4 mx-auto">
                <template v-if="order.length > 0">
                    <div v-for="orders in order" :key="orders.id"
                        class="w-full flex flex-col rounded-2xl h-full shadow-md mt-4 p-2">

                        <div class="flex justify-center w-full gap-2">
                            <div v-for="item in orders.orderItems" :key="item.id" class="item">
                                <!-- แสดงรูปภาพเดียว -->
                                <div v-if="item.menu.image && JSON.parse(item.menu.image).length > 0">
                                    <img :src="getFirstImage(item.menu.image)" alt="menu image"
                                        class="w-[150px] h-[110px] rounded-xl" />
                                </div>
                                <div v-else>
                                    <img src="/public/restuarant/menu.png" alt="default-Menu"
                                        class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
                                </div>
                            </div>
                        </div>

                        <div class="flex p-2 mt-3">
                            <p class="text-[14px]">รหัสคำสั่งซื้อ : </p>
                            <p class="font-semibold ml-3 text-[14px]">SP {{ orders.number || '182731623' }}</p>
                        </div>

                        <div class="flex justify-between mt-2">
                            <p class="text-[#FF6347] font-semibold text-lg p-2">ราคา : ฿{{ orders.totalPrice }}</p>
                            <div class="rounded-full border-[1px] justify-center items-center flex w-16 h-9">
                                <p class="text-sm text-[#FF6347]">ซื้ออาหาร</p>
                            </div>
                        </div>

                        <div class="mt-3 bg-zinc-100 h-12 rounded-full flex justify-center items-center">
                            <p class="text-sm text-red-500">{{ orders.status === 'pending' ? 'รอไรเดอร์รับงาน' :
                                orders.status }}</p>
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div class="text-center text-gray-500 mt-10">
                        <p>ไม่มีข้อมูล</p>
                    </div>
                </template>
            </div>
        </div>
    </userLayoutsNoNav>
</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt';
}

.bg-gradient-custom {
    background: linear-gradient(121.94deg, #FF6347 0%, #FF826C 100%);
}

.text-gradient-custom {
    background: linear-gradient(121.94deg, #FF6347 0%, #FF826C 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>