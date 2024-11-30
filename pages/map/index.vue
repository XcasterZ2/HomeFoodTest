// components/NostraMap.vue
<template>
  <div>
    <div id="map" ref="mapContainer" class="w-[700px] h-[500px]"></div>
    <div class="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md z-10">
      <div class="space-x-2 mb-4">
        <button 
          v-for="(mapType, index) in mapTypes" 
          :key="index"
          @click="switchMapType(mapType.name)"
          class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {{ mapType.label }}
        </button>
      </div>

      <div class="space-y-2">
        <div>
          <label class="block mb-2">Language:</label>
          <div class="flex items-center space-x-4">
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                :value="true" 
                v-model="isEnglish"
                @change="switchLanguage"
                class="mr-2"
              >
              English
            </label>
            <label class="inline-flex items-center">
              <input 
                type="radio" 
                :value="false" 
                v-model="isEnglish"
                @change="switchLanguage"
                class="mr-2"
              >
              Local
            </label>
          </div>
        </div>

        <div>
          <label class="block mb-2">Country:</label>
          <select 
            v-model="selectedCountry" 
            @change="switchCountry"
            class="w-full px-2 py-1 border rounded"
          >
            <option 
              v-for="country in countries" 
              :key="country.code" 
              :value="country.code"
            >
              {{ country.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ประเภทแผนที่
interface MapType {
  name: string
  label: string
}

// ประเทศ
interface Country {
  code: string
  name: string
}

const mapTypes: MapType[] = [
  { name: 'streetmap', label: 'Street Map' },
  { name: 'osm', label: 'OpenStreetMap' },
  { name: 'imagery', label: 'Imagery' },
  { name: 'hybrid', label: 'Hybrid' },
  { name: 'premium', label: 'Premium Map' }
]

const countries: Country[] = [
  { code: 'BN', name: 'Brunei' },
  { code: 'KH', name: 'Cambodia' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'LA', name: 'Laos' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'MM', name: 'Myanmar' },
  { code: 'PH', name: 'Philippines' },
  { code: 'SG', name: 'Singapore' },
  { code: 'TH', name: 'Thailand' },
  { code: 'VN', name: 'Vietnam' }
]

const mapContainer = ref<HTMLDivElement | null>(null)
const map = ref<any>(null)
const isEnglish = ref(true)
const selectedCountry = ref('TH')

const switchMapType = (type: string) => {
  switch(type) {
    case 'streetmap':
      switchStreetMap()
      break
    case 'osm':
      switchOSM()
      break
    case 'imagery':
      switchImagery()
      break
    case 'hybrid':
      switchHybrid()
      break
    case 'premium':
      switchPremiumMap()
      break
  }
}

const switchStreetMap = () => {
  if (map.value) {
    map.value.removeAllLayers()
    map.value.country = selectedCountry.value
    const streetMapLayer = new nostra.maps.layers.StreetMap(map.value)
    map.value.addLayer(streetMapLayer)
  }
}

const switchOSM = () => {
  if (map.value) {
    map.value.removeAllLayers()
    const basemapObj = new nostra.maps.layers.OpenStreetMap(map.value)
    map.value.addLayer(basemapObj)
  }
}

const switchImagery = () => {
  if (map.value) {
    map.value.removeAllLayers()
    const imageryLayer = new nostra.maps.layers.Imagery(map.value)
    map.value.addLayer(imageryLayer)
  }
}

const switchHybrid = () => {
  if (map.value) {
    map.value.removeAllLayers()
    map.value.country = 'TH'
    const imageryLayer = new nostra.maps.layers.Imagery(map.value)
    const hybridLineLayer = new nostra.maps.layers.HybridLine(map.value)
    map.value.addLayer(imageryLayer)
    map.value.addLayer(hybridLineLayer)
  }
}

const switchPremiumMap = () => {
  if (map.value) {
    map.value.removeAllLayers()
    map.value.country = 'TH'
    const streetMapLayer = new nostra.maps.layers.StreetMap(map.value)
    const premiumMapLayer = new nostra.maps.layers.PremiumMap(map.value)
    map.value.addLayer(streetMapLayer)
    map.value.addLayer(premiumMapLayer)
  }
}

const switchCountry = () => {
  if (map.value) {
    map.value.country = selectedCountry.value
    map.value.removeAllLayers()
    const streetMapLayer = new nostra.maps.layers.StreetMap(map.value)
    map.value.addLayer(streetMapLayer)
  }
}

const switchLanguage = () => {
  if (map.value) {
    const language = isEnglish.value 
      ? nostra.language.E 
      : nostra.language.L
    
    nostra.config.Language.setLanguage(language)
  }
}

onMounted(() => {
  // ต้องโหลด script จาก Nostra Map ก่อน
  const script = document.createElement('script')
  script.src = '//api.nostramap.com/nostraapi/v2.0?key=G1W2St(HFIuBjP5TDHDjUI8njILagdQGSG9LF)xiaM2ZosBH8Cba(wWrC6jTUKnnABafTuXDzKvLV2Fx7reeuwW=====2'
  script.async = true
  script.onload = () => {
    nostra.onready = () => {
      nostra.config.Language.setLanguage(nostra.language.E)
      map.value = new nostra.maps.Map(mapContainer.value, {
        id: "mapTest",
        logo: true,
        scalebar: true,
        basemap: "streetmap",
        slider: true,
        level: 15,
        lat: 18.7883,
        lon: 98.9853,
        country: selectedCountry.value
      })

      const streetMapLayer = new nostra.maps.layers.StreetMap(map.value)
      map.value.addLayer(streetMapLayer)
    }
  }
  document.head.appendChild(script)
})

onUnmounted(() => {
  if (map.value) {
    map.value.destroy()
  }
})
</script>

<style scoped>

</style>