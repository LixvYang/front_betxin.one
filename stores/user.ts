// stores/user.ts
import { defineStore } from 'pinia'

export const useUserStore = defineStore('counter', {
  state: () => {
    return {
        user: {
          uid: 1
        } as UserInfo
    }
  },
  getters: {
    getUserInfo: (state) => state.user
  },
  actions: {
    increntment() {
    }
  }
})

interface UserInfo {
  uid: number
}