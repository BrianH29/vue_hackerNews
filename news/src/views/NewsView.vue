<template>
  <div>
    <div v-for="news in news">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data: function(){
    return {
      news : [],
    }
  },
  created(){
    let vm = this; 
    fetchNewsList()
      .then(response => {
        console.log(response);
        this.news = response.data;
      })
      .catch(err => console.log(err)) 
  }
}
</script>

<style>

</style>