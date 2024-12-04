<template>
  <div class="mx-auto max-w-7xl mt-5 pb-24">
    <div class="mx-auto">
      <Navbar />
    </div>

    <slot />

    <Menu class="fixed bottom-5 left-1 right-0 z-50 sm:hidden" />
    <MenuDesktop class="hidden sm:block fixed lg:bottom-[30%] xl:bottom-[35%] xl:left-2 left-2 z-50" />
  </div>
</template>

<script setup>
import Navbar from '~/components/user/Navbar'
import Menu from '~/components/user/Menu'
import MenuDesktop from '~/components/user/MenuDesktop.vue'
</script>

<style></style>