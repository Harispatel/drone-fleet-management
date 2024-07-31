import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./components/Login";
import DroneOverview from "./components/DroneOverview";
import DroneDetails from "./components/DroneDetails";
import MaintenanceManagement from "./components/MaintenanceManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/overview" element={<DroneOverview />} />
        <Route path="/drone/:id" element={<DroneDetails />} />
        <Route path="/maintenance" element={<MaintenanceManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
