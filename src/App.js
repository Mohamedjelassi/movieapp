import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { MovieData } from "./Components/MovieData";
import AddMovie from "./Components/AddMovie";


import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState(MovieData);

  
  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="App">
      <Navbar />
      <AddMovie addNewMovie={addNewMovie} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
