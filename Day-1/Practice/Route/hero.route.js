const { HeroModel } = require("../Model/Hero.mode");
const express = require("express");
const heroroute = express.Router();
heroroute.use(express.json())
require("dotenv").config();
heroroute.get("/heroes", async (req, res) => {
  const heroes = await HeroModel.find();
  res.send(heroes);
  console.log(heroes);
});

heroroute.post("/heroes", async (req, res) => {
const data = req.body;
  const heroes = await HeroModel.insertMany(data);
//   await heroes.save()
  res.send(heroes);
  console.log(heroes);
});

heroroute.patch("/heroes/:id", async (req, res) => {
    const ID = req.params.id
    const data = req.body;
      const heroes = await HeroModel.findByIdAndUpdate({_id:ID},data);
      res.send(heroes);
      console.log(heroes);
    });
    heroroute.delete("/heroes/:id", async (req, res) => {
        const ID = req.params.id
        const data = req.body;
          const heroes = await HeroModel.findByIdAndDelete({_id:ID});
          res.send(heroes);
          console.log(heroes);
        });
    

module.exports = {
    heroroute
}
