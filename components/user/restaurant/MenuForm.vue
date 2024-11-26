<template>
  <div class="font-prompt flex justify-center mt-5">
    <p class="font-bold sm:text-4xl text-2xl">เพิ่มรายการอาหาร</p>
  </div>
  <div class="p-5 font-prompt sm:max-w-4xl sm:mx-auto">
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">ชื่ออาหาร</span>
      </div>
      <input v-model="name" type="text" placeholder="ชื่ออาหาร" class="input input-bordered w-full" />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text">รายละเอียด</span>
      </div>
      <textarea v-model="description" class="textarea textarea-bordered h-24 sm:text-lg" placeholder="รายละเอียดอาหาร"></textarea>
    </label>

    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">ราคา</span>
      </div>
      <input v-model="price" type="number" placeholder="ราคา" class="input input-bordered w-full" />
    </label>

    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">หมวดหมู่อาหาร</span>
      </div>
      <select v-model="category" class="select select-bordered text-lg">
        <option disabled selected>เลือกหมวดหมู่</option>
        <option>เบอร์เกอร์</option>
        <option>สลัดผัก</option>
        <option>อาหารญี่ปุ่น</option>
        <option>ก๋วยเตี๋ยว</option>
        <option>พิซซ่า</option>
        <option>ส้มตำ</option>
        <option>ยำ</option>
        <option>ไก่ทอด</option>
        <option>ติ่มซำ</option>
        <option>ปิ้งย่าง</option>
        <option>สเต็ก</option>
        <option>ตามสั่ง</option>
        <option>ชาบู-สุกี้</option>
        <option>อาหารรทะเล</option>
        <option>ข้าวแกง</option>
        <option>สปาเก็ตตี้</option>
        <option>เค้ก</option>
        <option>ขนมไทย</option>
        <option>เบเกอรี่</option>
        <option>โดนัท</option>
        <option>ไอศกรีม</option>
        <option>ชา-ชานม</option>
        <option>น้ำผลไม้</option>
        <option>กาแฟ</option>
      </select>
    </label>

    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">รูปอาหาร (อัปโหลดได้สูงสุด 5 รูป)</span>
      </div>
      <input type="file" multiple accept="image/*" @change="handleFileUpload"
        class="file-input file-input-bordered w-full" />
    </label>
    <div class="mt-3 grid grid-cols-5 gap-3">
      <div v-for="(file, index) in images" :key="index"
        class="relative w-full bg-gray-100 rounded flex justify-center items-center overflow-hidden">
        <img :src="file.preview" class="object-cover w-full h-full rounded-xl" alt="Preview" />
        <button @click="removeImage(index)" class="absolute top-2 right-2 btn btn-sm btn-circle btn-error">
          <p class="text-white">✕</p>
        </button>
      </div>
    </div>

    <div @click="handleSubmit" class="btn bg-[#FF6347] mt-5 w-full rounded-full text-white">ยืนยัน</div>
    <RouterLink to="/businesscenter/restaurant/setting"
      class=" mt-5 w-full rounded-full text-gray-500 flex justify-center">ย้อนกลับ</RouterLink>
  </div>
</template>

<script setup>
import { useAuthStore } from '#build/imports';
import Swal from 'sweetalert2';

const authStore = useAuthStore()

const name = ref('')
const description = ref('')
const price = ref(null)
const category = ref('เลือกหมวดหมู่')
const images = ref([]);

const router = useRouter()

const handleFileUpload = (event) => {
  const files = event.target.files
  if (files.length + images.value.length > 5) {
    Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: 'สามารถอัปโหลดได้ไม่เกิน 5 รูป',
    })
    return
  }

  Array.from(files).forEach((file) => {
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ขนาดไฟล์ต้องไม่เกิน 5MB',
      })
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      images.value.push({ file, preview: e.target.result })
    }
    reader.readAsDataURL(file)
  })
}
const removeImage = (index) => {
  images.value.splice(index, 1);
};

const handleSubmit = async () => {
  const restaurantId = localStorage.getItem('restaurantId')
  try {
    if (!name.value || !price.value || price.value <= 0 || !restaurantId) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาด',
        text: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน (ชื่อเมนู, ราคา, รหัสร้านอาหาร)',
      })
      return
    }

    // Create FormData for multipart/form-data upload
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('description', description.value || '')
    formData.append('price', price.value.toString())
    formData.append('category', category.value || '')
    formData.append('restaurantId', restaurantId)

    // Append image files
    images.value.forEach((imageObj, index) => {
      formData.append(`images`, imageObj.file)
    })

    const response = await fetch('/api/restaurants/menu', {
      method: 'POST',
      body: formData, // No need to set Content-Type, browser will set it automatically
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`เกิดข้อผิดพลาด: ${errorText}`)
    }

    const responseData = await response.json()
    console.log('Response Data:', responseData)

    Swal.fire({
      icon: 'success',
      title: 'บันทึกเมนูสำเร็จ',
      showConfirmButton: false,
      timer: 1500,
    })

    router.push('/businesscenter/restaurant/setting')
  } catch (error) {
    console.error('Error:', error)
    Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: error.message,
    })
  }
}

const resetForm = () => {
  name.value = ''
  description.value = ''
  price.value = null
  category.value = ''
  images.value = []
}

watch(category, (newValue) => {
  console.log('category:', newValue)
})
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>