<template>
  <div id="app">
    <router-view></router-view>
    <!-- 
      url이 만약 jobs 일경우 
      <JobsView></JobsView>
      형식으로 됨
    -->
  </div>
</template>

<script>

export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
