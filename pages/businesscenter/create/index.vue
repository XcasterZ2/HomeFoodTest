<script setup>
</script>
<template>
    <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6 sm:max-w-3xl sm:mx-auto">
        <RouterLink to="/profile"
            class="mt-1 flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
                    fill="#0D1217" />
            </svg>
        </RouterLink>
        <div class="flex-1 mt-3">
            <h2 class="text-2xl mx-5 font-bold">สร้างศูนย์ธุรกิจของคุณ</h2>
        </div>
    </div>
    <div class=" p-6 font-prompt sm:max-w-xl sm:mx-auto">
        <div class="bg-white shadow-lg rounded-xl w-full sm:h-[120px] h-[75px] flex">
            <div class="w-full">
                <img src="/public/regisRestairant.png" alt="pic-RegisRestaurant" class="sm:w-[130px]  w-[90px] h-full rounded-l-xl">
            </div>
            <div class="flex justify-center items-center w-full">
                <p class="font-medium">ธุรกิจขายอาหาร</p>
            </div>
            <div class="flex justify-end w-[80%] items-center mr-4">
                <RouterLink to="/businesscenter/create/restaurants"
                    class="w-[26px] h-[26px] sm:w-[45px] sm:h-[45px] bg-[#FF96843D] rounded-full flex justify-center items-center">
                    <svg class="" width="6" height="12" viewBox="0 0 6 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.38394 0.322928C0.619811 0.120753 0.974917 0.148069 1.17709 0.38394L5.67709 5.63394C5.85765 5.84459 5.85765 6.15543 5.67709 6.36608L1.17709 11.6161C0.974917 11.852 0.619811 11.8793 0.38394 11.6771C0.148069 11.4749 0.120753 11.1198 0.322928 10.8839L4.50915 6.00001L0.322928 1.11608C0.120753 0.88021 0.148069 0.525103 0.38394 0.322928Z"
                            fill="#FF826C" />
                    </svg>
                </RouterLink>
            </div>
        </div>
        <div class="bg-white shadow-lg rounded-xl w-full sm:h-[120px] h-[75px] flex mt-3">
            <div class="w-full">
                <img src="/public/regisShop.png" alt="pic-RegisRestaurant" class="sm:w-[130px] w-[90px] h-full rounded-l-xl">
            </div>
            <div class="flex justify-center items-center w-full">
                <p class="font-medium">ธุรกิจขายของ</p>
            </div>
            <div class="flex justify-end w-[80%] items-center mr-4">
                <button
                    class="w-[26px] h-[26px] sm:w-[45px] sm:h-[45px] bg-[#FF96843D] rounded-full flex justify-center items-center">
                    <svg class="" width="6" height="12" viewBox="0 0 6 12" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0.38394 0.322928C0.619811 0.120753 0.974917 0.148069 1.17709 0.38394L5.67709 5.63394C5.85765 5.84459 5.85765 6.15543 5.67709 6.36608L1.17709 11.6161C0.974917 11.852 0.619811 11.8793 0.38394 11.6771C0.148069 11.4749 0.120753 11.1198 0.322928 10.8839L4.50915 6.00001L0.322928 1.11608C0.120753 0.88021 0.148069 0.525103 0.38394 0.322928Z"
                            fill="#FF826C" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
</template>
<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>