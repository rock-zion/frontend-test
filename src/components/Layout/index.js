import React from "react";
import { PagesLayoutStyles, ButtonFavouriteLayoutStyle } from "./style.module";
import { useHistory } from "react-router-dom";
import unfavourited from "../../assets/icons/heart-line.svg";
import favourited from "../../assets/icons/heart-fill.svg";

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
  const handleLearnMore = () => {
    history.push({ pathname: `${resource}/${name}`, url: { url } });
  };
  return (
    <ButtonFavouriteLayoutStyle>
      <button onClick={() => handleLearnMore()}>Learn More</button>
      {false ? (
        <img alt="" src={favourited} />
      ) : (
        <img alt="" src={unfavourited} />
      )}
    </ButtonFavouriteLayoutStyle>
  );
};
