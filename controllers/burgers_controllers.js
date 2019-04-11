const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.getAll(function(data) {
        res.render("index", { burgers: data })
    })
})

router.put("/eat", function(req, res) {
    burger.eatBurger(req.body.id, function(data) {
        if (data.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

router.post("/add", function(req, res) {
    burger.addBurger(req.body.burger_name, function(data) {
        res.redirect("/");
    })
})


module.exports = router