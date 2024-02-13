import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./compnents/Profile/Profile";
import Home from "./compnents/Home";
// import Nav from './compnents/General/Nav';
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const login = useState(false);
  // console.log(user);
  const user = useSelector((store) => store.user.loggedIn);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;
