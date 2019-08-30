var gulp = require('gulp'),
  babel = require('gulp-babel'),
  rename = require('gulp-rename'),
  scss = require("gulp-sass");

gulp.task('transferJs', function () {
  return gulp.src(['immutable/*js', "./intersectionObserver/*.js"])
    .pipe(babel())
    .pipe(rename({ suffix: '.es5' }))
    .pipe(gulp.dest('intersectionObserver/'))
})
gulp.task('auto', function () {
  gulp.watch('immutable/*.js', ['transferJs'])
})

gulp.task("scss", function () {
  return gulp.src("./intersectionObserver/observe.scss")
    .pipe(scss())
    .pipe(gulp.dest("./intersectionObserver"))
})