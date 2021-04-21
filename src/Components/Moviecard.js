import { render } from "@testing-library/react";
import React, {useState} from "react";
import "../App.css";
import MovieData  from "./MovieData";
import Ratings from "./Ratings";

function Moviecard() {
  return (
    <>
      <section className="Moviecard">
        {MovieData.map((movie) => {
          //const { Title, Year, PURL, link, rate, description } = movie;
          return <Movie movie={movie}></Movie>;
        })}
      </section>
    </>
  );
}

export const Movie = (props) => {
  const { Title, Year, PURL, link, rate, description } = props.movie;
  const [text, setText] = useState ('');

  const adddesc = () => {
    if (text === '') {
      setText(description);
    }else { 
      setText('');
    }
  };
  return (
     
    <article className="movie">
      <a target="_blank" href={link}>
      <img className="photo" src={PURL} alt="" />
      <h1>{Title}</h1>
      <h4 style={{ color: "#617d98" }}>{Year}</h4>
      </a>
      <Ratings nb={rate} />
      <div>
        <button onClick={adddesc}> description </button>
        <p> {text} </p>
      </div>
    </article>
    
  );
};

export default Moviecard;
