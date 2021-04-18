import { MoreDetailsLayout } from "../../components/Layout";
import React from "react";
import FavouriteCard from "../../components/FavouriteCard";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const fetchMoreDetails = async ({ queryKey }) => {
  const [url] = queryKey;
  const res = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`);
  return res.json();
};

const MoreDetailsPage = () => {
  let { name, url, id } = useParams();
  const { data, status } = useQuery([`${url}/${id}`], fetchMoreDetails);
  console.log("data", data);
  if (url === "planets") {
    return (
      <MoreDetailsLayout>
        {data && (
          <div className="childrenInner">
            <div>
              <h1 className="headingText">More Details about {name}</h1>
              <FavouriteCard resource={url} moredetails={true} />
            </div>
            <div>
              <h1>Climate: {data.climate}</h1>
              <h2>Population: {data.population}</h2>
              <h4>Gravity: {data.gravity}</h4>
              <h4>Rotation Period: {data.rotation_period}</h4>
              <h4>Terrain: {data.terrain}</h4>
              <h4>Diameter: {data.diameter}</h4>
            </div>
          </div>
        )}
        {status === "loading" && (
          <div className="loadingContainer">
            <Loading />
          </div>
        )}
      </MoreDetailsLayout>
    );
  } else if (url === "species") {
    return (
      <MoreDetailsLayout>
        {data && (
          <div className="childrenInner">
            <div>
              <h1 className="headingText">More Details about {name}</h1>
              <FavouriteCard resource={url} moredetails={true} />
            </div>
            <div>
              <h1>Name: {data.name}</h1>
              <h1>Classification: {data.classification}</h1>
              <h2>Designation: {data.designation}</h2>
              <h4>Average Lifespan: {data.average_lifespan}</h4>
              <h4>Eye Colors: {data.eye_colors}</h4>
              <h4>Average Height: {data.average_height}</h4>
            </div>
          </div>
        )}
        {status === "loading" && (
          <div className="loadingContainer">
            <Loading />
          </div>
        )}
      </MoreDetailsLayout>
    );
  } else if (url === "people") {
    return (
      <MoreDetailsLayout>
        {data && (
          <div className="childrenInner">
            <div>
              <h1 className="headingText">More Details about {name}</h1>
              <FavouriteCard resource={url} moredetails={true} />
            </div>
            <div>
              <h1>Name: {data.name}</h1>
              <h1>Birth Year : {data.birth_year}</h1>
              <h2>Eye Color: {data.eye_color}</h2>
              <h4>Skin Color: {data.skin_color}</h4>
              <h4>Mass: {data.mass}</h4>
              <h4>Eye Colors: {data.eye_color}</h4>
              <h4>Height: {data.height}</h4>
            </div>
          </div>
        )}
        {status === "loading" && (
          <div className="loadingContainer">
            <Loading />
          </div>
        )}
      </MoreDetailsLayout>
    );
  } else if (url === "vehicles") {
    return (
      <MoreDetailsLayout>
        {data && (
          <div className="childrenInner">
            <div>
              <h1 className="headingText">More Details about {name}</h1>
              <FavouriteCard resource={url} moredetails={true} />
            </div>
            <div>
              <h1>Manufacturer:{data.manufacturer}</h1>
              <h2>Cargo Capacity: {data.cargo_capacity}</h2>
              <h4>Rations: {data.consumables}</h4>
              <h4>Crew Capacity: {data.crew}</h4>
              <h4>Max Atmosphering Speed: {data.max_atmosphering_speed}</h4>
            </div>
          </div>
        )}
        {status === "loading" && (
          <div className="loadingContainer">
            <Loading />
          </div>
        )}
      </MoreDetailsLayout>
    );
  } else {
    return (
      <MoreDetailsLayout>
        {data && (
          <div className="childrenInner">
            <div>
              <h1 className="headingText">More Details about {name}</h1>
              <FavouriteCard resource={url} moredetails={true} />
            </div>
            <div>
              <h1>Manufacturer:{data.manufacturer}</h1>
              <h2>Cargo Capacity: {data.cargo_capacity}</h2>
              <h4>Rations: {data.consumables}</h4>
              <h4>Crew Capacity: {data.crew}</h4>
              <h4>Hyperdrive Rating: {data.hyperdrive_rating}</h4>
            </div>
          </div>
        )}
        {status === "loading" && (
          <div className="loadingContainer">
            <Loading />
          </div>
        )}
      </MoreDetailsLayout>
    );
  }
};

export default MoreDetailsPage;
