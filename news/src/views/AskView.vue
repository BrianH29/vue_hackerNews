<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
//import { mapGetters, mapState } from 'vuex';
import ListItem from '../components/ListItem.vue';

export default {
  // computed: {
  //   // #4 - 계산된 속성 명칭 그래도 사용할 때는 배열로
  //   ...mapGetters([
  //     'askList',
  //   ])

    //#3 -> 다른 이름으로 매핑 하려면 객체를 사용
    // ...mapGetters({
    //   askList : 'askList'
    // })

    // #2
    // ...mapState({
    //   askList: state => state.askList
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  //},
  components:{
    ListItem,
  }
  // created(){
  //   //var vm = this;
  //   // fetchAskList()
  //   //   .then(response => this.askList = response.data)
  //   //   .catch(err => console.log(err))

  //   this.$store.dispatch('FETCH_ASK');
  // }
}
</script>
