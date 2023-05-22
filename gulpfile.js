const gulp = require("gulp");

function html() {
	return gulp.src("src/index.html")
	.pipe(gulp.dest("build"))
}

function css() {
	return gulp.src("src/css/*.css")
	.pipe(gulp.dest("build"))
}
exports.html = html;
exports.css = css;
