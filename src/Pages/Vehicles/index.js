import React from "react";
import { PagesLayout } from "../../components/Layout";
import bg from "../../assets/images/vehicle.jpeg";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { VehiclesCard } from "../../components/Cards";
import Loading from "../../components/Loading";

const fetchVehicles = async ({ queryKey }) => {
  const [key, location] = queryKey;
  const res = await fetch(
    `${process.env.REACT_APP_BASE_URL}${location.pathname}`
  );
  return res.json();
};

const Vehicles = () => {
  const location = useLocation();
  const { data, status } = useQuery(["vehicles", location], fetchVehicles);
  console.log(data);
  return (
    <PagesLayout bannerText={"Vehicles"} bgImg={bg}>
      {status === "loading" && (
        <div className="loadingContainer">
          <Loading />
        </div>
      )}
      <div className="movieContainerParent">
        {data &&
          data.results.map((data) => (
            <VehiclesCard
              key={data.name}
              name={data.name}
              manufacturer={data.manufacturer}
              crew={data.crew}
              vehicle_class={data.vehicle_class}
              seeMore={data.url}
            />
          ))}
      </div>
    </PagesLayout>
  );
};

export default Vehicles;
