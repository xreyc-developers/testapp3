const express = require("express");
const counter = require("../routes/counterRoute");

module.exports = (app) => {
    app.use(express.json());
    app.use("/api/counter", counter);
}