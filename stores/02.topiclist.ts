import { defineStore } from 'pinia'
import { useCategoryStore } from './01.category'
import { type Topic } from '~/composables/betxin/topic/list'

export const useTopicListStore = defineStore('topic', {
    state: () => ({
        BusinessList: [] as Topic[],
        BusinessToken: '',
        CryptoList: [] as Topic[],
        CryptoToken: '',
        SportsList: [] as Topic[],
        SportsToken: '',
        GamesList: [] as Topic[],
        GamesToken: '',
        NewsList: [] as Topic[],
        NewsToken: '',
        TrendingList: [] as Topic[],
        TrendingToken: '',
        OthersList: [] as Topic[],
        OthersToken: '',
    }),
    getters: {
        getTopicList: (state): Topic[] => {
            const categoryStore = useCategoryStore()
            state.BusinessList = [
                { tid: 213 },
                { tid: 213 },
                { tid: 213 },
                { tid: 213 },
                { tid: 213 },
                { tid: 213 },
                { tid: 213 },
                { tid: 213 },
            ]
            return (state as any)[`${categoryStore.currentCategory.name}List`]
        },
    },
    actions: {
        appendTopicList(topicList: Topic[]) {
            const categoryStore = useCategoryStore() as any
            ;(this as any)[`${categoryStore.currentCategory.name}List`].push(
                ...topicList
            )
        },
    },
})
