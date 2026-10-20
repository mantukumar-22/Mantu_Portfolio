
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./pages/Skills";
import Project from "./Pages/Project";
import Login from "./pages/Login";
import SignUp from "./Pages/SignUp";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
