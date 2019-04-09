const orm = require("../config/orm");

const burger = {
    getAll: function(cb) {
        orm.selectAll(["id", "burger_name"], "burgers", cb);
    },

    addBurger: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, cb);
    }
};


module.exports = burger;