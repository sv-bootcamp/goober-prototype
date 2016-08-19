/**
 * Created by chan on 2016. 8. 10..
 */

import express from 'express';
import bodyParser from 'body-parser';
let app = express();

/* configure */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('./src/client/'));

/* router modules */
import receivePost  from './src/server/routes/receive-post';
import getPost      from './src/server/routes/get-post';
import getMark      from './src/server/routes/get-mark';
import showMap      from './src/server/routes/show-map';

app.use('/receive-post', receivePost);
app.use('/get-post', getPost);
app.use('/get-mark', getMark);
app.use('/show-map', showMap);

app.listen(3000, function(){
    console.log('goober-prototype listening on port 3000');
});


