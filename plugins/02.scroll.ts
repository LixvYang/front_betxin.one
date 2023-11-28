import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'
// import InfiniteLoading from 'vue-infinite-loading'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('infinite-loading', InfiniteLoading)
})
