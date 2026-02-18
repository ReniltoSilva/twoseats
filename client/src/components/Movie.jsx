const Movie = ({ details, saveToDB, saveTitle, deleteMovie, from }) => {
  const { rating, title, thumbnail, overview, genreId, date, place, comment } =
    details;

  const genreList = [
    {
      id: 28,
      name: "Action",
      backgroundColor: "#E74C3C",
      textColor: "#FFFFFF",
    },
    {
      id: 12,
      name: "Adventure",
      backgroundColor: "#F39C12",
      textColor: "#000000",
    },
    {
      id: 16,
      name: "Animation",
      backgroundColor: "#9B59B6",
      textColor: "#FFFFFF",
    },
    {
      id: 35,
      name: "Comedy",
      backgroundColor: "#F1C40F",
      textColor: "#000000",
    },
    { id: 80, name: "Crime", backgroundColor: "#2C3E50", textColor: "#FFFFFF" },
    {
      id: 99,
      name: "Documentary",
      backgroundColor: "#7F8C8D",
      textColor: "#FFFFFF",
    },
    { id: 18, name: "Drama", backgroundColor: "#2980B9", textColor: "#FFFFFF" },
    {
      id: 10751,
      name: "Family",
      backgroundColor: "#27AE60",
      textColor: "#FFFFFF",
    },
    {
      id: 14,
      name: "Fantasy",
      backgroundColor: "#8E44AD",
      textColor: "#FFFFFF",
    },
    {
      id: 36,
      name: "History",
      backgroundColor: "#A04000",
      textColor: "#FFFFFF",
    },
    {
      id: 27,
      name: "Horror",
      backgroundColor: "#78281F",
      textColor: "#FFFFFF",
    },
    {
      id: 10402,
      name: "Music",
      backgroundColor: "#E91E63",
      textColor: "#FFFFFF",
    },
    {
      id: 9648,
      name: "Mystery",
      backgroundColor: "#1A237E",
      textColor: "#FFFFFF",
    },
    {
      id: 10749,
      name: "Romance",
      backgroundColor: "#FF69B4",
      textColor: "#000000",
    },
    {
      id: 878,
      name: "Science Fiction",
      backgroundColor: "#1ABC9C",
      textColor: "#000000",
    },
    {
      id: 10770,
      name: "TV Movie",
      backgroundColor: "#34495E",
      textColor: "#FFFFFF",
    },
    {
      id: 53,
      name: "Thriller",
      backgroundColor: "#17202A",
      textColor: "#FFFFFF",
    },
    {
      id: 10752,
      name: "War",
      backgroundColor: "#4B5320",
      textColor: "#FFFFFF",
    },
    {
      id: 37,
      name: "Western",
      backgroundColor: "#D35400",
      textColor: "#FFFFFF",
    },
  ];

  /* check if this can be improved 
  turn this into an object look up?*/ //FIXME
  const checkGenre = genreId.map((id) => {
    const genre = genreList.find((item) => item.id === id);
    return {
      name: genre.name,
      backgroundColor: genre.backgroundColor,
      textColor: genre.textColor,
    };
  });

  const callSaveToDB = (movie) => {
    saveToDB({
      title: movie.title,
      thumbnail: movie.thumbnail,
      genreId: movie.genreId,
    });
  };
  const callSaveTitle = (movie) => {
    saveTitle({
      title: movie.title,
      thumbnail: movie.thumbnail,
    });
  };
  const callDeleteMovie = (movie) => {
    deleteMovie(movie.title);
  };

  const ChildMyLIst = () => {
    return (
      <>
        <p>Rating: {rating}</p>
        <p>Date: {date}</p>
        <p>Place: {place}</p>
        <p>{comment}</p>

        <div className="mylist_bts_container">
          <button onClick={() => callSaveTitle(details)}>Edit</button>
          <button
            style={{ backgroundColor: "rgb(255, 218, 218)" }}
            onClick={() => callDeleteMovie(details)}
          >
            Delete
          </button>
        </div>
      </>
    );
  };

  const ChildHome = () => {
    return (
      <>
        <p>{overview}</p>
        {details.button ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="green"
            class="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
            />
          </svg>
        ) : (
          <button onClick={() => callSaveToDB(details)}>Add to list</button>
        )}
      </>
    );
  };

  return (
    <>
      <div className="mylist_thumbnail_container">
        <img
          src={`https://image.tmdb.org/t/p/w500${thumbnail}`}
          alt="movie_thumbnail"
          style={{ width: "13rem" }}
        />
      </div>

      <div className="mylist_movie_details_container">
        <div className="genre_container">
          {checkGenre.map((genre) => (
            <p
              className="genre"
              style={{
                background: genre.backgroundColor,
                color: genre.textColor,
              }}
            >
              {genre.name}
            </p> /*Add key={uniqueID}*/ //FIXME
          ))}
        </div>
        <h3>
          <strong>{title}</strong>
        </h3>
        {from === "home.jsx" ? <ChildHome /> : <ChildMyLIst />}
      </div>
    </>
  );
};

export default Movie;
