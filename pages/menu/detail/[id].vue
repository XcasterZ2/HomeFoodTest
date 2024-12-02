<template>
  <div class="sm:max-w-3xl sm:mx-auto">


    <transition name="fade">
      <RouterLink v-if="showCart" to="/cart" class="absolute top-5 right-5 sm:right-[28%] sm:top-9">
        <div class="bg-[#FF6347] rounded-full w-16 h-10 flex gap-1 justify-center items-center">
          <Shopping />
          <p class="text-white">{{ cartLength }}</p>
        </div>
      </RouterLink>
    </transition>

    <RouterLink :to="`/restaurants/${restaurantId}`" class=" absolute top-5 left-5 sm:top-9 sm:left-[29%]">
      <div class="bg-white rounded-full w-10 h-10 flex justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.4075 5.92548C11.7248 6.24278 11.7248 6.75722 11.4075 7.07452L6.29456 12.1875H21.6663C22.1151 12.1875 22.4788 12.5513 22.4788 13C22.4788 13.4487 22.1151 13.8125 21.6663 13.8125H6.29456L11.4075 18.9255C11.7248 19.2428 11.7248 19.7572 11.4075 20.0745C11.0902 20.3918 10.5758 20.3918 10.2585 20.0745L3.75848 13.5745C3.44118 13.2572 3.44118 12.7428 3.75848 12.4255L10.2585 5.92548C10.5758 5.60817 11.0902 5.60817 11.4075 5.92548Z"
            fill="#0D1217" />
        </svg>
      </div>
    </RouterLink>

    <div class="font-prompt">
      <div v-if="menus.body" v-for="menu in [menus.body]" :key="menu.id">
        <div v-if="menu.image && JSON.parse(menu.image).length > 0">
          <img :src="JSON.parse(menu.image)[0]" alt="logo-Menu" class="w-full bg-cover h-[220px]">
        </div>
        <div v-else>
          <img src="/public/restuarant/menu.png" alt="default-Menu" class="">
        </div>

        <div class=" absolute top-[25%] right-5 sm:right-[28%] sm:top-[16%]">
          <button class="bg-white mt-2 border-[1px] rounded-full p-1 w-16 flex items-center justify-center"
            @click.stop="toggleMenuLike(menu.id)">
            <Heart :filled="isMenuLiked(menu.id)" class="w-6 h-6" />
            <span class="ml-1 text-sm">{{ menu.likeCount || 0 }}</span>
          </button>
        </div>

        <div class="p-5 bg-zinc-50 border-[2px] rounded-b-xl">
          <div>
            <h3 class="font-semibold text-xl">{{ menu.name }}</h3>
          </div>
          <div class="mt-3 flex gap-4">
            <p class="text-xl text-[#989DA3] line-through">฿89.00</p>
            <p class="text-xl font-semibold text-[#FF6347]">฿{{ menu.price }}</p>
          </div>
          <div class="mt-4 flex justify-between gap-4">
            <div class="flex">
              <Star class="mt-1" />
              <div class="flex gap-4">
                <p>4.9</p>
                <p class="text-[#697079]">(1.205)</p>
              </div>
            </div>

            <div>
              <p class="underline text-[#697079]">ดูรีวิวทั้งหมด</p>
            </div>
          </div>

          <div class="mt-5">
            <div>
              <p class=" font-light text-[#697079]">{{ menu.description }}</p>
            </div>
            <div class="mt-3 flex justify-end">
              <p class="underline text-[#697079]">ดูเพิ่มเติม</p>
            </div>
          </div>

          <!-- <div>
            <p class="font-semibold text-lg">ตัวเลือกเพิ่มเติม :</p>

            <div class="flex mt-3 justify-between">
              <p>เพิ่มชีส</p>
              <div class="flex gap-3">
                <p>+ ฿15.50</p>
                <input type="checkbox" checked="checked" class="checkbox" />
              </div>
            </div>

            <div class="flex mt-4 justify-between">
              <p>ใส่เบคอน</p>
              <div class="flex gap-3">
                <p>+ ฿15.50</p>
                <input type="checkbox" checked="checked" class="checkbox" />
              </div>
            </div>

            <div class="flex flex-col mt-4">
              <div class="flex justify-between">
                <p>เพิ่มเนื้อสัตว์</p>
                <div class="flex gap-3">
                  <input type="checkbox" checked="checked" class="checkbox" v-model="showMeatOptions" />
                </div>
              </div>
              <div v-if="showMeatOptions" class="mt-4">
                <div class="flex justify-between">
                  <div class="flex gap-4">
                    <p>-</p>
                    <p>1 ชิ้น</p>
                  </div>

                  <div class="flex gap-3">
                    <p>+ ฿25.00</p>
                    <input type="checkbox" checked="checked" class="checkbox" />
                  </div>
                </div>

                <div class="mt-4 flex justify-between">
                  <div class="flex gap-4">
                    <p>-</p>
                    <p>2 ชิ้น</p>
                  </div>

                  <div class="flex gap-3">
                    <p>+ ฿45.00</p>
                    <input type="checkbox" checked="checked" class="checkbox" />
                  </div>
                </div>
              </div>
            </div>

          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="font-prompt fixed bottom-5 left-3 right-0 z-50 sm:hidden">
    <div class="flex h-16 w-full shadow-lg rounded-full p-2">
      <div class="flex-1 rounded-full">
        <div class="flex justify-center gap-5">
          <div @click="decreaseQuantity"
            class="w-12 h-12 flex items-center justify-center rounded-full border-[1px] cursor-pointer">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 12.5H6" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          <div class="mt-2">
            <p class="text-[20px] font-semibold">{{ quantity }}</p>
          </div>

          <div @click="increaseQuantity"
            class="w-12 h-12 flex items-center justify-center rounded-full border-[1px] cursor-pointer">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.5V12.5M12 12.5V18.5M12 12.5H18M12 12.5L6 12.5" stroke="#0D1217" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div @click="addToCart"
        class="flex-1 bg-[#FF6347] rounded-full hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
        <div class="flex justify-center items-center mt-3">
          <Shopping />
          <p class="text-white font-medium">เพิ่มลงตะกร้า</p>
        </div>
      </div>
    </div>
  </div>

  <div class="sm:block">
    <div class="font-prompt fixed bottom-5 left-3 right-0 z-50 sm:max-w-3xl sm:mx-auto">
      <div class="flex h-16 w-full shadow-lg rounded-full p-2">
        <div class="flex-1 rounded-full">
          <div class="flex justify-center gap-5">
            <div @click="decreaseQuantity"
              class="w-12 h-12 flex items-center justify-center rounded-full border-[1px] cursor-pointer">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12.5H6" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <div class="mt-2">
              <p class="text-[20px] font-semibold">{{ quantity }}</p>
            </div>

            <div @click="increaseQuantity"
              class="w-12 h-12 flex items-center justify-center rounded-full border-[1px] cursor-pointer">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.5V12.5M12 12.5V18.5M12 12.5H18M12 12.5L6 12.5" stroke="#0D1217" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <div @click="addToCart"
          class="flex-1 bg-[#FF6347] rounded-full hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
          <div class="flex justify-center items-center mt-3">
            <Shopping />
            <p class="text-white font-medium">เพิ่มลงตะกร้า</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '#build/imports';

