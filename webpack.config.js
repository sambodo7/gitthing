const path = require("path");

const APP_DIR = path.resolve(__dirname, "src/components")

module.exports = {
  entry: `${APP_DIR}/component.jsx`,
  output: {
    filename: "serverBundle.js",
    path: path.resolve(__dirname, "src/output/dist")
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : "babel-loader"
      }
    ]
  }
};