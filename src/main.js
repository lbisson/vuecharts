import Vue from 'vue';
import VueHighcharts from 'vue-highcharts';
import App from './App.vue';
import Comm from './modules/CommunityExample.vue';

Vue.use(VueHighcharts);

Vue.component('my-community-example', Comm);

new Vue({
  el: '#app',
  render: h => h(App)
})
