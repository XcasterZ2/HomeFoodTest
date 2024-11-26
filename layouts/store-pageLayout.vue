<script setup>
</script>

<template>
    <div class="relative mx-auto flex flex-col justify-center items-center w-[375px] h-full font-prompt overflow-hidden" >
        <slot />
    </div>


</template>

<style scoped>
.font-prompt {
  font-family: 'Prompt', sans-serif;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>

