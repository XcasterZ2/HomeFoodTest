<script setup>
import PicSlideShow from '~/components/PicSlideShow.vue';
import Menu from '~/components/user/Menu';
import { RouterLink, useRouter } from 'vue-router';

const categories = [
    'ทั้งหมด',
    'ชื้ออาหาร',
    'ชื้อของ',
    'ยกเลิก',
];
const selectedCategory = ref('ทั้งหมด'); // Changed default to 'ทั้งหมด'

const toggleCategory = (category) => {
    selectedCategory.value = category;
};

// Add computed property for filtered items
const isVisible = (itemClass) => {
    if (selectedCategory.value === 'ทั้งหมด') return true;
    
    switch (selectedCategory.value) {
        case 'ชื้ออาหาร':
            return itemClass.includes('buyfood');
        case 'ชื้อของ':
            return itemClass.includes('buythings') || itemClass.includes('buything');
        case 'ยกเลิก':
            return itemClass.includes('cancelorder');
        default:
            return true;
    }
};

// Add new state for slideshow
const currentSlide = ref(0);
const images = [
    'https://s3-alpha-sig.figma.com/img/e5e9/4c2b/8d45787e1249989e6b26cef4d7e894d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dz5AjBkRbB35Xv1YeX3dzUr9as45UMEvI9Jxha9qJmfA1TDkGrDpjLsrgzXVHUU5U1mcbTcdvB8~T800jjI9aYyRP5ifR5PrIy791ECQmOwxUj4Lc8D308cFA0El-uej3yhwIlWLjGcaVQSv5jH3hI2dLeNb7tcChicvPH0qTtZ5b805-7p-utYt9RkrwrMjWI876FOgJ2TMdfUbB8DdIvz~mYi0uK4Oc1aCVLJlDse7y3rX2aHTBu006c5qPlnuPdMXAAZm9s4kXtEYVOR7LWFl3sBFqiCq1B~V93zIxCN9EjY9MwnzepPuimNwCnIID3pC6ikLFpNNDh-NoTpAIA__',
    'https://s3-alpha-sig.figma.com/img/e006/d495/087fcf4b1c7ef579c1fd8d83dcb43977?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6Jm-EJqk8u58uraDI4jCMqW0LkrAGhyskSQS1SoSQAd0Tm2TtdLvn24Qp~psYob0f8JxGTkdATwWkWM-P1oy1A2a0XrE-tRkiDI1QQGT7dWErzVzZeOHNLhaq~59JAMNN7sn283HZa42uiyb84qBmoBjYbkQS6s5Tug1pLFdPv1MXzEjbkBdMj8PLABAb851KV8lAlhA3p42ashhJGkPqU~8dMTKFdtGwFRYDRxvTD0gMBqel4-Wy8y3RwxvnapMKDJoTwYYUmGVqFrbcsYJy9yWJB4CuRzUEbyzuGSTUfUWI3kNVTVMEpwzVvZd-j4G7SChH9THCTBu7VANxOMeA__',
    'https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAIekpWa45Hk5LvWTCeaE0y3ic8bjXGsL~tX9TuAgDmF1LTKHCgrIJ915BpanfwcYEoh9MxbaE3azrUgdr63YRtSxidLNOFaTHCBVBBwamPYpd8zT0mfg8LWkwssavf0gmj2OE2fMoQWYp2FSHVVkUuYa5MO~ptGHPxNGvDHcG9cTEv-yviqvpnXwEtMAzhharoousD7zoDQOvEOHGFtEyaJ-ljYOMG7iWGqhF1BeXvzZwJeoEkwJ3PFtwPkVnJ5AXYW~lcFHtdL0r5eIybEcVoDqqrB6K1Uk2B9V0oWiWj~WMwIWIdKK24y9-rw10kTdFkj5HbqR2AOmu5X30shWg__'
];

// Auto-advance slides every 3 seconds
onMounted(() => {
    setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % images.length;
    }, 3000);
});

const router = useRouter();

