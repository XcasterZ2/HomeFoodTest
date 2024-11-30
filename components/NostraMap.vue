<template>
  <div id="nostra-map" style="width: 100%; height: 500px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()

onMounted(() => {
  // ตรวจสอบว่ามี Script อยู่แล้วหรือยัง
  if (!document.querySelector('script[src="https://api.nostramap.com/nostramap.min.js"]')) {
    const script = document.createElement('script')
    script.src = 'https://api.nostramap.com/nostramap.min.js'
    script.onload = () => initializeMap() // เรียกใช้ฟังก์ชันหลังโหลดสำเร็จ
    document.head.appendChild(script)
  } else {
    initializeMap()
  }

  const initializeMap = () => {
    const apiKey = window.$nuxt.$config.nostraApiKey;
    const referer = window.$nuxt.$config.nostraApiReferer;
    // รอให้ Nostra พร้อมใช้งาน
    window.Nostra.onLoad = () => {
      const map = new window.Nostra.maps.Map('nostra-map', {
        apiKey: apiKey,
        referer: referer,
        center: { lat: 13.7563, lng: 100.5018 }, // Bangkok
        zoom: 10,
      })

      // ตัวอย่างการเพิ่ม Marker
      new window.Nostra.maps.Marker({
        position: { lat: 13.7563, lng: 100.5018 },
        map: map,
      })
    }
  }
})
</script>
