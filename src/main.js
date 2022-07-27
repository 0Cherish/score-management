import Vue from 'vue';

import axios from "axios";
import VueAxios from "vue-axios";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';

import router from "./router";

Vue.use(ElementUI);
Vue.use(VueAxios,axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
