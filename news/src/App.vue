<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
    <!-- 
      url이 만약 jobs 일경우 
      <JobsView></JobsView>
      형식으로 됨
    -->
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spin.vue';
import bus from './utils/bus';

export default { 
  components : {
    ToolBar, 
    Spinner
  },
  data(){
    return{
      loadingStatus: false,
    }
  },
  methods : {
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }
  },
  created(){
    /**
     * bus.on('start:spinner', () => this.loadingStatus = true);
     * 위 방식 보다는 코드 관리를 수월하게 하기 위해 methods를 사용해보자
     */
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
    
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
}
</script>

<style>
body{
  padding: 0;
  margin: 0; 
}

a{
  color: #34495e;
  text-decoration: none;
}
a.router-link-exact-active{
  text-decoration: underline;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}

/* router transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
