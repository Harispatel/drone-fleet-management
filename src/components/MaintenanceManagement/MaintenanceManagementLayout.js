import React from "react";

const MaintenanceManagementLayout = ({ allLogs }) => {
  return (
    <div className="container mt-5">
      <h2>Maintenance Management</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Drone ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Technician</th>
          </tr>
        </thead>
        <tbody>
          {allLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.droneId}</td>
              <td>{log.date}</td>
              <td>{log.description}</td>
              <td>{log.technician}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceManagementLayout;
