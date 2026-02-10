import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from "./pages/MyList.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="mylist" element={<MyList />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </Router>,
);