import Star from '~/components/user/icons/Star.vue';
import Shopping from '~/components/admin/icons/Shopping.vue';
import LikeButton from '~/components/user/LikeButton.vue';
import Heart from '~/components/user/icons/Heart.vue';

const route = useRoute();
const menus = ref([]);
const router = useRouter()
const showMeatOptions = ref(false);
const quantity = ref(1);
const authStore = useAuthStore()
const cartItems = ref([])
const restaurantId = ref(0)

const cartLength = ref(0)
const likedMenus = ref(new Set())

const showCart = ref(false)

const toggleMenuLike = async (menuId) => {
  try {
    const userId = getUserId()

    if (likedMenus.value.has(menuId)) {
      // Unlike
      await $fetch(`/api/menulike?userId=${userId}&menuId=${menuId}`, {
        method: 'DELETE'
      })
      likedMenus.value.delete(menuId)

      // อัพเดตจำนวนไลค์
      const menuIndex = menus.value.findIndex(menu => menu.id === menuId)
      if (menuIndex !== -1) {
        menus.value[menuIndex].likeCount = Math.max(0, (menus.value[menuIndex].likeCount || 1) - 1)
      }
    } else {
      // ไลค์
      await $fetch('/api/menulike', {
        method: 'POST',
        body: {
          userId,
          menuId
        }
      })
      likedMenus.value.add(menuId)

      // อัพเดตจำนวนไลค์
      const menuIndex = menus.value.findIndex(menu => menu.id === menuId)
      if (menuIndex !== -1) {
        menus.value[menuIndex].likeCount = (menus.value[menuIndex].likeCount || 0) + 1
      }
    }
  } catch (error) {
    console.error('Error toggling menu like:', error)
  }
}

// ตรวจสอบว่าชอบเมนูหรือไม่
const isMenuLiked = (menuId) => {
  return likedMenus.value.has(menuId)
}

// เรียกแสดง เมนูที่ชอบ
const fetchInitialLikedMenus = async () => {
  const authStore = useAuthStore()
  try {
    const userId = authStore.user.id
    const likedMenusResponse = await $fetch(`/api/menulike?userId=${userId}`)

    likedMenusResponse.forEach(like => {
      likedMenus.value.add(like.menuId)
    })
  } catch (error) {
    console.error('Error fetching initial liked menus:', error)
  }
}

function getUserId() {
  const authStore = useAuthStore()
  if (!authStore.user || !authStore.user.id) {
    Swal.fire({
      title: 'คุณไม่ได้เข้าสู่ระบบ!',
      text: 'กรุณาเข้าสู่ระบบก่อนดำเนินการต่อ',
      icon: 'warning',
      confirmButtonText: 'ตกลง',
      customClass: {
        container: 'font-prompt',
      }
    })
    return null // หรือคุณสามารถหยุดการทำงานของฟังก์ชันโดยไม่ return ค่า
  }
  return authStore.user.id
}

const addToCart = async () => {
  const userId = authStore.user.id
  const menuId = menus.value.body.id;

  try {
    const response = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        menuId,
        quantity: quantity.value,
      }),
    });

    const result = await response.json();

    if (result.success) {
      console.log('data : ', result)
      console.log('Success')
      await fetchCartItems()
      showCart.value = true
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    alert('เกิดข้อผิดพลาดในการเพิ่มลงตะกร้า');
  }
};

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const increaseQuantity = () => {
  quantity.value++;
};

const fetchMenu = async () => {
  const id = parseInt(route.params.id)
  try {
    const response = await fetch(`/api/menus/${id}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch Menu');
    }
    const data = await response.json();
    menus.value = data
    restaurantId.value = data.body.restaurantId
    await fetchInitialLikedMenus()

  } catch (err) {
    console.error('Error fetching Menu:', err);
  }
};

const fetchCartItems = async () => {
  const userId = authStore.user.id;
  try {
    const response = await fetch(`/api/cart?userId=${userId}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch Cart');
    }

    const data = await response.json();
    cartItems.value = data.cartItems;
    cartLength.value = cartItems.value.length
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
};

onMounted(async () => {
  await fetchMenu()
  await fetchCartItems()
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt';
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>