<script setup>
import MainLayout from '~/layouts/MainLayout.vue'

GetTopicListByCid({ cid: 1 })
</script>

<template>
    <MainLayout>
        <TopicList id="topic-list" />
    </MainLayout>
</template>
