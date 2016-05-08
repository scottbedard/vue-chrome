import gulp from "gulp";
import htmlmin from "gulp-html-minifier";

//
// Config
//
import htmlMinifierConfig from "./../config/html_minifier"

//
// Builder
//
export default function() {
    gulp.src("src/**/*.html")
        .pipe(htmlmin(htmlMinifierConfig))
        .pipe(gulp.dest("./dist"));
};
