/**
 * Created by chan on 2016. 8. 18..
 */

import MysqlConnector from "./MysqlConnector"
import db from "../../server"

let express = require('express');
let router  = express.Router();

router.get('/', (req, res) => {
    "use strict";
    //console.log(dbPool.getPost("ovekyc"));
    //console.log(db.getPost("ovekyc"));
    console.log(db.pool.query("select * from post", (err, rows, fields)=>{
        if(err) throw err;
        console.log("rows");
        console.log(rows);
        res.send(rows);

    }));
    //console.log(MysqlConnector.getPost("ovekyc"));
});

module.exports = router;