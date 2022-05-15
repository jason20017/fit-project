import React from "react";
import { Routes, Route } from "react-router-dom";
import Navi from "./components/Navi";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import QA from "./pages/QA";
import TDEE from "./pages/TDEE";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/courses" element={<Courses />}></Route>
        <Route exact path="/qa" element={<QA />}></Route>
        <Route exact path="/tdee" element={<TDEE />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
