<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue'
import TextboxWithPhoto from '~/components/TextboxWithPhoto.vue'

const note = ref('')

const handleCameraClick = () => {
    // Handle camera click
    console.log('Camera clicked')
}

const handleGalleryClick = () => {
    // Handle gallery click
    console.log('Gallery clicked')
}
</script>

<template>
    <div class="flex flex-col items-center justify-center h-screen w-full">
        <div class="absolute top-[75px] flex items-center justify-between w-[288px] h-[42px]">
            <RouterLink to="/orderlist"
                class="flex items-center justify-center  w-[42px] h-[42px] radius-[22px] gap-[10px] shadow-[0px_4px_12px_0px_#0D0A2C0F]">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.408 5.92548C11.7253 6.24278 11.7253 6.75722 11.408 7.07452L6.29504 12.1875H21.6668C22.1156 12.1875 22.4793 12.5513 22.4793 13C22.4793 13.4487 22.1156 13.8125 21.6668 13.8125H6.29504L11.408 18.9255C11.7253 19.2428 11.7253 19.7572 11.408 20.0745C11.0907 20.3918 10.5763 20.3918 10.259 20.0745L3.75897 13.5745C3.44167 13.2572 3.44167 12.7428 3.75897 12.4255L10.259 5.92548C10.5763 5.60817 11.0907 5.60817 11.408 5.92548Z"
                        fill="#0D1217" />
                </svg>
            </RouterLink>
            <div
                class="flex items-center justify-center w-[134px] h-[33px] text-[22px] leading-[33.26px] font-prompt font-semibold text-[#0D1217]">
                SP 0023900
            </div>
            <div class="w-[42px] h-[42px] radius-[22px] gap-[10px] ">
            </div>
        </div>
        <div class="absolute top-[152px] w-[288px] h-[1657px] flex flex-col items-center gap-[24px]">
            <div class="flex flex-col items-center w-[288px] h-[892px] gap-[12px] rounded-[12px]">
                <div class="w-[288px] h-[34px] flex items-center justify-between">
                    <span
                        class="w-[112px] h-[24px] font-prompt text-base font-normal leading-[24.19px] text-left text-[#0D1217]">
                        สรุปการสั่งซื้อ
                    </span>
                    <button class="w-[62px] h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l">
                        <span
                            class="w-full h-[18px] font-prompt text-[12px] leading-[18.14px] text-center text-[#FF6347]">ซื้ออาหาร</span>
                    </button>
                </div>
                <div class="w-[288px] h-[322px] flex flex-col gap-[12px] rounded-tl-[12px]">
                    <div class="w-[272px] h-[88px] flex gap-3">
                        <div class="w-[75px] h-[75px] rounded-tl-[8px]">
                            <img class="w-[76.42px] h-[75px] object-cover"
                                src="https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAIekpWa45Hk5LvWTCeaE0y3ic8bjXGsL~tX9TuAgDmF1LTKHCgrIJ915BpanfwcYEoh9MxbaE3azrUgdr63YRtSxidLNOFaTHCBVBBwamPYpd8zT0mfg8LWkwssavf0gmj2OE2fMoQWYp2FSHVVkUuYa5MO~ptGHPxNGvDHcG9cTEv-yviqvpnXwEtMAzhharoousD7zoDQOvEOHGFtEyaJ-ljYOMG7iWGqhF1BeXvzZwJeoEkwJ3PFtwPkVnJ5AXYW~lcFHtdL0r5eIybEcVoDqqrB6K1Uk2B9V0oWiWj~WMwIWIdKK24y9-rw10kTdFkj5HbqR2AOmu5X30shWg__">
                        </div>
                        <div class="flex flex-col justify-start w-[185px] h-[88px] gap-[8px]">
                            <span class="font-prompt text-xs font-medium leading-[18.14px] text-left w-[66px] h-[18px]">
                                เบอร์เกอร์หมู
                            </span>
                            <div class="w-[94px] h-[24px] gap-[8px]">
                                <span
                                    class="font-prompt text-base font-normal leading-[24.19px] text-left line-through underline-offset-[from-font] text-[#989DA3] w-[55px] h-[24px]">
                                    ฿89.00
                                </span>
                                <span
                                    class="font-prompt text-base font-semibold leading-[24.19px] text-left text-[#FF6347] w-[31px] h-[24px]">฿69</span>
                            </div>
                            <div class="w-[185px] h-[30px] gap-[24px] flex justify-end">
                                <button
                                    class="w-[73px] h-[30px] gap-[4px] rounded-[20px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.25 7.50151L8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5V7.5L15.75 7.50151C18.4344 7.5136 19.8606 7.6222 20.6606 8.59803C21.5608 9.69607 21.2287 11.3563 20.5646 14.6767L19.9646 17.6767C19.5029 19.9856 19.272 21.1401 18.4425 21.82C17.6131 22.5 16.4358 22.5 14.0812 22.5H9.9188C7.56417 22.5 6.38686 22.5 5.55742 21.82C4.72799 21.1401 4.4971 19.9856 4.03532 17.6767L3.43532 14.6767C2.77123 11.3563 2.43919 9.69607 3.33936 8.59803C4.13936 7.62219 5.56562 7.5136 8.25 7.50151ZM9.75 6.5C9.75 5.25736 10.7574 4.25 12 4.25C13.2426 4.25 14.25 5.25736 14.25 6.5V7.5H9.75V6.5ZM15 11.5C15.5523 11.5 16 11.0523 16 10.5C16 9.94772 15.5523 9.5 15 9.5C14.4477 9.5 14 9.94772 14 10.5C14 11.0523 14.4477 11.5 15 11.5ZM9.99998 10.5C9.99998 11.0523 9.55226 11.5 8.99998 11.5C8.44769 11.5 7.99998 11.0523 7.99998 10.5C7.99998 9.94772 8.44769 9.5 8.99998 9.5C9.55226 9.5 9.99998 9.94772 9.99998 10.5Z"
                                            fill="white" />
                                    </svg>
                                    <span
                                        class="flex items-center justify-center font-prompt text-[12px] leading-[18.14px] text-white">สั่งใหม่</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-[288px] h-0 border-t border-[#E9EAEB]"></div>
                    <div class="w-[272px] h-[18px] gap-[12px] flex items-center">
                        <span
                            class="font-prompt text-xs font-normal leading-[18.14px] text-left text-[#0D1217] w-[223px] h-[18px]">
                            เพิ่มชีส
                        </span>
                        <span class="w-[37px] h-[18px] text-right text-[#FF6347]">฿15.50</span>
                    </div>
                    <div class="w-[272px] h-[18px] gap-[12px] flex items-center">
                        <span
                            class="font-prompt text-xs font-normal leading-[18.14px] text-left text-[#0D1217] w-[223px] h-[18px]">
                            เพิ่มเนื้อ(1ชิ้น)
                        </span>
                        <span class="w-[37px] h-[18px] text-right text-[#FF6347]">฿25.00</span>
                    </div>
                    <div class="w-[272px] h-[22px] gap-[10px] flex items-center">
                        <div class="flex">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#E9EAEB" />
                            </svg>
                        </div>
                    </div>
                    <div class="w-[272px] h-[100px] gap-3 relative">
                        <TextboxWithPhoto v-model="note" placeholder="หมายเหตุถึงร้านค้า"
                            @camera-click="handleCameraClick" @gallery-click="handleGalleryClick" />
                    </div>
                </div>
                <div
                    class="flex flex-col items-center w-[288px] h-[250px] gap-[12px] rounded-[12px] shadow-[0px_6px_20px_0px_#0D0A2C1A]">
                    <div class="w-[272px] h-[88px] flex gap-3">
                        <div class="w-[75px] h-[75px] rounded-[8px]">
                            <img class="w-[75px] h-[75px] object-cover"
                                src="https://s3-alpha-sig.figma.com/img/e006/d495/087fcf4b1c7ef579c1fd8d83dcb43977?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6Jm-EJqk8u58uraDI4jCMqW0LkrAGhyskSQS1SoSQAd0Tm2TtdLvn24Qp~psYob0f8JxGTkdATwWkWM-P1oy1A2a0XrE-tRkiDI1QQGT7dWErzVzZeOHNLhaq~59JAMNN7sn283HZa42uiyb84qBmoBjYbkQS6s5Tug1pLFdPv1MXzEjbkBdMj8PLABAb851KV8lAlhA3p42ashhJGkPqU~8dMTKFdtGwFRYDRxvTD0gMBqel4-Wy8y3RwxvnapMKDJoTwYYUmGVqFrbcsYJy9yWJB4CuRzUEbyzuGSTUfUWI3kNVTVMEpwzVvZd-j4G7SChH9THCTBu7VANxOMeA__">
                        </div>
                        <div class="flex flex-col justify-start w-[185px] h-[88px] gap-[8px]">
                            <span class="font-prompt text-xs font-medium leading-[18.14px] text-left w-[78px] h-[18px]">
                                ก๋วยเตี๋ยวต้มยำ
                            </span>
                            <div class="w-[94px] h-[24px] gap-[8px]">
                                <span
                                    class="font-prompt text-base font-normal leading-[24.19px] text-left line-through underline-offset-[from-font] text-[#989DA3] w-[55px] h-[24px]">
                                    ฿55.00
                                </span>
                                <span
                                    class="font-prompt text-base font-semibold leading-[24.19px] text-left text-[#FF6347] w-[31px] h-[24px]">฿40</span>
                            </div>
                            <div class="w-[185px] h-[30px] gap-[24px] flex justify-end">
                                <button
                                    class="w-[73px] h-[30px] gap-[4px] rounded-[20px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.25 7.50151L8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5V7.5L15.75 7.50151C18.4344 7.5136 19.8606 7.6222 20.6606 8.59803C21.5608 9.69607 21.2287 11.3563 20.5646 14.6767L19.9646 17.6767C19.5029 19.9856 19.272 21.1401 18.4425 21.82C17.6131 22.5 16.4358 22.5 14.0812 22.5H9.9188C7.56417 22.5 6.38686 22.5 5.55742 21.82C4.72799 21.1401 4.4971 19.9856 4.03532 17.6767L3.43532 14.6767C2.77123 11.3563 2.43919 9.69607 3.33936 8.59803C4.13936 7.62219 5.56562 7.5136 8.25 7.50151ZM9.75 6.5C9.75 5.25736 10.7574 4.25 12 4.25C13.2426 4.25 14.25 5.25736 14.25 6.5V7.5H9.75V6.5ZM15 11.5C15.5523 11.5 16 11.0523 16 10.5C16 9.94772 15.5523 9.5 15 9.5C14.4477 9.5 14 9.94772 14 10.5C14 11.0523 14.4477 11.5 15 11.5ZM9.99998 10.5C9.99998 11.0523 9.55226 11.5 8.99998 11.5C8.44769 11.5 7.99998 11.0523 7.99998 10.5C7.99998 9.94772 8.44769 9.5 8.99998 9.5C9.55226 9.5 9.99998 9.94772 9.99998 10.5Z"
                                            fill="white" />
                                    </svg>
                                    <span
                                        class="flex items-center justify-center font-prompt text-[12px] leading-[18.14px] text-white">สั่งใหม่</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-[272px] h-[22px] gap-[10px] flex items-center">
                        <div class="flex">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#FF9E20" />
                            </svg>
                        </div>
                    </div>
                    <div class="w-[272px] h-[100px] gap-3 relative">
                        <TextboxWithPhoto v-model="note" placeholder="หมายเหตุถึงร้านค้า"
                            @camera-click="handleCameraClick" @gallery-click="handleGalleryClick" />
                    </div>
                </div>
                <div
                    class="flex flex-col items-center w-[288px] h-[250px] gap-[12px] rounded-[12px] shadow-[0px_6px_20px_0px_#0D0A2C1A]">
                    <div class="w-[272px] h-[88px] flex gap-3">
                        <div class="w-[75px] h-[75px] rounded-[8px]">
                            <img class="w-[75px] h-[75px] object-cover"
                                src="https://s3-alpha-sig.figma.com/img/e5e9/4c2b/8d45787e1249989e6b26cef4d7e894d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dz5AjBkRbB35Xv1YeX3dzUr9as45UMEvI9Jxha9qJmfA1TDkGrDpjLsrgzXVHUU5U1mcbTcdvB8~T800jjI9aYyRP5ifR5PrIy791ECQmOwxUj4Lc8D308cFA0El-uej3yhwIlWLjGcaVQSv5jH3hI2dLeNb7tcChicvPH0qTtZ5b805-7p-utYt9RkrwrMjWI876FOgJ2TMdfUbB8DdIvz~mYi0uK4Oc1aCVLJlDse7y3rX2aHTBu006c5qPlnuPdMXAAZm9s4kXtEYVOR7LWFl3sBFqiCq1B~V93zIxCN9EjY9MwnzepPuimNwCnIID3pC6ikLFpNNDh-NoTpAIA__">
                        </div>
                        <div class="flex flex-col justify-start w-[185px] h-[88px] gap-[8px]">
                            <span
                                class="font-prompt text-xs font-medium leading-[18.14px] text-left w-[104px] h-[18px]">
                                สลัดมะเขือเทศเชอร์รี่
                            </span>
                            <div class="w-[94px] h-[24px] gap-[8px]">
                                <span
                                    class="font-prompt text-base font-semibold leading-[24.19px] text-left text-[#FF6347] w-[31px] h-[24px]">฿49</span>
                            </div>
                            <div class="w-[185px] h-[30px] gap-[24px] flex justify-end">
                                <button
                                    class="w-[73px] h-[30px] gap-[4px] rounded-[20px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] flex items-center justify-center">
                                    <svg width="14" height="14" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.25 7.50151L8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5V7.5L15.75 7.50151C18.4344 7.5136 19.8606 7.6222 20.6606 8.59803C21.5608 9.69607 21.2287 11.3563 20.5646 14.6767L19.9646 17.6767C19.5029 19.9856 19.272 21.1401 18.4425 21.82C17.6131 22.5 16.4358 22.5 14.0812 22.5H9.9188C7.56417 22.5 6.38686 22.5 5.55742 21.82C4.72799 21.1401 4.4971 19.9856 4.03532 17.6767L3.43532 14.6767C2.77123 11.3563 2.43919 9.69607 3.33936 8.59803C4.13936 7.62219 5.56562 7.5136 8.25 7.50151ZM9.75 6.5C9.75 5.25736 10.7574 4.25 12 4.25C13.2426 4.25 14.25 5.25736 14.25 6.5V7.5H9.75V6.5ZM15 11.5C15.5523 11.5 16 11.0523 16 10.5C16 9.94772 15.5523 9.5 15 9.5C14.4477 9.5 14 9.94772 14 10.5C14 11.0523 14.4477 11.5 15 11.5ZM9.99998 10.5C9.99998 11.0523 9.55226 11.5 8.99998 11.5C8.44769 11.5 7.99998 11.0523 7.99998 10.5C7.99998 9.94772 8.44769 9.5 8.99998 9.5C9.55226 9.5 9.99998 9.94772 9.99998 10.5Z"
                                            fill="white" />
                                    </svg>
                                    <span
                                        class="flex items-center justify-center font-prompt text-[12px] leading-[18.14px] text-white">สั่งใหม่</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="w-[272px] h-[22px] gap-[10px] flex items-center">
                        <div class="flex">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#E9EAEB" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#E9EAEB" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#E9EAEB" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#E9EAEB" />
                            </svg>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
                                    fill="#E9EAEB" />
                            </svg>
                        </div>
                    </div>
                    <div class="w-[272px] h-[100px] gap-3 relative">
                        <TextboxWithPhoto v-model="note" placeholder="หมายเหตุถึงร้านค้า"
                            @camera-click="handleCameraClick" @gallery-click="handleGalleryClick" />
                    </div>
                </div>
            </div>
            <div
                class="flex items-center justify-center w-[288px] h-[88px] rounded-[12px] border-[1px] border-[#E9EAEB] gap-[16px]">
                <div class="flex flex-col w-[268px] h-[56px] gap-[8px]">
                    <div class="flex items-center justify-between w-[127px] h-[24px] gap-[8px]">
                        <div class="flex items-center justify-center w-[20px] h-[20px]">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M7.00001 0.666992C3.31811 0.666992 0.333344 4.00248 0.333344 7.75033C0.333344 11.4688 2.46111 15.5107 5.7809 17.0624C6.5548 17.4241 7.44522 17.4241 8.21912 17.0624C11.5389 15.5107 13.6667 11.4688 13.6667 7.75033C13.6667 4.00248 10.6819 0.666992 7.00001 0.666992ZM7.00001 9.00033C7.92048 9.00033 8.66668 8.25413 8.66668 7.33366C8.66668 6.41318 7.92048 5.66699 7.00001 5.66699C6.07954 5.66699 5.33334 6.41318 5.33334 7.33366C5.33334 8.25413 6.07954 9.00033 7.00001 9.00033Z"
                                    fill="url(#paint0_linear_1_10314)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_10314" x1="0.333344" y1="0.666992" x2="17.6673"
                                        y2="9.31282" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6347" />
                                        <stop offset="1" stop-color="#FF826C" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span class="w-[40px] h-[24px] font-prompt text-[16px] leading-[24.19px]">
                            ส่งถึง
                        </span>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4.45312 3.8125V5.44531H0.179688V3.8125H4.45312ZM11.3828 4.72656L6.24219 2.85938V0.890625L13.0234 3.77344V5.14844L11.3828 4.72656ZM6.24219 6.32812L11.3906 4.40625L13.0234 4.03906V5.40625L6.24219 8.28906V6.32812Z"
                                fill="#0D1217" />
                        </svg>
                        <span class="w-[40px] h-[24px] font-prompt font-semibold text-[16px] leading-[24.19px]">
                            บ้าน
                        </span>
                    </div>
                    <span
                        class="w-[268px] h-[24px] font-prompt text-base font-semibold leading-[24.19px] text-left underline-offset-[from-font] decoration-skip-ink-none">
                        89/1 ถนนสุเทพ, บ้านสุขสบาย...
                    </span>
                </div>
            </div>
            <div
                class="flex items-center justify-center w-[288px] h-[88px] rounded-[12px] border-[1px] border-[#E9EAEB] gap-[16px]">
                <div class="flex flex-col w-[268px] h-[56px] gap-[8px]">
                    <div class="flex items-center w-[127px] h-[24px] gap-[8px]">
                        <div class="flex items-center justify-center w-[20px] h-[20px]">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.5841 4.66961C16.5368 4.66663 16.4854 4.66665 16.4321 4.66667L16.4188 4.66667H14.3284C12.6054 4.66667 11.131 6.02297 11.131 7.79167C11.131 9.56037 12.6054 10.9167 14.3284 10.9167H16.4188L16.4321 10.9167C16.4854 10.9167 16.5368 10.9167 16.5841 10.9137C17.284 10.8695 17.9029 10.3218 17.955 9.55685C17.9584 9.50669 17.9583 9.45261 17.9583 9.4025L17.9583 9.3889V6.19445L17.9583 6.18085C17.9583 6.13073 17.9584 6.07666 17.955 6.0265C17.9029 5.2615 17.284 4.71381 16.5841 4.66961ZM14.1431 8.625C14.5867 8.625 14.9463 8.2519 14.9463 7.79167C14.9463 7.33143 14.5867 6.95833 14.1431 6.95833C13.6995 6.95833 13.3398 7.33143 13.3398 7.79167C13.3398 8.2519 13.6995 8.625 14.1431 8.625Z"
                                    fill="url(#paint0_linear_1_10325)" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.4316 12.1667C16.5558 12.1635 16.6499 12.2785 16.6162 12.3982C16.4489 12.9919 16.1834 13.4979 15.7573 13.924C15.1337 14.5476 14.3429 14.8244 13.3658 14.9557C12.4165 15.0834 11.2035 15.0833 9.672 15.0833H7.91131C6.37985 15.0833 5.16682 15.0834 4.21747 14.9557C3.24045 14.8244 2.44966 14.5476 1.82603 13.924C1.20239 13.3003 0.925626 12.5095 0.794269 11.5325C0.666633 10.5832 0.666644 9.37015 0.666657 7.83868V7.74465C0.666644 6.21319 0.666633 5.00016 0.794269 4.05082C0.925626 3.0738 1.20239 2.28301 1.82603 1.65937C2.44966 1.03573 3.24045 0.75897 4.21747 0.627613C5.16682 0.499977 6.37984 0.499987 7.91131 0.5L9.672 0.5C11.2035 0.499987 12.4165 0.499976 13.3658 0.627613C14.3429 0.758969 15.1337 1.03573 15.7573 1.65937C16.1834 2.08544 16.4489 2.59145 16.6162 3.18515C16.6499 3.3048 16.5558 3.41989 16.4316 3.41667L14.3283 3.41667C11.9645 3.41667 9.88093 5.28409 9.88093 7.79167C9.88093 10.2993 11.9645 12.1667 14.3283 12.1667L16.4316 12.1667ZM3.79166 3.83333C3.44648 3.83333 3.16666 4.11316 3.16666 4.45833C3.16666 4.80351 3.44648 5.08333 3.79166 5.08333H7.12499C7.47017 5.08333 7.74999 4.80351 7.74999 4.45833C7.74999 4.11316 7.47017 3.83333 7.12499 3.83333H3.79166Z"
                                    fill="url(#paint1_linear_1_10325)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_10325" x1="0.666656" y1="0.5" x2="18.8189"
                                        y2="13.9193" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6347" />
                                        <stop offset="1" stop-color="#FF826C" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_10325" x1="0.666656" y1="0.5" x2="18.8189"
                                        y2="13.9193" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6347" />
                                        <stop offset="1" stop-color="#FF826C" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span class="w-[98px] h-[24px] font-prompt text-[16px] leading-[24.19px]">
                            วิธีการชำระเงิน
                        </span>
                    </div>
                    <span
                        class="w-[268px] h-[24px] font-prompt text-base font-semibold leading-[24.19px] text-left underline-offset-[from-font] decoration-skip-ink-none">
                        เงินสด
                    </span>
                </div>
            </div>
            <div
                class="flex items-center justify-center w-[288px] h-[88px] rounded-[12px] border-[1px] border-[#E9EAEB] gap-[16px]">
                <div class="flex flex-col w-[268px] h-[56px] gap-[8px]">
                    <div class="flex items-center w-[127px] h-[24px] gap-[8px]">
                        <div class="flex items-center justify-center w-[20px] h-[20px]">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.5841 4.66961C16.5368 4.66663 16.4854 4.66665 16.4321 4.66667L16.4188 4.66667H14.3284C12.6054 4.66667 11.131 6.02297 11.131 7.79167C11.131 9.56037 12.6054 10.9167 14.3284 10.9167H16.4188L16.4321 10.9167C16.4854 10.9167 16.5368 10.9167 16.5841 10.9137C17.284 10.8695 17.9029 10.3218 17.955 9.55685C17.9584 9.50669 17.9583 9.45261 17.9583 9.4025L17.9583 9.3889V6.19445L17.9583 6.18085C17.9583 6.13073 17.9584 6.07666 17.955 6.0265C17.9029 5.2615 17.284 4.71381 16.5841 4.66961ZM14.1431 8.625C14.5867 8.625 14.9463 8.2519 14.9463 7.79167C14.9463 7.33143 14.5867 6.95833 14.1431 6.95833C13.6995 6.95833 13.3398 7.33143 13.3398 7.79167C13.3398 8.2519 13.6995 8.625 14.1431 8.625Z"
                                    fill="url(#paint0_linear_1_10325)" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M16.4316 12.1667C16.5558 12.1635 16.6499 12.2785 16.6162 12.3982C16.4489 12.9919 16.1834 13.4979 15.7573 13.924C15.1337 14.5476 14.3429 14.8244 13.3658 14.9557C12.4165 15.0834 11.2035 15.0833 9.672 15.0833H7.91131C6.37985 15.0833 5.16682 15.0834 4.21747 14.9557C3.24045 14.8244 2.44966 14.5476 1.82603 13.924C1.20239 13.3003 0.925626 12.5095 0.794269 11.5325C0.666633 10.5832 0.666644 9.37015 0.666657 7.83868V7.74465C0.666644 6.21319 0.666633 5.00016 0.794269 4.05082C0.925626 3.0738 1.20239 2.28301 1.82603 1.65937C2.44966 1.03573 3.24045 0.75897 4.21747 0.627613C5.16682 0.499977 6.37984 0.499987 7.91131 0.5L9.672 0.5C11.2035 0.499987 12.4165 0.499976 13.3658 0.627613C14.3429 0.758969 15.1337 1.03573 15.7573 1.65937C16.1834 2.08544 16.4489 2.59145 16.6162 3.18515C16.6499 3.3048 16.5558 3.41989 16.4316 3.41667L14.3283 3.41667C11.9645 3.41667 9.88093 5.28409 9.88093 7.79167C9.88093 10.2993 11.9645 12.1667 14.3283 12.1667L16.4316 12.1667ZM3.79166 3.83333C3.44648 3.83333 3.16666 4.11316 3.16666 4.45833C3.16666 4.80351 3.44648 5.08333 3.79166 5.08333H7.12499C7.47017 5.08333 7.74999 4.80351 7.74999 4.45833C7.74999 4.11316 7.47017 3.83333 7.12499 3.83333H3.79166Z"
                                    fill="url(#paint1_linear_1_10325)" />
                                <defs>
                                    <linearGradient id="paint0_linear_1_10325" x1="0.666656" y1="0.5" x2="18.8189"
                                        y2="13.9193" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6347" />
                                        <stop offset="1" stop-color="#FF826C" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1_10325" x1="0.666656" y1="0.5" x2="18.8189"
                                        y2="13.9193" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6347" />
                                        <stop offset="1" stop-color="#FF826C" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span class="w-[98px] h-[24px] font-prompt text-[16px] leading-[24.19px]">
                            โปรโมชั่น
                        </span>
                    </div>
                    <div class="w-[268px] h-[23px] gap-[4px] flex">
                        <span
                            class="flex items-center justify-center w-[54px] h-[23px] rounded-[4px] bg-[#FF9E20] gap-[10px] font-prompt text-[12px] font-semibold leading-[18.14px] text-left">
                            จัดส่งฟรี
                        </span>
                        <span
                            class="flex items-center justify-center w-[34px] h-[23px] rounded-[4px] bg-[#FF9E20] gap-[10px] font-prompt text-[12px] font-semibold leading-[18.14px] text-left">
                            20%
                        </span>
                    </div>
                </div>
            </div>
            <div class="w-[288px] h-[155px] flex flex-col gap-[14px]">
                <div class="flex flex-col w-full gap-[8px]">
                    <div class="flex justify-between items-center">
                        <span class="font-prompt text-base text-[#0D1217]">ยอดรวมย่อย</span>
                        <span class="font-prompt text-base text-[#0D1217]">฿250.50</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-prompt text-base text-[#0D1217]">การลดราคา</span>
                        <span class="font-prompt text-base text-[#FF6347]">-฿52.00</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-prompt text-base text-[#0D1217]">ค่าจัดส่ง</span>
                        <span class="font-prompt text-base text-[#0D1217]">พรี</span>
                    </div>
                </div>
                <div class="w-full h-[1px] bg-[#000000]"></div>
                <div class="flex justify-between items-center">
                    <span class="font-prompt text-base font-semibold text-[#0D1217]">ทั้งหมด</span>
                    <span class="font-prompt text-base font-semibold text-[#FF6347]">฿198.50</span>
                </div>
            </div>
            <div class="w-[288px] h-[64px] flex flex-col gap-2">
                <div class="flex justify-between items-center">
                    <div>
                        <span class="w-[131px] h-[24px] font-prompt text-[16px] leading-[24.19px] text-[#0D1217]">เหตุผลในการยกเลิก</span>
                        <span class="w-[124px] h-[24px] font-prompt text-[16px] leading-[24.19px] font-semibold text-[#0D1217] block">เจอราคาดีกว่าที่อื่น</span>
                    </div>
                    <button class="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-gradient-custom">
                        <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.3499 20.175L12.3499 20.1749L20.3621 12.1628C19.2717 11.7089 17.9801 10.9634 16.7586 9.7419C15.537 8.52022 14.7914 7.22845 14.3376 6.13788L6.32523 14.1502L6.32516 14.1503C5.69996 14.7755 5.38733 15.0881 5.11848 15.4328C4.80132 15.8394 4.5294 16.2794 4.30754 16.7449C4.11946 17.1396 3.97965 17.559 3.70003 18.3979L2.22549 22.8215C2.08788 23.2343 2.19533 23.6894 2.50302 23.9971C2.81072 24.3048 3.26585 24.4123 3.67867 24.2747L8.10228 22.8001C8.94114 22.5205 9.36059 22.3807 9.75523 22.1926C10.2208 21.9708 10.6607 21.6988 11.0673 21.3817C11.412 21.1128 11.7247 20.8002 12.3499 20.175Z"
                                fill="white" />
                            <path
                                d="M22.5854 9.93947C24.2491 8.27579 24.2491 5.57843 22.5854 3.91475C20.9217 2.25107 18.2244 2.25107 16.5607 3.91475L15.5997 4.87571C15.6129 4.91545 15.6265 4.95573 15.6407 4.99654C15.9929 6.01178 16.6575 7.34267 17.9077 8.59285C19.1579 9.84303 20.4887 10.5076 21.504 10.8598C21.5446 10.8739 21.5847 10.8875 21.6243 10.9006L22.5854 9.93947Z"
                                fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="w-[288px] h-[100px]"></div>
        </div>
        <div
            class="fixed bottom-4 w-[308px] h-[77px] rounded-[36px] bg-white flex items-center justify-center shadow-[0px_6px_20px_0px_#0D0A2C33]">
            <button
                class="w-[282px] h-[53px] gap-[14px] rounded-[28px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] flex items-center justify-center">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.25 7.50151L8.25 6.5C8.25 4.42893 9.92893 2.75 12 2.75C14.0711 2.75 15.75 4.42893 15.75 6.5V7.5L15.75 7.50151C18.4344 7.5136 19.8606 7.6222 20.6606 8.59803C21.5608 9.69607 21.2287 11.3563 20.5646 14.6767L19.9646 17.6767C19.5029 19.9856 19.272 21.1401 18.4425 21.82C17.6131 22.5 16.4358 22.5 14.0812 22.5H9.9188C7.56417 22.5 6.38686 22.5 5.55742 21.82C4.72799 21.1401 4.4971 19.9856 4.03532 17.6767L3.43532 14.6767C2.77123 11.3563 2.43919 9.69607 3.33936 8.59803C4.13936 7.62219 5.56562 7.5136 8.25 7.50151ZM9.75 6.5C9.75 5.25736 10.7574 4.25 12 4.25C13.2426 4.25 14.25 5.25736 14.25 6.5V7.5H9.75V6.5ZM15 11.5C15.5523 11.5 16 11.0523 16 10.5C16 9.94772 15.5523 9.5 15 9.5C14.4477 9.5 14 9.94772 14 10.5C14 11.0523 14.4477 11.5 15 11.5ZM9.99998 10.5C9.99998 11.0523 9.55226 11.5 8.99998 11.5C8.44769 11.5 7.99998 11.0523 7.99998 10.5C7.99998 9.94772 8.44769 9.5 8.99998 9.5C9.55226 9.5 9.99998 9.94772 9.99998 10.5Z"
                        fill="white" />
                </svg>
                <span class="font-prompt text-[18px] leading-[27.22px] font-semibold text-white">สั่งใหม่</span>
            </button>
        </div>
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
</style>