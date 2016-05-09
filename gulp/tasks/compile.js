import buffer from "vinyl-buffer";
import es from "event-stream";
import glob from "glob";
import gulp from "gulp";
import notify from "gulp-notify";
import rename from "gulp-rename";
import source from "vinyl-source-stream";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";

import bundler from "./../tools/bundler";
import htmlBuilder from "./../tools/html_builder";

//
// Compile
//
export default function(done) {
    htmlBuilder();
    const pattern = /\.\/src\/(.*)\/index\.js/i;

    glob("./src/**/index.js", (err, files) => {
        if (err) done(err);
        let tasks = files.map(entry => {
            let bundleName = entry.match(pattern)[1];
            let b = bundler({ entries: [entry] });
            return b.bundle()
                .on("error", notify.onError({
                    title: "Compile Error",
                    message: "<%= error.message %>"
                }))
                .pipe(source(bundleName + ".compiled.js"))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(uglify())
                .pipe(sourcemaps.write("./"))
                .pipe(gulp.dest("./dist/" + bundleName))
                .pipe(notify({ message: "Compiled " + bundleName + " javascript!", onLast: true }));
            });
        es.merge(tasks).on("end", done);
    });
};
