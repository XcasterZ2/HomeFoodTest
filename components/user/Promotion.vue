<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
</script>

<template>
    <div class="carousel-container overflow-hidden relative sm:hidden">
        <div class="flex transition-transform duration-500 ease-in-out">
            <div class="promotion-container flex space-x-4 p-4">
                <div class="flex gap-5">
                    <!-- Box1 -->
                    <div
                        class="promotion-background font-prompt h-[144px] w-[254px] rounded-xl relative overflow-hidden">
                        <div class="text-white">
                            <h1 class="text-[10px]">สั่งเครื่องดื่มวันนี้</h1>
                            <h1 class="text-[18px] font-bold">ได้ส่วนลด</h1>
                        </div>
                        <div class="text-white absolute bottom-5 left-5">
                            <h1 class="text-[18px] font-bold">40%</h1>
                        </div>
                        <div class="absolute top-0 right-0 w-[110px] h-[165px] overflow-hidden">
                            <img src="/public/promotion/photo-1-Photoroom.png" alt="photo-promotion1"
                                class="object-cover w-full h-full">
                        </div>
                    </div>

                    <!-- Box2 -->
                    <div
                        class="promotion-background-2 font-prompt h-[144px] w-[254px] rounded-xl relative overflow-hidden">
                        <div class="text-white">
                            <h1 class="text-[10px]">ลดแรง</h1>
                            <h1 class="text-[18px] font-bold">สั่งอาหารมื้อนี้</h1>
                        </div>
                        <div class="text-white absolute bottom-5 left-5">
                            <h1 class="text-[10px]">ได้ลดหลายต่อ</h1>
                        </div>
                    </div>

                    <!-- Box3 -->
                    <div
                        class="main-container relative w-[254px] h-[144px] mx-auto rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-[#13c296] to-[#095c47] font-prompt">
                        <div
                            class="image-wrapper absolute top-1/2 left-[140px] w-[272px] h-[181px] transform -translate-y-[49.72%] rounded-l-full overflow-hidden border-[20px] border-white/20">
                            <div class="image w-[218px] h-[145px] -mx-2">
                                <img src="/public/promotion/photo-3-Photoroom.png" alt="promotion" class="h-40">
                            </div>
                        </div>

                        <div class="flex-column-a absolute top-[18px] left-[24px] w-[100px] h-[107px] z-10">
                            <h1 class="text-white text-[10px]">วันนี้</h1>
                            <div
                                class="reduce-percent font-inter text-[25px] font-bold leading-[30px] text-left text-white mt-1">
                                <h1 class="whitespace-nowrap">ลดมากถึง</h1>
                                <span class="text-[#92e3cf]">60%</span>
                            </div>
                            <div class="text-white absolute bottom-0 left-0">
                                <h1 class="text-[10px]">หมวดอาหารสุขภาพ</h1>
                            </div>
                        </div>
                    </div>


                    <!-- Box4 -->
                    <div
                        class="main-container relative w-[254px] h-[144px] p-4 rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-[#ff9684] to-[#ffcfc6] font-prompt">
                        <div class="flex-column-a absolute top-[18px] left-[24px] w-[100px] h-[107px] z-10">
                            <h1 class="text-white text-[10px]">ขนมหวานยอดนิยม</h1>
                            <div
                                class="reduce-percent font-inter text-[25px] font-bold leading-[30px] text-left text-white mt-1">
                                <h1>ซื้อ 1</h1>
                                <h1>แถม 1</h1>
                            </div>
                            <div class="text-white absolute bottom-0 left-0">
                                <h1 class="text-[10px]">หมวดเค้ก - ขนมหวาน</h1>
                            </div>
                        </div>
                        <div class="absolute top-0 right-0 w-[160px] h-[124px] overflow-hidden">
                            <img src="/public/promotion/photo-4-Photoroom.png" alt="photo-promotion1"
                                class="object-cover w-full h-full">
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <div class="pl-4 sm:hidden">
        <span v-for="n in totalSlides" :key="n"
            :class="['dot cursor-pointer h-[10px] w-[10px] mx-[2px] rounded-full inline-block transition-colors duration-600 ease-in-out', { 'bg-gray-600': n - 1 === currentSlide, 'bg-gray-400': n - 1 !== currentSlide }]"
            @click="currentSlide = n - 1"></span>
    </div>

    <div class="sm:block hidden">
        <div class="flex gap-5">
            <!-- Box1 -->
            <div class="promotion-background font-prompt h-[184px] w-[294px] rounded-xl relative overflow-hidden">
                <div class="text-white">
                    <h1 class="text-[16px]">สั่งเครื่องดื่มวันนี้</h1>
                    <h1 class="text-[22px] font-bold">ได้ส่วนลด</h1>
                </div>
                <div class="text-white absolute bottom-5 left-5">
                    <h1 class="text-[22px] font-bold">40%</h1>
                </div>
                <div class="absolute top-0 right-0 sm:w-[140px] sm:h-[200px] w-[110px] h-[165px] overflow-hidden">
                    <img src="/public/promotion/photo-1-Photoroom.png" alt="photo-promotion1"
                        class="object-cover w-full h-full">
                </div>
            </div>

            <!-- Box2 -->
            <div class="promotion-background-2 font-prompt h-[184px] w-[294px] rounded-xl relative overflow-hidden">
                <div class="text-white">
                    <h1 class="text-[16px]">ลดแรง</h1>
                    <h1 class="text-[22px] font-bold">สั่งอาหารมื้อนี้</h1>
                </div>
                <div class="text-white absolute bottom-6 left-6">
                    <h1 class="text-[14px]">ได้ลดหลายต่อ</h1>
                </div>
            </div>

            <!-- Box3 -->
            <div
                class="main-container relative h-[184px] w-[294px]  rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-[#13c296] to-[#095c47] font-prompt">
                <div
                    class="image-wrapper absolute top-1/2 left-[140px] w-[272px] h-[181px] transform -translate-y-[49.72%] rounded-l-full overflow-hidden border-[15px] border-white/20">
                    <div class="image w-[218px] h-[145px] -mx-2">
                        <img src="/public/promotion/photo-3-Photoroom.png" alt="promotion" class="h-40">
                    </div>
                </div>

                <div class="flex-column-a absolute top-[18px] left-[24px] w-[100px] h-[107px] z-10">
                    <h1 class="text-white text-[16px]">วันนี้</h1>
                    <div
                        class="reduce-percent font-inter text-[25px] font-bold leading-[30px] text-left text-white mt-1">
                        <h1 class="whitespace-nowrap">ลดมากถึง</h1>
                        <span class="text-[#92e3cf]">60%</span>
                    </div>
                </div>
                <div class="text-white absolute bottom-2 left-6">
                    <h1 class="text-[14px] pb-4">หมวดอาหารสุขภาพ</h1>
                </div>
            </div>


            <!-- Box4 -->
            <div
                class="main-container relative h-[184px] w-[294px] p-4 rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-[#ff9684] to-[#ffcfc6] font-prompt">
                <div class="flex-column-a absolute top-[18px] left-[24px] w-[100px] h-[107px] z-10">
                    <h1 class="text-white text-[12px]">ขนมหวานยอดนิยม</h1>
                    <div
                        class="reduce-percent font-inter text-[30px] font-bold leading-[30px] text-left text-white mt-3">
                        <h1>ซื้อ 1</h1>
                        <h1>แถม 1</h1>
                    </div>
                </div>
                <div class="text-white absolute bottom-6 left-6">
                    <h1 class="text-[14px]">หมวดเค้ก - ขนมหวาน</h1>
                </div>
                <div class="absolute top-5 right-0 w-[160px] h-[124px] overflow-hidden">
                    <img src="/public/promotion/photo-4-Photoroom.png" alt="photo-promotion1"
                        class="object-cover w-full h-full">
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.promotion-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
}

.promotion-background {
    background: linear-gradient(264.34deg, #FDDEA7 1.36%, #FAB53C 102.1%);
    padding: 20px;
    color: #333;
    position: relative;
    overflow: hidden;
}

.promotion-background-2 {
    background-image: url('/public/promotion/photo-2-Photoroom.png');
    background-size: cover;
    background-position: center;
    padding: 20px;
    color: #333;
    position: relative;
    overflow: hidden;
}

.promotion-background-3 {
    background: linear-gradient(264.34deg, #095C47 1.36%, #13C296 102.1%);
    padding: 20px;
    color: #333;
    position: relative;
    overflow: hidden;
}

.font-prompt {
    font-family: 'Prompt', sans-serif;
}

.carousel-container {
    width: 100%;
    position: relative;
}

.carousel-inner {
    display: flex;
    width: 400%;
}

.promotion-container {
    width: 100%;
}

.dot {
    transition: background-color 0.3s;
}
</style>
