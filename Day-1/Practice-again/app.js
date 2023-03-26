const express = require("express");
const { Connection, HeroModel } = require("./db.js");
require(".dotenv").config()

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/hero", async (req, res) => {
  const query = req.query;
  try {
    const heroes = await HeroModel.find(query);
    res.send(heroes);
  } catch (err) {
    console.log("Something went wrong");
    res.send(err.message);
  }
});

app.post("/addhero", async (req, res) => {
  const data = req.body;
  try {
    const hero = new HeroModel(data);
    await hero.save();
    res.send("Added with hero");
  } catch (err) {
    console.log("Something went wrong");
    console.log(err.message);
  }
});

app.patch("/edithero/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await HeroModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send(`Upadte the data ${ID}`)
  } catch (err) {
    console.log(err);
    res.send({"err":"something went wrong"});
  }
});


app.delete("/deletehero/:id", async (req, res) => {
    const ID = req.params.id;
    try {
      await HeroModel.findByIdAndUpdate({ _id: ID });
      res.send(`delete the data ${ID}`)
    } catch (err) {
      console.log(err);
      res.send({"err":"something went wrong"});
    }
  });

app.listen(port, async () => {
  try {
    await connection;
    console.log("connect to the DB");
  } catch (err) {
    console.log("Error while connecting to DB");
    console.log(err.message);
  }
  console.log(`server start ${port}`);
});
