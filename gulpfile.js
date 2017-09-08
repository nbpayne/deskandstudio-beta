var gulp = require('gulp');
var child = require('child_process');
var csslint = require('gulp-csslint');
var cssnano = require('gulp-cssnano');
var del = require('del');
var gm = require('gulp-gm');
var gulpif = require('gulp-if');
// var imagemin = require('gulp-imagemin');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var lazypipe = require('lazypipe');
// var log = require('gutil-color-log');
var merge = require('merge-stream');
// var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');
var runsequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var stylish = require('csslint-stylish');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var webp = require('gulp-webp');
var wiredep = require('wiredep').stream;

// Clean out files
gulp.task('clean', function () {
  return del([
    '_includes/head.html', 
    '_includes/foot.html', 
    'css/**/*.*', 
    'js/**/*.*'
  ]);
});

// Build css files
gulp.task('css', function () {
  return merge(
    // Build vendor css files
    gulp.src('__sass/vendor/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(cssnano())
      .pipe(rename({suffix:'.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('css')),
    // Build app css files
    gulp.src('__sass/*.scss')
      .pipe(sass())
      .pipe(csslint())
      .pipe(csslint.formatter(stylish))
      .pipe(sourcemaps.init())
      .pipe(cssnano())
      .pipe(rename({suffix:'.min'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('css'))
  );
});

// Copy fonts to site
gulp.task('fonts', function () {
  gulp.src('bower_components/font-awesome/fonts/**/*.{eot,svg,ttf,woff,woff2}')
   .pipe(gulp.dest('fonts'));
})

// Run `jekyll serve`
gulp.task('jekyll-serve', function () {
  const jekyll = child.spawn('jekyll', [
    'serve', 
    '--livereload'
  ]);
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll', message));
  };
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// Build javascript files
gulp.task('js', function () {
  // Lint, sourcemap, and uglify final js files
  // var lintjs = lazypipe()
  //   .pipe(jshint)
  //   .pipe(jshint.reporter, 'jshint-stylish');

  var processjs = lazypipe()
    .pipe(sourcemaps.init)
    // .pipe(lintjs)
    .pipe(uglify)
    .pipe(sourcemaps.write, '.')
    .pipe(gulp.dest, '.');

  return gulp.src('__includes/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', processjs()))
    .pipe(gulpif('*.html', gulp.dest('_includes')));
});

// Convert images to jpg, and webp
gulp.task('images', function () {
  return merge(
    // Convert images to jpg
    gulp.src('images/!(favicon|logos)/*.png')
      .pipe(gm(function (gmfile) {
        return gmfile.setFormat('jpg');
      }))
      .pipe(gulp.dest('images')),
    // Convert images to webp
    gulp.src('images/!(favicon|logos)/*.png')
      .pipe(webp({ preset: 'photo' }))
      .pipe(gulp.dest('images'))
  );
});

// Watch for file changes
gulp.task('watch', function () {
  // Watch files
  gulp.watch('__sass/**/*.scss', ['css']);
  gulp.watch(['__includes/*.html', '__js/**/*.js'], ['js']);
  gulp.watch('images/**/*.png', ['images']);
});

// Wire bower dependencies
gulp.task('wiredep', function() {
  return gulp.src('__includes/*.html')
    .pipe(wiredep())
    .pipe(gulp.dest('__includes'));
});


// --------------------------------------------------------------------------------------------------------------------
// Meta-tasks
// - defeault: same as `serve`
// - serve: compile all assets, and start jekyll
// --------------------------------------------------------------------------------------------------------------------

gulp.task('default', ['serve']);

gulp.task('serve', function () {
  runsequence(
    'clean', 
    ['css', 'fonts', 'images', 'wiredep'], 
    'js',
    ['jekyll-serve', 'watch']
  );
});
