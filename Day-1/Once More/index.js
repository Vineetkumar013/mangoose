const express = require("express");
const {connection} = require("./Mongoose/mongoose")
const app = express();
require("dotenv").config();
app.use("/movies",movieRouter);

app.get("/",async(req,res)=>{
    res.json({message:"movie api"});
})

app.listen(process.env.port,()=>{
    console.log(`server start ${port}`);
})