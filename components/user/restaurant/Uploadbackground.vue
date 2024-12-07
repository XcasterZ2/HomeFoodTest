<template>
  <div>
    <input type="file" @change="handleFileUpload" accept="image/jpeg,image/png,image/webp" />
    <button @click="uploadBackgroundImage">อัปโหลดภาพพื้นหลัง</button>
  </div>
  <div v-if="errorMessage" class="text-red-500">
    {{ errorMessage }}
  </div>
</template>

<script setup>
const selectedFile = ref(null)
const restaurantId = ref(/* your restaurant ID */)
const errorMessage = ref('')

const handleFileUpload = (event) => {
  const file = event.target.files[0]
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

const uploadBackgroundImage = async () => {
  if (!selectedFile.value) {
    alert('กรุณาเลือกรูปภาพก่อน')
    return
  }

  const formData = new FormData()
  formData.append('file', selectedFile.value)
  formData.append('restaurantId', restaurantId.value)

  try {
    const response = await $fetch('/api/restaurants/upload-backgroundimage', {
      method: 'POST',
      body: formData
    })

    alert('อัปโหลดภาพพื้นหลังสำเร็จ')
  } catch (error) {
    alert('เกิดข้อผิดพลาดในการอัปโหลดภาพพื้นหลัง')
  }
}
</script>