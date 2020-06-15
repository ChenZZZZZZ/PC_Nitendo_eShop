import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'NEW',
    gameGoods: [],

  },
  mutations: {
    //当重复加入商品时，使商品数量始终为1，因为游戏买一个就够了
    stayCount(state,payload){
      payload.count = 1
    },
    //把数据传给state
    addToLike(state,payload) {
      state.gameGoods.push(payload)
    }
  },
  actions: {
    addLike(context,payload){
      let oldProduct = context.state.gameGoods.find(gameGoods => gameGoods.iid === payload.iid)
      if (oldProduct){
        context.commit('stayCount',oldProduct)
      }else {
        payload.count = 1
        context.commit('addToLike',payload)
      }
    }
  },
  getters: {
    gameGoods(state) {
      return state.gameGoods
    }
  }
})

export default store
