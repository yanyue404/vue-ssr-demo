import Vue from "vue";
import App from "./App.vue";

export default function createApp(context) {
  const app = new Vue({
    render: (h) => h(App),
  });
  return {
    app,
  };
}
