import React, { useContext } from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/lightsaber.jpeg";
import FavouriteCard from "../../components/FavouriteCard";
import { FavouritesContext } from "../../contexts/FavouritesContext";

const HomePage = () => {
  const { userFavourites } = useContext(FavouritesContext);
  return (
    <PagesLayout bannerText={"Favourites"} bgImg={bg}>
      {userFavourites.length === 0 && (
        <h1 className="favouriteHeaderText">
          Nothing in favourites Yet click on the heart icon to add items to
          favourites
        </h1>
      )}
      <div className="movieContainerParent">
        {userFavourites &&
          userFavourites.map((data) => (
            <FavouriteCard
              key={data.name}
              resource={data.resource}
              title={data.name}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default HomePage;

HomePage.defaultProps = {};
