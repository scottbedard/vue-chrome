import htmlMinifier from "./html_minifier";

export default {
    // Template minification
    htmlMinifier,

    // Custom compilers
    customCompilers: { },

    // PostCSS plugins
    postcss: [ ],

    // Sass
    sass: {
        includePaths: [
            "./src/scss",
            "./node_modules"
        ],
    },
};
