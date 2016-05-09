import buffer from "vinyl-buffer";
import glob from "glob";
import gulp from "gulp";
import hmr from "browserify-hmr";
import notify from "gulp-notify";
import source from "vinyl-source-stream";
import watchify from "watchify";

//
// Tools and config
//
import bundler from "./../tools/bundler";
import htmlBuilder from "./../tools/html_builder";
import browserifyConfig from "./../config/browserify";

//
// Watch
//
export default function() {
    htmlBuilder();
    const pattern = /\.\/src\/(.*)\/index\.js/i;

    // Watchify config
    const watchifyConfig = function() {
        return {
            cache: {},
            packageCache: {},
            plugin: [ watchify ],
        };
    };

    // Determine if we're only watching one file with hmr
    let args = process.argv.slice(2);
    let hmrFlagIndex = args.indexOf("-hmr");
    let hmrBundle = hmrFlagIndex > -1 ? args[hmrFlagIndex + 1] : false

    // Watch each index file
    glob("./src/**/index.js", (err, files) => {
        files.map(entry => {
            let entryWatchConfig = watchifyConfig();

            // Modify the watchify args if we're watching a bundle with hmr
            let bundleName = entry.match(pattern)[1];
            if (hmrBundle) {
                if (hmrBundle !== bundleName) return;
                entryWatchConfig.plugin = [ hmr, watchify ];
            }

            // Bundle the development asset
            let b = bundler({ entries: [entry], ...entryWatchConfig });
            let bundle = function() {
                return b.bundle()
                    .on("error", notify.onError({
                        title: "Compile Error",
                        message: "<%= error.message %>"
                    }))
                    .pipe(source(bundleName + ".compiled.js"))
                    .pipe(buffer())
                    .pipe(gulp.dest("./dist/" + bundleName))
                    .pipe(notify({ message: "Compiled " + bundleName + " javascript!", onLast: true }));
            };
            bundle();
            b.on("update", bundle);
        });
    });
};
