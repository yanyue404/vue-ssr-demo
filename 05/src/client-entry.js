import createApp from "./createApp";

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  console.log("INITIAL_STATE", window.__INITIAL_STATE__);
  // 激活状态数据
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount("#app", true);
});
