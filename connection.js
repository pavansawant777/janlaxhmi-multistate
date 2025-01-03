var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "brlh1gvmayk2qtcnbwpn-mysql.services.clever-cloud.com",
    "user": "ubxf4awm2wjinv0m",
    "password": "KY4y56CDvICo7ic0qD0R",
    "database": "brlh1gvmayk2qtcnbwpn"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
