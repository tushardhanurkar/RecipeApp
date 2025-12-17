import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Index from "./pages/Home";
import Favorites from "./pages/Favorites/Favorites";
import Details from "./pages/Details/Details";
import dish from "./assets/dish.jpg";

const App = () => {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${dish})` }}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
