import buffer from "vinyl-buffer";
import gulp from "gulp";
import hmr from "browserify-hmr";
import notify from "gulp-notify";
import source from "vinyl-source-stream";
import sourcemaps from "gulp-sourcemaps";
import watchify from "watchify";

//
// Tools and config
//
import bundler from "./../tools/bundler";
import htmlBuilder from "./../tools/html_builder";
import browserifyConfig from "./../config/browserify";

const watchifyConfig = {
    cache: {},
    packageCache: {},
    plugin: [
        hmr,
        watchify,
    ],
};

//
// Watch
//
export default function() {
    htmlBuilder();
    const b = bundler(watchifyConfig);

    function bundle() {
        b.bundle()
            .on("error", notify.onError({
                title: "Compile Error",
                message: "<%= error.message %>"
            }))
            .pipe(source("boot.js"))
            .pipe(buffer())
            // .pipe(sourcemaps.init({ loadMaps: true }))
            // .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest("dist/popup"))
            .pipe(notify({ message: "Javascript compiled!", onLast: true }));
    };

    bundle();
    b.on("update", bundle);
};
