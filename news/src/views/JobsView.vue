<template>
  <div>
    <div v-for="job in jobs" :key="job.id">title : {{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index'

export default {
  data() {
    return {
      jobs: []
    }
  },
  created(){
    //let vm = this; // 콜백 자체가 this 바인딩이 현재 vue instance 를 바라보고 있지 않기 때문에 변수로 한번 받아주기

    fetchJobsList()
      .then(response => this.jobs = response.data)
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>