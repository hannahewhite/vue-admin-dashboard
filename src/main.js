import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";


Vue.config.productionTip = false;

// Initialise Netlify Identity Widget
netlifyIdentityWidget.init();

// Initialise GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://vue-hq-hannah.netlify.com/.netlify/identity",
  setCookie: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
