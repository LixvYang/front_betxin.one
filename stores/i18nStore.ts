import { defineStore } from 'pinia'

export const usei18nStore = defineStore('i18nStore', {
  state: () => ({
    currentLacale: {id: 0 ,name: '中文(简体)' },
    localeList: ref([
      {id: 0 ,name: '中文(简体)' },
      {id: 1, name: 'English(Us)' },
    ]) as Ref<Locale[]>
  }),
  actions: {
    changeLocale(locale: Locale) {
        this.currentLacale = locale
    }
  }
})

interface Locale {
  id: number
  name: string
}