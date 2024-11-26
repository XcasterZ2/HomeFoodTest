<script setup>
import { ref } from 'vue';

const selectedImage = ref(null);
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'พิมพ์บทวิจารณ์ของคุณ'
    }
});

// ฟังก์ชันจัดการการอัพโหลดรูปภาพจากกล้อง
const handleCameraUpload = () => {
    document.getElementById('cameraInput').click();
};

// ฟังก์ชันจัดการการอัพโหลดรูปภาพจากแกลลอรี่
const handleGalleryUpload = () => {
    document.getElementById('galleryInput').click();
};

// ฟังก์ชันจัดการไฟล์ที่อัพโหลด
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        // สร้าง URL สำหรับแสดงรูปภาพ
        selectedImage.value = URL.createObjectURL(file);
        // ที่นี่คุณสามารถเพิ่มโค้ดสำหรับอัพโหลดไฟล์ไปยังเซิร์ฟเวอร์
    }
};
</script>

<template>
    <div class="w-[272px] h-[100px] gap-3 relative">
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
            class="w-full h-full px-4 py-2 border border-[#E9EAEB] rounded-lg font-prompt text-[16px] leading-[24.19px] focus:outline-none focus:border-[#FF6347] resize-none"></textarea>

        <input id="galleryInput" type="file" accept="image/*" class="hidden" @change="handleFileUpload" />

        <!-- Buttons -->
        <div class="absolute bottom-2 right-2 flex gap-[8px]">
            <button class="p-2 rounded-full hover:bg-gray-100" @click="handleCameraUpload">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="#FF6347" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18Z"
                        fill="#FF6347" />
                </svg>
            </button>
            <button class="p-2 rounded-full hover:bg-gray-100" @click="handleGalleryUpload">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                        fill="#FF6347" />
                    <path d="M14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" fill="#FF6347" />
                </svg>
            </button>
        </div>
    </div>
</template>