var gulp = require('gulp');
var spawn = require('child_process').spawn;
var babel = require('gulp-babel');

var node;

var serverJSFiles = ['./server.js', './src/server/**/*.js'];
var serverTasks = ['babel', 'server'];
var clientTasks = [];

gulp.task('default', serverTasks , function() {

  gulp.watch(serverJSFiles, serverTasks);
  
});


gulp.task('server', ['babel'], function() {
  
  if (node) node.kill();
  
  node = spawn('node', ['./dist-server/server.js'], {stdio: 'inherit'})
  
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
  return gulp.src(serverJSFiles)
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist-server'))
});
