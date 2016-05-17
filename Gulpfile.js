var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');

var tasks = require('apptension-tools/gulp')({
  domain: 'localhost'
});
var env = tasks.env;

gulp.task('webpack', tasks.webpack(false));
gulp.task('webpack:watch', tasks.webpack(true));

gulp.task('test', tasks.karma(false));
gulp.task('test:watch', tasks.karma(true));

gulp.task('clean', tasks.clean);

gulp.task('browser-sync', tasks.browserSync);

gulp.task('serve', function (callback) {
  env.set(env.DEVELOPMENT);
  runSequence(
    'clean',
    'webpack:watch',
    'browser-sync',
    callback
  );
});

gulp.task('serve:dist', function (callback) {
  runSequence(
    'default',
    'browser-sync',
    callback
  );
});

gulp.task('default', function (callback) {
  env.set(env.PRODUCTION);
  runSequence(
    'clean',
    'webpack',
    callback
  );
});
