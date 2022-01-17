const express = require("express");
const router = express.Router();
const { Counter } = require("../model/counterModel");

router.get("/", async (req, res) => {
    const counter = await Counter.find();
    res.send(counter);
});

router.post("/", async (req, res) => {
    if(!req.body.id) {
        let counter = new Counter({
            count: req.body.count
        });
        counter = await counter.save();
        res.send(counter)
    } else {
        let counter = await Counter.findByIdAndUpdate(
            req.body.id,
            { count: req.body.count },
            { new: true }
        )
        res.send(counter)
    }
});

module.exports = router;