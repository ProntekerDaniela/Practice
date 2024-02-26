import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";

Vue.use(VueRouter);

import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

import store from "./store";
import router from "./router.js";


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
