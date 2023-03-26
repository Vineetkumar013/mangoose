 const express = require("express");
//  const mongoose = require("mongoose");
const {connection,HeroModel}= require("./db")
 const app = express();

 app.use(express.json())

 app.get("/",(req,res)=>{
    res.send("Welcome")
 })
 app.get("/heroes",async (req,res)=>{
    const heroes = await HeroModel.find()
    res.send(heroes)
 })


 app.listen(4300, async()=>{
    try{
        await connection
        console.log("connected to DB");
    }catch(err){
console.log("error while connecting to DB")
    }
    console.log("server start port 4500");
 })

app.post("/addhero", async (req,res)=>{
    const data = req.body
    const hero = new HeroModel(data)
    await hero.save()
    console.log(hero)
    res.send("Added the hero");
})










//  const main = async () =>{
//     try{
//  const connection = mongoose.connect("mongodb://127.0.0.1:27017");
//  console.log("connected to the DB");
//     }catch(err){
//     console.log("can't connect");
//     console.log(err.message);
//     }
//  }

//  const mongoose = require('mongoose');

// const movieSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   rating: {
//     type: Number,
//     required: true
//   },
//   year: {
//     type: Number,
//     required: true
//   }
// });

// module.exports = mongoose.model('Movie', movieSchema);


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/movie-store', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to the movie-store database');
// });

