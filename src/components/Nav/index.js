import React, { useState, useEffect } from "react";
import { NavigationStyle } from "./style.module";
import logo from "../../assets/icons/logo.svg";
import droid from "../../assets/icons/droid.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const links = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];

const Navigation = () => {
  const [drawer, toggleDrawer] = useState(false);
  const location = useLocation();
  console.log(location);
  return (
    <NavigationStyle>
      <img className={"logo"} src={logo} alt="starwars logo" />
      <div className={`links webMenu`}>
        {links.map((link) => (
          <Link
            className={`${
              location.pathname.includes(link) ? "webMenuLinkActive" : ""
            } webMenuLink`}
            key={link}
            to={`/${link}`}
          >
            {link.toUpperCase()}
          </Link>
        ))}
      </div>
      <img
        onClick={() => toggleDrawer(!drawer)}
        className={`mobile menu`}
        src={menuIcon}
        alt="menu icon"
      />

      <div
        className={`${
          drawer ? `mobileMenuOpen` : `mobileMenuClose`
        } mobileMenu`}
      >
        <img
          onClick={() => toggleDrawer(!drawer)}
          className={`mobileMenuCloseIcon`}
          src={closeIcon}
          alt=""
        />
        <div className={`mobileLinkContainer`}>
          <img className={`droid`} src={droid} alt="star wars droid" />
          {links.map((link) => (
            <Link
              onClick={() => toggleDrawer(!drawer)}
              className={`mobileLink`}
              key={link}
              to={`/${link}`}
            >
              {link.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </NavigationStyle>
  );
};

export default Navigation;
