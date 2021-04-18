import React from "react";
import { CardStyle } from "./style.module";
import filmImg from "../../assets/icons/film.svg";
import characterImg from "../../assets/icons/character.svg";
import planetImg from "../../assets/icons/planet.svg";
import starshipImg from "../../assets/icons/starship.svg";
import vehicleImg from "../../assets/icons/vehicle.svg";
import speciesImg from "../../assets/icons/species.svg";
import { useHistory } from "react-router-dom";

export const MovieCard = ({ title, director, episode }) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`films/${title}`);
  };
  return (
    <CardStyle>
      <img className="cardIcon" src={filmImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{title}</h1>
          <span className="subTexts">Episode {episode}</span>
          <span className="body1">Directed By:{director}</span>
        </div>
        <button onClick={() => handleLearnMore()} className="learnMore">
          Learn More
        </button>
      </span>
    </CardStyle>
  );
};

export const CharacterCard = ({ name, height, mass }) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`people/${name}`);
  };
  return (
    <CardStyle>
      <img className="cardIcon characterIcon" src={characterImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{name}</h1>
          <span className="subTexts">Height: {height}</span>
          <span className="subTexts">Mass: {mass}</span>
        </div>
        <button onClick={() => handleLearnMore()} className="learnMore">
          Learn More
        </button>
      </span>
    </CardStyle>
  );
};

export const PlanetCard = ({ name, population, climate, terrain }) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`planets/${name}`);
  };
  return (
    <CardStyle>
      <img className="cardIcon planetIcon" src={planetImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{name}</h1>
          <span className="subTexts">Population: {population}</span>
          <span className="subTexts">Climate: {climate}</span>
          <span className="subTexts">Terrain: {terrain}</span>
        </div>
        <button onClick={() => handleLearnMore()} className="learnMore">
          Learn More
        </button>
      </span>
    </CardStyle>
  );
};

export const SpeciesCard = ({
  name,
  classification,
  designation,
  language,
}) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`species/${name}`);
  };
  return (
    <CardStyle>
      <img className="cardIcon specieIcon" src={speciesImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{name}</h1>
          <span className="subTexts">Classification: {classification}</span>
          <span className="subTexts">Designation: {designation}</span>
          <span className="subTexts">Language: {language}</span>
        </div>
        <button onClick={() => handleLearnMore()} className="learnMore">
          Learn More
        </button>
      </span>
    </CardStyle>
  );
};

export const StarshipsCard = ({
  name,
  manufacturer,
  hyperdrive_rating,
  crew,
}) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`starships/${name}`);
  };
  return (
    <CardStyle>
      <img className="cardIcon starshipIcon" src={starshipImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{name}</h1>
          <span className="subTexts">Manufacturer: {manufacturer}</span>
          <span className="subTexts">
            Hyperdrive Rating: {hyperdrive_rating}
          </span>
          <span className="subTexts">Crew : {crew}</span>
        </div>
        <button onClick={() => handleLearnMore()} className="learnMore">
          Learn More
        </button>
      </span>
    </CardStyle>
  );
};

export const VehiclesCard = ({ name, manufacturer, vehicle_class, crew }) => {
  const history = useHistory();
  const handleLearnMore = () => {
    history.push(`vehicles/${name}`);
  };
  return (
    <CardStyle>
      <img className="cardIcon planetIcon" src={vehicleImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{name}</h1>
          <span className="subTexts">Manufacturer: {manufacturer}</span>
          <span className="subTexts">Vehicle Class: {vehicle_class}</span>
          <span className="subTexts">Crew: {crew}</span>
        </div>
        <button onClick={() => handleLearnMore()} className="learnMore">
          Learn More
        </button>
      </span>
    </CardStyle>
  );
};
