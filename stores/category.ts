
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
 
  const currentCategory = ref('Business');

  const categoryList = computed(() => {
    return [
    { id: 1, name: 'Business' },
    { id: 2, name: 'Crypto' },
    { id: 3, name: 'Sports' },
    { id: 4, name: 'Games' },
    { id: 5, name: 'News' },
    { id: 6, name: 'Treeding' },
    { id: 7, name: 'Others' },
  ]
  })

  function changeCurrentCategory(categoryName: string) {
    currentCategory.value = categoryName
  }

  return {
    currentCategory,
    categoryList,
    changeCurrentCategory
  }
})

interface Category {
    id: number
    name: string
}