const express = require("express");
const Vue = require("vue");
const app = express();
const renderer = require("vue-server-renderer").createRenderer();
// ⻚页⾯面
const page = new Vue({
  data: {
    count: 1,
  },
  template: `<button @click="count++">{{count}}</button>`,
});
app.get("/", async function (req, res) {
  // renderToString可以将vue实例例转换为html字符串串
  const html = await renderer.renderToString(page);
  res.send(html);
});
app.listen(3001, () => {
  console.log("启动成功， http://127.0.0.1:3001/");
});
