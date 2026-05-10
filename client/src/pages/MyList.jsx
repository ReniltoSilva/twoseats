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
      const response = await axios.get("http://localhost:3001/api/movies");
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
    <div className="px-30 pt-5">
      {toggleModal && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      )}

      {allMovies &&
        allMovies.map((movie) => (
          <div className="card card-side bg-base-200 shadow-md mt-5">
            <div className="card-actions justify-start">
              <Movie
                details={movie}
                saveTitle={saveTitle}
                deleteMovie={deleteMovie}
                from={"myList.jsx"}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MyList;
