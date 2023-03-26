require("dotenv").config();
const { request } = require("express");
const mongoose = require("mongoose");
const {heroModel} = require("../model/h-model");
const Hroute = require.Router();
Hroute.use(express.json());

Hroute.get("/hero", async (req,res)=>{
    try{
        const hero = await heroModel.find();
        res.send(hero);
        console.log(hero);
    }catch (error) {
        console.log({"err":"Something went wrong"});
    }
})

