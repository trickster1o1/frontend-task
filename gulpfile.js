const { src, dest, series, watch } = require("gulp");
// Styles
const scss = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssMinify = require("gulp-clean-css");

function styles() {
  return src("./articals/src/styles/**/*.scss")
    .pipe(scss())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cssMinify())
    .pipe(dest("./articals/dist/styles/"));
}

// Scripts
const jsMinify = require("gulp-terser");
function scripts() {
  return src("./articals/src/scripts/**/*.js")
    .pipe(jsMinify())
    .pipe(dest("./articals/dist/scripts"));
}


function watchTask() {
    watch(
        ['./articals/src/styles/**/*.scss','./articals/src/scripts/**/*.js'],
        series(styles, scripts)
    )
}

exports.default = series(styles, scripts, watchTask);