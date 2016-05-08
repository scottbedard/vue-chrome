import hmr from "browserify-hmr";
import watchify from "watchify";

export default {
    entries: [
        "src/popup/boot.js"
    ],
    extension: [
        ".js",
        ".vue",
    ],
    paths: [
        "src",
        "node_modules",
    ],
};
