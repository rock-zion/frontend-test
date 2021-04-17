import React, { useState } from "react";
import { NavigationStyle } from "./style.module";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";

const Navigation = () => {
  const [drawer, toggleDrawer] = useState(false);
  return (
    <NavigationStyle>
      <img className={"logo"} src={logo} alt="starwars logo" />
      <div className={`links webMenu`}></div>
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
      </div>
    </NavigationStyle>
  );
};

export default Navigation;
