import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import gutil from 'gulp-util';

function build() {
  const bundler = browserify('index.js', {
    debug: true,
    transform: [babelify]
  });

  return bundler.bundle()
    .pipe(source('compiled.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
}

gulp.task('build', build);
