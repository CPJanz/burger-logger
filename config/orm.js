const connection = require("./connection");

const orm = {
    /** Reads from a specified table and uses the column data in a passed function. */
    selectAll: function(cols, table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    /** Creates a new entry into the specified table with the specified values then uses the return value in a callback function. */
    insertOne: function(table, column, value, cb) {
        let queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, column, value], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    /** Updates a specified column in a specified row then uses the return value in a callback function. */
    updateOne: function(table, id, column, value, cb) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, column, value, id], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;