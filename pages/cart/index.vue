<template>
  <div class="max-w-xl mx-auto p-5 pb-24">
    <div class="p-4 flex font-prompt mx-auto max-w-7xl mt-6">
      <RouterLink to="/"
        class="flex-2 w-[42px] h-[42px] bg-white shadow-md rounded-full flex justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
            fill="#0D1217" />
        </svg>
      </RouterLink>

      <div class="flex-1 mt-2">
        <h2 class="text-2xl mx-10 font-bold">ตะกร้าของฉัน</h2>
      </div>
    </div>
    <div class="p-3 font-prompt">
      <div v-if="cartItems.length > 0">
        <div v-if="isLoading" class="p-3 font-medium text-gray-500">
          กำลังโหลดข้อมูล...
        </div>
        <div v-else>
          <div v-for="item in cartItems" :key="item.id" class="mt-4 rounded-xl p-2 shadow-lg">
            <!-- Images Menu-->
            <div class="flex gap-3">
              <div v-if="item.menu.image && JSON.parse(item.menu.image).length > 0">
                <img :src="JSON.parse(item.menu.image)[0]" alt="logo-Menu"
                  class="rounded-xl sm:w-full sm:h-44 w-[120px] h-full">
              </div>
              <div v-else>
                <img src="/public/restuarant/menu.png" alt="default-Menu"
                  class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
              </div>

              <div class="w-[80%]">
                <div class="flex justify-between">
                  <div>
                    <p>{{ item.menu.name }}</p>
                  </div>

                  <div>
                    <div class="flex gap-2">
                      <editPage />
                      <div class=" cursor-pointer" @click="removeFromCart(item.id)">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.5 4.5L4.5 13.5" stroke="#BABDC1" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M4.5 4.5L13.5 13.5" stroke="#BABDC1" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="mt-2">
                  <p class="font-semibold text-[#FF6347]">฿{{ item.menu.price }}</p>
                </div>
                <div class="flex gap-3 mt-2">
                  <button @click="updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 border rounded-full">-</button>
                  <span class="mt-1 text-lg font-medium">{{ item.quantity }}</span>
                  <button @click="updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 border rounded-full">+</button>
                </div>
              </div>
            </div>

            <div v-if="asd" class="border-[1px] w-full mt-2">
            </div>

            <div class="flex items-center gap-2">
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>ไม่มีสินค้าในตะกร้าของคุณ</p>
      </div>

      <div>
        <div class="shadow-lg border-[1px] h-24 mt-8 rounded-xl p-3">
          <div class="flex gap-3">
            <Map />
            <p>ส่งถึง</p>
            <p>-></p>
            <p class="font-medium">บ้าน</p>
          </div>
        </div>
      </div>

      <div>
        <div class="shadow-lg border-[1px] h-24 mt-4 rounded-xl p-3">
          <div class="flex gap-3">
            <Money />
            <p>วิธีการชำระเงิน</p>
          </div>
          <div class="mt-2">
            <p class="font-medium">เงินสด</p>
          </div>
        </div>
      </div>

      <div>
        <div class="shadow-lg border-[1px] h-24 mt-4 rounded-xl p-3">
          <div class="flex gap-3">
            <coupon />
            <p>โปรโมชั่น</p>
          </div>
          <div class="mt-2 flex gap-1">
            <div class="bg-[#FF9E20] w-16 flex justify-center rounded-md h-7 items-center">
              <p class="text-sm text-white">จัดส่งฟรี</p>
            </div>

            <div class="bg-[#FF9E20] w-16 flex justify-center rounded-md h-7 items-center">
              <p class="text-sm text-white">20%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="font-prompt fixed bottom-5 left-3 right-0 z-50 sm:max-w-3xl sm:mx-auto">
      <div class="flex h-16 w-full shadow-lg rounded-full p-2 bg-white">
        <div class="flex-1 rounded-full flex justify-center items-center">
          <div class="sm:flex sm:gap-3">
            <p class="sm:mt-1 hidden sm:block">ราคารวม</p>
            <p class="text-2xl font-medium ">฿{{ total }}</p>
          </div>
        </div>

        <div @click="proceedToCheckout"
          class="flex-1 bg-[#FF6347] rounded-full hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
          <div class="flex justify-center items-center mt-3">
            <Shopping />
            <p class="text-white font-medium">ชำระเงิน </p>
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
import editPage from '~/components/user/icons/restaurant/editPage.vue';
import Map from '~/components/user/icons/Map.vue';
import Money from '~/components/user/icons/restaurant/setting/Money.vue';
import coupon from '~/components/user/icons/coupon.vue';
import Shopping from '~/components/admin/icons/Shopping.vue';

const cartItems = ref([]);
const total = ref(0);
const authStore = useAuthStore()

const isLoading = ref(false);


const fetchCartItems = async () => {
  const userId = authStore.user.id;
  isLoading.value = true; // เริ่มการโหลด
  try {
    const response = await fetch(`/api/cart?userId=${userId}`, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch Cart');
    }

    const data = await response.json();
    cartItems.value = data.cartItems;
    calculateTotal();
  } catch (error) {
    console.error('Error fetching cart items:', error);
  } finally {
    isLoading.value = false; // สิ้นสุดการโหลด
  }
};


const calculateTotal = () => {
  total.value = cartItems.value.reduce(
    (sum, item) => sum + item.menu.price * item.quantity,
    0
  );
};

const updateQuantity = async (cartItemId, newQuantity) => {
  if (newQuantity < 1) return;

  try {
    const response = await fetch('/api/carts/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItemId, newQuantity }),
    });

    const result = await response.json();
    if (result.success) {
      await fetchCartItems();
    } else {
      console.error(result.error);
    }
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
  }
};

const removeFromCart = async (cartItemId) => {
  try {
    const response = await fetch(`/api/carts/remove/${cartItemId}`, {
      method: 'DELETE',
    });

    const result = await response.json();
    if (result.success) {
      await fetchCartItems();
    } else {
      console.error(result.error);
    }
  } catch (error) {
    console.error('Error removing cart item:', error);
  }
};
const proceedToCheckout = () => {
  const router = useRouter()

  const restaurantIds = cartItems.value.map(item => item.menu.restaurantId);

  localStorage.setItem('resId', restaurantIds[0]);
  localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  localStorage.setItem('cartTotal', total.value.toString());

  router.push('/cart/check');
};

onMounted(async () => {
  await fetchCartItems()
  const cartItemIds = cartItems.value.map(item => item.id);
  console.log('cart : ', cartItemIds)
})
</script>
