import axios from "axios";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchLatestMovies = async () => {
      const config = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODVmYzNmODY2ZTVmYzc3YmUyZjM4NGEwMjhiMTZkMyIsIm5iZiI6MTcyMTIyNjc5OC45MDEsInN1YiI6IjY2OTdkNjJlZjA3NWRiNGMxZjg4NzM4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HsxKA_M8uk8GDmX0_z7Pj751J2EWbHqGQ4ShB0cpQHM",
        },
      };

      const responseTMDB = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        config,
      );
      const responseDB = await axios.get("http://localhost:3001/api/");

      // const obj1 = [
      //   { id: 1, name: "Alice", role: "Engineer" },
      //   { id: 2, name: "Bob", role: "Designer" },
      //   { id: 3, name: "Jack", role: "Carpenter" },
      // ];

      // const obj2 = [
      //   { id: 1, name: "Alice", role: "Engineer" },
      //   { id: 2, name: "Maria", role: "Designer" },
      //   { id: 3, name: "Robert", role: "Carpenter" },
      // ];

      let newArr = [];

      // obj1.forEach((item, i) => {
      //   if (item.name === obj2[i].name) {
      //     newArr.push({ name: item.name, button: true });
      //   } else {
      //     newArr.push({ name: item.name, button: false });
      //   }
      // });
      // console.log(responseDB.data);
      // console.log(responseDB.data[0].title);

      responseTMDB.data.results.map((item) => {
        const checkMovie = responseDB.data.some(
          (movie) => movie.title === item.title,
        );

        const movieObj = {
          title: item.title,
          thumbnail: item.poster_path,
          overview: item.overview,
          id: item.id,
        };

        if (checkMovie) {
          movieObj.button = true;
          newArr.push(movieObj);
        } else {
          movieObj.button = false;
          newArr.push(movieObj);
        }
      });

      setMovies(newArr);
    };

    fetchLatestMovies();
  }, [movies]);

  const saveToDB = async (movieParam) => {
    const newMovie = {
      title: movieParam.title,
      thumbnail: movieParam.thumbnail,
      date: "",
      place: "",
      comment: "",
    };

    await axios.post("http://localhost:3001/api/movies", newMovie);
  };

  return (
    <>
      <h1>Home</h1>
      <div className="main_movies_container">
        {movies.map((item) => (
          <div
            key={item.id}
            style={{
              listStyle: "none",
              margin: "5px 0px",
              padding: "5px",
              width: "17rem",
            }}
            class="shadow-lg border-1 rounded-sm border-black"
          >
            <Movie details={item} saveToDB={saveToDB} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
