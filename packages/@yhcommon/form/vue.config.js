const path = require("path");
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  },
  configureWebpack: {
    externals: {
      vue: "Vue",
      "element-ui": "Element"
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("src"));
  }
};
