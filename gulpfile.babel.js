import gulp from "gulp";
import compile from "./gulp/tasks/compile";
import lint from "./gulp/tasks/lint";
import test from "./gulp/tasks/test";
import watch from "./gulp/tasks/watch";

// compile production assets
gulp.task("compile", compile);

// compile development assets, and watch for changes with hot-reloading
gulp.task("watch", watch);

// lint .js and .vue files (add --fix to apply autofixes)
gulp.task("lint", lint);

// run unit tests with karma and jasmine
gulp.task("test", test);
