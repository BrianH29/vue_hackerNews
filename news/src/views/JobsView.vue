<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job.id">title : {{ job.title }}</div>
  </div>
</template>

<script>

export default {
  created(){
    //let vm = this; // 콜백 자체가 this 바인딩이 현재 vue instance 를 바라보고 있지 않기 때문에 변수로 한번 받아주기
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>