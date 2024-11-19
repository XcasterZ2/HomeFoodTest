<script setup>
import Menu from '~/components/user/Menu'
</script>

<template>
    <div class="mx-auto max-w-7xl mt-5 pb-24">
        <slot />

        <Menu class="fixed bottom-5 left-0 right-0 z-50" />
    </div>
</template>


<style scoped></style>