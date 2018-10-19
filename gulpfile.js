const gulp = require('gulp');
const hb = require('gulp-hb');
const babel = require('gulp-babel');
// var fs = require('fs')

var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

var sassOptions = {
  errLogToConsole: true,
  sourceComments: 'map',
  outputStyle: 'expanded'
};


 
gulp.task('babel-js', function () {
    return gulp.src('lib/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});



gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['templates', 'sass', 'images', 'babel-js',  'browser-sync'], function () {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('lib/*.js', ['babel-js']);
  gulp.watch('src/**/*.json', ['templates']);
  gulp.watch('src/**/*.js', ['templates']);
  gulp.watch('src/**/*.hbs', ['templates']);
  gulp.watch("src/**/*.html", ['templates']);
});

// Basic

function basic() {
    return gulp
        .src('./src/assets/*.html')
        .pipe(hb()
            .partials('./src/assets/partials/**/*.hbs')
            .helpers('./src/assets/helpers/*.js')
            .data('./src/assets/data/**/*.{js,json}')
        )
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
}

gulp.task('templates', basic);

gulp.task('images', function () {
    return gulp.src('./images/**/*')
    .pipe(gulp.dest('./dist/images'))
})


gulp.task('browser-sync',['templates'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});
