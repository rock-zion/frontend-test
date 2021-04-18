import React from "react";
import { CardStyle } from "../Cards/style.module";
import filmImg from "../../assets/icons/film.svg";
import characterImg from "../../assets/icons/character.svg";
import planetImg from "../../assets/icons/planet.svg";
import starshipImg from "../../assets/icons/starship.svg";
import vehicleImg from "../../assets/icons/vehicle.svg";
import speciesImg from "../../assets/icons/species.svg";
import { ButtonFavouriteLayout } from "../Layout/index";

const MovieCard = ({ moredetails, title, resource, seeMore }) => {
  const returnImage = (resource) => {
    if (resource === "films") {
      return filmImg;
    } else if (resource === "people") {
      return characterImg;
    } else if (resource === "species") {
      return speciesImg;
    } else if (resource === "starships") {
      return starshipImg;
    } else if (resource === "vehicles") {
      return vehicleImg;
    } else {
      return planetImg;
    }
  };
  return (
    <CardStyle moredetails={moredetails}>
      <img className="cardIcon" src={returnImage(resource)} alt="" />
      {!moredetails && (
        <span className="detailsContainer">
          <div>
            <h1 className="headingText">{title}</h1>
          </div>

          <ButtonFavouriteLayout
            resource={resource}
            name={title}
            url={seeMore}
          />
        </span>
      )}
    </CardStyle>
  );
};
export default MovieCard;
