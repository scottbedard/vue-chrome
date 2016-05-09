import browserifyConfig from "./browserify";

module.exports = function(config) {
    config.set({
        browsers: ["Chrome"],
        frameworks: ["browserify", "jasmine"],
        reporters: ["spec"],
        files: ["../../test/**/*.js"],
        preprocessors: {
            "../../test/**/*.js": ["browserify"],
        },
        browserify: {
            extensions: browserifyConfig.extensions,
            debug: true,
            plugin: [require("proxyquireify").plugin],
            singleRun: true,
            transform: [
                "vueify",
                ["babelify", {
                    presets: ["es2015", "stage-2"],
                }],
            ],
        },
    });
};
