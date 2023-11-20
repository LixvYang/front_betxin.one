<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div
    id="topic-item"
    class="max-w-md flex flex-col flex-wrap justify-start align-center"
  >
    <div class="flex flex-row shrink">
      <div class="shrink">
        <img
          class="object-cover p-3 w-32 rounded-3xl"
          src="https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Flayerzero-_df7f824af5f4784a3b82e9880e3c0885_256x256_qual_100.webp&w=256&q=100"
          alt=""
        />
      </div>
      <div class="flex flex-col p-2 gap-1 shrink">
        <p class="mb-2 font-bold text-gray-700 dark:text-white">价格</p>
        <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
          比特币会在2025年1月1日涨到100k美元吗？
        </p>
      </div>
    </div>

    <div class="w-95 relative mx-4 p-1">
      <div class="h-5 bg-red-400 rounded dark:bg-red-400">
        <div class="h-5 bg-green-400 rounded" style="width: 20%">
          <span class="relative left-20">90%</span>
        </div>
      </div>
    </div>

    <div id="amount" class="relative p-1 flex flex-row place-content-between">
      <div class="relative left-10 text-gray-700 dark:text-white">Bet $200</div>

      <div class="relative right-10 text-gray-700 dark:text-white">
        <span class="relative right-1">
          <Icon
            name="iconamoon:comment-dots-thin"
            color="black"
            size="1.5rem"
          />
        </span>

        <span class="relative left-1">
          <Icon
            name="material-symbols:kid-star-sharp"
            color="yellow"
            size="1.5rem"
          />
        </span>
      </div>
    </div>
  </div>
</template>
