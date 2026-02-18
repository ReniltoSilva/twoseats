import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault();

    /* Turn this into a login/sign up component, 
dependending on where the user clicks, 
button login or sign up */ //FIXME

    const response = await axios.get("http://localhost:3001/api/login");
    console.log(response.data);

    setUsername("");
    setPassword("");
  };

  const signupHandle = async (e) => {
    e.preventDefault();

    const user = {
      name,
      username,
      password,
    };

    // const response = await axios.post("http://localhost:3001/api/users", user);
    console.log(response.status);

    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Username:
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button onClick={loginHandle}>Login</button>
          <button onClick={signupHandle}>Sign up</button>
        </form>
      </div>
    </>
  );
};

export default Login;
