<template>
  <div>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    ...mapGetters(['item'])
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id); 
  }
}
</script>

<style>

</style>