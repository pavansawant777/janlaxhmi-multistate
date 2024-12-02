var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "bfseowypgiboidwdpdq1-mysql.services.clever-cloud.com",
    "user": "uc42drsrh1bg1xn4",
    "password": "4vM9F0GtbM5WgXlq8dkt",
    "database": "bfseowypgiboidwdpdq1"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
