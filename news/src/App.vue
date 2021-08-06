<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <!-- 
      url이 만약 jobs 일경우 
      <JobsView></JobsView>
      형식으로 됨
    -->
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default { 
  components : {
    ToolBar, 
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0; 
}
</style>
