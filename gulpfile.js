var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var fileName = "08_enums";

gulp.task('default', function () {
	return gulp.src('src/'+fileName+'.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: fileName + '.js'
		}))
		.pipe(gulp.dest('src'));
});
