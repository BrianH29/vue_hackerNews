import ListView from './ListView'
import bus from '../utils/bus'

export default function createListView(name){
  return{
    //재사용할 인스턴스(컴포넌트 ) 옵션들이 들어갈 자리
    name,
    created() {
      bus.$emit('start:spinner');
      
      this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        console.log('fetched news');
        bus.$emit('end:spinner'); 
      })
      .catch((err) => console.log(err)); 
    },
    render(createElement){
      return createElement(ListView); 
    }
    /**
     * render - The purpose of the function is to display the specified HTML code inside the specified HTML element.
     */
  }  
}