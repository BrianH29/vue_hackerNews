import Vue from 'vue';
import Vuex from 'vuex'; 
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex); 

//vuex 상태 관리 도구 
export const store = new Vuex.Store({
  state : {
    news : [],
    jobs : [],
    askList : []
  },
  getters : {
    askList(state){
      return state.askList; 
    }
  },
  mutations, 
  actions
});