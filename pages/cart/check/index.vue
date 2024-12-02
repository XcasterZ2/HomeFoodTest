<template>
  <div class="max-w-3xl mx-auto p-5 pb-24">
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
        <h2 class="text-2xl mx-10 font-bold">สรุปการสั่งซื้อ</h2>
      </div>
    </div>

    <div class="p-3 font-prompt">
      <!-- Cart Items -->
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="mt-4 rounded-xl p-2 shadow-lg">
          <div class="flex gap-3">
            <!-- Item Image -->
            <div v-if="item.menu.image && JSON.parse(item.menu.image).length > 0">
              <img :src="JSON.parse(item.menu.image)[0]" alt="logo-Menu"
                class="rounded-xl sm:w-full sm:h-44 w-[120px] h-full">
            </div>
            <div v-else>
              <img src="/public/restuarant/menu.png" alt="default-Menu" class="rounded-xl sm:w-full sm:h-44 w-36 h-30">
            </div>

            <!-- Item Details -->
            <div class="flex flex-col gap-y-3 w-[80%] h-[100px]">
              <div class="flex justify-between">
                <p>{{ item.menu.name }}</p>
              </div>
              <div>
                <p class="font-semibold">จำนวน: {{ item.quantity }}</p>
              </div>
              <div class="flex h-[80%]">
                <p class="font-semibold text-[#FF6347]">ราคา ฿{{ item.menu.price }} บาท</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>ไม่มีสินค้าในตะกร้า</p>
      </div>

      <!-- Delivery Section -->
      <div class="shadow-lg border-[1px] h-24 mt-8 rounded-xl p-3">
        <div class="flex gap-3 items-center">
          <Map />
          <p>สถานที่จัดส่ง</p>
          <p class="font-medium ml-2">บ้าน</p>
        </div>
      </div>

      <!-- Payment Method Section -->
      <div class="shadow-lg border-[1px] h-24 mt-4 rounded-xl p-3">
        <div class="flex gap-3 items-center">
          <Money />
          <p>วิธีการชำระเงิน</p>
          <p class="font-medium ml-2">เงินสด</p>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="mt-4 bg-zinc-50 p-4 rounded-xl shadow-md">
        <div class="flex justify-center">
          <h3 class="text-xl font-bold mb-3 text-[#FF6347]">สรุปยอดสั่งซื้อ</h3>
        </div>
        <div class="flex justify-between mb-2">
          <p>ยอดรวมสินค้า</p>
          <p>{{ total }} บาท</p>
        </div>
        <div class="flex justify-between mb-2">
          <p>ค่าจัดส่ง</p>
          <p>0 บาท</p>
        </div>
        <div class=" border-[1px] mt-3 mb-3"></div>

        <div class="flex justify-between font-bold text-lg">
          <p>ยอดชำระทั้งหมด</p>
          <p class="text-[#FF6347]">{{ total }} บาท</p>
        </div>
      </div>
    </div>

    <!-- Fixed Bottom Bar -->
    <div class="font-prompt fixed bottom-5 left-3 right-0 z-50 sm:max-w-3xl sm:mx-auto">
      <div class="flex h-16 w-full shadow-lg rounded-full p-2 bg-white">
        <div class="flex-1 rounded-full flex justify-center items-center">
          <div class="sm:flex sm:gap-3">
            <p class="sm:mt-1 hidden sm:block">ราคารวม</p>
            <p class="text-2xl font-semibold text-[#FF6347]">฿{{ total }}</p>
          </div>
        </div>

        <div @click="confirmOrder"
          class="flex-1 bg-[#FF6347] rounded-full hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
          <div class="flex justify-center items-center mt-3">
            <Shopping />
            <p class="text-white font-medium">ยืนยันการสั่งซื้อ</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '#build/imports';
import Swal from 'sweetalert2';

const authStore = useAuthStore()

import Shopping from '~/components/admin/icons/Shopping.vue';
import Map from '~/components/user/icons/Map.vue';
import Money from '~/components/user/icons/restaurant/setting/Money.vue';

const cartItems = ref([]);
const total = ref(0);
const restaurantsId = ref(0)
const router = useRouter();

const confirmOrder = async () => {
  const orderData = {
    userId: authStore.user.id,
    restaurantId: restaurantsId.value,
    totalPrice: total.value,
    deliveryAddress: "Test",
    paymentMethod: "เงินสด",
    orderItems: cartItems.value.map((item) => ({
      menuId: item.menu.id,
      quantity: item.quantity,
      price: item.menu.price,
    })),
  };

  try {
    const { data, error } = await useFetch('/api/orders', {
      method: 'POST',
      body: orderData,
    });

    if (error.value) throw new Error(error.value.message);

    localStorage.removeItem('cartItems');
    localStorage.removeItem('cartTotal');
    localStorage.removeItem('resId');

    await Swal.fire({
      icon: 'success',
      title: 'สร้างออเดอร์สำเร็จ!',
      text: 'ขอบคุณสำหรับคำสั่งซื้อของคุณ',
      confirmButtonText: 'ตกลง',
      customClass: {
        container: 'font-prompt',
      }
    });

    // ไปยังหน้าคำสั่งซื้อสำเร็จ
    router.push('/');
  } catch (err) {
    console.error('Failed to create order:', err.message);

    await Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: err.message || 'ไม่สามารถสร้างออเดอร์ได้',
      confirmButtonText: 'ลองใหม่อีกครั้ง',
      customClass: {
        container: 'font-prompt',
      }
    });
  }
};

onMounted(() => {
  const restaurantId = localStorage.getItem('resId')
  const storedCartItems = localStorage.getItem('cartItems');
  const storedTotal = localStorage.getItem('cartTotal');

  if (storedCartItems) {
    cartItems.value = JSON.parse(storedCartItems);
  }

  if (storedTotal) {
    total.value = parseFloat(storedTotal);
  }

  if (restaurantId) {
    restaurantsId.value = parseInt(restaurantId)
  }

  console.log('resdata : ', restaurantsId.value)
});
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif !important;
}
</style>