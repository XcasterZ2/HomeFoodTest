<script setup>
import { ref, onMounted } from 'vue'

const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)
const isTransitioning = ref(false)

const promotions = [
    {
        id: 1,
        title: 'สั่งเครื่องดื่มวันนี้',
        subtitle: 'ได้ส่วนลด',
        discount: '40%',
        image: '/promotion/photo-1-Photoroom.png',
        bgClass: 'bg-gradient-to-br from-[#FDDEA7] to-[#FAB53C]',
        imageClass: 'w-[110px] h-[165px] top-0 right-0'
    },
    {
        id: 2,
        title: 'ลดแรง',
        subtitle: 'สั่งอาหารมื้อนี้',
        bottomText: 'ได้ลดหลายต่อ',
        bgImage: '/promotion/photo-2-Photoroom.png'
    },
    {
        id: 3,
        title: 'วันนี้',
        subtitle: 'ลดมากถึง',
        discount: '60%',
        bottomText: 'หมวดอาหารสุขภาพ',
        image: '/promotion/photo-3-Photoroom.png',
        bgClass: 'bg-gradient-to-br from-[#13c296] to-[#095c47]',
        imageClass: 'w-[272px] h-[181px] -translate-y-[35%] translate-x-1/2 rounded-l-full border-[20px] border-white/20'
    },
    {
        id: 4,
        title: 'ขนมหวานยอดนิยม',
        subtitle: 'ซื้อ 1 แถม 1',
        bottomText: 'หมวดเค้ก - ขนมหวาน',
        image: '/promotion/photo-4-Photoroom.png',
        bgClass: 'bg-gradient-to-br from-[#ff9684] to-[#ffcfc6]',
        imageClass: 'w-[140px]  top-10 right-3 translate-x-3'
    }
]

const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e) => {
    touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
    const swipeThreshold = 50
    const diff = touchStartX.value - touchEndX.value

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentIndex.value < promotions.length - 1) {
            nextSlide()
        } else if (diff < 0 && currentIndex.value > 0) {
            prevSlide()
        }
    }
}

const nextSlide = () => {
    if (!isTransitioning.value && currentIndex.value < promotions.length - 1) {
        isTransitioning.value = true
        currentIndex.value++
        setTimeout(() => {
            isTransitioning.value = false
        }, 500)
    }
}

const prevSlide = () => {
    if (!isTransitioning.value && currentIndex.value > 0) {
        isTransitioning.value = true
        currentIndex.value--
        setTimeout(() => {
            isTransitioning.value = false
        }, 500)
    }
}

const autoPlay = () => {
    setInterval(() => {
        if (currentIndex.value === promotions.length - 1) {
            currentIndex.value = 0
        } else {
            nextSlide()
        }
    }, 5000)
}

onMounted(() => {
    autoPlay()
})
</script>

<template>
    <div class="w-full overflow-hidden relative font-prompt">
        <div class="carousel-container px-4 sm:px-6 md:px-8">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @touchstart="handleTouchStart"
                @touchmove="handleTouchMove" @touchend="handleTouchEnd">
                <!-- Promotion Cards -->
                <div v-for="promo in promotions" :key="promo.id" class="w-full flex-shrink-0 px-2 sm:px-3 md:px-4">
                    <div :class="[
                        'h-[180px] rounded-xl relative overflow-hidden',
                        promo.bgClass || 'bg-cover bg-center',
                        { 'bg-image': promo.bgImage }
                    ]" :style="promo.bgImage ? `background-image: url(${promo.bgImage})` : ''">
                        <!-- Content -->
                        <div class="p-5 text-white h-full">
                            <div>
                                <h1 class="text-base">{{ promo.title }}</h1>
                                <h1 class="text-xl font-bold">{{ promo.subtitle }}</h1>
                            </div>

                            <div v-if="promo.discount" class="absolute bottom-8 left-5">
                                <h1 class="text-lg font-bold">{{ promo.discount }}</h1>
                            </div>

                            <div v-if="promo.bottomText" class="absolute bottom-5 left-5">
                                <h1 class="text-xs">{{ promo.bottomText }}</h1>
                            </div>

                            <!-- Image -->
                            <div v-if="promo.image" :class="[
                                'absolute overflow-hidden',
                                promo.imageClass || 'w-[110px] h-[165px] top-0 right-0'
                            ]">
                                <img :src="promo.image" :alt="`promotion-${promo.id}`"
                                    class="object-cover w-full h-full" :class="{ 'scale-125': promo.id === 4 }">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Dots -->
        <div class="flex justify-center space-x-2 mt-4">
            <button v-for="(_, index) in promotions" :key="index" @click="currentIndex = index"
                class="w-2 h-2 rounded-full transition-colors duration-200 bg-slate-500"
                :class="index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'"></button>
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
    width: 100%;
    overflow: hidden;
}

@media (min-width: 640px) {
    .carousel-container {
        max-width: calc(100vw - 2rem);
        margin: 0 auto;
    }
}

@media (min-width: 768px) {
    .carousel-container {
        max-width: calc(100vw - 4rem);
    }
}

.bg-image {
    background-size: cover;
    background-position: center;
}

.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>