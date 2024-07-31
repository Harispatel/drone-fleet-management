import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import "../../Assets/styles/DroneFleetOverviewStyle.css";

const DroneOverviewLayout = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Drone Fleet Overview</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Flight Hours</th>
              <th>Battery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.drones.map((drone) => (
              <tr key={drone.id}>
                <td>{drone.id}</td>
                <td>{drone.status}</td>
                <td>{drone.flight_hours}</td>
                <td>{drone.battery_status}</td>
                <td>
                  <Link
                    to={`/drone/${drone.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DroneOverviewLayout;
