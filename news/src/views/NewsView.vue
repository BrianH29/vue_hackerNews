<template>
  <div>
    <div v-for="news in this.$store.state.news" :key="news.id">title : {{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  created(){
    //let vm = this; 
    // fetchNewsList()
    //   .then(response => this.newsList = response.data)
    //   .catch(err => console.log(err)) 

    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>