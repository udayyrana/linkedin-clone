import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./compnents/Profile/Profile";
import Home from "./compnents/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
}

export default App;
