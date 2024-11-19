<script setup>
const shopCategorires = [
    { src: '/shopCategory/shop1.png', name: 'เวชภัณฑ์' },
    { src: '/shopCategory/shop2.png', name: 'ของชำ' },
    { src: '/shopCategory/shop3.png', name: 'ผลิตภัณฑ์ ความงาม' },
    { src: '/shopCategory/shop4.png', name: 'แฟชั่น' },
    { src: '/shopCategory/shop5.png', name: 'อุปกรณ์ ไฟฟ้า' },
    { src: '/shopCategory/shop6.png', name: 'ผลิตภัณฑ์ สุขภาพ' },
    { src: '/shopCategory/shop7.png', name: 'ของขวัญ' },
    { src: '/shopCategory/shop8.png', name: 'ของเล่น เกมส์' },
    { src: '/shopCategory/shop9.png', name: 'เครื่องเขียน' },
    { src: '/shopCategory/shop10.png', name: 'ผลิตภัณฑ์ จากนม' },
    { src: '/shopCategory/shop11.png', name: 'แม่และเด็ก' },
    { src: '/shopCategory/shop12.png', name: 'วัตถุดิบ   ทำอาหาร' },
    { src: '/shopCategory/shop13.png', name: 'อาหารสด' },
    { src: '/shopCategory/shop14.png', name: 'อาหารแห้ง' },
    { src: '/shopCategory/shop15.png', name: 'เนื้อสัตว์' },
    { src: '/shopCategory/shop16.png', name: 'อาหารแช่แข็ง' },
    { src: '/shopCategory/shop17.png', name: 'อุปกรณ์กีฬา' },
    { src: '/shopCategory/shop18.png', name: 'อุปกรณ์ไหว้พระ' },
    { src: '/shopCategory/shop19.png', name: 'ดอกไม้ต้นไม้' },
    { src: '/shopCategory/shop20.png', name: 'สินค้าสัตว์เลี้ยง' },
]
</script>

<template>
    <div class="p-5">
        <div>
            <h2 class="text-xl mt-5 font-bold">หมวดหมู่สินค้าแนะนำ</h2>
        </div>

        <div class="mt-5 overflow-x-auto whitespace-nowrap">
            <div class="grid grid-rows-2 gap-2 grid-flow-col auto-cols-max">
                <div v-for="shop in shopCategorires" :key="shop.name"
                    class="sm:w-[115px] sm:h-[125px] w-[81px] h-[91px] bg-white shadow-md rounded-xl flex items-center justify-center mt-2 mb-2">
                    <div class="flex flex-col text-center">
                        <div class="flex justify-center">
                            <img :src="shop.src" :alt="shop.name" class="w-[34px] h-[34px]">
                        </div>
                        <div class="flex justify-center mt-2">
                            <h2 class="text-[14px] break-words">{{ shop.name }}</h2>
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

.break-words {
    word-wrap: break-word;
    white-space: normal;
    text-align: center;
}
</style>
