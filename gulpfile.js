var gulp = require("gulp");

gulp.task('move-css',function(){
	return gulp.src('./source/css/style.css')
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('move-js',function(){
	return gulp.src('./source/js/index.js')
		.pipe(gulp.dest('./dist/js'));
});