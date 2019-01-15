const gulp = require('gulp');
const imagemin = require('gulp-imagemin');



// Image compression

var imageminPngquant = require('imagemin-pngquant');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');

 
gulp.task('default', () =>
    gulp.src('public/images/*')
        .pipe(imagemin(
		[
				imagemin.gifsicle(),
				imagemin.jpegtran(),
				imagemin.optipng(),
				imagemin.svgo(),
				imageminPngquant(),
				imageminJpegRecompress()
		
		]
		))
        .pipe(gulp.dest('dist/images'))
);


