const mysql = require("mysql");
const keys = require("./keys");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: keys.mysql.secret,
    database: 'bamazonDB'
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;