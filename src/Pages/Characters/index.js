import React from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/characters.jpeg";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { CharacterCard } from "../../components/Cards";
import Loading from "../../components/Loading";

const fetchCharacters = async ({ queryKey }) => {
  const [key, location] = queryKey;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${location.pathname}`
  );
  return res.json();
};

const Characters = () => {
  const location = useLocation();
  const { data, status } = useQuery(["people", location], fetchCharacters);
  console.log(data);
  return (
    <PagesLayout bannerText={"Characters"} bgImg={bg}>
      {status === "loading" && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      <div className="movieContainerParent">
        {data &&
          data.results.map((data) => (
            <CharacterCard
              key={data.name}
              name={data.name}
              height={data.height}
              mass={data.mass}
              home_world={data.home_world}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default Characters;
