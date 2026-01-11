import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Khushi from "./pages/Khushi";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/khushi" element={<Khushi />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
