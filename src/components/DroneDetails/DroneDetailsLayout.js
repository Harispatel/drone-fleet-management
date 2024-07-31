import React from "react";
import "../../Assets/styles/DroneDetailStyle.css"

const DroneDetailsLayout = ({ drone }) => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Drone Details View: {drone.id}</h2>
      <div className="drone-details">
        <p>
          <strong>Total Flight Hours:</strong> {drone.flight_hours}
        </p>
        <p>
          <strong>Battery Status:</strong> {drone.battery_status}
        </p>
        <p>
          <strong>Last Known Location:</strong> [{drone.last_known_location[0]},{" "}
          {drone.last_known_location[1]}]
        </p>
        <p>
          <strong>Current Mission:</strong> {drone.current_mission}
        </p>
      </div>
      <h4 className="mt-4">Maintenance Logs</h4>
      <ul className="list-group">
        {drone.maintenance_logs.map((log, index) => (
          <li key={index} className="list-group-item">
            <p>
              <strong>Date:</strong> {log.date}
            </p>
            <p>
              <strong>Description:</strong> {log.description}
            </p>
            <p>
              <strong>Technician:</strong> {log.technician}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DroneDetailsLayout;
