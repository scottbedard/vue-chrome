import gulp from "gulp";
import compile from "./gulp/tasks/compile";
import eslint from "./gulp/tasks/eslint";
import test from "./gulp/tasks/test"
import watch from "./gulp/tasks/watch";

gulp.task("compile", compile);
gulp.task("lint", eslint);
gulp.task("test", test);
gulp.task("watch", watch);
