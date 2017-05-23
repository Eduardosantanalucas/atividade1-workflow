var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

gulp.task('compila-scss',function(){
	return gulp.src('./source/scss/*.scss')
		.pipe(sass({outputStyle: "compressed"}))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('compila-html',function(){
	return gulp.src('./source/index.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('./dist'));
});

gulp.task("escuta-arquivos", function() {
	gulp.watch("./source/scss/*.scss", ["compila-scss"])
	gulp.watch("./source/*.html", ["compila-html"])
});