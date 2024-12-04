<template>
  <div class="max-w-xl mx-auto mt-5 font-prompt">
    <div class="flex p-3">
      <RouterLink to="/businesscenter/restaurant/detail"
        class="flex-2 w-[42px] h-[42px] mt-2 bg-white shadow-md rounded-full flex justify-center items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.4078 5.92548C11.7251 6.24278 11.7251 6.75722 11.4078 7.07452L6.2948 12.1875H21.6666C22.1153 12.1875 22.4791 12.5513 22.4791 13C22.4791 13.4487 22.1153 13.8125 21.6666 13.8125H6.2948L11.4078 18.9255C11.7251 19.2428 11.7251 19.7572 11.4078 20.0745C11.0905 20.3918 10.576 20.3918 10.2587 20.0745L3.75873 13.5745C3.44143 13.2572 3.44143 12.7428 3.75873 12.4255L10.2587 5.92548C10.576 5.60817 11.0905 5.60817 11.4078 5.92548Z"
            fill="#0D1217" />
        </svg>
      </RouterLink>
      <div class="flex-1 mt-3">
        <h2 class="text-[26px] mx-5 font-bold">เปลี่ยนรูปภาพร้านอาหาร</h2>
      </div>
    </div>

    <div class="flex mt-5">
      <div class="flex-1">
        <p class="text-center font-semibold text-[#FF6347]">รูปเดิม</p>
        <div v-if="restaurantImage" class="p-3 flex justify-center">
          <img :src="restaurantImage" alt="" class="w-[150px] h-[150px] rounded-lg shadow-md">
        </div>
        <div v-else class="p-3 flex justify-center">
          <div class="w-auto sm:h-[150px] h-[80px] rounded-lg  shadow-md">
            <div class="flex justify-center items-center p-3">
              <p class="mt-3 sm:text-base text-[8px]">ร้านอาหารของคุณยังไม่มีภาพ</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <p class="text-center font-semibold text-[#FF6347]">รูปใหม่</p>
        <div v-if="newImagePreview" class="p-3 flex justify-center">
          <img :src="newImagePreview" alt="New Image" class="w-[150px] h-[150px] rounded-lg shadow-md" />
        </div>
        <div v-else class="p-3 flex justify-center">
          <div class="w-auto sm:h-[150px] h-[80px] rounded-lg  shadow-md">
            <div class="flex justify-center items-center p-3">
              <p class="mt-3 sm:text-base text-[8px]">ยังไม่มีรูปใหม่ที่เลือก</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-col mt-5 sm:w-full w-[80%] mx-auto">
      <input type="file" @change="handleFileUpload" accept="image/*" class="file-input file-input-bordered w-full" />
      <div class="flex justify-end">
        <div class="flex gap-3">
          <div class="mt-8">
            <p class="text-[12px] text-red-500">*คำเตือน "กดแล้วภาพเปลี่ยนเลย"</p>
          </div>
          <button @click="uploadImage" :disabled="!selectedFile" class="btn mt-5">
            อัพโหลด
          </button>
        </div>
      </div>
      <div v-if="errorMessage" class="text-red-500">
        {{ errorMessage }}
      </div>
    </div>

    <div class="mt-5">
      <div class="flex justify-center">
        <p class="text-2xl font-semibold">ข้อมูลร้านอาหาร</p>
      </div>

      <div class="grid sm:grid-cols-2 grid-cols-1 gap-3 sm:p-0 p-5">
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">ชื่อร้าน</span>
          </div>
          <input type="text" v-model="name" placeholder="ชื่อร้าน" class="input input-bordered w-full" />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">อีเมล</span>
          </div>
          <input type="text" v-model="email" placeholder="อีเมล" class="input input-bordered w-full " />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">เบอร์โทรศัพท์</span>
          </div>
          <input type="text" v-model="phoneNumber" placeholder="เบอร์โทรศัพท์" class="input input-bordered w-full " />
        </label>

        <label class="form-control w-full">
          <div class="label">
            <span class="label-text">ที่อยู่</span>
          </div>
          <input type="text" v-model="location" placeholder="ที่อยู่" class="input input-bordered w-full " />
        </label>
      </div>

      <div class="flex justify-center mt-5 mb-5">
        <div @click="updateRestaurant" class="bg-[#FF6347] p-3 rounded-full w-[300px] cursor-pointer">
          <p class="text-white text-center">ยืนยันการเปลี่ยนแปลง</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2';

