/**
 * Created by chan on 2016. 8. 17..
 */

let express = require('express');
let router  = express.Router();

router.post('/', (req, res) => {
    "use strict";

    let postData = req.param("post", null);
    console.log("Receive post data");
    console.log(postData);
    res.send('Received post data')
});

module.exports = router;