var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
    proxy: {
      target: '127.0.0.1:3000'
    },
    logLevel: 'debug',
    logConnections: true
  });
});

gulp.task('scss', function() {
  return buildSCSS();
});

gulp.task('watch:scss', function() {
  return buildSCSS(true)
    .on('data', function(file) {
      //console.log(file);
    })
    .pipe(reload({
      stream: true
    }));
});

gulp.task('watch:html', function() {
  gulp.watch('app/views/**/*.html').on('change', reload);
});

gulp.task('watch', ['browser-sync', 'watch:scss', 'watch:html']);

function buildSCSS(watching) {
  var pattern = 'public/scss/*.scss';
  var task = gulp.src(pattern);

  if (watching) {
    task = $.watch(pattern, {
      emit: 'all',
      verbose: true
    })
  }

  return task
    .pipe($.sass())
    .pipe(gulp.dest('public/styles'));
}
