import { useEffect, useState } from "react";
import axios from "axios";

const MyList = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
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

  const saveTitle = (movieInfo) => {
    setToggleModal(!toggleModal);

    setTitle(movieInfo.title);
    setThumbnail(movieInfo.thumbnail);
  };

  const saveMovieInfo = async (e) => {
    e.preventDefault();
    setToggleModal(!toggleModal);

    const movieID = allMovies.find((movie) => movie.title === title);

    const movieINfo = {
      title,
      thumbnail,
      date,
      place,
      comment,
    };

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
              <input type="text" value={""} />
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
              >
                I love this movie, definitely on my top 5 best movies
              </textarea>
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
            class="border-1 rounded-sm "
            key={movie.title}
          >
            <div className="mylist_thumbnail_container">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.thumbnail}`}
                alt="movie_thumbnail"
                style={{ width: "120px" }}
              />
            </div>

            <div className="mylist_movie_details_container">
              <h4>{movie.title}</h4>
              <p>Date: {movie.date}</p>
              <p>Place: {movie.place}</p>
              <p>{movie.comment}</p>
              <div className="mylist_bts_container">
                <button
                  onClick={() =>
                    saveTitle({
                      title: movie.title,
                      thumbnail: movie.thumbnail,
                      date: movie.date,
                      place: movie.place,
                      comment: movie.comment,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  style={{ backgroundColor: "rgb(255, 218, 218)" }}
                  onClick={() => deleteMovie(movie.title)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mylist_comment_container"></div>
          </div>
        ))}
    </>
  );
};

export default MyList;
