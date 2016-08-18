const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');

const appJsFiles    = ['./config/*.js','./*.js'];
const serverJsFiles = ['./src/server/**/*.js'];
const clientJsFiles = ['./src/client/**/*.js'];

gulp.task('start',function () {
    nodemon({
        script: './dist/server.js'
        , ext: ''
        , env: { 'NODE_ENV': process.env.NODE_ENV }
    });
});

gulp.task('lint', () => {
    return gulp.src(serverJsFiles)
        .pipe(eslint({configFile : './.eslintrc.json'}))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('babel-app', () => {
    return gulp.src(appJsFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('babel-server', () => {
    return gulp.src(serverJsFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/src/server'));
});

gulp.task('babel-client', () => {
    return gulp.src(clientJsFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/src/client'));
});

gulp.task('watch', function(){
    return gulp.watch([serverJsFiles, appJsFiles, clientJsFiles]);
});

gulp.task('default' ,[
    'babel-server',
    'babel-app',
    'start'
]);