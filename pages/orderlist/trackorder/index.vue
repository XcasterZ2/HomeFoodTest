<template>
    <div class="flex flex-col items-center justify-center h-screen w-full ">
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
        <div class="absolute top-[152px] w-[288px] h-[950px] flex flex-col items-center gap-[24px]">
            <div class="flex flex-col items-center w-[288px] h-[415px] gap-[12px] rounded-tl-[12px]">
                <div class="w-[288px] h-[34px] pb-2 flex items-center justify-between">
                    <span
                        class="w-[112px] h-[24px] font-prompt text-base font-normal leading-[24.19px] text-left text-[#0D1217]">
                        สรุปการสั่งซื้อ
                    </span>
                    <button class="w-[62px] h-[26px] gap-[2px] rounded-tl-[20px] border-t border-l">
                        <span
                            class="w-full h-[18px] font-prompt text-[12px] leading-[18.14px] text-center text-[#FF6347]">ซื้ออาหาร</span>
                    </button>
                </div>
                <div class="w-[288px] h-[163px] pt-2 flex flex-col gap-3 rounded-tl-[12px]">
                    <div class="w-[272px] h-[75px] flex gap-3">
                        <div class="w-[75px] h-[75px] rounded-tl-[8px]">
                            <img class="w-[76.42px] h-[75px] object-cover"
                                src="https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAIekpWa45Hk5LvWTCeaE0y3ic8bjXGsL~tX9TuAgDmF1LTKHCgrIJ915BpanfwcYEoh9MxbaE3azrUgdr63YRtSxidLNOFaTHCBVBBwamPYpd8zT0mfg8LWkwssavf0gmj2OE2fMoQWYp2FSHVVkUuYa5MO~ptGHPxNGvDHcG9cTEv-yviqvpnXwEtMAzhharoousD7zoDQOvEOHGFtEyaJ-ljYOMG7iWGqhF1BeXvzZwJeoEkwJ3PFtwPkVnJ5AXYW~lcFHtdL0r5eIybEcVoDqqrB6K1Uk2B9V0oWiWj~WMwIWIdKK24y9-rw10kTdFkj5HbqR2AOmu5X30shWg__">
                        </div>
                        <div class="flex flex-col justify-start w-[185px] h-[75px] gap-[8px]">
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
                </div>
                <div
                    class="flex items-center w-[288px] h-[91px] gap-[12px] rounded-[12px] shadow-[0px_6px_20px_0px_#0D0A2C1A]">
                    <div class="w-[272px] h-[75px] flex gap-3">
                        <div class="w-[75px] h-[75px] rounded-[8px]">
                            <img class="w-[75px] h-[75px] object-cover"
                                src="https://s3-alpha-sig.figma.com/img/e006/d495/087fcf4b1c7ef579c1fd8d83dcb43977?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6Jm-EJqk8u58uraDI4jCMqW0LkrAGhyskSQS1SoSQAd0Tm2TtdLvn24Qp~psYob0f8JxGTkdATwWkWM-P1oy1A2a0XrE-tRkiDI1QQGT7dWErzVzZeOHNLhaq~59JAMNN7sn283HZa42uiyb84qBmoBjYbkQS6s5Tug1pLFdPv1MXzEjbkBdMj8PLABAb851KV8lAlhA3p42ashhJGkPqU~8dMTKFdtGwFRYDRxvTD0gMBqel4-Wy8y3RwxvnapMKDJoTwYYUmGVqFrbcsYJy9yWJB4CuRzUEbyzuGSTUfUWI3kNVTVMEpwzVvZd-j4G7SChH9THCTBu7VANxOMeA__">
                        </div>
                        <div class="flex flex-col justify-start w-[185px] h-[75px] gap-[8px]">
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
                        </div>
                    </div>
                </div>
                <div
                    class="flex items-center w-[288px] h-[91px] gap-[12px] rounded-[12px] shadow-[0px_6px_20px_0px_#0D0A2C1A]">
                    <div class="w-[272px] h-[75px] flex gap-3">
                        <div class="w-[75px] h-[75px] rounded-[8px]">
                            <img class="w-[75px] h-[75px] object-cover"
                                src="https://s3-alpha-sig.figma.com/img/e5e9/4c2b/8d45787e1249989e6b26cef4d7e894d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dz5AjBkRbB35Xv1YeX3dzUr9as45UMEvI9Jxha9qJmfA1TDkGrDpjLsrgzXVHUU5U1mcbTcdvB8~T800jjI9aYyRP5ifR5PrIy791ECQmOwxUj4Lc8D308cFA0El-uej3yhwIlWLjGcaVQSv5jH3hI2dLeNb7tcChicvPH0qTtZ5b805-7p-utYt9RkrwrMjWI876FOgJ2TMdfUbB8DdIvz~mYi0uK4Oc1aCVLJlDse7y3rX2aHTBu006c5qPlnuPdMXAAZm9s4kXtEYVOR7LWFl3sBFqiCq1B~V93zIxCN9EjY9MwnzepPuimNwCnIID3pC6ikLFpNNDh-NoTpAIA__">
                        </div>
                        <div class="flex flex-col justify-start w-[185px] h-[75px] gap-[8px]">
                            <span
                                class="font-prompt text-xs font-medium leading-[18.14px] text-left w-[104px] h-[18px]">
                                สลัดมะเขือเทศเชอร์รี่
                            </span>
                            <div class="w-[94px] h-[24px] gap-[8px]">
                                <span
                                    class="font-prompt text-base font-semibold leading-[24.19px] text-left text-[#FF6347] w-[31px] h-[24px]">฿49</span>
                            </div>
                        </div>
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
                        <span class="w-[40px] h-[24px] font-prompt text-[16px] leading-[24.19px]">
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
            <div class="w-[288px] h-[140px] flex flex-col gap-[14px]">
            </div>
        </div>
        <div
            class="fixed bottom-4 w-[308px] h-[77px] rounded-[36px] bg-white flex items-center justify-center shadow-[0px_6px_20px_0px_#0D0A2C33]">
            <div class="w-[128px] h-[53px] flex flex-col gap-[14px] rounded-[28px] items-center justify-center">
                <span class="font-prompt text-[18px] leading-[27.22px] text-[#0D1217]">ยกเลิกคำสั่งซื้อ</span>
            </div>
            <RouterLink to="/orderlist/reorder"
                class="w-[156px] h-[53px] gap-[14px] rounded-[28px] bg-gradient-to-r from-[#FF6347] to-[#FF826C] flex items-center justify-center">
                <span class="font-prompt text-[18px] leading-[27.22px] font-semibold text-white">ติดตามคำสั่งซื้อ</span>
            </RouterLink>
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
