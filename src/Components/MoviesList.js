import React from "react";
import Moviecard from "./Moviecard";
import StarRating from "./Ratings";




const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div className="Content" > 
    <div className="Moviecard" >
    {moviesList
      .filter(
        (el) =>
          el.Title.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
          el.Rate >= 1
      )
      .map((el, i) => (
        <Moviecard key={i} movie={el} />
      ))}
  </div>
  </div>
);
};
export default MoviesList;
