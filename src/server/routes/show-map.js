/**
 * Created by chan on 2016. 8. 18..
 */

import express from 'express';
import React from 'react';
import path from 'path';

let router  = express.Router();

router.get('/', (req, res) => {
    "use strict";
    /*let result;
    if(typeof window !== 'undefined') {
        result = ReactDOM.render(
        <App />,
            document.getElementById('root')
    );
    }
    console.log("gaga");
    console.log(result);
    res.send(result);
*/

    res.sendFile(path.resolve("src/client/show-map.html"));
});

module.exports = router;