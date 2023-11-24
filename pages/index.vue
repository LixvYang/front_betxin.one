<script setup>
const route = useRoute();
</script>

<template>
  <div
    class="w-full h-full bg-gray-200 dark:bg-gray-800 "
  >
    <div class="max-w-[1140px] mx-auto">
      <div id="search-form">
        <TabsSearch
          id="tabs-search"
          class="flex flex-col justify-between mx-auto max-w-xl md:hidden relative lg:px-2.5 px-2 bg-gray-50 dark:bg-gray-700"
        />

        <div id="info-item">
          <SideNavMain />
        </div>

        <TopicList id="topic-list" />
      </div>
    </div>
  </div>
</template>
