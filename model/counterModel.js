const mongoose = require("mongoose");

// COUNTER SCHEMA
const counterSchema = new mongoose.Schema({
    count: Number
});

// COUNTER MODEL
const Counter = mongoose.model("Counter", counterSchema);

exports.counterSchema = counterSchema;
exports.Counter = Counter;