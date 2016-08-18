/**
 * Created by chan on 2016. 8. 10..
 */
import MysqlConnector from './src/server/MysqlConnector';

let express = require('express');
let bodyParser = require("body-parser");
let app = express();

/* configure */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* database */
const db = new MysqlConnector();
export default db;

/* router modules */
let receivePost = require('./src/server/receive-post');
let getPost     = require('./src/server/get-post');

app.use('/receive-post', receivePost);
app.use('/get-post', getPost);

app.listen(3000, function(){
    console.log('svbootcamp_codelab1 listening on port 3000');
});


