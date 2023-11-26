import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
  const currentCategory = ref({ id: 1, name: "Business" });

  // const topicListStore = useTopicListStore()
//  setTimeout(() => {
//    topicListStore.appendTopicList([{ tid: 213 }])
//  }, 3000);

  const categoryList = computed(() => {
    return [
      { id: 1, name: "Business" },
      { id: 2, name: "Crypto" },
      { id: 3, name: "Sports" },
      { id: 4, name: "Games" },
      { id: 5, name: "News" },
      { id: 6, name: "Trending" },
      { id: 7, name: "Others" },
    ] as Category[];
  });

  function changeCurrentCategory(category: Category) {
    currentCategory.value = category;
  }

  return {
    currentCategory,
    categoryList,
    changeCurrentCategory,
  };
});

interface Category {
  id: number;
  name: string;
}