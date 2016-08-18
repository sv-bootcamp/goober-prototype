var gulp = require('gulp');
var spawn = require('child_process').spawn;
var babel = require('gulp-babel');
var tape = require('gulp-tape');
var tapColorize = require('tap-colorize');

var node;

var serverJSFiles = ['./server.js', './src/server/**/*.js'];
var testJSFiles = ['./src/test/**/*.js'];
var clientJSFiles = ['./src/client/**/*,.js'];

var serverTasks = ['babel', 'test', 'server'];
var clientTasks = ['babel', 'test'];
var testTasks = ['babel', 'test'];

gulp.task('default', ['babel', 'test'] , function() {

  gulp.watch(serverJSFiles, serverTasks);
  gulp.watch(testJSFiles, testTasks);
  
});


gulp.task('server', ['babel','test'], function() {
  
  if (node) node.kill();
  
  node = spawn('node', ['./dist/server/server.js'], {stdio: 'inherit'})
  
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


gulp.task('babel', () =>{
  return gulp.src('./src/**/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
});


gulp.task('test', ['babel'],  function() {
  return gulp.src('./dist/test/**/*.js')
    .pipe(tape({
      reporter: tapColorize()
    }));
});
