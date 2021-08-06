<template>
  <div>
    <div v-for="news in newsList" :key="news.id">title : {{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data: function(){
    return {
      newsList : [],
    }
  },
  created(){
    //let vm = this; 
    fetchNewsList()
      .then(response => this.newsList = response.data)
      .catch(err => console.log(err)) 
  }
}
</script>

<style>

</style>