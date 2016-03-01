var gulp = require('gulp');
var ts = require('gulp-typescript');
 
var fileName = "chapter_03/02_class_and_interface";

gulp.task('default', function () {
	return gulp.src('src/'+fileName+'.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: fileName + '.js'
		}))
		.pipe(gulp.dest('src'));
});
