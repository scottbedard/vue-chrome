import buffer from "vinyl-buffer";
import gulp from "gulp";
import notify from "gulp-notify";
import source from "vinyl-source-stream";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";

import bundler from "./../tools/bundler";
import htmlBuilder from "./../tools/html_builder";

//
// Compile
//
export default function() {
    htmlBuilder();
    const b = bundler();

    b.bundle()
        .on("error", notify.onError({
            title: "Compile Error",
            message: "<%= error.message %>"
        }))
        .pipe(source("boot.js"))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest("dist/popup"))
        .pipe(notify({ message: "Javascript compiled!", onLast: true }));
};
