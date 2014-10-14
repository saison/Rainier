// Util
var gulp =require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

// Plugins
var compass = require('gulp-compass');
var browserify = require('gulp-browserify');
var jade = require('gulp-jade');

var p = {
  sass: {
    src:'dev/sass/style.scss',
    dest:'build/css/'
  },
  scripts: {
    coffee: 'dev/js/script.coffee',
    js: 'dev/js/script.js',
    dest: 'build/js/'
  },
  jade: {
    src: 'dev/*.jade',
    dest: 'build/'
  }
}

// Livereload
gulp.task('connect', function() {
  connect.server({
    root:'build',
    livereload: true,
    port: 3000
  })
})

// Compass
gulp.task('compass', function() {
  gulp.src(p.sass.src)
    .pipe(compass({
      css: 'build/css',
      sass: 'dev/sass',
      comments: false,
      sourcemap: false
    }))
    .on('error', function(err) {
      console.log(err) // plumber was not very good with compass
    })
    .pipe(gulp.dest(p.sass.dest))
    .pipe(connect.reload())
})

// Coffee
gulp.task('browserify', function() {

    gulp.src(p.scripts.coffee, {read: false})
    .pipe(plumber())
    .pipe(browserify({
      transform: ['coffeeify'],
      extensions: ['.coffee']
    }))
    .pipe(rename('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(p.scripts.dest))
    .pipe(connect.reload())
})

// Jade
gulp.task('jade', function() {
  gulp.src(p.jade.src)
    .pipe(plumber())
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest(p.jade.dest))
    .pipe(connect.reload())
})

// compile
gulp.task('compile', ['jade', 'compass', 'browserify'], function() {
  console.log('gulp compile!')
})

// Watch
gulp.task('watch', function() {
  gulp.watch('dev/sass/**/*.scss', ['compass']);
  gulp.watch('dev/**/*.jade', ['jade']);
  gulp.watch('dev/js/**/*.coffee', ['browserify']);
})

// Go
gulp.task('default', ['connect','jade', 'compass', 'browserify', 'watch'], function() {
  console.log('Starting gulp!')
})
