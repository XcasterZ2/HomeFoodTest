<template>
  <div class="">
    <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6 ">
      <RouterLink to="/"
        class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
            fill="#0D1217" />
        </svg>
      </RouterLink>

      <div class="flex-1 mt-2">
        <h2 class="text-3xl mx-20 font-bold">โปรไฟล์</h2>
      </div>
    </div>

    <div v-if="authStore.isAuthenticated">
      <div class="flex justify-center mt-4 font-prompt">
        <div class="h-[75px] w-[350px] bg-while p-1 flex">
          <div class="avatar">
            <div class="w-[80px] h-[80px] rounded-full">
              <img src="/public/photo-user.png" alt="logo-user" />
            </div>
          </div>

          <div class="flex flex-col mx-4">
            <p class="text-[18px] gradient-text font-medium">{{ fullname }}</p>

            <div class="flex gap-2 mt-2">
              <svg class="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.65792 7.52892L9.39225 7.79309C9.39225 7.79309 8.76074 8.42101 7.03698 6.70705C5.31323 4.99308 5.94474 4.36516 5.94474 4.36516L6.11205 4.1988C6.52421 3.78898 6.56306 3.13102 6.20347 2.65069L5.4679 1.66812C5.02283 1.07361 4.16281 0.995075 3.65268 1.50231L2.73707 2.41271C2.48413 2.66422 2.31463 2.99025 2.33518 3.35193C2.38777 4.27722 2.80641 6.26804 5.14246 8.59082C7.61974 11.054 9.94415 11.1519 10.8947 11.0633C11.1953 11.0353 11.4568 10.8822 11.6675 10.6727L12.4961 9.84872C13.0555 9.29255 12.8978 8.33904 12.1821 7.94998L11.0676 7.34415C10.5977 7.08869 10.0252 7.16374 9.65792 7.52892Z"
                  fill="#BABDC1" />
              </svg>
              <p class="text-[12px]">{{ phoneNumber }}</p>
            </div>

            <div class="flex gap-2 mt-2">
              <svg class="mt-1" width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1.84992 3.01643C1.1665 3.69984 1.1665 4.79979 1.1665 6.99967C1.1665 9.19956 1.1665 10.2995 1.84992 10.9829C2.53334 11.6663 3.63328 11.6663 5.83317 11.6663H8.1665C10.3664 11.6663 11.4663 11.6663 12.1498 10.9829C12.8332 10.2995 12.8332 9.19956 12.8332 6.99967C12.8332 4.79979 12.8332 3.69984 12.1498 3.01643C11.4663 2.33301 10.3664 2.33301 8.1665 2.33301H5.83317C3.63328 2.33301 2.53334 2.33301 1.84992 3.01643ZM10.8359 4.38626C10.9906 4.57188 10.9655 4.84775 10.7799 5.00244L9.49864 6.07017C8.98159 6.50106 8.56252 6.85029 8.19265 7.08818C7.80736 7.33598 7.43213 7.49252 6.99984 7.49252C6.56754 7.49252 6.19231 7.33598 5.80702 7.08818C5.43716 6.8503 5.01809 6.50106 4.50104 6.07018L3.21976 5.00244C3.03414 4.84775 3.00906 4.57188 3.16374 4.38626C3.31842 4.20064 3.5943 4.17556 3.77992 4.33024L5.03927 5.37971C5.5835 5.83323 5.96135 6.14708 6.28034 6.35225C6.58914 6.55085 6.79855 6.61752 6.99984 6.61752C7.20113 6.61752 7.41054 6.55085 7.71933 6.35225C8.03833 6.14708 8.41617 5.83323 8.9604 5.37971L10.2198 4.33024C10.4054 4.17556 10.6813 4.20064 10.8359 4.38626Z"
                  fill="#BABDC1" />
              </svg>
              <p class="text-[12px]">{{ email }}</p>
            </div>
          </div>
          <RouterLink :to="`/profile/edit/${authStore.user.id}`">
            <editProfile />
          </RouterLink>

          <!-- <div class="mt-2">
            <editProfile onclick="my_modal_2.showModal()" />

            <dialog id="my_modal_2" class="modal">
              <div class="modal-box absolute left-0 top-[32%] sm:left-[40%] sm:top-[30%] w-[360px] h-[470px]">
                <div class="flex flex-col">
                  <div class=" absolute top-2 left-[41%] sm:hidden">
                    <div class=" w-[61px] h-1 rounded-full bg-[#00000033]"></div>
                  </div>
                  <div class="mt-2 flex justify-center">
                    <h3 class="text-lg font-light">เปลี่ยนข้อมูลผู้ใช้</h3>
                  </div>
                </div>
                <div class="flex justify-center mt-5">
                  <div class="avatar">
                    <div class="w-24 rounded-full">
                      <img src="/public/photo-user.png" alt="logo-user" />
                    </div>
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
                            <linearGradient id="paint0_linear_368_6455" x1="22.4934" y1="10.3889" x2="0.681839"
                              y2="13.092" gradientUnits="userSpaceOnUse">
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

              </div>

              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div> -->
        </div>
      </div>
      <div
        class="flex justify-center mt-4 font-prompt cursor-pointer hover:-translate-y-1 transition-all duration-500 group"
        @click="confirmLogout">
        <div class="h-[54px] w-[340px] bg-[#FFEFED] rounded-full p-1 flex justify-center items-center mt-5">
          <div class="flex gap-3">
            <Logout />
            <p class="text-[18px] font-medium text-[#FF6347]">ออกระบบ</p>
          </div>
        </div>
      </div>
      <dialog id="logout_confirm" class="modal -mx-2 font-prompt">
        <div class="modal-box">
          <div class="flex justify-center">
            <h3 class="font-bold text-[22px]">ออกจากระบบ</h3>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-center">
              <p class="mt-5 ">คุณแน่ใจว่าต้องการออก</p>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-center">
              <p class="mt-0 ">จากระบบหรือไม่?</p>
            </div>
          </div>
          <div class="modal-action flex justify-center">
            <form method="dialog" class="flex gap-1">
              <button class="w-[120px] h-[60px] border-[2px] rounded-full hover:bg-zinc-100">ยกเลิก</button>
              <button class=" w-[120px] h-[60px] bg-[#FF6347] hover:bg-[#ffb4a7] rounded-full text-white"
                @click="handleLogout">ใช่</button>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        <RouterLink to="/businesscenter" v-if="restaurants.length > 0"
          class="flex justify-center mt-1 font-prompt cursor-pointer hover:-translate-y-1 transition-all duration-500 group">
          <div class="h-[60px] w-[340px] rounded-xl p-1 flex justify-center items-center mt-5"
            style="background-image: linear-gradient(90deg, #FFB3BA 0%, #FF826C 100%);">
            <div class="flex gap-3">
              <Shopping />
              <p class=" text-[18px] font-medium text-white">ศูนย์ธุรกิจของฉัน</p>
            </div>
          </div>
        </RouterLink>
        <div v-else>
          <RouterLink to="/businesscenter/create"
            class="flex justify-center mt-1 font-prompt cursor-pointer hover:-translate-y-1 transition-all duration-500 group">
            <div class="h-[60px] w-[340px] rounded-xl p-1 flex justify-center items-center mt-5"
              style="background-image: linear-gradient(90deg, #FFB3BA 0%, #FF826C 100%);">
              <div class="flex gap-3">
                <Shopping />
                <p class=" text-[18px] font-medium text-white">สร้างธุรกิจของคุณ</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <div v-else class="flex justify-center font-prompt">
      <div class="relative w-[300px] h-[85px] flex justify-center items-center rounded-full overflow-hidden mt-5">
        <!-- pseudo-element for border gradient -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#FF6347] to-[#FF826C] rounded-full -z-10"></div>
        <RouterLink to="/login" class="w-[270px] h-[50px] flex justify-center items-center rounded-full bg-white">
          <div class="flex gap-3">
            <Logout />
            <p>เข้าสู่ระบบ / ลงทะเบียน</p>
          </div>
        </RouterLink>
      </div>

    </div>

    <div class="flex justify-center mt-1 font-prompt">
      <div class="h-[60px] w-[340px] p-1 flex flex-col  items-start mt-5">

        <div class="flex mt-5 w-full">
          <div class="flex-1 flex gap-3">
            <Location />
            <p class=" text-[16px] font-light text-black">ตำแหน่งของฉัน</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>

        <div class="flex mt-6 w-full">
          <div class="flex-1 flex gap-3">
            <Coupon />
            <p class=" text-[16px] font-light text-black">โปรโมชั่นของฉัน</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>


        <div class="flex mt-6 w-full">
          <div class="flex-1 flex gap-3">
            <Payment />
            <p class=" text-[16px] font-light text-black">วิธีการชำระเงิน</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>


        <div class="flex mt-6 w-full">
          <div class="flex-1 flex gap-3">
            <Chat />
            <p class=" text-[16px] font-light text-black">ข้อความ</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>


        <div class="flex mt-6 w-full">
          <div class="flex-1 flex gap-3">
            <inviteFriend />
            <p class=" text-[16px] font-light text-black">เชิญเพื่อน ๆ</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>

        <div class="flex mt-6 w-full">
          <div class="flex-1 flex gap-3">
            <Security />
            <p class=" text-[16px] font-light text-black">ความปลอดภัย</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>

        <div class="flex mt-6 w-full">
          <div class="flex-1 flex gap-3">
            <Help />
            <p class=" text-[16px] font-light text-black">ศูนย์ช่วยเหลือ</p>
          </div>
          <div class="flex-1 flex justify-end">
            <Right />
          </div>
        </div>

        <div class="divider mt-5"></div>

        <div class="w-full">
          <div class="flex items-center justify-between radius-[6px]">
            <div class="flex items-center w-[35px] h-[24px] text-[16px] leading-[24.19px] font-prompt text-[#0D1217]">
              ภาษา
            </div>
            <div class="flex items-center justify-between bg-[#FFFFFF]">
              <details ref="dropdown" :open="isOpen" @toggle="handleToggle" class="relative">
                <summary
                  class="flex items-center justify-between cursor-pointer px-4 py-2 rounded-md border-[1px] border-[#BABDC1] focus:outline-none w-[125px] h-[35px] leading-[24.19px] font-prompt ">
                  <p class="text-[16px]">{{ currentLanguage }}</p>
                  <svg width="18" height="18" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.322928 0.38394C0.525103 0.148069 0.88021 0.120753 1.11608 0.322928L6.00001 4.50915L10.8839 0.322929C11.1198 0.120754 11.4749 0.14807 11.6771 0.383941C11.8793 0.619811 11.852 0.974917 11.6161 1.17709L6.36608 5.67709C6.15543 5.85765 5.84459 5.85765 5.63394 5.67709L0.38394 1.17709C0.148069 0.974917 0.120753 0.619811 0.322928 0.38394Z"
                      fill="#0D1217" />
                  </svg>
                </summary>
                <ul class="absolute mt-2 w-32 bg-white rounded-md shadow-lg z-10 p-2 space-y-2">
                  <li v-for="(lang, index) in languages" :key="index">
                    <a href="#" @click.prevent="selectLanguage(lang)"
                      class="block px-4 py-2 hover:bg-gray-100 rounded-md">
                      {{ lang }}
                    </a>
                  </li>
                </ul>
              </details>
            </div>
          </div>

          <div class="mt-5 flex justify-between">
            <h2>การแจ้งเตือน</h2>
            <input type="checkbox" class="toggle" checked="checked" />
          </div>

          <div class="mt-5 flex justify-between">
            <h2>โหมดมืด</h2>
            <input type="checkbox" class="toggle" checked="checked" />
          </div>

          <div class="mt-5 flex justify-between">
            <h2>เสียง</h2>
            <input type="checkbox" class="toggle" checked="checked" />
          </div>

          <div class="mt-5 flex justify-between">
            <h2>อัพเดทอัตโนมัติ</h2>
            <input type="checkbox" class="toggle" checked="checked" />
          </div>

          <div class="mt-5 flex justify-between">
            <h2>เงื่อนไขการให้บริการ</h2>
            <Right />
          </div>

          <div class="mt-5 flex justify-between">
            <h2>นโยบายความเป็นส่วนตัว</h2>
            <Right />
          </div>

          <div class="mt-5 flex justify-between mb-3">
            <h2>เกี่ยวกับแอป</h2>
            <Right />
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth';

