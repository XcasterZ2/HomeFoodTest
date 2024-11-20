<script setup>
import { ref } from 'vue'

const activeSection = ref('open')

const shopnear = [
    { src: '/user/shops/near/shops1.png', name: 'ร้านขายยา', rate: 4.9, distance: 500, shopcost: 5 },
    { src: '/user/shops/near/shops2.png', name: 'ร้านเนื้อสดใหม่', rate: 4.9, distance: 800, shopcost: 10 },
    { src: '/user/shops/near/shops3.png', name: 'ผลไม้สดแม่ใจ', rate: 4.9, distance: 600, shopcost: 15 },
    { src: '/user/shops/near/shops4.png', name: 'ของสดพี่บัว', rate: 4.9, distance: 610, shopcost: 20 },
]

const setActiveSection = (section) => {
    activeSection.value = section
}
</script>

<template>
    <div class="p-5">
        <div>
            <p class="text-xl font-bold">ร้านค้าใกล้คุณ</p>
        </div>

        <div class="flex mt-7">
            <div class="flex-1 flex flex-col cursor-pointer" @click="setActiveSection('open')">
                <div class="flex justify-center">
                    <h2 :class="{
                        'text-[#FF6347]': activeSection === 'open',
                        '': activeSection !== 'open'
                    }">เปิดอยู่</h2>
                </div>
                <div :class="{
                    'border-[2px] border-[#FF6347] mt-1': activeSection === 'open',
                    'border-[1px] mt-1': activeSection !== 'open'
                }"></div>
            </div>

            <div class="flex-1 flex flex-col cursor-pointer" @click="setActiveSection('promotion')">
                <div class="flex justify-center">
                    <h2 :class="{
                        '': activeSection === 'open',
                        'text-[#FF6347]': activeSection !== 'open'
                    }">โปรโมชั่น</h2>
                </div>
                <div :class="{
                    'border-[1px] mt-1 ': activeSection === 'open',
                    'border-[2px] border-[#FF6347] mt-1': activeSection !== 'open'
                }"></div>
            </div>
        </div>

        <div v-if="activeSection === 'open'" class="mt-3">
            <div v-for="shop in shopnear" :key="shop.name">
                <div class="w-full  sm:h-[140px] h-[70px] mt-2 flex">
                    <div>
                        <img :src="shop.src" :alt="shop.name" class="sm:w-[134px] sm:h-[134px] w-[60px] h-[60px] object-cover rounded-md">
                    </div>

                    <div class="flex w-full">
                        <div class="mx-4 flex flex-col">
                            <div>
                                <h2 class="text-base sm:text-xl">{{ shop.name }}</h2>
                            </div>
                            <div class="flex sm:mt-2">
                                <svg class="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.33943 3.15497C6.07831 1.82949 6.44774 1.16675 7.00008 1.16675C7.55242 1.16675 7.92186 1.82949 8.66074 3.15497L8.85189 3.49788C9.06186 3.87454 9.16684 4.06287 9.33053 4.18714C9.49422 4.3114 9.69808 4.35752 10.1058 4.44978L10.477 4.53376C11.9118 4.85841 12.6292 5.02073 12.7999 5.56959C12.9706 6.11846 12.4815 6.69037 11.5034 7.8342L11.2503 8.13013C10.9723 8.45517 10.8334 8.61769 10.7708 8.81875C10.7083 9.01981 10.7293 9.23665 10.7713 9.67032L10.8096 10.0651C10.9575 11.5913 11.0314 12.3543 10.5846 12.6935C10.1377 13.0328 9.46602 12.7235 8.12261 12.1049L7.77505 11.9449C7.39329 11.7691 7.20241 11.6812 7.00008 11.6812C6.79775 11.6812 6.60687 11.7691 6.22512 11.9449L5.87756 12.1049C4.53414 12.7235 3.86243 13.0328 3.41558 12.6935C2.96874 12.3543 3.04268 11.5913 3.19056 10.0651L3.22882 9.67032C3.27085 9.23665 3.29186 9.01981 3.22933 8.81875C3.16681 8.61769 3.02783 8.45517 2.74987 8.13013L2.4968 7.8342C1.51864 6.69037 1.02956 6.11846 1.20024 5.56959C1.37092 5.02073 2.08833 4.85841 3.52314 4.53376L3.89435 4.44978C4.30208 4.35752 4.50594 4.3114 4.66963 4.18714C4.83332 4.06287 4.9383 3.87454 5.14827 3.49788L5.33943 3.15497Z"
                                        fill="#FFC700" />
                                </svg>

                                <h2 class="mx-1 text-[#8D92A3] text-base sm:text-xl">{{ shop.rate }} | </h2>
                                <h2 class="text-[#8D92A3] text-base sm:text-xl">{{ shop.distance }} m</h2>
                            </div>
                        </div>

                        <div class="flex-1 flex item w-full justify-center sm:justify-end  sm:mx-10">
                            <div class="sm:w-[100px] sm:h-8 w-[66px] h-6 rounded-2xl bg-red-200 flex justify-center items-center mt-3">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="13.3333" y="10.8333" width="5" height="5" rx="2.5" stroke="#FF826C"
                                        stroke-width="1.5" />
                                    <path
                                        d="M9.16675 13.3333V12.0833C9.16675 10.512 9.16675 9.72631 8.67859 9.23816C8.19044 8.75 7.40476 8.75 5.83341 8.75H5.33341C5.02388 8.75 4.86911 8.75 4.73855 8.76028C3.10396 8.88892 1.80567 10.1872 1.67702 11.8218C1.66675 11.9524 1.66675 12.1071 1.66675 12.4167C1.66675 12.4941 1.66675 12.5327 1.66932 12.5654C1.70148 12.974 2.02605 13.2986 2.4347 13.3308C2.46734 13.3333 2.50603 13.3333 2.58341 13.3333H9.16675ZM9.16675 13.3333H13.3334"
                                        stroke="#FF826C" stroke-width="1.5" stroke-linecap="round" />
                                    <path
                                        d="M7.91675 13.3333C7.91675 14.714 6.79746 15.8333 5.41675 15.8333C4.03604 15.8333 2.91675 14.714 2.91675 13.3333"
                                        stroke="#FF826C" stroke-width="1.5" stroke-linecap="round" />
                                    <path
                                        d="M10 4.16675H10.4399C11.4422 4.16675 11.9434 4.16675 12.3462 4.41566C12.7489 4.66458 12.973 5.11284 13.4213 6.00937L15.8333 10.8334"
                                        stroke="#FF826C" stroke-width="1.5" stroke-linecap="round" />
                                    <path
                                        d="M15.1188 9.16667L15.6869 8.74816C15.906 8.58679 16.0155 8.5061 16.0916 8.40092C16.1435 8.32933 16.1836 8.24995 16.2105 8.16575C16.25 8.04205 16.25 7.90601 16.25 7.63394C16.25 7.1194 16.25 6.86213 16.1403 6.67004C16.0664 6.54073 15.9593 6.43357 15.83 6.35971C15.6379 6.25 15.3806 6.25 14.8661 6.25H13.75"
                                        stroke="#FF826C" stroke-width="1.5" stroke-linecap="round" />
                                    <circle cx="15.8333" cy="13.3333" r="2.5" stroke="#FF826C" stroke-width="1.5" />
                                </svg>

                                <h2 class="mx-1 text-[#6D6C69] text-base sm:text-xl">฿{{ shop.shopcost }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="activeSection === 'promotion'" class="mt-3">
            <div class="text-center">
                <h2>โปรโมชั่นจะมาเร็วๆ นี้</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
