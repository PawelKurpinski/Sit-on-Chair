var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require( 'gulp-sourcemaps' );

gulp.task( 'sass' , function(){
    return gulp.src( 'scss/main.scss')
	.pipe( sourcemaps.init() )
    	.pipe( sass().on( 'error', sass.logError))
    	.pipe( sass({    ///// styl kompresji
            outputStyle: 'compressed'
        }) )
	.pipe( sourcemaps.write())
    	.pipe ( gulp.dest( 'css' ) )   ///folder docelowy jeżeli go nie ma sam stworzy :)
});

gulp.task( 'watch', function(){
    gulp.watch( 'scss/**/*.scss', ['sass']);
});
