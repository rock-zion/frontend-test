import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const FavouritesContext = createContext();

const FavouritesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);
  useEffect(() => {
    let userFavouritesArray = [];
    if (!localStorage.getItem("userFavourites")) {
      localStorage.setItem(
        "userFavourites",
        JSON.stringify(userFavouritesArray)
      );
    } else {
      let favs = JSON.parse(localStorage.getItem("userFavourites"));
      setUserFavourites(favs);
    }
  }, []);

  useEffect(() => {
    console.log("userFavourites", userFavourites);
  }, [userFavourites]);

  const addToArray = (resource, url, name) => {
    let localStorageArray = JSON.parse(localStorage.getItem("userFavourites"));
    if (localStorageArray.length === 0) {
      localStorageArray.push({ resource, url, name });
      localStorage.setItem("userFavourites", JSON.stringify(localStorageArray));
      toast(`Added ${name} to list of favourites`);
      setUserFavourites(JSON.parse(localStorage.getItem("userFavourites")));
    } else if (localStorageArray.length > 0) {
      let obj = localStorageArray.find((arr) => arr.name === name);
      console.log("obj", obj);
      if (obj === undefined) {
        localStorageArray.push({ resource, url, name });
        localStorage.setItem(
          "userFavourites",
          JSON.stringify(localStorageArray)
        );
        toast(`Added ${name} to list of favourites`);
        setUserFavourites(JSON.parse(localStorage.getItem("userFavourites")));
      }
    }
  };

  const removeFromArray = (resource, url, name) => {
    let localStorageArray = JSON.parse(localStorage.getItem("userFavourites"));
    if (localStorageArray.length > 0) {
      let obj1 = localStorageArray.find((arr, i) => {
        if (arr.name === name) {
          localStorageArray.splice(i, 1);
          localStorage.setItem(
            "userFavourites",
            JSON.stringify(localStorageArray)
          );
          toast(`Removed ${name} from list of favourites`);
          setUserFavourites(JSON.parse(localStorage.getItem("userFavourites")));
          return true;
        }
      });
    }
  };

  return (
    <FavouritesContext.Provider
      value={{ removeFromArray, addToArray, userFavourites: userFavourites }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
