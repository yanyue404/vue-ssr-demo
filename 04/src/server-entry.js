import createApp from "./createApp";

export default (context) => {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    // 设置服务器端 router 的位置
    router.push(context.url);
    // onReady 等到 router 将可能的异步组件和钩子函数解析完
    router.onReady(() => {
      // 返回目标位置或是当前路由匹配的组件数组
      const matchedComponents = router.getMatchedComponents();
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject({
          url: context.url,
          code: 404,
        });
      }
      // Promise 应该 resolve 应用程序实例，以便它可以渲染
      resolve(app);
    }, reject);
  });
};
