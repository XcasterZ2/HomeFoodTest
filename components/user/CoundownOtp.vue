<template>
  <div>
    <p class="text-base mt-4">00 : {{ countdown }} วินาที</p>
  </div>
</template>

<script setup>
const countdown = ref(60);

// Timer
const startCountdown = () => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

onUnmounted(() => {
  clearInterval(timer);
});

onMounted(() => {
  startCountdown();
});
</script>

<style>

</style>