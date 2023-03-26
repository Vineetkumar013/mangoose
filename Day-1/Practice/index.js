const {connection} = require("./configure/configure");
const express = require("express");
const {heroroute} = require("./Route/hero.route");
const app = express();
require("dotenv").config();

app.use("/",heroroute);
app.get("/", (req, res) => {
  res.send("Hello world");
});





app.listen(process.env.port, async () => {
  
  try {
    await connection

  } catch (error) {
    console.log("error")
  }
console.log("port");
});
