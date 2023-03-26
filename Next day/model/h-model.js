
const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
  title: {
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
  released: {
    type: String,
  },
  Language: {
    type: String,
  },
  country: {
    type: String,
  },
});

const heroModel = mongoose.model("hero", heroSchema);

module.exports = {
  heroModel,
};
