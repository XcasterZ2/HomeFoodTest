<script setup>
import Title from '@/components/user/promotionComponents/Title.vue'
import SearchPromotion from '@/components/user/promotionComponents/SearchPromotion.vue'
import CheckboxList from '~/components/user/promotionComponents/checkboxList.vue';
import CheckboxList2 from '@/components/user/promotionComponents/checkboxList2.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="flex flex-col items-center h-screen w-full">
        <Title />
        <SearchPromotion />
        <div class="w-[288px] h-[542px] mt-[224px] gap-[12px] flex flex-col">
            <span class="w-[119px] h-[24px] font-prompt text-[16px] leading-[24px] text-left text-[#0D1217]">
                ข้อเสนอการจัดส่ง
            </span>
            <div>
                <CheckboxList />
            </div>
            <div class="w-[93px] h-[24px] top-[178px] font-prompt text-[16px] leading-[24px] text-left">
                สั่งซื้อข้อเสนอ
            </div>
            <div>
                <CheckboxList2 />
            </div>
            <RouterLink to="/promotion/morePromotion"
                class="flex items-center justify-between w-[288px] h-[59px] top-[356px] p-[16px] gap-[16px] rounded-[12px] bg-[#FFEFED]">
                <div class="w-[24px] h-[24px]">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.5V19.5" stroke="#FF6347" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M5 12.5H19" stroke="#FF6347" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div
                    class="w-[208px] h-[27px] font-prompt font-semibold text-[18px] leading-[27.22px] text-left text-[#FF6347]">
                    รับโปรโมชั่นเพิ่มเติม
                </div>
            </routerLink>
            <div class="w-[288px] h-[40px]"></div>
            <div
                class="flex items-center justify-center w-[288px] h-[53px] top-[463px] gap-[14px] rounded-[28px] bg-[#FF6347] shadow-[0px_4px_12px_0px_#0000000F]">
                <div
                    class="w-[55px] h-[27px] font-prompt font-semibold text-[18px] leading-[27.22px] text-left text-[#FFFFFF]">
                    นำไปใช้
                </div>
            </div> 
            <div class="w-[288px] h-[20px]"></div>
        </div>
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

.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.checkbox-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.checkbox-item.disabled {
    opacity: 0.5;

    pointer-events: none;

}

.checkbox-item input[type="checkbox"] {
    width: 20px;
    height: 20px;
}
</style>