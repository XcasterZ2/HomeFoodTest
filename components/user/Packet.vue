<script setup>
import Coupon from '~/components/user/icons/coupon.vue'
import CouponLight from '~/components/user/icons/couponlight.vue'
import Clock from '~/components/user/icons/clock.vue'
import Upcost from '~/components/user/icons/upcost.vue'
import Check from '~/components/user/icons/check.vue'
import Menu from '~/components/user/Menu'

const activeSection = ref('open')
const selectedPacket = ref(null)

const packets = [

    {
        src: '/packet/packet1.png', name: 'ส่วนลดค่าอาหาร 50%', price: 400, description: [
            { text1: 'จำนวน 5 ครั้ง', text2: 'สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ', text3: 'ใช้ได้ทุกร้านอาหาร', text4: 'ระยะเวลา 14 วัน' },
        ]
    },

    {
        src: '/packet/packet1.png', name: 'ส่วนลดค่าอาหาร ฿100', price: 169, description: [
            { text1: 'จำนวน 5 ครั้ง', text2: 'สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ', text3: 'ใช้ได้ทุกร้านอาหาร', text4: 'ระยะเวลา 14 วัน' },
        ]
    },

    {
        src: '/packet/packet2.png', name: 'ส่วนลดส่งของ 50%', price: 159, description: [
            { text1: 'จำนวน 5 ครั้ง', text2: 'สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ', text3: 'ใช้ได้ทุกร้านอาหาร', text4: 'ระยะเวลา 14 วัน' },
        ]
    },

    {
        src: '/packet/packet2.png', name: 'ส่วนลดส่งของ 25%', price: 99, description: [
            { text1: 'จำนวน 5 ครั้ง', text2: 'สูงสุด ฿120 ไม่มีขั้นต่ำการสั่งซื้อ', text3: 'ใช้ได้ทุกร้านอาหาร', text4: 'ระยะเวลา 14 วัน' },
        ]
    },
]

const yourPackets = [
    { src: '/packet/packet1.png', name: 'ส่วนลดค่าอาหาร 50%', price: 250 },
    { src: '/packet/packet1.png', name: 'ส่วนลดค่าอาหาร ฿100', price: 160 },
    { src: '/packet/packet2.png', name: 'ส่วนลดส่งของ 50%', price: 159 },
]

const setActiveSection = (section) => {
    activeSection.value = section
}

const openModal = (packet) => {
    selectedPacket.value = packet
}

const closeModal = () => {
    selectedPacket.value = null
}
</script>

