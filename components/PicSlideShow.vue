<template>
    <TransitionGroup name="slide-fade">
        <div v-for="(image, index) in images" :key="index" v-show="currentSlide === index"
            class="absolute top-0 left-0 w-[80px]">
            <div class="flex items-center justify-center w-[80px] h-[96px]">
                <img :src="image" class="w-[76px] h-[76px] border-t-2 border-l-2 object-cover transition-transform duration-300 hover:scale-105">
            </div>
        </div>
    </TransitionGroup>
</template>

<script setup>
const selectedCategory = ref(null); // Changed default to null

const toggleCategory = (category) => {
    selectedCategory.value = selectedCategory.value === category ? null : category;
};

// Add new state for slideshow
const currentSlide = ref(0);
const images = [
    'https://s3-alpha-sig.figma.com/img/e5e9/4c2b/8d45787e1249989e6b26cef4d7e894d0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dz5AjBkRbB35Xv1YeX3dzUr9as45UMEvI9Jxha9qJmfA1TDkGrDpjLsrgzXVHUU5U1mcbTcdvB8~T800jjI9aYyRP5ifR5PrIy791ECQmOwxUj4Lc8D308cFA0El-uej3yhwIlWLjGcaVQSv5jH3hI2dLeNb7tcChicvPH0qTtZ5b805-7p-utYt9RkrwrMjWI876FOgJ2TMdfUbB8DdIvz~mYi0uK4Oc1aCVLJlDse7y3rX2aHTBu006c5qPlnuPdMXAAZm9s4kXtEYVOR7LWFl3sBFqiCq1B~V93zIxCN9EjY9MwnzepPuimNwCnIID3pC6ikLFpNNDh-NoTpAIA__',
    'https://s3-alpha-sig.figma.com/img/e006/d495/087fcf4b1c7ef579c1fd8d83dcb43977?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m6Jm-EJqk8u58uraDI4jCMqW0LkrAGhyskSQS1SoSQAd0Tm2TtdLvn24Qp~psYob0f8JxGTkdATwWkWM-P1oy1A2a0XrE-tRkiDI1QQGT7dWErzVzZeOHNLhaq~59JAMNN7sn283HZa42uiyb84qBmoBjYbkQS6s5Tug1pLFdPv1MXzEjbkBdMj8PLABAb851KV8lAlhA3p42ashhJGkPqU~8dMTKFdtGwFRYDRxvTD0gMBqel4-Wy8y3RwxvnapMKDJoTwYYUmGVqFrbcsYJy9yWJB4CuRzUEbyzuGSTUfUWI3kNVTVMEpwzVvZd-j4G7SChH9THCTBu7VANxOMeA__',
    'https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VAIekpWa45Hk5LvWTCeaE0y3ic8bjXGsL~tX9TuAgDmF1LTKHCgrIJ915BpanfwcYEoh9MxbaE3azrUgdr63YRtSxidLNOFaTHCBVBBwamPYpd8zT0mfg8LWkwssavf0gmj2OE2fMoQWYp2FSHVVkUuYa5MO~ptGHPxNGvDHcG9cTEv-yviqvpnXwEtMAzhharoousD7zoDQOvEOHGFtEyaJ-ljYOMG7iWGqhF1BeXvzZwJeoEkwJ3PFtwPkVnJ5AXYW~lcFHtdL0r5eIybEcVoDqqrB6K1Uk2B9V0oWiWj~WMwIWIdKK24y9-rw10kTdFkj5HbqR2AOmu5X30shWg__'
];

// Simplify auto-advance logic
onMounted(() => {
    const slideInterval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % images.length;
    }, 2000);

    // Cleanup
    onUnmounted(() => {
        clearInterval(slideInterval);
    });
});
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>