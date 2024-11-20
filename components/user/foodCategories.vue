<script setup>
const foodCategorires = [
    { src: '/foodCategory/food1.png', name: 'เบอร์เกอร์' },
    { src: '/foodCategory/food2.png', name: 'สลัดผัก' },
    { src: '/foodCategory/food3.png', name: 'อาหารญี่ปุ่น' },
    { src: '/foodCategory/food4.png', name: 'ก๋วยเตี๋ยว' },
    { src: '/foodCategory/food5.png', name: 'พิซซ่า' },
    { src: '/foodCategory/food6.png', name: 'ส้มตำ' },
    { src: '/foodCategory/food7.png', name: 'ยำ' },
    { src: '/foodCategory/food8.png', name: 'ไก่ทอด' },
    { src: '/foodCategory/food9.png', name: 'ติ่มซำ' },
    { src: '/foodCategory/food10.png', name: 'ปิ้งย่าง' },
    { src: '/foodCategory/food11.png', name: 'สเต็ก' },
    { src: '/foodCategory/food12.png', name: 'ตามสั่ง' },
    { src: '/foodCategory/food13.png', name: 'ชาบู-สุกี้' },
    { src: '/foodCategory/food14.png', name: 'อาหารรทะเล' },
    { src: '/foodCategory/food15.png', name: 'ข้าวแกง' },
    { src: '/foodCategory/food16.png', name: 'สปาเก็ตตี้' },
    { src: '/foodCategory/food17.png', name: 'เค้ก' },
    { src: '/foodCategory/food18.png', name: 'ขนมไทย' },
    { src: '/foodCategory/food19.png', name: 'เบเกอรี่' },
    { src: '/foodCategory/food20.png', name: 'โดนัท' },
    { src: '/foodCategory/food21.png', name: 'ไอศกรีม' },
    { src: '/foodCategory/food22.png', name: 'น้ำผลไม้' },
    { src: '/foodCategory/food23.png', name: 'ชา-ชานม' },
    { src: '/foodCategory/food24.png', name: 'กาแฟ' },
]
</script>

<template>
    <div class="p-5">
        <div>
            <h2 class="text-xl mt-5 font-bold">หมวดหมู่ยอดนิยม</h2>
        </div>

        <div class="mt-5 overflow-x-auto whitespace-nowrap">
            <div class="grid grid-rows-2 gap-2 grid-flow-col auto-cols-max">
                <div v-for="food in foodCategorires" :key="food.name"
                    class="sm:w-[95px] sm:h-[105px] w-[81px] h-[91px] bg-white shadow-md rounded-xl flex items-center justify-center mt-2 mb-2">
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