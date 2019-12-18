'use strict';

var gulp       	 = require('gulp');
var browserSync	 = require('browser-sync').create();
var sass       	 = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", gulp.parallel('sass'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));