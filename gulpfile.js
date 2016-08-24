var gulp = require('gulp');
var spawn = require('child_process').spawn;
var babel = require('gulp-babel');
var tape = require('gulp-tape');
var eslint = require('gulp-eslint');
var istanbul = require('gulp-istanbul');
var apidoc = require('gulp-apidoc');

var node;

var apidocConfig = {
  src: './src/server/routes',
  dest: 'doc/',
  debug: true,
  config: './'
};

// TODO : webpack automation

var serverJSFiles = ['./server.js', './src/server/**/*.js'];
var testJSFiles = ['./src/test/**/*.js'];
var clientJSFiles = ['./src/client/**/*.js'];

var serverTasks = ['babel', 'test', 'doc', 'server'];
var clientTasks = ['babel', 'test'];
var testTasks = ['babel', 'test'];

gulp.task('default', ['server'] , function() {

  gulp.watch(serverJSFiles, serverTasks);
  gulp.watch(testJSFiles, testTasks);
  
});


gulp.task('server', ['apidoc'], function() {
  
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
})

gulp.task('lint', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('babel',['lint'], () =>{
  return gulp.src(['./server.js','./src/**/*.js'])
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('pre-test', ['babel'] , function () {
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