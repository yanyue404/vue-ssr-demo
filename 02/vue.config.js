const isDev = process.env.NODE_ENV === "development";

module.exports = {
  // 是否为生产环境构建生成 source map
  productionSourceMap: false,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 3000,
    https: false,
    hotOnly: false,
  },
};
