# vue-ssr-demo

Vue.js Server-Side Render Demo

多个子项目共用根级 node_modules

```bash
# 管理员身份运行 cmd
mklink /d <项目路径>\node_modules <公共node_modules路径>

# eg：
mklink /d D:\MyDocuments\xxx\ssr-demo\01\node_modules D:\MyDocuments\xxx\ssr-demo\node_modules
```

Vue 打包好的 dist 如何在本地运行

```bash
# 全局安装
npm i -g http-server

#进入 dist 文件，运行 http-server
```

1. 纯浏览器渲染
2. 纯服务端渲染
3. 服务端渲染，模板组件共享
4. 服务端渲染，路由的共享和同步
5. 服务端渲染，数据模型的共享与状态同步

Run demo guide

```shell
# 安装依赖
npm install

# 进入 demo
cd 05

# 配置 node_modules 文件硬链接
mklink /d D:\MyDocuments\xxx\ssr-demo\05\node_modules D:\MyDocuments\xxx\ssr-demo\node_modules

# start http server
npm run ssr
# open http://localhost:3005
```
