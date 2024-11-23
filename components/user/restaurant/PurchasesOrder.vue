<template>
  <div class="flex justify-between">
    <div class="flex gap-3">
      <Note />
      <h2 class="sm:text-xl font-semibold">คำสั่งซื้อของร้าน</h2>
    </div>

    <div>
      <p class="sm:text-xl font-semibold text-[#FF6347]">{{ currentDate }}</p>
    </div>
  </div>

  <div class="mt-5">
    <div class="grid sm:grid-cols-4 grid-cols-2 gap-y-4 gap-3">

      <div
        class=" cursor-pointer bg-gradient-to-t from-[#FF826C] to-[#FFCC70] sm:w-[220px] w-full sm:h-[150px] h-[110px] rounded-2xl hover:-translate-y-1 transition-all duration-500 group">
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col">
            <div class="flex justify-center items-center gap-2">
              <NoteWhite />
              <h2 class="sm:text-xl font-semibold text-[white]">ออเดอร์ใหม่</h2>
            </div>

            <div class="flex justify-center mt-2">
              <p class="sm:text-5xl text-3xl text-white font-medium">2</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="cursor-pointer bg-gradient-to-t from-[#FF826C4D] to-[#FFCFC64D] sm:w-[220px] w-full sm:h-[150px] h-[110px] rounded-2xl hover:-translate-y-1 transition-all duration-500 group">
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col">
            <div class="flex justify-center items-center gap-2">
              <Transport />
              <h2 class="sm:text-xl font-semibold text-[#FF6347]">กำลังจัดส่ง</h2>
            </div>

            <div class="flex justify-center mt-2">
              <p class="sm:text-5xl text-3xl text-[#FF6347] font-medium">1</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="cursor-pointer bg-gradient-to-t from-[#FF826C4D] to-[#FFCFC64D] sm:w-[220px] w-full sm:h-[150px] h-[110px] rounded-2xl hover:-translate-y-1 transition-all duration-500 group">
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col">
            <div class="flex justify-center items-center gap-2">
              <Shopping />
              <h2 class="sm:text-xl font-semibold text-[#FF6347]">วันนี้ส่งแล้ว</h2>
            </div>

            <div class="flex justify-center mt-2">
              <p class="sm:text-5xl text-3xl text-[#FF6347] font-medium">24</p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="cursor-pointer bg-gradient-to-t from-[#FF826C4D] to-[#FFCFC64D] sm:w-[220px] w-full sm:h-[150px] h-[110px] rounded-2xl hover:-translate-y-1 transition-all duration-500 group">
        <div class="flex justify-center items-center h-full">
          <div class="flex flex-col">
            <div class="flex justify-center gap-2">
              <School />
            </div>

            <div class="flex justify-center mt-2">
              <h2 class="sm:text-xl font-semibold text-[#FF6347]">ประวัติการขาย</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Note from '../icons/restaurant/Note.vue';
import NoteWhite from '../icons/restaurant/NoteWhite.vue';
import Transport from '../icons/restaurant/Transport.vue';
import Shopping from '../icons/restaurant/Shopping.vue';
import School from '../icons/restaurant/School.vue';

const currentDate = ref('');
const updateDate = () => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // เดือนเริ่มจาก 0
  const year = now.getFullYear();
  currentDate.value = `${day}/${month}/${year}`;
};

onMounted(() => {
  updateDate();
});
</script>

<style></style>