<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const route = useRoute()
</script>

<template>
  <MainLayout>
      <TopicList id="topic-list" />
  </MainLayout>
</template>
