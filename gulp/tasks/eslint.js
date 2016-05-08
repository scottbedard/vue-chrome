import gulp from "gulp";
import gulpIf from "gulp-if";
import eslint from "gulp-eslint";
import eslintConfig from "./../config/eslint";

// Determine if ESLint has fixed the file in question
function isFixed(file) {
    return file.eslint != null && file.eslint.fixed;
}

export default function() {

    // Enable autofixing when the --fix flag is present
    if (process.argv.slice(2).indexOf("--fix") >= 0) {
        eslintConfig.fix = true;
    }

    return gulp.src(["src/**/*.vue"])
        .pipe(eslint(eslintConfig))
        .pipe(eslint.format())
        .pipe(gulpIf(isFixed, gulp.dest("src")))
        // .pipe(eslint.failAfterError());
};
