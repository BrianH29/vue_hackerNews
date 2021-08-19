import Vue from 'vue';

export default new Vue(); 

/**
 * export 차이!!
 * 
 * #1
 * bus.js 
 * export const bus = new Vue();
 * 
 * App.vue
 * import { bus } from './bus.js';
 * 
 * #2
 * bus.js
 * export default new Vue();
 * 
 * App.vue
 * import Bus from './bus.js;
 * or
 * import 내 마음대로  from './bus.js'; 
 */