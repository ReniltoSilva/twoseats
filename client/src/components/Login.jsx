import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={loginHandle}>
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
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
