<template>
  <div>
    <p v-for="news in newsList" :key="news.id">
      <a v-bind:href="news.url">{{ news.title }}</a>
      <small> 
        {{ news.time_ago }} 
        by.<router-link v-bind:to="`/user/${news.user}`">{{ news.user }}</router-link> 
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['newsList'])
  },
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