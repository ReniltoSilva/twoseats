import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  const searchMovie = (e) => {
    e.preventDefault();

    console.log(search);

    setSearch("");
  };

  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a> | <a href="/mylist">My List</a> |{" "}
          <a href="/login">Login</a>
        </nav>
        <form onSubmit={searchMovie}>
          <label>
            <input
              type="text"
              class="border-1 border-solid rounded-sm border-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <button>Search</button>
        </form>
      </header>
    </>
  );
};

export default Header;
