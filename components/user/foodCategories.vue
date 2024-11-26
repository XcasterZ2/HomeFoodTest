<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const foodCategorires = [
    { src: '/foodCategory/food1.png', name: 'เบอร์เกอร์', path: '/orderfood/category/burger' },
    { src: '/foodCategory/food2.png', name: 'สลัดผัก', path: '/orderfood/category/salad' },
    { src: '/foodCategory/food3.png', name: 'อาหารญี่ปุ่น', path: '/orderfood/category/japanese' },
    { src: '/foodCategory/food4.png', name: 'ก๋วยเตี๋ยว', path: '/orderfood/category/noodle' },
    { src: '/foodCategory/food5.png', name: 'พิซซ่า', path: '/orderfood/category/pizza' },
    { src: '/foodCategory/food6.png', name: 'ส้มตำ', path: '/orderfood/category/somtum' },
    { src: '/foodCategory/food7.png', name: 'ยำ', path: '/orderfood/category/salad' },
    { src: '/foodCategory/food8.png', name: 'ไก่ทอด', path: '/orderfood/category/fried-chicken' },
    { src: '/foodCategory/food9.png', name: 'ติ่มซำ', path: '/orderfood/category/dim-sum' },
    { src: '/foodCategory/food10.png', name: 'ปิ้งย่าง', path: '/orderfood/category/grilled' },
    { src: '/foodCategory/food11.png', name: 'สเต็ก', path: '/orderfood/category/steak' },
    { src: '/foodCategory/food12.png', name: 'ตามสั่ง', path: '/orderfood/category/tamsang' },
    { src: '/foodCategory/food13.png', name: 'ชาบู-สุกี้', path: '/orderfood/category/shabu' },
    { src: '/foodCategory/food14.png', name: 'อาหารรทะเล', path: '/orderfood/category/seafood' },
    { src: '/foodCategory/food15.png', name: 'ข้าวแกง', path: '/orderfood/category/curry-rice' },
    { src: '/foodCategory/food16.png', name: 'สปาเก็ตตี้', path: '/orderfood/category/spaghetti' },
    { src: '/foodCategory/food17.png', name: 'เค้ก', path: '/orderfood/category/cake' },
    { src: '/foodCategory/food18.png', name: 'ขนมไทย', path: '/orderfood/category/thai-dessert' },
    { src: '/foodCategory/food19.png', name: 'เบเกอรี่', path: '/orderfood/category/bakery' },
    { src: '/foodCategory/food20.png', name: 'โดนัท', path: '/orderfood/category/donuts' },
    { src: '/foodCategory/food21.png', name: 'ไอศกรีม', path: '/orderfood/category/ice-cream' },
    { src: '/foodCategory/food22.png', name: 'น้ำผลไม้', path: '/orderfood/category/juice' },
    { src: '/foodCategory/food23.png', name: 'ชา-ชานม', path: '/orderfood/category/tea' },
    { src: '/foodCategory/food24.png', name: 'กาแฟ', path: '/orderfood/category/coffee' },
]

const navigateToCategory = (path) => {
    router.push(path)
}
</script>

<template>
    <div class="p-5">
        <div>
            <h2 class="text-xl mt-5 font-bold">หมวดหมู่ยอดนิยม</h2>
        </div>

        <div class="mt-5 overflow-x-auto whitespace-nowrap">
            <div class="grid grid-rows-2 gap-2 grid-flow-col auto-cols-max ">
                <div v-for="food in foodCategorires" :key="food.name"
                    class="sm:w-[95px] sm:h-[105px] w-[81px] h-[91px] bg-white shadow-md rounded-xl flex items-center justify-center mt-2 mb-2 cursor-pointer hover:-translate-y-1 transition-all duration-500 group"
                    @click="navigateToCategory(food.path)">
                    <div class="flex flex-col">
                        <div class="flex justify-center">
                            <img :src="food.src" :alt="food.name" class=" w-[34px] h-[34px]">
                        </div>
                        <div class="flex justify-center mt-2">
                            <h2 class="text-[14px]">{{ food.name }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid {
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.grid::-webkit-scrollbar {
    display: none;
}
</style>
