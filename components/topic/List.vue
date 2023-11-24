<script setup lang="ts">
const topicListStore = useTopicListStore()
</script>

<template>
  <div
    id="topic-list"
    class="left-20 flex flex-col justify-between mx-auto max-w-xl lg:px-2.5 px-0 bg-gray-100 dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700"
  >
  <LoadSpinner v-if="topicListStore.getTopicList.length === 0" class="flex h-screen items-center justify-center" />
  <template v-else>
    <TopicItem v-for="t in topicListStore.getTopicList" :key="t.tid" :item="t" />
  </template>
  </div>
</template>
