var gulp = require('gulp');
var babel = require('gulp-babel');

var serverJSFiles = ['./server.js', './src/server/**/*.js'];

gulp.task('default', function(){

});

gulp.task('babel', () =>
    gulp.src(serverJSFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist-server'))
);