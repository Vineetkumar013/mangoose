require("dotenv").config();
const express = require("express");
const connection = require("./config");
app = express();



app.listen(process.env.PORT, async () => {
  try {
    console.log("connect with DB");
  } catch (error) {
    console.log("Something went wrong");
  }
  console.log(`Server listening on http://localhost:${process.env.PORT}`);
});
