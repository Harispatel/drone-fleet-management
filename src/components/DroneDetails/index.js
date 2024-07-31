import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import DroneDetailsLayout from "./DroneDetailsLayout";

const DroneDetails = () => {
  const { id } = useParams();
  const drone = data.drones.find((d) => d.id === id);

  return <DroneDetailsLayout drone={drone} />;
};

export default DroneDetails;
