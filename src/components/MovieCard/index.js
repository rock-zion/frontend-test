import React from "react";
import { MovieCardStyle } from "./style.module";
import filmImg from "../../assets/icons/film.svg";
import { useHistory } from "react-router-dom";

const MovieCard = ({ title, director, episode }) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`film/${title}`);
  };
  return (
    <MovieCardStyle>
      <img className="cardIcon" src={filmImg} alt="" />
      <h1 className="movieTitle">{title}</h1>
      <span className="episode">Episode {episode}</span>
      <span className="director">Directed By:{director}</span>
      <button onClick={() => handleLearnMore()} className="learnMore">
        Learn More
      </button>
    </MovieCardStyle>
  );
};
export default MovieCard;
