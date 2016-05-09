import hmr from "browserify-hmr";
import watchify from "watchify";

export default {
    entries: [
        "src/popup/boot.js",
    ],
    extensions: [
        ".js",
        ".vue",
    ],
    paths: [
        "src",
        "node_modules",
    ],
};
