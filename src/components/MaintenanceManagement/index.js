import React from "react";
import data from "../../data/data.json";
import MaintenanceManagementLayout from "./MaintenanceManagementLayout";

const MaintenanceManagement = () => {
  const allLogs = data.drones.flatMap((drone) =>
    drone.maintenance_logs.map((log) => ({ ...log, droneId: drone.id }))
  );

  return <MaintenanceManagementLayout allLogs={allLogs} />;
};

export default MaintenanceManagement;