import userLayoutsNoNav from '~/layouts/userLayoutsNoNav.vue';
import editProfile from '~/components/admin/icons/editProfile.vue';
import Logout from '~/components/admin/icons/Logout.vue';
import Shopping from '~/components/admin/icons/Shopping.vue';
import RegisShopping from '~/components/user/icons/Profile/RegisShopping.vue';

import Chat from '~/components/user/icons/Profile/Chat.vue';
import Coupon from '~/components/user/icons/Profile/Coupon.vue';
import Help from '~/components/user/icons/Profile/Help.vue';
import inviteFriend from '~/components/user/icons/Profile/inviteFriend.vue';
import Location from '~/components/user/icons/Profile/Location.vue';
import Payment from '~/components/user/icons/Profile/Payment.vue';
import Security from '~/components/user/icons/Profile/Security.vue';
import Right from '~/components/user/icons/Profile/Right.vue';

const authStore = useAuthStore()

const email = ref('')
const fullname = ref('')
const phoneNumber = ref('')
const restaurants = ref([])
const isLoading = ref(false)

const currentLanguage = ref("ภาษาไทย");
const languages = ["ภาษาไทย", "อังกฤษ"];
const isOpen = ref(false);

const fetchRestaurant = async () => {
  isLoading.value = true;
  try {
    const response = await fetch('/api/restaurant', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    restaurants.value = data.filter(restaurant => restaurant.ownerId === authStore.user.id);
  } catch (err) {
    console.error('Error fetching courses:', err);
  } finally {
    isLoading.value = false;
  }
};

const confirmLogout = () => {
  const modal = document.getElementById('logout_confirm')
  modal.showModal()
}

const handleLogout = () => {
  authStore.logout()
}

function handleToggle(event) {
  isOpen.value = event.target.open;
}

function selectLanguage(lang) {
  currentLanguage.value = lang;
  isOpen.value = false;
}

const fetchUserProfile = async () => {
  try {
    const response = await $fetch(`/api/admin/user/${authStore.user.id}`);

    if (response) {
      email.value = response.email || '';
      fullname.value = response.fullname || '';
      phoneNumber.value = response.phoneNumber || '';
    } else {
      alert('User profile not found');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    alert('An error occurred while fetching the profile');
  }
}

authStore.initializeAuth()

onMounted(async () => {
  await fetchUserProfile()
  await fetchRestaurant()
  console.log('auth : ', authStore.user.id)
  console.log('restaurant : ', restaurants.value)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

.gradient-text {
  background: linear-gradient(121.94deg, #FF6347 0%, #FF826C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>