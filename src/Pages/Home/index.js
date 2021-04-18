import React from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/films.jpeg";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { MovieCard } from "../../components/Cards";
import Loading from "../../components/Loading";

const fetchFilms = async ({ queryKey }) => {
  const [key, location] = queryKey;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${location.pathname}`
  );
  return res.json();
};

const HomePage = () => {
  const location = useLocation();
  const { data, status } = useQuery(["films", location], fetchFilms);
  return (
    <PagesLayout bannerText={"Films"} bgImg={bg}>
      {status === "loading" && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      <div className="movieContainerParent">
        {data &&
          data.results.map((data) => (
            <MovieCard
              key={data.episode_id}
              director={data.director}
              producers={data.producer}
              episode={data.episode_id}
              title={data.title}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default HomePage;

HomePage.defaultProps = {};
