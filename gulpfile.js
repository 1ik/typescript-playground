var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var fileName = "09_functions";

gulp.task('default', function () {
	return gulp.src('src/'+fileName+'.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: fileName + '.js'
		}))
		.pipe(gulp.dest('src'));
});
