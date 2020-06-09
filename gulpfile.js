let gulp = require('gulp');
let path = require('path');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
let open = require('gulp-open');

let Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/argon-design-system.scss',
  SCSS: './assets/scss/**/**'
};

gulp.task('compile-scss', function() {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
});

gulp.task('watch', function() {
  gulp.watch(Paths.SCSS, ['compile-scss']);
});

gulp.task('open', function() {
  gulp.src('index.html')
    .pipe(open());
});

gulp.task('open-app', ['open', 'watch']);