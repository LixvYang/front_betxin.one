<script setup>
definePageMeta({})
const route = useRoute()
</script>

<template>
    <div id="user">
        <NuxtLayout name="main-layout">
            <TopicInfo id="topic-info" :tid="route.params.tid" />
        </NuxtLayout>
    </div>
</template>
