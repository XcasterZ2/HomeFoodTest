<template>
    <div class="flex flex-col h-full">
        <div class="flex justify-center mt-2">
            <nav class="w-full mt-2 ml-4 mr-4 bg-slate-600 p-4 flex justify-between items-center rounded-2xl h-14">
                <div class="flex">
                    <div class=" hidden sm:block">
                        <div class="flex">
                            <h1 class="font-bold text-3xl mt-1 ml-2 text-white">ADMIN</h1>
                            <h1 class="font-bold text-3xl mt-1 ml-2 text-white">DASHBOARD</h1>
                        </div>
                    </div>

                    <button class="sm:hidden btn btn-ghost btn-circle text-white" @click="toggleMobileNav">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div v-if="mobileNavOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 sm:hidden"
                        @click="toggleMobileNav">
                        <div class="absolute left-0 top-0 h-full w-60 bg-white font-kanit p-2 overflow-auto"
                            @click.stop>
                            <div class="flex flex-col justify-center items-center">
                                <h1 class="font-bold text-5xl mt-1 ml-2 text-[#FF6347]">ADMIN</h1>
                                <h1 class="font-bold text-2xl mt-1 ml-2 text-[#FF6347]">DASHBOARD</h1>
                            </div>
                            <div class="divider pr-4 pl-4"></div>
                            <ul class="flex flex-col">
                                <li class="">
                                    <RouterLink to="/admin"
                                        class="block py-2 px-4 hover:bg-gray-200 rounded-full border-2 border-accent"
                                        @click="toggleMobileNav">
                                        <p class="text-center text-orange-400 font-bold">DASHBOARD</p>
                                    </RouterLink>
                                </li>
                            </ul>

                            <ul class="menu bg-base-100 rounded-box w-70 mt-2 border-2 -mx-0 border-accent">
                                <li>
                                    <h2 class="menu-title font-light text-zinc-500 text-center text-base">
                                        ข้อมูลภายในเว็บ</h2>
                                    <ul>
                                        <li>
                                            <RouterLink to="/admin" class="">
                                                <p class="text-base ">ข้อมูลยูสเซอร์</p>
                                            </RouterLink>
                                        </li>
                                        <li>
                                            <RouterLink to="/admin/restaurants" class="">
                                                <p class="text-base ">ข้อมูลร้านค้า</p>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul class="menu bg-base-100 rounded-box w-70 mt-2 border-2 -mx-0 border-accent">
                                <li>
                                    <h2 class="menu-title font-light text-zinc-500 text-center text-base">
                                        ข้อมูลภายในคลินิค</h2>
                                    <ul>
                                        <li>
                                            <RouterLink to="/admin" class="">
                                                <p class="text-base ">ข้อมูลผู้ป่วย</p>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul class="menu bg-base-100 rounded-box w-70 mt-2 mb-2 border-2 -mx-0 border-accent">
                                <li>
                                    <h2 class="menu-title font-light text-zinc-500 text-center text-base">ตรวจรักษา</h2>
                                    <ul>
                                        <li>
                                            <RouterLink to="/admin">
                                                <p class="sm:text-base text-[15px]">ข้อมูลการตรวจ</p>
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

                <div class="flex items-center space-x-4 ">
                    <RouterLink to="/" class="btn btn-secondary btn-sm">
                        <p class="text-white font-light mt-1">ไปหน้ายูสเซอร์</p>
                    </RouterLink>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar online">
                            <div class="w-10 rounded-full">
                                <img alt="Profile" class="w-full h-full object-cover"
                                    :src="authStore.user?.role === 'admin' ? '/adminpic.png' : '/photo-user.png'">
                            </div>
                        </div>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a @click="authStore.logout" class="justify-between">
                                    ออกจากระบบ
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div class="flex h-full mt-2">
            <!-- Sidebar / Aside -->
            <aside class="w-72 bg-slate-500 rounded-xl h-full hidden sm:block mx-4">
                <div class="w-full h-26 bg-slate-600 rounded-t-xl flex justify-center items-center p-4">
                    <div class="flex-col justify-center items-center">
                        <div class="flex justify-center items-center avatar">
                            <div class=" ring-accent ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                <img
                                    src="https://img5.pic.in.th/file/secure-sv1/software-engineerc1438b6fade78e82.png" />
                            </div>
                        </div>
                        <div class="flex">
                            <h1 class="mt-2 text-base-200">Role : {{ authStore.user.role }}</h1>
                        </div>
                    </div>
                    <div class="divider p-2"></div>
                </div>


                <div class="pr-2 pl-2">
                    <RouterLink to="/admin"
                        class="flex items-center mt-3 p-2 bg-base-100 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                        <p class="text-base text-zinc-600 ml-2">Dashboard </p>
                    </RouterLink>

                    <ul class="menu bg-base-100 rounded-box w-70 mt-2 mb-3">
                        <li>
                            <h2 class="menu-title font-light text-zinc-500 text-center text-base">ข้อมูลภายในเว็บ</h2>
                            <ul>
                                <li>
                                    <RouterLink to="/admin/users" class="">
                                        <p class="text-base ">ข้อมูลยูสเซอร์</p>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/admin/restaurants" class="">
                                        <p class="text-base ">ข้อมูลร้านค้า</p>
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <!-- <ul class="menu bg-base-100 rounded-box w-70 mt-2">
                        <li>
                            <h2 class="menu-title font-light text-zinc-500 text-center text-base">ข้อมูลภายในคลินิค</h2>
                            <ul>
                                <li>
                                    <RouterLink to="/admin" class="">
                                        <p class="text-base ">ข้อมูลผู้ป่วย</p>
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="menu bg-base-100 rounded-box w-70 mt-2 mb-2">
                        <li>
                            <h2 class="menu-title font-light text-zinc-500 text-center text-base">ตรวจรักษา</h2>
                            <ul>
                                <li>
                                    <RouterLink to="/admin">
                                        <p class="text-base ">ข้อมูลการตรวจ</p>
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>

                    </ul> -->
                </div>
            </aside>
            <!-- Main Content -->
            <div class="flex-1 p-4  rounded-xl mx-auto w-full bg-zinc-50">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const mobileNavOpen = ref(false);


const toggleMobileNav = () => {
    mobileNavOpen.value = !mobileNavOpen.value;
};

</script>

<style scoped>
* {
    font-family: 'Kanit', sans-serif;
}

.text-stroke {
    text-shadow: -5px -1px 0 #FF8128, 1px -1px 0 #FF8128, -5px 1px 0 #FF8128, 1px 1px 0 #FF8128;
}
</style>