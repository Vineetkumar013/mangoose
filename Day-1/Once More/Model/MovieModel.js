const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
    title:String,
    City:String,
    crew:[String]
    Pin:Number,
    Is_active:Boolean
})

const heroModel = mongoose.Model("model",heroSchema)

module.exports = {
    heroModel
}