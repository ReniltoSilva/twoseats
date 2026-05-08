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
        <div className="rating rating-sm rating-half">
          <input type="radio" name="rating-11" className="rating-hidden" />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-1 bg-orange-500"
            aria-label="0.5 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-2 bg-orange-500"
            aria-label="1 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-1 bg-orange-500"
            aria-label="1.5 star"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-2 bg-orange-500"
            aria-label="2 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-1 bg-orange-500"
            aria-label="2.5 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-2 bg-orange-500"
            aria-label="3 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-1 bg-orange-500"
            aria-label="3.5 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-2 bg-orange-500"
            aria-label="4 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-1 bg-orange-500"
            aria-label="4.5 star"
          />
          <input
            type="radio"
            name="rating-11"
            className="mask mask-star-2 mask-half-2 bg-orange-500"
            aria-label="5 star"
          />
        </div>

        <p>Date: {date}</p>
        <p>Place: {place}</p>
        <p>{comment}</p>

        <div className="mylist_bts_container">
          <button
            className="btn btn-primary"
            onClick={() => callSaveTitle(details)}
          >
            Edit
          </button>
          <button
            className="btn btn-primary"
            style={{ backgroundColor: "rgb(247, 126, 126)" }}
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
        {/* <p>{overview}</p> */}
        {details.button ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="orange"
            class="bi bi-bookmark-check-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill="evenodd"
              d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
            />
          </svg>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => callSaveToDB(details)}
          >
            Add to list
          </button>
        )}
      </>
    );
  };

  return (
    <>
      {/* <div className="mylist_thumbnail_container">
        <img
          src={`https://image.tmdb.org/t/p/w500${thumbnail}`}
          alt="movie_thumbnail"
          style={{ width: "13rem" }}
        />
      </div> */}
      <figure className="px-2 pt-2 cover_overview_background">
        <p className="overview">{overview}</p>
        <img
          src={`https://image.tmdb.org/t/p/w200${thumbnail}`}
          alt={`${title} movie thumbnail`}
          className="rounded-xl img_figure"
        />
      </figure>

      {/* <div className="mylist_movie_details_container"> */}
      <div className="card">
        <h3 style={{ margin: "0px" }}>
          <strong>{title}</strong>
        </h3>
        <div className="genre_container">
          {checkGenre.map((genre) => (
            <p
              // className="genre" /*Old badge style*/
              className="badge badge-sm"
              style={{
                background: genre.backgroundColor,
                color: genre.textColor,
              }}
            >
              {genre.name}
            </p> /*Add key={uniqueID}*/ //FIXME
          ))}
        </div>

        {from === "home.jsx" ? <ChildHome /> : <ChildMyLIst />}
      </div>
    </>
  );
};

export default Movie;
