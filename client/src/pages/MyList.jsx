import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";

const MyList = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [rating, setRating] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [comment, setComment] = useState("");

  const [toggleModal, setToggleModal] = useState(false);
  const [allMovies, setAllMovies] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const response = await axios.get("http://localhost:3001/api");
      setAllMovies(response.data);
    }
    fetchMovies();
  }, []);

  const saveTitle = (movieComponent) => {
    const { title, thumbnail } = movieComponent;
    setToggleModal(!toggleModal);

    setTitle(title);
    setThumbnail(thumbnail);
  };

  const saveMovieInfo = async (e) => {
    e.preventDefault();
    setToggleModal(!toggleModal);

    if (!date && !place && !comment) return;

    const movieID = allMovies.find((movie) => movie.title === title);

    const movieINfo = {
      title,
      thumbnail,
      date,
      place,
      comment,
    };

    /*Send to backend and update in DB*/
    const response = await axios.put(
      `http://localhost:3001/api/movies/${movieID._id}`,
      movieINfo,
    );

    /* Update 'allMOvies' variable to reflet update on the page */
    const updatedAllMovies = allMovies.map((movie) =>
      movie.title === response.data.title ? response.data : movie,
    );

    setAllMovies(updatedAllMovies);

    setTitle("");
    setDate("");
    setPlace("");
    setComment("");
    setToggleModal("");
  };

  const deleteMovie = async (movieTitle) => {
    try {
      const movieID = allMovies.find((item) => item.title === movieTitle);

      if (!movieID) {
        console.error("movie not found");
      }

      await axios.delete(`http://localhost:3001/api/movies/${movieID._id}`);

      const updateUI = allMovies.filter((movie) => movie._id !== movieID._id);
      setAllMovies(updateUI);
    } catch (error) {
      console.error("Error deleting movie", error);
    }
  };

  return (
    <>
      <h1>My List</h1>
      {toggleModal && (
        <div className="form_popup_container">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={saveMovieInfo}
          >
            <label>
              Rating:
              <input
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </label>

            <label>
              Date:
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>

            <label>
              Place:
              <input
                type="text"
                value={place}
                // onChange={(e) => setPlace(e.target.value)}
                onChange={(e) => setPlace(e.target.value)}
              />
            </label>

            <label className="comment_container">
              Comment:
              <textarea
                rows={7}
                cols={2}
                value={comment}
                id="commentId"
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </label>

            <button type="submit">Save</button>
          </form>
          <button onClick={() => setToggleModal(!toggleModal)}>Cancel</button>
        </div>
      )}

      {allMovies &&
        allMovies.map((movie) => (
          <div
            className="mylist_movie_container"
            style={{ display: "flex" }}
            class="border-1 rounded-sm"
            key={movie.title}
          >
            <Movie
              details={movie}
              saveTitle={saveTitle}
              deleteMovie={deleteMovie}
              from={"myList.jsx"}
            />
          </div>
        ))}
    </>
  );
};

export default MyList;
