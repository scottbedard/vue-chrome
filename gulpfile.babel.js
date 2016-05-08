import gulp from "gulp";
import compile from "./gulp/tasks/compile";
import watch from "./gulp/tasks/watch";

gulp.task("compile", compile);
gulp.task("watch", watch);
