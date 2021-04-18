import React from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/planet.jpeg";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { PlanetCard } from "../../components/Cards";
import Loading from "../../components/Loading";

const fetchPlanets = async ({ queryKey }) => {
  const [key, location] = queryKey;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${location.pathname}`
  );
  return res.json();
};

const Planets = () => {
  const location = useLocation();
  const { data, status } = useQuery(["planets", location], fetchPlanets);
  return (
    <PagesLayout bannerText={"Planets"} bgImg={bg}>
      {status === "loading" && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      <div className="movieContainerParent">
        {data &&
          data.results.map((data) => (
            <PlanetCard
              key={data.name}
              name={data.name}
              population={data.population}
              climate={data.climate}
              terrain={data.terrain}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default Planets;
