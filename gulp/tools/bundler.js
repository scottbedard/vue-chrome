import babelify from "babelify";
import browserify from "browserify";
import notify from "gulp-notify";
import vueify from "vueify";

//
// Config
//
import browserifyConfig from "./../config/browserify";
import vueifyConfig from "./../config/vueify";
vueify.compiler.applyConfig(vueifyConfig);

//
// Bundler
//
export default function(additionalConfig = {}) {
    const config = {
        ...browserifyConfig,
        ...additionalConfig,
    };

    return browserify("src/popup/boot.js", config)
        .transform(vueify)
        .transform(babelify);
};
