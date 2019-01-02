import Vue from "vue";
import "./plugins/vuetify";
import i18n from "./plugins/i18next";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
