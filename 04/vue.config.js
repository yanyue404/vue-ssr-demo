const isDev = process.env.NODE_ENV === "development";
const TARGET_NODE = process.env.WEBPACK_TARGET === "node";
const serverConfig = require("./vue.server.config");
const clientConfig = require("./vue.client.config");

if (isDev) {
  module.exports = {
    devServer: {
      open: process.platform === "darwin",
      host: "0.0.0.0",
      port: 3000,
      https: false,
      hotOnly: false,
    },
  };
} else {
  if (TARGET_NODE) {
    module.exports = serverConfig;
  } else {
    module.exports = clientConfig;
  }
}
