const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  genreId: Array,
  thumbnail: String,
  date: String,
  place: String,
  comment: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
