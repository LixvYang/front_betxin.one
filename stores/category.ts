
import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
  const { t } = useI18n()
  const currentCategory = ref(t('Business'));

  const categoryList = computed(() => {
    return [
    { id: 1, name: t('Business') },
    { id: 2, name: t('Crypto') },
    { id: 3, name: t('Sports') },
    { id: 4, name: t('Games') },
    { id: 5, name: t('News') },
    { id: 6, name: t('Treeding') },
    { id: 7, name: t('Others') },
  ]
  })

  function changeCurrentCategory(category: Category) {
    currentCategory.value = category.name
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