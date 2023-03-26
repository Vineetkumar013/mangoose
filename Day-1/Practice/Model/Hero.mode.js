const mongoose = require("mongoose");
const heroSchema = mongoose.Schema({
    Name: String,
    Age:Number
})

const HeroModel = mongoose.model("hero",heroSchema);
module.exports = {
    HeroModel
}