const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config();

const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

module.exports = () => {
    mongoose.connect(`mongodb+srv://testapp1:testapp1@testapp.i7jvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    //mongoose.connect(`mongodb+srv://${db_username}:${db_password}@${db_name}.i7jvc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
}
