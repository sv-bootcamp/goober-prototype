/**
 * Created by chan on 2016. 8. 18..
 */

"use strict";

import mysql from 'mysql';

let instance = null;

class MysqlConnector{
    constructor() {
        if (!instance) {
            instance = this;
            instance.pool = mysql.createPool({
                connectionLimit : 3,
                host            : '127.0.0.1',
                user            : 'root',
                password        : '0000',
                database        : 'goober_proto'
            });
        }
        return instance;
    }

    insertPost(){
        this.pool.getConnection((err, connection)=>{

            connection.query( 'INSERT INTO post ', (err, rows) => connection.release());
        });
        return;
    }
    getPost(userid){
        this.pool.query("select * from post", (err, rows, fields)=>{
            console.log(err);
            console.log("rows");
            console.log(rows);

            console.log("fields");
            console.log(fields);
        });
        /*
        this.pool.getConnection((err, connection)=>{
            return connection.query( 'SELECT * FROM post WHERE userid='+userid, (err, rows) => {
                console.log(rows);
                connection.release()
            });
        });
        return;
        */
    }

}



//export default MysqlConnector;

const DB = new MysqlConnector();
export default DB;