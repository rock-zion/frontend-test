import React from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/falcon.jpeg";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { StarshipsCard } from "../../components/Cards";
import Loading from "../../components/Loading";

const fetchStarships = async ({ queryKey }) => {
  const [key, location] = queryKey;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${location.pathname}`
  );
  return res.json();
};

const Starships = () => {
  const location = useLocation();
  const { data, status } = useQuery(["species", location], fetchStarships);
  console.log(data);
  return (
    <PagesLayout bannerText={"Starships"} bgImg={bg}>
      {status === "loading" && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      <div className="movieContainerParent">
        {data &&
          data.results.map((data) => (
            <StarshipsCard
              key={data.name}
              name={data.name}
              manufacturer={data.manufacturer}
              hyperdrive_rating={data.hyperdrive_rating}
              crew={data.crew}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default Starships;
