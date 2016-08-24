import express from 'express';
import bodyParser from 'body-parser';
import api from './server/routes/api';


let app = express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/client');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req,res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log('listening ' + port +' port');
});