# goober-prototype

## How
- make your own branch and start
- check SRS before develop :)
- https://github.com/sv-bootcamp/goober-prototype/blob/master/SRS.md

## Development Guide
- https://github.com/sv-bootcamp/wiki/wiki/Development-Guide

## Code Style Guide
- https://github.com/sv-bootcamp/wiki/wiki/Code-Style-Review-Guide

## About this project
- In this time, I tried to do TTD using Tape and Enzyme.

## install

		npm init
		bower init

		npm install --save express body-parser react react-dom
		npm install --save-dev gulp gulp-babel babel-preset-es2015 tape gulp-tape tap-colorize gulp-eslint gulp-istanbul gulp-apidoc mysql 


## Gulp

### rerunning node when src has changed
		https://gist.github.com/webdesserts/5632955

### sychronous task
		http://stackoverflow.com/questions/22824546/how-to-run-gulp-tasks-synchronously-one-after-the-other


## url
* /get-mark (GET) : show data in mysql for mark
* /get-post (GET) : show data in mysql for text-post
* /receive-post (POST) : insert data to mysql test-post
* /show-map (GET) : show map with mark -> now it is mock data, it will be updated soon