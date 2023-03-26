require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.Connect(process.env.MONGODB_URL);

module.exports = {
    connection
}