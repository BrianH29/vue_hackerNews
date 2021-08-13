<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          <div class="time">{{ item.time_ago }}</div>
        </div>
      </div> -->
      <user-profile :info="item">
        <div slot="username">{{ item.user }}</div>
        <template slot="time"> {{ item.time_ago }}</template>
      </user-profile>
    </section>

    <section>
      <h2>{{ item.title }}</h2>
    </section>
    
    <section>
      <!-- 질문 댓글 -->
      <div v-html="item.content"></div>
      <!-- {{ item.content }} -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue'

export default {
  components : {
    UserProfile,
  },
  computed : {
    ...mapGetters(['item'])
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id); 
  }
}
</script>