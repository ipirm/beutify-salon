var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    });
});
gulp.task('autoprefixer', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./css/'))
});
gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./css/'))
});

gulp.task('livereload', function () {
    gulp.src('')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass', 'livereload', 'autoprefixer']);
    gulp.watch('', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass', 'autoprefixer']);
