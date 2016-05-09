import hmr from "browserify-hmr";
import watchify from "watchify";

export default {
    extensions: [
        ".js",
        ".vue",
    ],
    paths: [
        "src",
        "node_modules",
    ],
};
