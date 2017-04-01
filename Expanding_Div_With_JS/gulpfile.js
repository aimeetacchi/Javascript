'use strict';

var gulp = require('gulp'),
  //concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	fileinclude = require('gulp-file-include'),
	rename = require("gulp-rename"),
	path = require("path");

/*gulp.task("concatScripts", function() {
	gulp.src([
		'nameofjsfile.js',
		'nameofjsfile.js', //put your js files here...
		'nameofjsfile.js']);
	.pipe(concat("app.js"))
	.pipe(gulp.dest("js"));
});*/

// 4.
gulp.task('compileSass', function() {
	return gulp.src("scss/application.scss")
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

var paths = {
	templates: './templates/'
};

//run: gulp fileinclude
//including HTML FILES INTO HTML FILES TO SAVE REPEATING YOURSELF.
gulp.task('fileinclude', function() {
	// this establishes where the file is you want gulp to get.
  return gulp.src(path.join(paths.templates, '*.tpl.html'))
    .pipe(fileinclude())
    .pipe(rename({
    	extname: ""
    }))
    .pipe(rename({
    	extname: ".html"
    }))
    .pipe(gulp.dest('./'));
});
// 3.
gulp.task("build", ['compileSass'], function(){
	return gulp.src(["css/appliation.css", "js/app.js"], { base: './'})
	.pipe(gulp.dest('dist'));
});

// this task is run when you run gulp, as it's called in the default task, which then calls and runs 'build' above, then that calls and runs 'complileSass' which is run first.
// 2.
gulp.task('browser-sync', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });


	gulp.watch('scss/*.scss', ['compileSass']);
	gulp.watch('js/*.js', ['build']);
	gulp.watch('*.html').on('change', browserSync.reload);
});

// 1. run gulp
gulp.task("default", ['browser-sync']);


