import '../styles/main.scss';

import Vue from 'vue';
import '../../node_modules/lazysizes/plugins/respimg/ls.respimg';
import 'lazysizes';

import './modules/work-slider';
import './modules/descriptor-list';
import test from './test.vue';

new Vue({
  el: '#app',
  components: {
    test,
  }
})
