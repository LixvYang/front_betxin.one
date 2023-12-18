<script setup lang="ts">
const topicListStore = useTopicListStore()
const categoryStore = useCategoryStore()
const topicStore = useTopicStore()

const { t } = useI18n()

const loading = ref(false)

const infiniteHandler = ($state: any) => {
    if (!topicListStore.getCurrentTopicList) {
        loading.value = true
        $state.loaded()
        return
    }
    if (topicListStore.getCurrentTopicList.length % 10 !== 0) {
        loading.value = false
        $state.complete()
        return
    }
    loading.value = true

    GetTopicListByCid({
        cid: categoryStore.currentCategory.id,
        page_token: topicListStore.getPageToken(
            categoryStore.currentCategory.name
        ),
    }).then((data) => {
        topicListStore.appendTopicList(
            categoryStore.currentCategory.name,
            data.list
        )
        topicListStore.changeTopicPageToken(
            categoryStore.currentCategory.name,
            data.pre_page_token
        )
        if (data.list.length >= 10) {
            loading.value = true
            $state.loaded()
        } else {
            loading.value = false
            $state.complete()
        }
    })
}
</script>

<template>
    <div
        id="topic-list"
        class="left-24 top-16 pb-16 flex flex-col justify-between mx-auto max-w-xl px-0 bg-gray-200 dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700 border-x-4 border-gray-300 border-solid border-r border-l dark:border-gray-500"
    >
        <div id="topic" class="overflow-y-scroll">
            <TopicItem
                v-for="topic in topicListStore.getCurrentTopicList"
                :key="topic.tid"
                :item="topic"
                :list="true"
            />
            <infinite-loading
                :identifier="categoryStore.currentCategory.id"
                @infinite="infiniteHandler"
            >
                <template #complete>
                    <span
                        class="bg-gray-200 items-center flex justify-center font-normal text-gray-700 dark:text-white dark:bg-gray-900"
                        >{{ t('topicEnd') }}</span
                    >
                    <LoadSpinner
                        v-if="loading"
                        class="flex pt-4 items-center justify-center"
                    />
                </template>
            </infinite-loading>
        </div>
        <!-- </template> -->
    </div>
</template>

<style>
/* .talkee {
    background-color: red;
} */
</style>
