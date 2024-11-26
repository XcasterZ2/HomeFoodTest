<script setup>


const selectedSort = ref('ล่าสุด');
const dropdownRef = ref(null);
const handleSort = (value) => {
    selectedSort.value = value;
    // ปิด dropdown โดยตรงผ่าน details element
    if (dropdownRef.value) {
        dropdownRef.value.removeAttribute('open');
    }
};

// Function to handle image scrolling
const handleScroll = (direction) => {
    const container = document.querySelector('.scroll-smooth');
    const scrollAmount = 75 + 12; // Image width + gap

    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};
</script>



<template>

<div class="w-full h-full p-5 gap-5 flex flex-col">
        <div class="w-full h-[42px] flex justify-start items-center">
            <span class="font-prompt text-[18px] font-semibold leading-[27.22px] text-[#0D1217] h-[27px]">
                รีวิวลูกค้า
            </span>
        </div>
        <div class="w-full h-[140px] grid grid-cols-2">
            <div class="h-full gap-[8px] flex flex-col">
                <div class="w-full h-[60px] flex justify-center items-center">
                    <span class="font-prompt text-[40px] font-semibold leading-[60.48px] text-center">4.9</span>
                </div>
                <div class="w-full h-auto flex justify-center items-center">
                    <div class="rating rating-sm rating-half pointer-events-none">
                        <!-- ดาวชุดแรก (คะแนนรวม) -->
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-1 bg-[#FFC700]"
                            checked="checked" />
                        <input type="radio" name="rating-total" class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                    </div>
                </div>
                <div class="w-full h-[49px] flex justify-center items-center">
                    <span
                        class="font-prompt text-[16px] font-normal leading-[24.19px] text-center text-[#697079]">(1,205)</span>
                </div>
            </div>
            <div class="h-full flex flex-col justify-center gap-[8px]">
                <div class="flex items-center gap-x-2">
                    <span class="font-prompt text-[14px] text-[#697079] min-w-[10px]">5</span>
                    <progress class="progress progress-error w-full" value="0" max="100"></progress>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="font-prompt text-[14px] text-[#697079] min-w-[10px]">4</span>
                    <progress class="progress progress-error w-full" value="10" max="100"></progress>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="font-prompt text-[14px] text-[#697079] min-w-[10px]">3</span>
                    <progress class="progress progress-error w-full" value="40" max="100"></progress>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="font-prompt text-[14px] text-[#697079] min-w-[10px]">2</span>
                    <progress class="progress progress-error w-full" value="70" max="100"></progress>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="font-prompt text-[14px] text-[#697079] min-w-[10px]">1</span>
                    <progress class="progress progress-error w-full" value="100" max="100"></progress>
                </div>
            </div>
        </div>
        <div class="w-full h-[33px] flex justify-between items-center">
            <span class="font-prompt text-[16px] font-normal leading-[24.19px] text-[#0D1217]">ตัวกรอง</span>
            <div
                class="w-[120px] h-full rounded-[20px] flex justify-center items-center bg-gradient-to-r from-[#FF6347] to-[#FF826C] relative">
                <details ref="dropdownRef" class="dropdown dropdown-end">
                    <summary class="flex items-center justify-between gap-1 cursor-pointer text-white">
                        <span class="font-prompt text-[14px]">{{ selectedSort }}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6L8 10L12 6" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </summary>
                    <ul class="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32 mt-1">
                        <li>
                            <a @click="handleSort('ล่าสุด')"
                                class="font-prompt text-[14px] text-[#0D1217] hover:bg-gradient-to-r hover:from-[#FF6347] hover:to-[#FF826C] hover:text-white active:bg-gradient-to-r active:from-[#FF6347] active:to-[#FF826C] active:text-white">
                                ล่าสุด
                            </a>
                        </li>
                        <li>
                            <a @click="handleSort('เก่าสุด')"
                                class="font-prompt text-[14px] text-[#0D1217] hover:bg-gradient-to-r hover:from-[#FF6347] hover:to-[#FF826C] hover:text-white active:bg-gradient-to-r active:from-[#FF6347] active:to-[#FF826C] active:text-white">
                                เก่าสุด
                            </a>
                        </li>
                        <li>
                            <a @click="handleSort('คะแนนมากสุด')"
                                class="font-prompt text-[14px] text-[#0D1217] hover:bg-gradient-to-r hover:from-[#FF6347] hover:to-[#FF826C] hover:text-white active:bg-gradient-to-r active:from-[#FF6347] active:to-[#FF826C] active:text-white">
                                คะแนนมากสุด
                            </a>
                        </li>
                        <li>
                            <a @click="handleSort('คะแนนน้อยสุด')"
                                class="font-prompt text-[14px] text-[#0D1217] hover:bg-gradient-to-r hover:from-[#FF6347] hover:to-[#FF826C] hover:text-white active:bg-gradient-to-r active:from-[#FF6347] active:to-[#FF826C] active:text-white">
                                คะแนนน้อยสุด
                            </a>
                        </li>
                    </ul>
                </details>
            </div>
        </div>
        <div class="w-full h-auto flex flex-col gap-[24px]">
            <div class="w-full h-auto gap-[12px] flex flex-col">
                <div class="w-full h-[56px] gap-[16px] flex justify-between items-center">
                    <div
                        class="w-[48px] h-[48px] rounded-[64px] bg-[#E9EAEB] overflow-hidden flex justify-center items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/2499/aab5/8bf8eb58e89c9bf2683bd114a905cf97?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9~nflXE8QzGpbQu-lPaJuUZCrwmajsbSpCn-PEjxOTlpiCQRpxIgfD~G8UmDubzpeTFZnu4KN9QOPZDyl5YqyqXUb4ulrJ0b-59JKCh4o6ETBECV1uwOrMS6s9mI-R~O39pkMWmUeYH6FZX5YtWL-LFHO9Qs0MnXezeE2g6MahKmsPN9~E5skXVjuQlHspETmpgQ~VWA67yc1Mxn5dI8ReDFuQTQs7kQgveDa5~JxmE2j1XiKIU7QiawoHgd5BW7IVjES4N41p6yhGLwZvF33HQNcdz2iRcbe6aBwePTtjV7wNQOYl~xriU4yh6sKId38ennZo85QabX8oe-dG9xQ__"
                            alt="profile" class="w-full h-full object-cover">
                    </div>
                    <div class="w-[114px] h-full flex flex-col gap-[8px]">
                        <span
                            class="w-full h-[24px] font-prompt text-[16px] font-semibold leading-[24.19px] text-[#0D1217] truncate">john
                            Doe</span>
                        <span
                            class="w-full h-[24px] font-prompt text-[16px] font-semibold leading-[24.19px] text-[#989DA3] truncate">29/03/2024</span>
                    </div>
                    <div class="w-[94px] h-full flex justify-center  items-start">
                        <div class="rating rating-sm rating-half pointer-events-none">
                            <!-- ดาวชุดที่สอง (คะแนนรีวิว) -->
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review" class="mask mask-star-2 mask-half-2 bg-[#FFC700]"
                                checked="checked" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto ">
                    <span class="font-prompt text-[16px] font-normal leading-[24px] text-[#0D1217]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </span>
                </div>
                <div class="w-auto h-[75px] overflow-hidden flex gap-[12px] relative">
                    <!-- Left Arrow -->
                    <!-- <button @click="handleScroll('left')" class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10 shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19L8 12L15 5" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> -->

                    <!-- Images Container with Horizontal Scroll -->
                    <div class="flex gap-[12px] overflow-x-auto scrollbar-hide scroll-smooth">
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>

                    </div>

                    <!-- Right Arrow -->
                    <!-- <button @click="handleScroll('right')" class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10 shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> -->
                </div>
            </div>


        </div>
        <div class="w-full h-auto flex flex-col gap-[24px]">
            <div class="w-full h-auto gap-[12px] flex flex-col">
                <div class="w-full h-[56px] gap-[16px] flex justify-between items-center">
                    <div
                        class="w-[48px] h-[48px] rounded-[64px] bg-[#E9EAEB] overflow-hidden flex justify-center items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/2499/aab5/8bf8eb58e89c9bf2683bd114a905cf97?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9~nflXE8QzGpbQu-lPaJuUZCrwmajsbSpCn-PEjxOTlpiCQRpxIgfD~G8UmDubzpeTFZnu4KN9QOPZDyl5YqyqXUb4ulrJ0b-59JKCh4o6ETBECV1uwOrMS6s9mI-R~O39pkMWmUeYH6FZX5YtWL-LFHO9Qs0MnXezeE2g6MahKmsPN9~E5skXVjuQlHspETmpgQ~VWA67yc1Mxn5dI8ReDFuQTQs7kQgveDa5~JxmE2j1XiKIU7QiawoHgd5BW7IVjES4N41p6yhGLwZvF33HQNcdz2iRcbe6aBwePTtjV7wNQOYl~xriU4yh6sKId38ennZo85QabX8oe-dG9xQ__"
                            alt="profile" class="w-full h-full object-cover">
                    </div>
                    <div class="w-[114px] h-full flex flex-col gap-[8px]">
                        <span
                            class="w-full h-[24px] font-prompt text-[16px] font-semibold leading-[24.19px] text-[#0D1217] truncate">john
                            Doe</span>
                        <span
                            class="w-full h-[24px] font-prompt text-[16px] font-semibold leading-[24.19px] text-[#989DA3] truncate">29/03/2024</span>
                    </div>
                    <div class="w-[94px] h-full flex justify-center  items-start">
                        <div class="rating rating-sm rating-half pointer-events-none">
                            <!-- ดาวชุดที่สอง (คะแนนรีวิว) -->
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review" class="mask mask-star-2 mask-half-2 bg-[#FFC700]"
                                checked="checked" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto ">
                    <span class="font-prompt text-[16px] font-normal leading-[24px] text-[#0D1217]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </span>
                </div>
                <div class="w-auto h-[75px] overflow-hidden flex gap-[12px] relative">
                    <!-- Left Arrow -->
                    <!-- <button @click="handleScroll('left')" class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10 shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19L8 12L15 5" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> -->

                    <!-- Images Container with Horizontal Scroll -->
                    <div class="flex gap-[12px] overflow-x-auto scrollbar-hide scroll-smooth">
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>

                    </div>

                    <!-- Right Arrow -->
                    <!-- <button @click="handleScroll('right')" class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10 shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> -->
                </div>
            </div>


        </div>
        <div class="w-full h-auto flex flex-col gap-[24px]">
            <div class="w-full h-auto gap-[12px] flex flex-col">
                <div class="w-full h-[56px] gap-[16px] flex justify-between items-center">
                    <div
                        class="w-[48px] h-[48px] rounded-[64px] bg-[#E9EAEB] overflow-hidden flex justify-center items-center">
                        <img src="https://s3-alpha-sig.figma.com/img/2499/aab5/8bf8eb58e89c9bf2683bd114a905cf97?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V9~nflXE8QzGpbQu-lPaJuUZCrwmajsbSpCn-PEjxOTlpiCQRpxIgfD~G8UmDubzpeTFZnu4KN9QOPZDyl5YqyqXUb4ulrJ0b-59JKCh4o6ETBECV1uwOrMS6s9mI-R~O39pkMWmUeYH6FZX5YtWL-LFHO9Qs0MnXezeE2g6MahKmsPN9~E5skXVjuQlHspETmpgQ~VWA67yc1Mxn5dI8ReDFuQTQs7kQgveDa5~JxmE2j1XiKIU7QiawoHgd5BW7IVjES4N41p6yhGLwZvF33HQNcdz2iRcbe6aBwePTtjV7wNQOYl~xriU4yh6sKId38ennZo85QabX8oe-dG9xQ__"
                            alt="profile" class="w-full h-full object-cover">
                    </div>
                    <div class="w-[114px] h-full flex flex-col gap-[8px]">
                        <span
                            class="w-full h-[24px] font-prompt text-[16px] font-semibold leading-[24.19px] text-[#0D1217] truncate">john
                            Doe</span>
                        <span
                            class="w-full h-[24px] font-prompt text-[16px] font-semibold leading-[24.19px] text-[#989DA3] truncate">29/03/2024</span>
                    </div>
                    <div class="w-[94px] h-full flex justify-center  items-start">
                        <div class="rating rating-sm rating-half pointer-events-none">
                            <!-- ดาวชุดที่สอง (คะแนนรีวิว) -->
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review" class="mask mask-star-2 mask-half-2 bg-[#FFC700]"
                                checked="checked" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-1 bg-[#FFC700]" />
                            <input type="radio" name="rating-review"
                                class="mask mask-star-2 mask-half-2 bg-[#FFC700]" />
                        </div>
                    </div>
                </div>
                <div class="w-full h-auto ">
                    <span class="font-prompt text-[16px] font-normal leading-[24px] text-[#0D1217]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </span>
                </div>
                <div class="w-auto h-[75px] overflow-hidden flex gap-[12px] relative">
                    <!-- Left Arrow -->
                    <!-- <button @click="handleScroll('left')" class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10 shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19L8 12L15 5" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> -->

                    <!-- Images Container with Horizontal Scroll -->
                    <div class="flex gap-[12px] overflow-x-auto scrollbar-hide scroll-smooth">
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>
                        <div class="w-[75px] h-[75px] flex-shrink-0 rounded-[8px] overflow-hidden">
                            <img src="https://s3-alpha-sig.figma.com/img/5ee8/709a/0a3b0631f29f363a604aae79e0af2d8f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8QthKTcgcc2IXERXO2FQerU7OlJ84qW9iZbHxOqqA6C9mqSyY21yH6XQzL4U0HYsHMH9iGax5qjHodX8f7NdhvHGB5QhDChy86HSzOCb~gSSZhYP2QH3NuXz2dWO4qjsJrqoA3wCKgGKCucPD0qCwNl4i8GubTVQaqIrSmzKvRHToUqgoFk3vSzLVi05QX5RsirNLUdFue1fVM8p9NthYMLV6QUwgCpAh5W1ihZvBiRTseXV7N2UZCAis7I~EIIg06yLoHSzupquBYV-fCPK0cMRTa8tZJwN4rN0RbaaVg4~YGRCh9V8jt2AAs1e~QSb0RpjJv9PAHh4fl0YjdP-Q__"
                                alt="" class="w-full h-full object-cover">
                        </div>

                    </div>

                    <!-- Right Arrow -->
                    <!-- <button @click="handleScroll('right')" class="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center z-10 shadow-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 5L16 12L9 19" stroke="#0D1217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button> -->
                </div>
            </div>


        </div>
    </div>

</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>
