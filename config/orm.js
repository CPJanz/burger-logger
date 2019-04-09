const connection = require("./connection");

const orm = {
    selectAll: function() {
        console.log("Select All");
    },

    insertOne: function() {
        console.log("insert one");
    },

    updateOne: function() {
        console.log("update one");
    }
}
module.exports = orm;