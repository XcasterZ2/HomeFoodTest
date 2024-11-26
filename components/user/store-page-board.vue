<script setup>

// แก้ไขจาก single state เป็น array
const likedStates = ref(Array(8).fill(false));

// แก้ไขฟังก์ชัน toggleLike ให้รับ index
const toggleLike = (index) => {
    likedStates.value[index] = !likedStates.value[index];
};
</script>

<template>
        <div class="w-full h-full p-5 gap-5 flex flex-col ">
            <div class="w-full h-[42px] flex justify-start items-center">
                <span class="font-prompt text-[18px] font-semibold leading-[27.22px] text-[#0D1217] h-[27px]">
                    โปรโมชั่น
                </span>

            </div>
            <div class="w-full h-full">
                <div
                    class="w-[175px] h-[40px]  p-[8px_12px] gap-[6px] rounded-[8px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] relative flex justify-center items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_11927)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M10 18.3334C14.1421 18.3334 17.5 14.9755 17.5 10.8334C17.5 6.69128 14.1421 3.33341 10 3.33341C5.85786 3.33341 2.5 6.69128 2.5 10.8334C2.5 14.9755 5.85786 18.3334 10 18.3334ZM10 6.87508C10.3452 6.87508 10.625 7.1549 10.625 7.50008V10.8334C10.625 11.1786 10.3452 11.4584 10 11.4584C9.65482 11.4584 9.375 11.1786 9.375 10.8334V7.50008C9.375 7.1549 9.65482 6.87508 10 6.87508Z"
                                fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.70833 1.66675C7.70833 1.32157 7.98816 1.04175 8.33333 1.04175H11.6667C12.0118 1.04175 12.2917 1.32157 12.2917 1.66675C12.2917 2.01193 12.0118 2.29175 11.6667 2.29175H8.33333C7.98816 2.29175 7.70833 2.01193 7.70833 1.66675Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_11927">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="text-white">จบใน 12 : 24 : 02</span>
                </div>
            </div>
            <div class="w-full h-full grid grid-cols-2 gap-5 ">
                <div v-for="(item, index) in [1,2,3,4,5,6,7,8]" :key="index"
                    class="w-full min-h-[200px] flex flex-col justify-start items-center p-[8px] gap-[8px] rounded-[12px] bg-[#FFFFFF] shadow-[0px_4px_6px_0px_#0D0A2C0F]">
                    <div class="w-full h-[100px] rounded-[8px] relative">
                        <img src="https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAIekpWa45Hk5LvWTCeaE0y3ic8bjXGsL~tX9TuAgDmF1LTKHCgrIJ915BpanfwcYEoh9MxbaE3azrUgdr63YRtSxidLNOFaTHCBVBBwamPYpd8zT0mfg8LWkwssavf0gmj2OE2fMoQWYp2FSHVVkUuYa5MO~ptGHPxNGvDHcG9cTEv-yviqvpnXwEtMAzhharoousD7zoDQOvEOHGFtEyaJ-ljYOMG7iWGqhF1BeXvzZwJeoEkwJ3PFtwPkVnJ5AXYW~lcFHtdL0r5eIybEcVoDqqrB6K1Uk2B9V0oWiWj~WMwIWIdKK24y9-rw10kTdFkj5HbqR2AOmu5X30shWg__"
                            alt="" class="w-full h-full object-cover rounded-[8px]">
                        <button
                            @click="toggleLike(index)"
                            class="absolute top-2 right-2 w-[26px] h-[26px] p-1 rounded-[22px] bg-white flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" 
                                    d="M4.21827 3.31783C2.97403 3.88658 2.0625 5.23936 2.0625 6.85251C2.0625 8.50056 2.73691 9.77087 3.70371 10.8595C4.50054 11.7568 5.46513 12.5004 6.40584 13.2256C6.62928 13.3979 6.85136 13.5691 7.06953 13.7411C7.46406 14.0521 7.81599 14.3251 8.15521 14.5233C8.49461 14.7216 8.7678 14.8122 9 14.8122C9.2322 14.8122 9.50539 14.7216 9.84479 14.5233C10.184 14.3251 10.5359 14.0521 10.9305 13.7411C11.1486 13.5691 11.3707 13.3979 11.5942 13.2256C12.5349 12.5004 13.4995 11.7568 14.2963 10.8595C15.2631 9.77087 15.9375 8.50056 15.9375 6.85251C15.9375 5.23936 15.026 3.88658 13.7817 3.31783C12.5729 2.7653 10.9488 2.91162 9.40527 4.51524C9.29923 4.62541 9.15291 4.68766 9 4.68766C8.84709 4.68766 8.70077 4.62541 8.59473 4.51524C7.05125 2.91162 5.42705 2.7653 4.21827 3.31783Z" 
                                    :fill="likedStates[index] ? '#FF6347' : 'white'"
                                    stroke="#FF6347"
                                    stroke-width="1.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div class="w-full flex-1">
                        <span class="font-prompt text-[12px] font-medium leading-[18.14px] text-left text-[#0D1217] line-clamp-2">
                            เค้กสตรอเบอร์รี่ เค้กสตรอเบอร์รี่ เค้กสตรอเบอร์รี่ เค้กสตรอเบอร์รี่
                        </span>
                    </div>
                    <div class="w-full mt-auto flex flex-col gap-1">
                        <div class="w-full h-[18px] flex justify-start items-center ">
                            <div
                                class="w-[62px] h-[18px] rounded-[18px] bg-[#FF96843D] flex justify-center items-center px-2 gap-1 ">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5"
                                        d="M7.48556 12.7175C9.30902 12.352 11.6667 11.0403 11.6667 7.64827C11.6667 4.56151 9.40723 2.50604 7.78256 1.56157C7.42205 1.352 7 1.62762 7 2.04462V3.11123C7 3.95231 6.64637 5.48756 5.66377 6.12613C5.1621 6.45215 4.6203 5.96419 4.55933 5.36901L4.50927 4.88027C4.45107 4.3121 3.87241 3.96719 3.41831 4.3136C2.60252 4.93592 1.75 6.02568 1.75 7.64827C1.75 11.7964 4.83519 12.8335 6.37778 12.8335C6.4675 12.8335 6.56179 12.8308 6.65995 12.8251C6.92007 12.7923 6.65995 12.883 7.48556 12.7175Z"
                                        fill="#FF6347" />
                                    <path
                                        d="M4.6665 10.759C4.6665 12.2872 5.8981 12.7598 6.65979 12.8249C6.91991 12.7921 6.65979 12.8828 7.48539 12.7173C8.09127 12.5032 8.74984 11.9537 8.74984 10.759C8.74984 10.002 8.27231 9.53496 7.89821 9.31633C7.78377 9.24945 7.65087 9.33366 7.64064 9.46581C7.60821 9.88471 7.20598 10.2184 6.93196 9.89986C6.6898 9.61839 6.58807 9.20724 6.58807 8.9442V8.60049C6.58807 8.39327 6.37948 8.256 6.20127 8.36172C5.53863 8.75483 4.6665 9.56357 4.6665 10.759Z"
                                        fill="#FF6347" />
                                </svg>
                                <span class="w-full h-[18px] font-prompt text-[12px] font-normal leading-[18.14px]">
                                    ขายดี
                                </span>
                            </div>
                        </div>
                        <div class="w-full h-[24px] flex justify-between items-center gap-[46px]">
                            <span
                                class="font-prompt text-[16px] font-normal leading-[24.19px] text-[#989DA3] line-through">฿129</span>
                            <span class="font-prompt text-[16px] font-semibold leading-[24.19px] text-[#FF6347] ">฿99</span>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>
</template>

<style scoped>

</style>

