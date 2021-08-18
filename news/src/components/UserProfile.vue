<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username"></slot>

      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  /**
   * 두번쨰 밥법은 UserView에서 created, computed 다 하고 v-bind로 데이터 보내기
   * UserProfile 에서는 UserView에서 바인드 시켜준 걸 props로 받아서 화면에 노출
   */
  props:{
    info : Object
  },
  
  /**
   * 첫 번째 방법은 - UserView에서 created로 데이터를 끌어오고 UserProfile에서 computed
   * 로 화면에 노출 시키기 
   */
  // computed : {
  //   userInfo(){
  //     return this.$store.state.user; 
  //   }
  // }  
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center; 
  padding: 0.5rem;
}
.fa-user{
  font-size: 2.5rem; 
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size:0.7rem;
}
</style>