const name = ref('')
const email = ref('')
const phoneNumber = ref('')
const location = ref('')
const restaurantImage = ref('')

const newImagePreview = ref(null)

const selectedFile = ref(null)
const errorMessage = ref('')
const restaurantId = ref(null)

const restaurants = ref([])

const fetchRestaurant = async () => {
  try {
    const id = parseInt(localStorage.getItem('restaurantId'))
    const response = await fetch('/api/restaurant', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    console.log('id:', id)
    restaurants.value = data.filter(restaurant => restaurant.restaurant_Id === id);

    name.value = restaurants.value[0].name
    email.value = restaurants.value[0].email
    phoneNumber.value = restaurants.value[0].phoneNumber
    location.value = restaurants.value[0].location
    restaurantImage.value = restaurants.value[0].restaurantImage

  } catch (err) {
    console.error('Error fetching courses:', err);
  }
};

const updateRestaurant = async () => {
  try {
    const id = parseInt(localStorage.getItem('restaurantId'))
    const response = await $fetch('/api/restaurants/update', {
      method: 'POST',
      body: {
        restaurant_Id: id,
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        location: location.value,
      },
    })

    if (response.success) {
      console.log('Update successful:', response.data)
      Swal.fire({
        icon: 'success',
        title: 'บันทึกสำเร็จ',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          container: 'font-prompt',
        }
      })
    } else {
      throw new Error(response.message)
    }
  } catch (error) {
    console.error('Error updating restaurant:', error)
    errorMessage.value = error.message
    Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: error.message,
      customClass: {
        container: 'font-prompt',
      }
    })
  }
}

onMounted(async () => {
  await fetchRestaurant()
  const storedRestaurantId = parseInt(localStorage.getItem('restaurantId'))
  console.log('image : ', restaurantImage.value)
  if (storedRestaurantId) {
    restaurantId.value = parseInt(storedRestaurantId, 10)
  } else {
    errorMessage.value = 'Restaurant ID not found in localStorage'
  }
})

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  console.log('file : ', file)
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value = 'File size should be less than 5MB'
      return
    }

    const validTypes = ['image/jpeg', 'image/png', 'image/gif']
    if (!validTypes.includes(file.type)) {
      errorMessage.value = 'Invalid file type. Please upload an image.'
      return
    }

    selectedFile.value = file
    newImagePreview.value = URL.createObjectURL(file)
    errorMessage.value = ''
  }
}

const uploadImage = async () => {
  if (!selectedFile.value) {
    errorMessage.value = 'Please select a file first'
    return
  }

  if (!restaurantId.value) {
    errorMessage.value = 'Restaurant ID is missing'
    return
  }

  const formData = new FormData()
  formData.append('file', selectedFile.value)
  formData.append('restaurantId', restaurantId.value)

  try {
    const response = await $fetch('/api/restaurants/upload-image', {
      method: 'POST',
      body: formData
    })

    console.log('Image uploaded:', response.imageUrl)
    selectedFile.value = null
    URL.revokeObjectURL(newImagePreview.value)
    Swal.fire({
      icon: 'success',
      title: 'บันทึกสำเร็จ',
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        container: 'font-prompt',
      }
    })

    URL.revokeObjectURL(newImagePreview.value)

    await fetchRestaurant()
  } catch (error) {
    errorMessage.value = error.message || 'Failed to upload image'
    Swal.fire({
      icon: 'error',
      title: 'เกิดข้อผิดพลาด',
      text: error.message,
      customClass: {
        container: 'font-prompt',
      }
    })
  }
}
</script>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}
</style>
