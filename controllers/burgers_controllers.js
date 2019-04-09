const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.getAll(function(data) {
        res.render("index", { burgers: data })
    })
})

router.post("/", function(req, res) {
    burger.addBurger(req.body.burger_name, function(data) {
        res.redirect("/");
    })
})


module.exports = router;