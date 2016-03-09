var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('watch', function() {
	var watcher = gulp.watch('src/**/*.ts');
	watcher.on('change', function(event) {
		compaile(event.path);
	});
});

var compaile = function(path) {
	var pieces = path.split('/');
	var dest = pieces.slice(0,pieces.length-1).join('/');
	gulp.src(path).pipe(ts({noImplicitAny: true, target: "ES5"})).pipe(gulp.dest(dest));
}