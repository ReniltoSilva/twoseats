const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const Movie = require("./models/movie");
const User = require("./models/user");

const app = express();
app.use(express.json()); /*Express doesn't parse JSON bodies by default*/
app.use(cors());

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error, "Error when trying to connect do Database");
  }
};
connectDB();

app.get("/api", async (req, res) => {
  const response = await Movie.find({});
  res.status(200).send(response);
});

app.post("/api/users", async (req, res) => {
  // console.log(req.body, "From POST users request");
  const body = req.body;

  const newUser = new User(req.body);
  const response = await newUser.save();

  res.status(201).json(response);
});

// app.get('/api/users/:id') //FIXME

app.post("/api/movies", async (req, res) => {
  console.log(req.body, "From POST movies request");

  const newMovie = new Movie(req.body);
  const response = await newMovie.save();

  res.status(201).json(response);
});

app.put("/api/movies/:id", async (req, res) => {
  const body = req.body;

  const response = await Movie.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: body.title,
      thumbnail: body.thumbnail,
      date: body.date,
      place: body.place,
      comment: body.comment,
    },
    { new: true },
  );

  res.status(200).json(response);
  // console.log(response, "Responde from backend");
});

app.delete("/api/movies/:id", async (req, res) => {
  /* When do I need try/catch block and trow error?*/
  try {
    const response = await Movie.findOneAndDelete({ _id: req.params.id });

    if (!response) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res
      .status(200)
      .json({ message: "Movie deleted successfully", deletedMovie: response });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
