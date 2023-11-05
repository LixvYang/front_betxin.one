<script setup lang="ts">
import { onMounted, watch } from 'vue'

type Theme = 'light' | 'dark'

const LOCAL_STORAGE_THEME_KEY = 'theme'
const darkMode = useState('theme', () => false)

const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  darkMode.value = newTheme === 'dark'
}

onMounted(() => {
  const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme
  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage)
  } else {
    setTheme(isDarkModePreferred ? 'dark' : 'light')
  }
})

watch(() => darkMode.value, (seleted) => {
  setTheme(seleted ? 'dark' : 'light')
})
</script>


<template>
  <NuxtLayout >
  </NuxtLayout>
    <!-- <div
      :class="{
        'theme-light': !darkMode,
        'theme-dark': darkMode,
      }"
      class="h-screen bg-themeBackground p-5"
    >
      <h1 class="text-themeText">Nuxt 3 Tailwind Dark Mode Demo</h1>
      
      <label class="relative inline-flex items-center cursor-pointer"  >
        <input v-model="darkMode" off-label="Light" on-label="Dark" type="checkbox" value="" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
      </label>

    </div> -->
</template>
