<template>
    <form @submit.prevent="uploadFile">
        <input type="file" @change="handleFileChange" />
        <button type="submit">Upload</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const file = ref(null)

const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
        console.log('Selected file:', selectedFile)
        file.value = selectedFile
    } else {
        console.error('No file selected')
    }
}

const uploadFile = async () => {
    if (!file.value) {
        console.error('No file selected');
        return;
    }

    const formData = new FormData();
    formData.append('file', file.value);

    try {
        const response = await axios.post('/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Upload success:', response.data);
    } catch (error) {
        console.error('Error uploading file:', error.response ? error.response.data : error.message);
    }
};

</script>