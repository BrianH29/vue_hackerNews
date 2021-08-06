<template>
  <div>
    <div v-for="ask in askList" :key="ask.id">title : {{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index'

export default {
  data() {
    return {
      askList : []
    }
  },
  created(){
    //var vm = this;
    fetchAskList()
      .then(response => this.askList = response.data)
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>