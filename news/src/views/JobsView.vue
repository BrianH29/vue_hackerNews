<template>
  <div>
    <!-- <div v-for="job in this.$store.state.jobs" :key="job.id">
      title : {{ job.title }}
    </div> -->

    <p v-for="job in jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a>
      <small> {{ job.time_ago }} link: {{ job.domain }}</small>
    </p>
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

<style>

</style>