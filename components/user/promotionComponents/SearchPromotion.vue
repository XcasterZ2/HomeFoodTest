<template>
    <div
        class="absolute top-[144px] w-[288px] h-[56px] flex gap-[12px] rounded-[8px] bg-[#1F2A370D] border border-[#E9EAEB] items-center justify-between">
        <input type="text" placeholder="รหัสโปรโมชั่น" class="w-[163px] h-[24px] ml-[24px] opacity-30" />
        <button class="w-[81px] h-[45px] rounded-tl-[20px] flex items-center justify-center px-4 py-[10.5px] gap-[6px]">
            <span class="font-prompt text-[16px] leading-[24.19px] text-[#FF6347]">
                นำมาใช้
            </span>
        </button>
    </div>
</template>

<style scoped>
.font-prompt {
    font-family: 'Prompt';
}

.bg-gradient-custom {
    background: linear-gradient(121.94deg, #FF6347 0%, #FF826C 100%);
}

.text-gradient-custom {
    background: linear-gradient(121.94deg, #FF6347 0%, #FF826C 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>