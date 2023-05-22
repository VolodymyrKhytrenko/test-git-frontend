const gulp = require("gulp");

function html() {
	return gulp.src("src/index.html")
	.pipe(gulp.dest("build"))
}

exports.html = html;
