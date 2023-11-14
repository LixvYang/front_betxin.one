<script setup>
const store = useCounterStore()

const counter = computed(() => store.getCount)
setTimeout(() => {
  store.increntment()
}, 1000);
console.log(counter.value)
</script>

<template>
  <div id="index">
    <div
      id="search-form"
      class="flex flex-col justify-between mx-auto max-w-md lg:px-2.5 px-0 bg-gray-50 dark:bg-gray-700"
    >
    <p>{{ counter }}</p>
      <TabsSearch class="md:hidden relative lg:px-2.5 px-2" />

      <TopicList id="topic-list" />
    </div>
  </div>
</template>
