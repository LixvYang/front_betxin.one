<script setup lang="ts">
import { type Topic } from '~/composables/betxin/topic/list'
const { t } = useI18n()

const topicStore = useTopicStore()

const props = defineProps<{
    item: Topic
}>()

const showAlmostOver = ref(false)
const showStop = ref(props.item.is_stop)
onMounted(() => {
    if (showStop.value === true) {
        return false
    }
    showAlmostOver.value =
        Math.floor(
            ((props.item.refund_end_time ?? 0) - Date.now()) /
                (1000 * 60 * 60 * 24)
        ) < 3
})
</script>

<template>
    <div
        id="topic-item"
        class="flex flex-col flex-wrap justify-start align-center rounded-xl shadow-md overflow-hidden border dark:border-gray-500"
    >
        <NuxtLink :to="`/topic/${item.tid}`">
            <div class="flex flex-row shrink">
                <div class="shrink">
                    <img
                        class="object-cover p-3 w-32 rounded-3xl"
                        src="https://polymarket.com/_next/image?url=https%3A%2F%2Fpolymarket-upload.s3.us-east-2.amazonaws.com%2Flayerzero-_df7f824af5f4784a3b82e9880e3c0885_256x256_qual_100.webp&w=256&q=100"
                        alt=""
                    />
                </div>
                <div class="flex flex-col p-2 gap-1 shrink">
                    <p class="mb-2 font-bold text-gray-700 dark:text-white">
                        {{ item.title }}
                    </p>
                    <p
                        class="mb-3 font-normal text-gray-900 dark:text-gray-400"
                    >
                        {{ item.intro }}
                    </p>
                </div>
            </div>
        </NuxtLink>

        <div class="w-95 relative mx-4 p-1">
            <div class="h-5 bg-red-400 rounded dark:bg-red-400">
                <div
                    class="h-5 bg-green-400 rounded"
                    :style="`width: ${item.yes_ratio}%;`"
                >
                    <span
                        class="relative flex text-black dark:text-white"
                        style="left: 80%"
                        >{{ item.yes_ratio }}%</span
                    >
                </div>
            </div>
        </div>

        <div
            id="amount"
            class="relative p-1 flex flex-row place-content-between"
        >
            <div class="relative flex left-3 text-gray-700 dark:text-white">
                <Icon
                    name="tabler:database-dollar"
                    color="gray"
                    size="1.5rem"
                />
                <span class="font-normal text-base text-gray-500">
                    {{ parseFloat(item.total_count ?? '0').toFixed(4) }}
                </span>
            </div>

            <div
                class="flex flex-row relative right-5 text-gray-700 dark:text-white"
            >
                <div v-if="showStop" class="flex flex-row relative right-2">
                    <span
                        class="bg-red-100 dark:bg-red-900 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-red-400"
                    >
                        {{ t('stoped') }}
                    </span>
                </div>
                <div
                    v-if="showAlmostOver"
                    class="flex flex-row relative right-2"
                >
                    <span
                        class="bg-purple-400 dark:bg-purple-900 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-purple-400"
                    >
                        {{ t('almostover') }}
                    </span>
                </div>
                <div class="flex relative right-3">
                    <Icon
                        name="material-symbols:kid-star"
                        :color="!item.is_collect ? '#E9D490' : 'gray'"
                        size="1.5rem"
                    />
                </div>

                <div class="relative flex left-2">
                    <Icon
                        class="left-2"
                        name="healthicons:eyes"
                        color="gray"
                        size="1.5rem"
                    />
                    <span
                        class="text-sm font-normal text-gray-900 dark:text-gray-400"
                    >
                        {{ item.read_count }}
                    </span>
                </div>
            </div>
        </div>
        <slot name="content"></slot>

        <!-- <hr class="h-px lg:ml-2 mt-2 bg-gray-500 border-0 dark:bg-gray-400" /> -->
    </div>
</template>