<template>
    <div class="pr-4 pl-4 font-prompt max-w-5xl mx-auto">
        <div class="flex mt-7">
            <div class="flex-1 flex flex-col cursor-pointer" @click="setActiveSection('open')">
                <div class="flex justify-center">
                    <h2 :class="{
                        'text-[#FF6347]': activeSection === 'open',
                        '': activeSection !== 'open'
                    }">เลือกแพ็กเกจ</h2>
                </div>
                <div :class="{
                    'border-[2px] border-[#FF6347] mt-1': activeSection === 'open',
                    'border-[1px] mt-1': activeSection !== 'open'
                }"></div>
            </div>

            <div class="flex-1 flex flex-col cursor-pointer" @click="setActiveSection('yourpacket')">
                <div class="flex justify-center">
                    <h2 :class="{
                        '': activeSection === 'open',
                        'text-[#FF6347]': activeSection !== 'open'
                    }">แพ็กเกจของฉัน</h2>
                </div>
                <div :class="{
                    'border-[1px] mt-1 ': activeSection === 'open',
                    'border-[2px] border-[#FF6347] mt-1': activeSection !== 'open'
                }"></div>
            </div>
        </div>


        <button onclick="my_modal_2.showModal()"
            class="w-[88px] h-[28px] bg-white border-2 border-[#FF826C] rounded-lg mt-3">
            <div class="flex gap-2 mx-1">
                <svg class="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.78409 9.23709L3.03344 5.36931C2.7994 5.12797 2.94126 4.66659 3.24951 4.66659L10.7508 4.66659C11.0591 4.66659 11.2009 5.12797 10.9669 5.36931L7.21623 9.23709C7.0919 9.36531 6.90843 9.36531 6.78409 9.23709Z"
                        fill="#FF826C" />
                </svg>

                <p class="text-[#FF826C]">ประเภท</p>
            </div>
        </button>

        <dialog id="my_modal_2" class="modal">
            <div class="modal-box absolute left-0 top-[52%] sm:left-[40%] sm:top-[30%] w-[360px] h-[340px]">
                <div class="flex flex-col">
                    <div class=" absolute top-2 left-[41%] sm:hidden">
                        <div class=" w-[61px] h-1 rounded-full bg-[#00000033]"></div>
                    </div>
                    <div class="mt-2 flex justify-center">
                        <h3 class="text-lg font-light">ประเภท</h3>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="form-control border-[1px] p-3 rounded-xl">
                        <label class="label cursor-pointer">
                            <div class="flex gap-5 pl-2">
                                <svg class="" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.99502 4H14.005C17.7856 4 19.6759 4 20.8504 5.17157C21.6591 5.97823 21.911 7.12339 21.9894 8.98947C22.005 9.35954 22.0128 9.54458 21.9437 9.66803C21.8745 9.79147 21.5987 9.94554 21.0469 10.2537C20.4341 10.5959 20.0199 11.2497 20.0199 12C20.0199 12.7503 20.4341 13.4041 21.0469 13.7463C21.5987 14.0545 21.8745 14.2085 21.9437 14.332C22.0128 14.4554 22.005 14.6405 21.9894 15.0105C21.911 16.8766 21.6591 18.0218 20.8504 18.8284C19.6759 20 17.7856 20 14.005 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4ZM15.5478 8.46967C15.8415 8.76256 15.8415 9.23744 15.5478 9.53033L9.53289 15.5303C9.23927 15.8232 8.76321 15.8232 8.46959 15.5303C8.17596 15.2374 8.17596 14.7626 8.46959 14.4697L14.4845 8.46967C14.7782 8.17678 15.2542 8.17678 15.5478 8.46967ZM14.5149 15.5C15.0686 15.5 15.5174 15.0523 15.5174 14.5C15.5174 13.9477 15.0686 13.5 14.5149 13.5C13.9613 13.5 13.5124 13.9477 13.5124 14.5C13.5124 15.0523 13.9613 15.5 14.5149 15.5ZM9.50248 10.5C10.0561 10.5 10.505 10.0523 10.505 9.5C10.505 8.94772 10.0561 8.5 9.50248 8.5C8.94882 8.5 8.49999 8.94772 8.49999 9.5C8.49999 10.0523 8.94882 10.5 9.50248 10.5Z"
                                        fill="url(#paint0_linear_368_6455)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_368_6455" x1="22.4934" y1="10.3889"
                                            x2="0.681839" y2="13.092" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF9684" />
                                            <stop offset="1" stop-color="#FF6347" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h2>สั่งอาหาร</h2>
                            </div>
                            <input type="checkbox" checked="checked" class="checkbox" />
                        </label>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="form-control border-[1px] p-3 rounded-xl">
                        <label class="label cursor-pointer">
                            <div class="flex gap-5 pl-2">
                                <Coupon />
                                <h2>ส่งของ</h2>
                            </div>
                            <input type="checkbox" checked="checked" class="checkbox" />
                        </label>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="form-control border-[1px] p-3 rounded-xl">
                        <label class="label cursor-pointer">
                            <div class="flex gap-5 pl-2">
                                <Coupon />
                                <h2>แรกเปลี่ยนสินค้า</h2>
                            </div>
                            <input type="checkbox" checked="checked" class="checkbox" />
                        </label>
                    </div>
                </div>

            </div>

            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

        <div v-if="activeSection === 'open'" class="mt-3">
            <div v-for="packet in packets" :key="packet.name" class="sm:flex sm:justify-center">
                <div class="w-full sm:w-[600px] sm:h-[140px] h-[90px] mt-2 flex bg-white shadow-lg rounded-xl">
                    <div class="w-[120px] sm:w-[200px]">
                        <img :src="packet.src" :alt="packet.name"
                            class="w-full h-full object-cover rounded-l-xl shadow-md">
                    </div>
                    <div class="p-3 w-[140px] sm:w-[250px]">
                        <p class="sm:text-[18px] text-[12px] font-medium">{{ packet.name }}</p>
                        <p class="text-[14px] sm:text-[16px] font-bold text-[#FF6347] mt-5">เริ่มต้น ฿{{ packet.price }}.-</p>
                    </div>
                    <div class="flex items-center justify-end w-[57px]">
                        <button @click="openModal(packet)"
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
        </div>

        <!-- Modal Display -->
        <div v-if="selectedPacket" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40"
            >
            <div class="w-[375px] h-[500px] sm:h-[400px] bg-white rounded-t-xl sm:rounded-xl absolute bottom-0 sm:bottom-[25%]">
                <div class="flex flex-col">
                    <div class=" absolute top-2 left-[41%] sm:hidden">
                        <div class=" w-[61px] h-1 rounded-full bg-[#00000033]"></div>
                    </div>
                    <div class="mt-2 flex justify-center">
                        <h3 class="text-lg font-light mt-5">{{ selectedPacket.name }}</h3>
                    </div>
                </div>

                <div class="flex flex-col mt-3 absolute top-[15%] left-[15%]">
                    <div class="flex gap-3">
                        <CouponLight />
                        <h2>{{ selectedPacket.description[0].text1 }}</h2>
                    </div>

                    <div class="flex gap-3 mt-6">
                        <Upcost />
                        <p>{{ selectedPacket.description[0].text2 }}</p>
                    </div>

                    <div class="flex gap-3 mt-6">
                        <Check />
                        <p>{{ selectedPacket.description[0].text3 }}</p>
                    </div>

                    <div class="flex gap-3 mt-6">
                        <Clock />
                        <p>{{ selectedPacket.description[0].text4 }}</p>
                    </div>
                </div>
                <div class=" cursor-pointer absolute bottom-[30%] sm:bottom-[20%] left-5  h-[53px] w-[330px] bg-[#FF6347] mt-6 rounded-3xl">
                    <div class="flex justify-between p-4">
                        <p class="font-medium text-[18px] text-white">ซื้อแพ็กเกจนี้</p>
                        <p class="font-medium text-[18px] text-white">฿{{ selectedPacket.price }}.00</p>
                    </div>
                </div>
                <div class=" cursor-pointer absolute bottom-[21%] sm:bottom-[10%] left-[45%]">
                    <p @click="selectedPacket = null" class="text-[18px] text-[#0D1217] text-opacity-40">ยกเลิก</p>
                </div>
            </div>
        </div>

        <div v-if="activeSection === 'yourpacket'" class="mt-3">
            <div v-for="packet in yourPackets" :key="packet.name" class="sm:flex sm:justify-center">
                <div class="w-full sm:w-[600px] sm:h-[140px] h-[90px] mt-2 flex bg-white shadow-lg rounded-xl">
                    <div class="w-[120px] sm:w-[200px]">
                        <img :src="packet.src" :alt="packet.name"
                            class="w-full h-full object-cover rounded-l-xl shadow-md">
                    </div>
                    <div class="p-3 w-[140px] sm:w-[250px]">
                        <p class="sm:text-[18px] text-[12px] font-medium">{{ packet.name }}</p>
                        <p class=" sm:text-[16px] text-[14px] font-bold text-[#FF6347] mt-5">เริ่มต้น ฿{{ packet.price }}.-</p>
                    </div>
                    <div class="flex items-center justify-end w-[57px]">

                        <div class="w-[26px] h-[26px] sm:w-[45px] sm:h-[45px] bg-[#FF96843D] rounded-full flex justify-center items-center">
                            <svg class="" width="6" height="12" viewBox="0 0 6 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0.38394 0.322928C0.619811 0.120753 0.974917 0.148069 1.17709 0.38394L5.67709 5.63394C5.85765 5.84459 5.85765 6.15543 5.67709 6.36608L1.17709 11.6161C0.974917 11.852 0.619811 11.8793 0.38394 11.6771C0.148069 11.4749 0.120753 11.1198 0.322928 10.8839L4.50915 6.00001L0.322928 1.11608C0.120753 0.88021 0.148069 0.525103 0.38394 0.322928Z"
                                    fill="#FF826C" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt', sans-serif;
}
</style>