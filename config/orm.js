const connection = require("./connection");

const orm = {
    /**
     * Queries a specified table and uses the specified column data in a passed function.
     * @param {string} cols
     * @param {string} table
     * @param {function} cb
     */
    selectAll: function(cols, table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        })
        console.log("Select All");
    },

    insertOne: function(table, column, value, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, result) {
            if (err) throw err;
            cb(result);
        })
        console.log("insert one");
    },

    updateOne: function() {
        console.log("update one");
    }
}
module.exports = orm;