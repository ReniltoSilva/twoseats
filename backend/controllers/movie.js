const moviesRouter = require("express").Router();
const Movie = require("../models/movie");

console.log(moviesRouter);

moviesRouter.get("/", async (req, res) => {
  try {
    const response = await Movie.find({});
    res.status(200).json(response);
  } catch (error) {
    res.json({ error });
  }

  //   if (!response.ok) {
  // throw new Error("Could not load movies");
  //   }
});

moviesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await Movie.findById({ _id: id });

  res.status(200).json(response);
});

moviesRouter.post("/", async (req, res) => {
  const body = req.body;
  const response = await new Movie(body).save();

  res.status(201).json(response);
});

moviesRouter.put("/:id", async (req, res) => {
  const body = req.body;
  console.log(body, "BODY");

  const response = await Movie.findByIdAndUpdate(
    { _id: req.params.id },
    /*pq aqui eu preciso colocar o objecto completo:
      title: body.title,
      thumbnail: body.thumbnail,
      date: body.date,
      place: body.place,
      comment: body.comment,
    
      em vez de apenas passar o { body }?
    
    */
    {
      title: body.title,
      thumbnail: body.thumbnail,
      date: body.date,
      place: body.place,
      comment: body.comment,
    },
    { new: true },
  );

  console.log(response, "UPDATED RESOURCE");
  res.status(200).json(response);
});

moviesRouter.delete("/:id", async (req, res) => {
  /* When do I need try/catch block and trow error?*/
  try {
    const response = await Movie.findByIdAndDelete({ _id: req.params.id });

    if (!response) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res
      .status(200)
      .json({ message: "Movie deleted successfully", deletedMovie: response });

    console.log(response);
  } catch (error) {
    res.status(500).json({ error: "An error occured" });
  }
});

// moviesRouter.put("/:id", async (req, res) => {
//   const body = req.body;

//   const response = await Movie.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       title: body.title,
//       thumbnail: body.thumbnail,
//       date: body.date,
//       place: body.place,
//       comment: body.comment,
//     },
//     { new: true },
//   );

//   res.status(200).json(response);
//   // console.log(response, "Responde from backend");
// });

// moviesRouter.delete("/:id", async (req, res) => {
//   /* When do I need try/catch block and trow error?*/
//   try {
//     const response = await Movie.findOneAndDelete({ _id: req.params.id });

//     if (!response) {
//       return res.status(404).json({ message: "Movie not found" });
//     }

//     res
//       .status(200)
//       .json({ message: "Movie deleted successfully", deletedMovie: response });
//   } catch (error) {
//     console.error("Error deleting movie:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

module.exports = moviesRouter;
