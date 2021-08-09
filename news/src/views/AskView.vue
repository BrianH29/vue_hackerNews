<template>
  <div>
    <ul>
      <li v-for="ask in askList" :key="ask.id" class="post">
        <!-- 포인트 -->
        <div class="points">
          {{ ask.points }}
        </div>
        <!-- 기타 영역 -->
        <div>
          <p class="ask-title">
            <router-link :to="`/item/${ask.id}`" class="ask-title">{{ ask.title }}</router-link>
          </p>
          <small class="line-text"> 
            {{ ask.time_ago}} 
            by.<router-link :to="`/user/${ask.user}`">{{ ask.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  computed: {
    // #4 - 계산된 속성 명칭 그래도 사용할 때는 배열로
    ...mapGetters([
      'askList',
    ])

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
  },
  created(){
    //var vm = this;
    // fetchAskList()
    //   .then(response => this.askList = response.data)
    //   .catch(err => console.log(err))

    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom : 1px solid #eee
}
.points{
  width:80px;
  height:60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-title{
  margin: 0; 
}
.line-text{
  color:#828282
}
</style>