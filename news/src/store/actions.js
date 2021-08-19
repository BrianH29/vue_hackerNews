import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemComment, fetchList } from '../api/index'

export default {
      FETCH_NEWS(context){
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data);
          return response;
      })
        .catch(err => console.log(err))
    },
    // FETCH_JOBS(context){
    //   fetchJobsList()
    //     .then(response => context.commit('SET_JOBS', response.data))
    //     .catch(err => console.log(err))
    // },

    // 위 코드 destructuring
    FETCH_JOBS({ commit }){
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
          return data; 
        })
        .catch(err => console.log(err))
    },
    // FETCH_ASK(context){
    //   fetchAskList()
    //     .then(response => context.commit('SET_ASK', response.data))
    //     .catch(err => console.err(err))
    // }
    FETCH_ASK({ commit }){
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
          return data; 
        })
        .catch(err => console.log(err))
    },
    FETCH_USER(context, username){
      fetchUserInfo(username)
        .then(response => context.commit('SET_USER', response.data))
        .catch(err => console.log(err));
    },
    FETCH_ITEM({ commit }, id){
      fetchItemComment(id)
        .then(({data}) => commit('SET_ITEM', data))
        .catch(err => console.log(err))
    },
    FETCH_LIST({ commit }, pageName){
      fetchList(pageName)
        .then(({ data }) => commit('SET_LIST', data))
        .catch(err => console.log(err));
    }
}