/**
 * Created by chan on 2016. 8. 18..
 */

import DB from "../MysqlConnector";
import express from'express';

let router  = express.Router();

router.get('/', (req, res) => {
    "use strict";
    console.log(DB.pool.query("select * from mark", (err, rows, fields)=>{
        if(err) throw err;
        console.log("rows");
        console.log(rows);
        res.send(rows);
    }));
});

module.exports = router;