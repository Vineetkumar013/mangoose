
const mongoose = require("mongoose");
const villianSchema = mongoose.Schema({
    Name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    rated: {
      type: String,
    },
    Language: {
      type: String,
    },
    country: {
      type: String,
    },
  });
  
  const villianModel = mongoose.model("villian", villianSchema);
  
  module.exports = {
    villianModel,
  };