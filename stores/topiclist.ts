// import { defineStore } from 'pinia'

// /*
//   1. 获取id
//   2. 根据id拿到话题列表
//   3. 
// */
// export const useTopicListStore = defineStore('topic', {
//   state: () => ({
//     buisinessList: [] as TopicList[],
//     buisinessToken: '',
//     cryptoList: [] as TopicList[],
//     cryptoToken: '',
//     sportsList: [] as TopicList[],
//     sportsToken: '',
//     gamesList: [] as TopicList[],
//     gamesToken: '',
//     newsList: [] as TopicList[],
//     newsToken: '',
//     trendingList: [] as TopicList[],
//     trendingToken: '',
//     othersList: [] as TopicList[],
//     othersToken: '',
//   }),
//   getters: {
//     getCount: (state) => {
//       return (cid: String): TopicList[] => {
//         return state.buisinessList
//       }
//     },
//   },
//   actions: {
//     increntment() {
//         // this.count++
//     }
//   }
// })

// interface TopicList {
//   name: string
//   age: number
// }