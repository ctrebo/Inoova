const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const merge = require("merge-stream");
const uglify = require("gulp-uglifycss");
const rename = require("gulp-rename");
const minify = require("gulp-minify");

//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
}

function minifyjs() {
    return gulp.src('src/js/**/*.js')
    .pipe(minify({
        ext: {
            min: '.min.js'
        },
        ignoreFiles: ['-min.js']
    }))
      .pipe(gulp.dest('public/js'))
      .pipe(browserSync.stream());
  };


//returns the styles.css file, uglifies it, rename it to .min.css and save it.
function stylecss() {
    return gulp.src('public/css/styles.css')
    //.pipe(sass().on('error',sass.logError))
    .pipe(uglify({
        "uglyComments": true
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
}



//moves modules to the /vendor/ folder
function movefiles() {
    //move bootstrap to /vendor/
    var bootstrap = gulp.src('./node_modules/bootstrap/dist/**/*')
        .pipe(gulp.dest('./vendor/bootstrap'));
     // Font Awesome CSS
    var fontAwesomeCSS = gulp.src('./node_modules/@fortawesome/fontawesome-free/css/**/*')
        .pipe(gulp.dest('./vendor/fontawesome-free/css'));
    // Font Awesome Webfonts
    var fontAwesomeWebfonts = gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/**/*')
        .pipe(gulp.dest('./vendor/fontawesome-free/webfonts'));
    var jquery = gulp.src([
        './node_modules/jquery/dist/*',
        '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'));
    return merge(bootstrap, fontAwesomeCSS, fontAwesomeWebfonts, jquery)
}

//watch scss and show changes in the browser
function watch() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/js/**/*.js', minifyjs);
    gulp.watch('public/css/styles.css', stylecss);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
    
}


exports.style = style;
exports.watch = watch;
exports.movefiles = movefiles;
exports.stylecss = stylecss;
exports.minifyjs = minifyjs;