const express = require("express");
const router = express.Router();
const { Counter } = require("../model/counterModel");

router.get("/", async (req, res) => {
    const counter = await Counter.find();
    res.send(counter);
});

router.post("/", async (req, res) => {
    let counter = new Counter({
        count: req.body.count
    });
    
    counter = await counter.save();
    res.send(counter)
});

router.put("/:id", async (req, res) => {
    const counter = await Counter.findByIdAndUpdate(
        req.params.id,
        {
            count: req.body.count
        },
        {
            new: true
        }
    )
    res.send(counter)
});

module.exports = router;