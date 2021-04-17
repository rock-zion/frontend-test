import React from "react";
import { PagesLayoutStyles } from "./style.module";

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
