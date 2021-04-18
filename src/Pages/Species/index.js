import React from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/species.jpeg";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { SpeciesCard } from "../../components/Cards";
import Loading from "../../components/Loading";

const fetchSpecies = async ({ queryKey }) => {
  const [key, location] = queryKey;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${location.pathname}`
  );
  return res.json();
};

const Species = () => {
  const location = useLocation();
  const { data, status } = useQuery(["species", location], fetchSpecies);
  console.log(data);
  return (
    <PagesLayout bannerText={"Species"} bgImg={bg}>
      {status === "loading" && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      <div className="movieContainerParent">
        {data &&
          data.results.map((data) => (
            <SpeciesCard
              key={data.name}
              name={data.name}
              classification={data.classification}
              designation={data.designation}
              language={data.language}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default Species;
