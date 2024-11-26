<template>
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">จัดการเมนูอาหาร</h1>
      <button
        @click="showForm = true"
        class="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
      >
        เพิ่มเมนูใหม่
      </button>
    </div>

    <!-- Modal สำหรับฟอร์มเพิ่มเมนู -->
    <div v-if="showForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg w-full max-w-2xl">
        <MenuForm 
          @submit="handleSubmitMenu"
          @cancel="showForm = false"
        />
      </div>
    </div>

    <!-- แสดงรายการเมนู -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="menu in menus"
        :key="menu.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <img
          :src="menu.image || '/default-menu-image.jpg'"
          :alt="menu.name"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h3 class="text-xl font-semibold">{{ menu.name }}</h3>
          <p class="text-gray-600 mt-2">{{ menu.description }}</p>
          <div class="flex justify-between items-center mt-4">
            <span class="text-primary-600 font-bold">฿{{ menu.price }}</span>
            <span class="text-sm text-gray-500">{{ menu.category }}</span>
          </div>
          <div class="mt-4 flex space-x-2">
            <button
              @click="handleEditMenu(menu)"
              class="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50"
            >
              แก้ไข
            </button>
            <button
              @click="handleDeleteMenu(menu.id)"
              class="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50"
            >
              ลบ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const restaurantId = Number(route.params.id)
const showForm = ref(false)
const menus = ref([])

// โหลดข้อมูลเมนูเมื่อเข้าหน้า
const loadMenus = async () => {
  try {
    const response = await $fetch(`/api/menu/restaurant/${restaurantId}`)
    menus.value = response
  } catch (error) {
    console.error('Error loading menus:', error)
  }
}

// จัดการการส่งฟอร์ม
const handleSubmitMenu = async (formData) => {
  try {
    await $fetch('/api/menu', {
      method: 'POST',
      body: {
        ...formData,
        restaurantId
      }
    })
    
    showForm.value = false
    await loadMenus()
  } catch (error) {
    console.error('Error submitting menu:', error)
  }
}

// จัดการการลบเมนู
const handleDeleteMenu = async (menuId) => {
  if (confirm('คุณแน่ใจหรือไม่ที่จะลบเมนูนี้?')) {
    try {
      await $fetch(`/api/menu/${menuId}`, {
        method: 'DELETE'
      })
      await loadMenus()
    } catch (error) {
      console.error('Error deleting menu:', error)
    }
  }
}

// โหลดข้อมูลเมื่อเริ่มต้น
onMounted(() => {
  loadMenus()
  console.log('menu : ' , menus.value)
})
</script>