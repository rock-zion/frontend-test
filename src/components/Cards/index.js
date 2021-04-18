import React from "react";
import { CardStyle } from "./style.module";
import filmImg from "../../assets/icons/film.svg";
import characterImg from "../../assets/icons/character.svg";
import planetImg from "../../assets/icons/planet.svg";
import starshipImg from "../../assets/icons/starship.svg";
import vehicleImg from "../../assets/icons/vehicle.svg";
import speciesImg from "../../assets/icons/species.svg";
import { ButtonFavouriteLayout } from "../Layout/index";

export const MovieCard = ({ title, director, episode, seeMore }) => {
  return (
    <CardStyle>
      <img className="cardIcon" src={filmImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{title}</h1>
          {episode && <span className="episode">Episode {episode}</span>}
          {director && <span className="director">Directed By:{director}</span>}
        </div>
        <ButtonFavouriteLayout resource="films" name={title} url={seeMore} />
      </span>
    </CardStyle>
  );
};

export const CharacterCard = ({ seeMore, name, height, mass }) => {
  return (
    <CardStyle>
      <img className="cardIcon characterIcon" src={characterImg} alt="" />
      <span className="detailsContainer">
        <div>
          <h1 className="headingText">{name}</h1>
          <span className="subTexts">Height: {height}</span>
          <span className="subTexts">Mass: {mass}</span>
        </div>
        <ButtonFavouriteLayout resource="people" name={name} url={seeMore} />
      </span>
    </CardStyle>
  );
};

export const PlanetCard = ({ seeMore, name, population, climate, terrain }) => {
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
        <ButtonFavouriteLayout resource="planets" name={name} url={seeMore} />
      </span>
    </CardStyle>
  );
};

export const SpeciesCard = ({
  seeMore,
  name,
  classification,
  designation,
  language,
}) => {
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
        <ButtonFavouriteLayout resource="species" name={name} url={seeMore} />
      </span>
    </CardStyle>
  );
};

export const StarshipsCard = ({
  seeMore,
  name,
  manufacturer,
  hyperdrive_rating,
  crew,
}) => {
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
        <ButtonFavouriteLayout resource="starships" name={name} url={seeMore} />
      </span>
    </CardStyle>
  );
};

export const VehiclesCard = ({
  seeMore,
  name,
  manufacturer,
  vehicle_class,
  crew,
}) => {
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
        <ButtonFavouriteLayout resource="vehicles" name={name} url={seeMore} />
      </span>
    </CardStyle>
  );
};
