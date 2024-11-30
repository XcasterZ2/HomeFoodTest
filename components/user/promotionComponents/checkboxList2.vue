<template>
  <div>
    <div class="flex items-center justify-between w-[288px] h-[59px] top-[36px] p-[16px] gap-[16px] rounded-[12px]"
      :class="{
        'bg-white': !isChecked2,
        'bg-gray-200': isChecked2,
        'opacity-50': isChecked2
      }">
      <div class="w-[24px] h-[24px]">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.99502 4.5H14.005C17.7856 4.5 19.6759 4.5 20.8504 5.67157C21.6591 6.47823 21.911 7.62339 21.9894 9.48947C22.005 9.85954 22.0128 10.0446 21.9437 10.168C21.8745 10.2915 21.5987 10.4455 21.0469 10.7537C20.4341 11.0959 20.0199 11.7497 20.0199 12.5C20.0199 13.2503 20.4341 13.9041 21.0469 14.2463C21.5987 14.5545 21.8745 14.7085 21.9437 14.832C22.0128 14.9554 22.005 15.1405 21.9894 15.5105C21.911 17.3766 21.6591 18.5218 20.8504 19.3284C19.6759 20.5 17.7856 20.5 14.005 20.5H9.99502C6.21438 20.5 4.32407 20.5 3.14958 19.3284C2.34091 18.5218 2.08903 17.3766 2.01058 15.5105C1.99502 15.1405 1.98724 14.9554 2.05634 14.832C2.12545 14.7085 2.40133 14.5545 2.95308 14.2463C3.56586 13.9041 3.98007 13.2503 3.98007 12.5C3.98007 11.7497 3.56586 11.0959 2.95308 10.7537C2.40133 10.4455 2.12545 10.2915 2.05634 10.168C1.98724 10.0446 1.99502 9.85954 2.01058 9.48947C2.08903 7.62339 2.34091 6.47823 3.14958 5.67157C4.32407 4.5 6.21439 4.5 9.99502 4.5ZM15.5478 8.96967C15.8415 9.26256 15.8415 9.73744 15.5478 10.0303L9.53289 16.0303C9.23927 16.3232 8.76321 16.3232 8.46959 16.0303C8.17596 15.7374 8.17596 15.2626 8.46959 14.9697L14.4845 8.96967C14.7782 8.67678 15.2542 8.67678 15.5478 8.96967ZM14.5149 16C15.0686 16 15.5174 15.5523 15.5174 15C15.5174 14.4477 15.0686 14 14.5149 14C13.9613 14 13.5124 14.4477 13.5124 15C13.5124 15.5523 13.9613 16 14.5149 16ZM9.50248 11C10.0561 11 10.505 10.5523 10.505 10C10.505 9.44772 10.0561 9 9.50248 9C8.94882 9 8.49999 9.44772 8.49999 10C8.49999 10.5523 8.94882 11 9.50248 11Z"
            fill="url(#paint0_linear_1413_1416)" />
          <defs>
            <linearGradient id="paint0_linear_1413_1416" x1="22.4934" y1="10.8889" x2="0.681839" y2="13.592"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FDDEA7" />
              <stop offset="1" stop-color="#FF826C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="w-[168px] h-[27px] flex items-center gap-[8px]">
        <span class="label-text font-prompt font-semibold text-left text-[18px] leading-[27.22px]">จัดส่งฟรี</span>
        <button class="w-[20px] h-[20px]" onclick="my_modal_3.showModal()">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.3333 10.4998C18.3333 15.1022 14.6023 18.8332 9.99996 18.8332C5.39759 18.8332 1.66663 15.1022 1.66663 10.4998C1.66663 5.89746 5.39759 2.1665 9.99996 2.1665C14.6023 2.1665 18.3333 5.89746 18.3333 10.4998ZM9.99996 6.95817C9.48219 6.95817 9.06246 7.3779 9.06246 7.89567C9.06246 8.24085 8.78264 8.52067 8.43746 8.52067C8.09228 8.52067 7.81246 8.24085 7.81246 7.89567C7.81246 6.68755 8.79184 5.70817 9.99996 5.70817C11.2081 5.70817 12.1875 6.68755 12.1875 7.89567C12.1875 8.48803 11.9512 9.02649 11.5691 9.41981C11.4922 9.49895 11.4189 9.57223 11.3489 9.64214C11.169 9.82184 11.0115 9.97928 10.8732 10.1569C10.6907 10.3914 10.625 10.5638 10.625 10.7082V11.3332C10.625 11.6783 10.3451 11.9582 9.99996 11.9582C9.65478 11.9582 9.37496 11.6783 9.37496 11.3332V10.7082C9.37496 10.1622 9.62913 9.7202 9.88677 9.38918C10.0774 9.14425 10.317 8.90512 10.5114 8.71106C10.5701 8.65252 10.6246 8.59808 10.6725 8.54881C10.8371 8.37936 10.9375 8.14987 10.9375 7.89567C10.9375 7.3779 10.5177 6.95817 9.99996 6.95817ZM9.99996 14.6665C10.4602 14.6665 10.8333 14.2934 10.8333 13.8332C10.8333 13.3729 10.4602 12.9998 9.99996 12.9998C9.53972 12.9998 9.16663 13.3729 9.16663 13.8332C9.16663 14.2934 9.53972 14.6665 9.99996 14.6665Z"
              fill="#BABDC1" />
          </svg>
        </button>
      </div>
      <input type="checkbox" v-model="isChecked1" @change="toggleCheckbox(1)" class="checkbox checkbox-error" />
    </div>

    <div class="flex items-center justify-between w-[288px] h-[59px] top-[36px] p-[16px] gap-[16px] rounded-[12px]"
      :class="{
        'bg-white': !isChecked1,
        'bg-gray-200': isChecked1,
        'opacity-50': isChecked1
      }">
      <div class="w-[24px] h-[24px]">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9.99502 4.5H14.005C17.7856 4.5 19.6759 4.5 20.8504 5.67157C21.6591 6.47823 21.911 7.62339 21.9894 9.48947C22.005 9.85954 22.0128 10.0446 21.9437 10.168C21.8745 10.2915 21.5987 10.4455 21.0469 10.7537C20.4341 11.0959 20.0199 11.7497 20.0199 12.5C20.0199 13.2503 20.4341 13.9041 21.0469 14.2463C21.5987 14.5545 21.8745 14.7085 21.9437 14.832C22.0128 14.9554 22.005 15.1405 21.9894 15.5105C21.911 17.3766 21.6591 18.5218 20.8504 19.3284C19.6759 20.5 17.7856 20.5 14.005 20.5H9.99502C6.21438 20.5 4.32407 20.5 3.14958 19.3284C2.34091 18.5218 2.08903 17.3766 2.01058 15.5105C1.99502 15.1405 1.98724 14.9554 2.05634 14.832C2.12545 14.7085 2.40133 14.5545 2.95308 14.2463C3.56586 13.9041 3.98007 13.2503 3.98007 12.5C3.98007 11.7497 3.56586 11.0959 2.95308 10.7537C2.40133 10.4455 2.12545 10.2915 2.05634 10.168C1.98724 10.0446 1.99502 9.85954 2.01058 9.48947C2.08903 7.62339 2.34091 6.47823 3.14958 5.67157C4.32407 4.5 6.21439 4.5 9.99502 4.5ZM15.5478 8.96967C15.8415 9.26256 15.8415 9.73744 15.5478 10.0303L9.53289 16.0303C9.23927 16.3232 8.76321 16.3232 8.46959 16.0303C8.17596 15.7374 8.17596 15.2626 8.46959 14.9697L14.4845 8.96967C14.7782 8.67678 15.2542 8.67678 15.5478 8.96967ZM14.5149 16C15.0686 16 15.5174 15.5523 15.5174 15C15.5174 14.4477 15.0686 14 14.5149 14C13.9613 14 13.5124 14.4477 13.5124 15C13.5124 15.5523 13.9613 16 14.5149 16ZM9.50248 11C10.0561 11 10.505 10.5523 10.505 10C10.505 9.44772 10.0561 9 9.50248 9C8.94882 9 8.49999 9.44772 8.49999 10C8.49999 10.5523 8.94882 11 9.50248 11Z"
            fill="url(#paint0_linear_1413_1416)" />
          <defs>
            <linearGradient id="paint0_linear_1413_1416" x1="22.4934" y1="10.8889" x2="0.681839" y2="13.592"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#FDDEA7" />
              <stop offset="1" stop-color="#FF826C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div class="w-[168px] h-[27px] flex items-center gap-[8px]">
        <span class="label-text font-prompt font-semibold text-left text-[18px] leading-[27.22px]">ส่วนลด 20%</span>
        <button class="w-[20px] h-[20px]" onclick="my_modal_4.showModal()">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M18.3333 10.4998C18.3333 15.1022 14.6023 18.8332 9.99996 18.8332C5.39759 18.8332 1.66663 15.1022 1.66663 10.4998C1.66663 5.89746 5.39759 2.1665 9.99996 2.1665C14.6023 2.1665 18.3333 5.89746 18.3333 10.4998ZM9.99996 6.95817C9.48219 6.95817 9.06246 7.3779 9.06246 7.89567C9.06246 8.24085 8.78264 8.52067 8.43746 8.52067C8.09228 8.52067 7.81246 8.24085 7.81246 7.89567C7.81246 6.68755 8.79184 5.70817 9.99996 5.70817C11.2081 5.70817 12.1875 6.68755 12.1875 7.89567C12.1875 8.48803 11.9512 9.02649 11.5691 9.41981C11.4922 9.49895 11.4189 9.57223 11.3489 9.64214C11.169 9.82184 11.0115 9.97928 10.8732 10.1569C10.6907 10.3914 10.625 10.5638 10.625 10.7082V11.3332C10.625 11.6783 10.3451 11.9582 9.99996 11.9582C9.65478 11.9582 9.37496 11.6783 9.37496 11.3332V10.7082C9.37496 10.1622 9.62913 9.7202 9.88677 9.38918C10.0774 9.14425 10.317 8.90512 10.5114 8.71106C10.5701 8.65252 10.6246 8.59808 10.6725 8.54881C10.8371 8.37936 10.9375 8.14987 10.9375 7.89567C10.9375 7.3779 10.5177 6.95817 9.99996 6.95817ZM9.99996 14.6665C10.4602 14.6665 10.8333 14.2934 10.8333 13.8332C10.8333 13.3729 10.4602 12.9998 9.99996 12.9998C9.53972 12.9998 9.16663 13.3729 9.16663 13.8332C9.16663 14.2934 9.53972 14.6665 9.99996 14.6665Z"
              fill="#BABDC1" />
          </svg>
        </button>
      </div>
      <input type="checkbox" v-model="isChecked2" @change="toggleCheckbox(2)" class="checkbox checkbox-error" />
    </div>
    <dialog id="my_modal_3" class="modal">
      <div class="modal-box" style="width: 320px; height: 716px;">
        <h3 class="text-[18px] leading-[27.22px] text-[#0D1217] font-prompt font-semibold text-center"
          style="width: 272px; height: 27px;">ข้อมูลโปรโมชั่น</h3>
        <div class="w-[100px] h-[100px] gap-[10px] flex items-center justify-center mx-auto my-auto">
          <svg width="84" height="68" viewBox="0 0 84 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M33.6461 0.666656H50.3543C66.1069 0.666656 73.9832 0.666656 78.8769 5.54821C82.2464 8.90928 83.2959 13.6808 83.6228 21.4561C83.6876 22.9981 83.72 23.7691 83.4321 24.2834C83.1441 24.7978 81.9946 25.4397 79.6957 26.7236C77.1424 28.1494 75.4165 30.8736 75.4165 34C75.4165 37.1263 77.1424 39.8506 79.6957 41.2764C81.9946 42.5603 83.1441 43.2022 83.4321 43.7166C83.72 44.2309 83.6876 45.0019 83.6228 46.5439C83.2959 54.3192 82.2464 59.0907 78.8769 62.4518C73.9832 67.3333 66.1069 67.3333 50.3543 67.3333H33.6461C17.8934 67.3333 10.0171 67.3333 5.1234 62.4518C1.75396 59.0907 0.70446 54.3192 0.377568 46.5439C0.312741 45.0019 0.280327 44.2309 0.568263 43.7166C0.856197 43.2022 2.00572 42.5602 4.30467 41.2764C6.85789 39.8506 8.58378 37.1263 8.58378 34C8.58378 30.8736 6.85789 28.1494 4.30467 26.7236C2.00569 25.4397 0.856199 24.7978 0.568263 24.2834C0.280327 23.7691 0.312741 22.9981 0.377568 21.4561C0.70446 13.6808 1.75396 8.90928 5.1234 5.54821C10.0171 0.666656 17.8934 0.666656 33.6461 0.666656ZM56.7828 19.2903C58.0062 20.5107 58.0062 22.4893 56.7828 23.7097L31.7205 48.7097C30.4971 49.9301 28.5135 49.9301 27.2901 48.7097C26.0667 47.4893 26.0667 45.5107 27.2901 44.2903L52.3524 19.2903C53.5758 18.0699 55.5594 18.0699 56.7828 19.2903ZM52.4791 48.5833C54.786 48.5833 56.6561 46.7178 56.6561 44.4167C56.6561 42.1155 54.786 40.25 52.4791 40.25C50.1722 40.25 48.302 42.1155 48.302 44.4167C48.302 46.7178 50.1722 48.5833 52.4791 48.5833ZM31.5938 27.75C33.9008 27.75 35.7709 25.8845 35.7709 23.5833C35.7709 21.2821 33.9008 19.4167 31.5938 19.4167C29.2869 19.4167 27.4168 21.2821 27.4168 23.5833C27.4168 25.8845 29.2869 27.75 31.5938 27.75Z"
              fill="url(#paint0_linear_1_6853)" />
            <defs>
              <linearGradient id="paint0_linear_1_6853" x1="85.7228" y1="27.287" x2="-5.15884" y2="38.5499"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDDEA7" />
                <stop offset="1" stop-color="#FF826C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p class="w-[70px] h-[27px] font-prompt text-[18px] font-semibold leading-[27.22px] mx-auto my-auto">จัดส่งฟรี</p>
        <div class="w-[288px] h-[458px] gap-[16px] flex flex-col">
          <div class="w-[288px] h-[75px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">คำอธิบาย :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">เพลิดเพลินกับการจัดส่งฟรีสำหรับทุกคำสั่งซื้อตลอดเดือนนี้!</span>
          </div>
          <div class="w-[288px] h-[51px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">ระยะเวลา :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">01/05/2024  -  31/05/2024</span>
          </div>
          <div class="w-[288px] h-[51px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">รหัสโปรโมชั่น :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">FREESHIP</span>
          </div>
          <div class="w-[288px] h-[75px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">ขอบเขตที่ใช้บังคับ :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">ใช้ได้กับทุกคำสั่งซื้อบนเว็บไซต์และ
              แอพของเรา</span>
          </div>
          <div class="w-[288px] h-[51px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">จำนวนส่วนลด :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">ส่วนลดค่าจัดส่ง 100% (จัดส่งฟรี)</span>
          </div>
          <div class="w-[288px] h-[75px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">เงื่อนไขและข้อตกลง :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">ไม่มีข้อกำหนดการสั่งซื้อขั้นต่ำ ใช้ได้กับการจัดส่งมาตรฐานภายในประเทศ</span>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="my_modal_4" class="modal">
      <div class="modal-box" style="width: 320px; height: 716px;">
        <h3 class="text-[18px] leading-[27.22px] text-[#0D1217] font-prompt font-semibold text-center"
          style="width: 272px; height: 27px;">ข้อมูลโปรโมชั่น</h3>
        <div class="w-[100px] h-[100px] gap-[10px] flex items-center justify-center mx-auto my-auto">
          <svg width="84" height="68" viewBox="0 0 84 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M33.6461 0.666656H50.3543C66.1069 0.666656 73.9832 0.666656 78.8769 5.54821C82.2464 8.90928 83.2959 13.6808 83.6228 21.4561C83.6876 22.9981 83.72 23.7691 83.4321 24.2834C83.1441 24.7978 81.9946 25.4397 79.6957 26.7236C77.1424 28.1494 75.4165 30.8736 75.4165 34C75.4165 37.1263 77.1424 39.8506 79.6957 41.2764C81.9946 42.5603 83.1441 43.2022 83.4321 43.7166C83.72 44.2309 83.6876 45.0019 83.6228 46.5439C83.2959 54.3192 82.2464 59.0907 78.8769 62.4518C73.9832 67.3333 66.1069 67.3333 50.3543 67.3333H33.6461C17.8934 67.3333 10.0171 67.3333 5.1234 62.4518C1.75396 59.0907 0.70446 54.3192 0.377568 46.5439C0.312741 45.0019 0.280327 44.2309 0.568263 43.7166C0.856197 43.2022 2.00572 42.5602 4.30467 41.2764C6.85789 39.8506 8.58378 37.1263 8.58378 34C8.58378 30.8736 6.85789 28.1494 4.30467 26.7236C2.00569 25.4397 0.856199 24.7978 0.568263 24.2834C0.280327 23.7691 0.312741 22.9981 0.377568 21.4561C0.70446 13.6808 1.75396 8.90928 5.1234 5.54821C10.0171 0.666656 17.8934 0.666656 33.6461 0.666656ZM56.7828 19.2903C58.0062 20.5107 58.0062 22.4893 56.7828 23.7097L31.7205 48.7097C30.4971 49.9301 28.5135 49.9301 27.2901 48.7097C26.0667 47.4893 26.0667 45.5107 27.2901 44.2903L52.3524 19.2903C53.5758 18.0699 55.5594 18.0699 56.7828 19.2903ZM52.4791 48.5833C54.786 48.5833 56.6561 46.7178 56.6561 44.4167C56.6561 42.1155 54.786 40.25 52.4791 40.25C50.1722 40.25 48.302 42.1155 48.302 44.4167C48.302 46.7178 50.1722 48.5833 52.4791 48.5833ZM31.5938 27.75C33.9008 27.75 35.7709 25.8845 35.7709 23.5833C35.7709 21.2821 33.9008 19.4167 31.5938 19.4167C29.2869 19.4167 27.4168 21.2821 27.4168 23.5833C27.4168 25.8845 29.2869 27.75 31.5938 27.75Z"
              fill="url(#paint0_linear_1_6853)" />
            <defs>
              <linearGradient id="paint0_linear_1_6853" x1="85.7228" y1="27.287" x2="-5.15884" y2="38.5499"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FDDEA7" />
                <stop offset="1" stop-color="#FF826C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <p class="w-[70px] h-[27px] font-prompt text-[18px] font-semibold leading-[27.22px] mx-auto my-auto">จัดส่งฟรี</p>
        <div class="w-[288px] h-[458px] gap-[16px] flex flex-col">
          <div class="w-[288px] h-[75px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">คำอธิบาย :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">เพลิดเพลินกับการจัดส่งฟรีสำหรับทุกคำสั่งซื้อตลอดเดือนนี้!</span>
          </div>
          <div class="w-[288px] h-[51px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">ระยะเวลา :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">01/05/2024  -  31/05/2024</span>
          </div>
          <div class="w-[288px] h-[51px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">รหัสโปรโมชั่น :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">FREESHIP</span>
          </div>
          <div class="w-[288px] h-[75px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">ขอบเขตที่ใช้บังคับ :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">ใช้ได้กับทุกคำสั่งซื้อบนเว็บไซต์และ
              แอพของเรา</span>
          </div>
          <div class="w-[288px] h-[51px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">จำนวนส่วนลด :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">ส่วนลดค่าจัดส่ง 100% (จัดส่งฟรี)</span>
          </div>
          <div class="w-[288px] h-[75px] gap-[8px] flex flex-col">
            <span class="w-[288px] h-[19px] font-prompt font-semibold text-[16px] leading-[24.19px] text-left text-[#0D1217]">เงื่อนไขและข้อตกลง :</span>
            <span class="w-[288px] h-[19px] font-prompt text-[16px] leading-[24.19px] text-left">ไม่มีข้อกำหนดการสั่งซื้อขั้นต่ำ ใช้ได้กับการจัดส่งมาตรฐานภายในประเทศ</span>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isChecked1 = ref(false);
const isChecked2 = ref(false);

const toggleCheckbox = (checkboxId) => {
  if (checkboxId === 1 && isChecked1.value) {
    isChecked2.value = false;
  } else if (checkboxId === 2 && isChecked2.value) {
    isChecked1.value = false;
  }
};
</script>

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