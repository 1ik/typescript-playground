var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var fileName = "helloworld";

gulp.task('default', function () {
	return gulp.src('src/'+fileName+'.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: fileName + '.js'
		}))
		.pipe(gulp.dest('src'));
});