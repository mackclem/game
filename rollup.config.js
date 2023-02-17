import { nodeResolve } from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

module.exports = {
  input: "sketch.js",
  output: {
    dir: "dist",
  },
  plugins: [
    copy({
      targets: [{ src: "index.html", dest: "dist" },{ src: "sketch.js", dest: "dist" },{ src: "images", dest: "dist" },{ src: "style.css", dest: "dist" }]
    }),
    nodeResolve(),
  ],
};