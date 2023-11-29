<script setup lang="ts">
import { usePassport } from '@foxone/mixin-passport/lib/helper'
import { type Topic } from '~/composables/betxin/topic/list'
import { GetTopicByTid } from '~/composables/betxin/topic/get'

definePageMeta({})
const { t } = useI18n()
const route = useRoute()
const topicStore = useTopicStore()
const item = ref<Topic>({
    tid: '0',
})

GetTopicByTid(route.params.tid as string).then((topic) => {
    item.value = topic
    topicStore.changeCurrentTopic(topic)
})

const getDate = (timestamp: number): string => {
    return `${new Date(timestamp).toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
    })} GMT+08`
}

const handleBuyBtnClick = () => {
    const nuxtApp = useNuxtApp()
    const passport = usePassport(nuxtApp.vueApp)

    setTimeout(async () => {
        const res = await passport.payment({
            assetId: '965e5c6e-434c-3fa9-b780-c50f43cd955c',
            amount: '1',
            recipient: 'fbd26bc6-3d04-4964-a7fe-a540432b16e2',
            traceId: 'fbd26bc6-434c-3fa9-b780-c50f43cd9551',
            memo: 'Test',
            checker: async () => {
                return new Promise(() => {})
            },
        })

        console.log(res)
    }, 3000)
}
</script>

<template>
    <div id="user">
        <NuxtLayout name="main-layout">
            <div
                id="user-banner"
                class="left-20 flex flex-col justify-between mx-auto max-w-xl lg:px-2.5 px-0 bg-gray-100 dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700"
            >
                <TopicItem
                    class="rounded-xl shadow-md overflow-hidden"
                    :item="item"
                >
                    <template #content>
                        <div
                            class="p-5 overflow-hidden bg-gray-100 dark:bg-gray-800 divide-gray-200 dark:divide-gray-700"
                        >
                            <div
                                class="text-gray-900 dark:text-gray-400 text-sm"
                            >
                                {{
                                    item.content
                                }}具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容具体的内容
                            </div>
                            <hr
                                class="h-px mt-2 bg-gray-500 border-0 dark:bg-gray-400"
                            />

                            <div
                                class="flex flex-row justify-between p-2 pl-12 pr-12"
                            >
                                <button
                                    class="w-28 h-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                    @click="handleBuyBtnClick"
                                >
                                    <span
                                        class="w-28 relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                                    >
                                        {{ t('Buy') }}
                                    </span>
                                </button>

                                <button
                                    class="w-28 h-12 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                                >
                                    <span
                                        class="w-28 relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                                    >
                                        {{ t('Refund') }}
                                    </span>
                                </button>
                            </div>
                            <div
                                class="text-left text-indigo-500 dark:text-indigo-400 text-sm"
                            >
                                {{ t('stopRefundTime') }}:
                                {{ getDate(item.refund_end_time!) }}
                            </div>
                            <div
                                class="text-left text-indigo-500 dark:text-indigo-400 text-sm"
                            >
                                {{ t('endTime') }}:
                                {{ getDate(item.end_time!) }}
                            </div>
                        </div>
                    </template>
                </TopicItem>
            </div>
        </NuxtLayout>
    </div>
</template>
