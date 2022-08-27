const express = require("express");
const { createBundleRenderer } = require("vue-server-renderer");
const path = require("path");
const fs = require("fs");
const app = express();

// 加载服务端构建结果
const serverBundle = path.resolve(
  process.cwd(),
  "dist/server",
  "vue-ssr-server-bundle.json"
);

// 加载客户端代码 client-entry.js 的 webpack 构建结果
const clientManifestPath = path.resolve(
  process.cwd(),
  "dist/client",
  "vue-ssr-client-manifest.json"
);
const clientManifest = JSON.parse(fs.readFileSync(clientManifestPath, "utf-8"));
const template = fs.readFileSync(
  path.resolve(__dirname, "index.html"),
  "utf-8"
);
// createBundleRenderer 可以接受服务端打包出来的 bundle 对象
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest,
});

app.use(express.static(path.resolve(process.cwd(), "dist/client")));

app.get("*", function (req, res) {
  renderer.renderToString({}, (err, html) => {
    if (err) {
      res.send("500 server error");
      return;
    }
    res.send(html);
  });
});

app.listen(3003, () => {
  console.log("listen: http://127.0.0.1:3003/");
});
