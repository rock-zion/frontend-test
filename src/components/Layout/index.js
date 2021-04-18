import React, { useContext } from "react";
import { PagesLayoutStyles, ButtonFavouriteLayoutStyle } from "./style.module";
import { useHistory } from "react-router-dom";
import unfavourited from "../../assets/icons/heart-line.svg";
import favourited from "../../assets/icons/heart-fill.svg";
import { FavouritesContext } from "../../contexts/FavouritesContext";

export const PagesLayout = ({ children, bgImg, bannerText }) => {
  return (
    <PagesLayoutStyles>
      <section className="page-banner">
        <img className="bgImg" src={bgImg} alt="" />
        <h1 className="bannerText">{bannerText}</h1>
      </section>
      <section className="children">{children}</section>
    </PagesLayoutStyles>
  );
};

export const ButtonFavouriteLayout = ({ resource, url, name }) => {
  const history = useHistory();
  const { addToArray, userFavourites, removeFromArray } = useContext(
    FavouritesContext
  );
  const handleLearnMore = () => {
    history.push({ pathname: `${resource}/${name}`, url: { url } });
  };
  return (
    <ButtonFavouriteLayoutStyle>
      <button onClick={() => handleLearnMore()}>Learn More</button>
      {userFavourites.find((fav) => fav.name === name) ? (
        <img
          onClick={() => removeFromArray(resource, url, name)}
          alt=""
          src={favourited}
        />
      ) : (
        <img
          onClick={() => addToArray(resource, url, name)}
          alt=""
          src={unfavourited}
        />
      )}
    </ButtonFavouriteLayoutStyle>
  );
};
