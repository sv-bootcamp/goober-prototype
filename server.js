import express from 'express';
import bodyParser from 'body-parser';

import api from './routes/api';

let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('/', (req,res) => {
	res.send("hello world");
})

app.listen(port, () => {
	console.log('listening ' + port +' port');
})