import { defineStore } from "pinia";
import { useCategoryStore } from "./01.category";

export const useTopicListStore = defineStore("topic", {
  state: () => ({
    BusinessList: [] as TopicList[],
    BusinessToken: "",
    CryptoList: [] as TopicList[],
    CryptoToken: "",
    SportsList: [] as TopicList[],
    SportsToken: "",
    GamesList: [] as TopicList[],
    GamesToken: "",
    NewsList: [] as TopicList[],
    NewsToken: "",
    TrendingList: [] as TopicList[],
    TrendingToken: "",
    OthersList: [] as TopicList[],
    OthersToken: "",
  }),
  getters: {
    getTopicList: (state): TopicList[] => {
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
      ];
      return (state as any)[`${categoryStore.currentCategory.name}List`]
    },
  },
  actions: {
    async appendTopicList(topicList: TopicList[]) {
      const categoryStore = useCategoryStore() as any
      (this as any)[`${categoryStore.currentCategory.name}List`].push(...topicList);
    },
  },
});

interface TopicList {
  tid: number;
}