const handleGoBack = () => {
  router.back();
};
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen w-full ">
        <div class="absolute top-[75px] flex items-center justify-between w-[288px] h-[42px]">
            <button
                @click="handleGoBack"
                class="flex items-center justify-center  w-[42px] h-[42px] radius-[22px] gap-[10px] shadow-[0px_4px_12px_0px_#0D0A2C0F]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.408 5.92548C11.7253 6.24278 11.7253 6.75722 11.408 7.07452L6.29504 12.1875H21.6668C22.1156 12.1875 22.4793 12.5513 22.4793 13C22.4793 13.4487 22.1156 13.8125 21.6668 13.8125H6.29504L11.408 18.9255C11.7253 19.2428 11.7253 19.7572 11.408 20.0745C11.0907 20.3918 10.5763 20.3918 10.259 20.0745L3.75897 13.5745C3.44167 13.2572 3.44167 12.7428 3.75897 12.4255L10.259 5.92548C10.5763 5.60817 11.0907 5.60817 11.408 5.92548Z"
                        fill="#0D1217" />
                </svg>
            </button>
            <div
                class="flex items-center justify-center w-[131px] h-[33px] text-[22px] leading-[33.26px] font-prompt text-[#0D1217]">
                การสั่งซื้อ
            </div>
            <div class="w-[42px] h-[42px] radius-[22px] gap-[10px] ">
            </div>
        </div>
        <div
            class="absolute top-[152px] flex items-center justify-between w-[288px] h-[56px] rounded-[8px] border-[1px] border-[#E9EAEB] px-[16px] gap-[12px] bg-[#1F2A370D]">
            <div class="flex items-center justify-center w-[24px] h-[24px]">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75ZM0.25 10.5C0.25 4.83908 4.83908 0.25 10.5 0.25C16.1609 0.25 20.75 4.83908 20.75 10.5C20.75 13.0605 19.8111 15.4017 18.2589 17.1982L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L17.1982 18.2589C15.4017 19.8111 13.0605 20.75 10.5 20.75C4.83908 20.75 0.25 16.1609 0.25 10.5Z"
                        fill="#BABDC1" />
                </svg>
            </div>
            <input type="text"
                class="flex items-center justify-center bg-[#1F2A370D] h-[24px] w-[185px] opacity-30 font-prompt text-[16px] leading-[24.19px] text-[#0D1217]"
                placeholder="ค้นหา...">

            <div class="flex items-center justify-center w-[24px] h-[24px] rounded-[5px]">
                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M17.25 4C17.25 6.07107 15.5711 7.75 13.5 7.75C11.4289 7.75 9.75 6.07107 9.75 4C9.75 1.92893 11.4289 0.25 13.5 0.25C15.5711 0.25 17.25 1.92893 17.25 4ZM13.5 6.25C14.7426 6.25 15.75 5.24264 15.75 4C15.75 2.75736 14.7426 1.75 13.5 1.75C12.2574 1.75 11.25 2.75736 11.25 4C11.25 5.24264 12.2574 6.25 13.5 6.25Z"
                        fill="#0D1217" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.75 14C4.75 16.0711 6.42893 17.75 8.5 17.75C10.5711 17.75 12.25 16.0711 12.25 14C12.25 11.9289 10.5711 10.25 8.5 10.25C6.42893 10.25 4.75 11.9289 4.75 14ZM8.5 16.25C7.25736 16.25 6.25 15.2426 6.25 14C6.25 12.7574 7.25736 11.75 8.5 11.75C9.74264 11.75 10.75 12.7574 10.75 14C10.75 15.2426 9.74264 16.25 8.5 16.25Z"
                        fill="#0D1217" />
                    <path
                        d="M13.25 13.9585C13.25 13.5443 13.5858 13.2085 14 13.2085H21C21.4142 13.2085 21.75 13.5443 21.75 13.9585C21.75 14.3727 21.4142 14.7085 21 14.7085H14C13.5858 14.7085 13.25 14.3727 13.25 13.9585Z"
                        fill="#0D1217" />
                    <path
                        d="M8 3.20852C8.41421 3.20852 8.75 3.54431 8.75 3.95852C8.75 4.37273 8.41421 4.70852 8 4.70852L1 4.70852C0.585786 4.70852 0.25 4.37273 0.25 3.95852C0.25 3.54431 0.585786 3.20852 1 3.20852L8 3.20852Z"
                        fill="#0D1217" />
                    <path
                        d="M0.25 13.9585C0.25 13.5443 0.585787 13.2085 1 13.2085H3C3.41421 13.2085 3.75 13.5443 3.75 13.9585C3.75 14.3727 3.41421 14.7085 3 14.7085H1C0.585787 14.7085 0.25 14.3727 0.25 13.9585Z"
                        fill="#0D1217" />
                    <path
                        d="M21 3.20852C21.4142 3.20852 21.75 3.54431 21.75 3.95852C21.75 4.37273 21.4142 4.70852 21 4.70852H19C18.5858 4.70852 18.25 4.37273 18.25 3.95852C18.25 3.54431 18.5858 3.20852 19 3.20852H21Z"
                        fill="#0D1217" />
                </svg>
            </div>
        </div>
        <div class="absolute top-[232px] overflow-x-auto scrollbar-hide w-[393px] h-[40px]">
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
        <div class="absolute top-[284px] flex flex-col w-[288px] h-[600px] rounded-t-xl overflow-hidden">
            <div class="relative w-[288px] h-[96px] flex pt-2 gap-3 rounded-t-xl buyfood" 
                 v-show="isVisible('buyfood')">
                <div class="w-[80px] h-[80px]">
                    <PicSlideShow :images="images" :currentSlide="currentSlide" />
                </div>
                <div class="flex flex-col w-[154px] h-[80px] gap-[8px]">
                    <div class="flex items-center w-[150px] h-[18px] gap-[4px]">
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[70px] h-[18px]">
                            รหัสคำสั่งซื้อ :
                        </span>
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[72px] h-[18px]">
                            SP 0023900
                        </span>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <span
                            class="flex items-center w-[60px] h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px] text-[#FF6347] text-left">
                            ฿198.50
                        </span>
                        <RouterLink to="/orderlist/trackorder" @click="() => console.log('Navigating to track order page')"
                            class="flex items-center h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l border-[#E9EAEB]">
                            <span
                                class="h-[18px] font-prompt text-[12px] leading-[18.14px] text-[#FF6347]">ชื้ออาหาร
                            </span>
                        </RouterLink>
                    </div>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" checked="checked" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                    </div>
                </div>
            </div>
            <div class="relative w-[288px] h-[96px] flex pt-2 gap-3 rounded-t-xl buythings"
                 v-show="isVisible('buythings')">
                <div class="w-[80px] h-[80px]">
                    <PicSlideShow :images="images" :currentSlide="currentSlide" />
                </div>
                <div class="flex flex-col w-[154px] h-[80px] gap-[8px]">
                    <div class="flex items-center w-[150px] h-[18px] gap-[4px]">
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[70px] h-[18px]">
                            รหัสคำสั่งซื้อ :
                        </span>
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[72px] h-[18px]">
                            SP 0023512
                        </span>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <span
                            class="flex items-center w-[60px] h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px] text-[#FF6347] text-left">
                            ฿258
                        </span>
                        <button
                            class="flex items-center h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l border-[#E9EAEB]">
                            <span
                                class="h-[18px] font-prompt text-[12px] leading-[18.14px] text-[#13C296]">ซื้อของ</span>
                        </button>
                    </div>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" checked="checked" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                    </div>
                </div>
            </div>
            <div class="relative w-[288px] h-[96px] flex pt-2 gap-3 rounded-t-xl buything"
                 v-show="isVisible('buything')">
                <div class="w-[80px] h-[80px]">
                    <PicSlideShow :images="images" :currentSlide="currentSlide" />
                </div>
                <div class="flex flex-col w-[154px] h-[80px] gap-[8px]">
                    <div class="flex items-center w-[150px] h-[18px] gap-[4px]">
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[70px] h-[18px]">
                            รหัสคำสั่งซื้อ :
                        </span>
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[72px] h-[18px]">
                            SP 0023502
                        </span>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <span
                            class="flex items-center w-[60px] h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px] text-[#FF6347] text-left">
                            ฿549
                        </span>
                        <button
                            class="flex items-center h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l border-[#E9EAEB]">
                            <span
                                class="h-[18px] font-prompt text-[12px] leading-[18.14px] text-[#13C296]">ชื้อของ</span>
                        </button>
                    </div>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" checked="checked" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                    </div>
                </div>
            </div>
            <div class="relative w-[288px] h-[96px] flex pt-2 gap-3 rounded-t-xl cancelorder"
                 v-show="isVisible('cancelorder')">
                <div class="w-[80px] h-[80px]">
                    <PicSlideShow :images="images" :currentSlide="currentSlide" />
                </div>
                <div class="flex flex-col w-[154px] h-[80px] gap-[8px]">
                    <div class="flex items-center w-[150px] h-[18px] gap-[4px]">
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[70px] h-[18px]">
                            รหัสคำสั่งซื้อ :
                        </span>
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[72px] h-[18px]">
                            SP 0023450
                        </span>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <span
                            class="flex items-center w-[60px] h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px] text-[#FF6347] text-left">
                            ฿186
                        </span>
                        <RouterLink to="/orderlist/cancelOrder"
                            class="flex items-center h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l border-[#E9EAEB]">
                            <span
                                class="h-[18px] font-prompt text-[12px] leading-[18.14px] text-[#4C555F]">ยกเลิก</span>
                        </RouterLink>
                    </div>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" checked="checked" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                    </div>
                </div>
            </div>
            <div class="relative w-[288px] h-[96px] flex pt-2 gap-3 rounded-t-xl buyfood"
                 v-show="isVisible('buyfood')">
                <div class="w-[80px] h-[80px]">
                    <PicSlideShow :images="images" :currentSlide="currentSlide" />
                </div>
                <div class="flex flex-col w-[154px] h-[80px] gap-[8px]">
                    <div class="flex items-center w-[150px] h-[18px] gap-[4px]">
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[70px] h-[18px]">
                            รหัสคำสั่งซื้อ :
                        </span>
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[72px] h-[18px]">
                            SP 0023900
                        </span>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <span
                            class="flex items-center h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px] text-[#FF6347] text-left">
                            ฿549
                        </span>
                        <button
                            class="flex items-center h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l border-[#E9EAEB]">
                            <span
                                class="h-[18px] font-prompt text-[12px] leading-[18.14px] text-[#FF6347]">ชื้ออาหาร</span>
                        </button>
                    </div>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" checked="checked" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                    </div>
                </div>
            </div>
            <div class="relative w-[288px] h-[96px] flex pt-2 gap-3 rounded-t-xl cancelorder"
                 v-show="isVisible('cancelorder')">
                <div class="w-[80px] h-[80px]">
                    <PicSlideShow :images="images" :currentSlide="currentSlide" />
                </div>
                <div class="flex flex-col w-[154px] h-[80px] gap-[8px]">
                    <div class="flex items-center w-[150px] h-[18px] gap-[4px]">
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[70px] h-[18px]">
                            รหัสคำสั่งซื้อ :
                        </span>
                        <span class="font-prompt text-[12px] leading-[18.14px] text-[#0D1217] w-[72px] h-[18px]">
                            SP 0023900
                        </span>
                    </div>
                    <div class="flex items-center gap-2 justify-between">
                        <span
                            class="flex items-center w-[60px] h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px] text-[#FF6347] text-left">
                            ฿186
                        </span>
                        <RouterLink to="/orderlist/cancelOrder"
                            class="flex items-center h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l border-[#E9EAEB]">
                            <span
                                class="h-[18px] font-prompt text-[12px] leading-[18.14px] text-[#4C555F]">ยกเลิก</span>
                        </RouterLink>
                    </div>
                    <div class="rating">
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" checked="checked" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-[#FFC700]" />
                    </div>
                </div>
            </div>
            <div class="w-[288px] h-[400px]"></div>
        </div>
        <Menu class="fixed bottom-5 left-0 right-0 z-50" />
    </div>
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

/* Add these CSS classes to hide scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

/* Add these transition classes */
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-out;
}

.slide-enter-from {
    transform: translateY(100%);
}

.slide-leave-to {
    transform: translateY(100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.whitespace-pre-line {
    white-space: pre-line;
}

.leading-relaxed {
    line-height: 1.75;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease-out;
}

.slide-enter-from {
    transform: translateY(100%);
}

.slide-leave-to {
    transform: translateY(100%);
}

/* Add smooth scrolling to modal */
.modal-content {
    scroll-behavior: smooth;
}

/* Add these new transition styles */
</style>
