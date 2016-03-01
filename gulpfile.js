var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var fileName = "chapter_03/04_generic";

gulp.task('default', function () {
	return gulp.src('src/'+fileName+'.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: fileName + '.js',
			target: "ES5"
		}))
		.pipe(gulp.dest('src'));
});
