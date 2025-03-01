const gulp = require('gulp');
// const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
}
function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
// exports.style = style;
exports.watch = watch;