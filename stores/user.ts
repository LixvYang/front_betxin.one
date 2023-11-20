// stores/user.ts
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('counter', {
  state: (): IUserInfoState => {
    return {
        userInfo: {},
    }
  },
  getters: {
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    increntment() {
    }
  }
})

interface IUserInfoState {
    userInfo?: UserInfoState
}

interface UserInfoState {
  uid?: string
}