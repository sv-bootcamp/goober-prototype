import express from 'express';
import path from 'path';

import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

import morgan from 'morgan';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
import session from 'express-session';

import api from './routes';


const app = express();
const port = 3000;
const devPort = 4000;

app.use(morgan('dev'));
app.use(bodyParser.json());

/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
mongoose.connect('mongodb://localhost/codelab');

app.use(session({
	secret: 'CodeLab1$1$234',
	resave: false,
	saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, '../client')));

app.use('/api', api);

/* support client-side routing */
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client/index.html'))
});

/* handle error */
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('something broke!');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});


if(process.env.NODE_ENV == 'development') {
	console.log('server is running');
	const config = require('../../webpack.dev.config');
	const compiler = webpack(config);
	const devServer = new WebpackDevServer(compiler, config.devServer);
	devServer.listen(
		devPort, () => {
			console.log('webpack-dev-server is listening on port', devPort);
		}
	);
}