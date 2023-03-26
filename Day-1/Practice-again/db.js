const mongoose = require("mongoose");
require(".dotenv").config()
const Connection =  mongoose.connect(process.env.mongodbURL);

const heroSchema = mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villian:String,
    language:String,
    is_active:Boolean
})

const HeroModel = mongoose.model("hero",heroSchema);

const villainSchema = mongoose.Schema({
    name:String,
    power:Number 
})

const villianModel = mongoose.model("villian",villianSchema);

module.exports ={
    Connection,
    heroSchema,
    HeroModel
} 