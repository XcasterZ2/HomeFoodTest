import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons' // เพิ่มไอคอนที่ขาดหายไป
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTachometerAlt, faUser) // เพิ่มไอคอนลงใน library

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})