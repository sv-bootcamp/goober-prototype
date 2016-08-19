const gulp = require('gulp');
const spawn = require('child_process').spawn;
const babel = require('gulp-babel');
const tape = require('gulp-tape');
const eslint = require('gulp-eslint');
const istanbul = require('gulp-istanbul');
const apidoc = require('gulp-apidoc');

let node;

const apidocConfig = {
  src: './src/server/routes',
  dest: 'doc/',
  debug: true,
  config: './'
};

const appJSFiles        = ['./config/*.js','./*.js'];
const serverJSFiles     = ['./src/server/**/*.js'];
const clientJSFiles     = ['./src/client/**/*.js'];
const clientHTMLFiles   = ['./src/client/**/*.html'];
const testJSFiles       = ['./src/test/**/*.js'];

const appTasks          = ['babel-app', 'test'];
const serverTasks       = ['babel-server', 'test', 'apidoc', 'start'];
const clientTasks       = ['babel-client', 'test'];
const testTasks         = ['babel', 'test'];

gulp.task('default', [
    'babel',
    'test',
    'start'], function() {

    gulp.watch(clientJSFiles,   clientTasks);
    gulp.watch(serverJSFiles,   serverTasks);
    gulp.watch(appJSFiles,      appTasks);
    gulp.watch(testJSFiles,     testTasks);
  
});


gulp.task('start', ['apidoc', 'babel','test'], function() {
  
  if (node) node.kill();
  
  node = spawn('node', ['./dist/server.js'], {stdio: 'inherit'})
  
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });

});


// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
});

gulp.task('lint', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel',[
    'babel-client',
    'babel-server',
    'babel-app',
    'babel-test',
]);

gulp.task('babel-app',['lint'], () =>{
    return gulp.src(appJSFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('babel-server',['lint'], () =>{
    return gulp.src(serverJSFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/src/server'));
});

gulp.task('babel-client',['lint'], () =>{
    gulp.src(clientJSFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/src/client'));
    gulp.src(clientHTMLFiles)
        .pipe(gulp.dest('dist/src/client'));
});

gulp.task('babel-test',['lint'], () =>{
    return gulp.src(testJSFiles)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/src/test'));
});

gulp.task('pre-test', function () {
  return gulp.src(['./dist/test/**/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['./dist/test/**/*.js'])
    .pipe(tape({
      reporter : istanbul.writeReports()
    }))
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('apidoc',['test'], function(done){
  apidoc( apidocConfig ,done);
});