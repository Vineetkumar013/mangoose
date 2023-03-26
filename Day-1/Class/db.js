const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/imdb"
    );
    console.log("connected to the DB");
    await Moviemodel.insertMany([
      {
      title: "The Land Girls",
      Rating: 8.5,
      Description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      "Genre": "Action, Adventure, Fantasy"
    } 
    ]);
    console.log("Added to the DB");
    connection.disconnect();
    console.log("Disconnected");
  } catch (err) {
    console.log("can't connect");
    console.log(err);
  }
};
main();

const movieSchema = mongoose.Schema({
  title: String,
  Rating: Number,
  city: String
},{
    verisonKey:false
});
console.log(movie);
const Moviemodel = mongoose.model("movie", movieSchema);
