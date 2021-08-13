<template>
  <div>
    <user-profile v-bind:info="user">
      <div slot="username">{{ user.id }}</div>
      <template slot="time">{{ user.created }}</template>
      <div slot="karma">{{ user.karma }}</div>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue'

export default {
  components:{
    UserProfile
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  },
  computed : {
    ...mapGetters(['user'])
    // userInfo(){
    //   return this.$store.state.user; 
    // }
  },
}
</script>

<style>

</style>