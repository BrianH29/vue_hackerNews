<template>
  <div>
    <ul>
      <li v-for="job in jobs" :key="job.id" class="post">
        <p class="job-title">
          <a :href="job.url" class="job-title">{{ job.title }}</a>
        </p>
        <small> 
          {{ job.time_ago }} 
          link: <a :href="job.url">{{ job.domain }}</a>
        </small>
      </li>
    </ul>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    ...mapGetters(['jobs'])
  },
  created(){
    //let vm = this; // 콜백 자체가 this 바인딩이 현재 vue instance 를 바라보고 있지 않기 때문에 변수로 한번 받아주기
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style scoped>
.post{
  list-style: none;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.job-title{
  color:#828282;
}
</style>