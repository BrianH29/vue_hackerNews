import { fetchUserInfo, fetchItemComment, fetchList, fetchNewsList } from '@/api/index'

export default {
    FETCH_NEWS({commit}){
      fetchNewsList()
        .then(response => commit('SET_NEWS', response.data))
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
    // FETCH_LIST({ commit }, pageName){
    //   fetchList(pageName)
    //     .then(({ data }) => commit('SET_LIST', data))
    //     .catch(err => console.log(err));
    // },
    async FETCH_LIST({commit}, pageName){
        const { data } = await fetchList(pageName);
        commit('SET_LIST', data);
    }
}