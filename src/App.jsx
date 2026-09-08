import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DoctorLayout from "./layouts/DoctorLayout";
import Dashboard from "./pages/doctor/Dashboard";
import Patients from "./pages/doctor/Patients";
import PatientDetails from "./pages/doctor/PatientDetails";

import PatientLayout from "./layouts/PatientLayout";
import PatientDashboard from "./pages/patient/Dashboard";
import MyCases from "./pages/patient/MyCases";
import Appointments from "./pages/patient/Appointments";
import Reports from "./pages/patient/Reports";
import Notifications from "./pages/patient/Notifications";
import Profile from "./pages/patient/Profile";
import Settings from "./pages/patient/Settings";
import HelpSupport from "./pages/patient/HelpSupport";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================================
            DEFAULT ROUTE
        ================================= */}
        <Route
          path="/"
          element={<Navigate to="/doctor/dashboard" replace />}
        />

        {/* ================================
            DOCTOR PORTAL
        ================================= */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="patients" element={<Patients />} />

          <Route
            path="patients/:patientId"
            element={<PatientDetails />}
          />
        </Route>

        {/* ================================
            PATIENT PORTAL
        ================================= */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route
            path="dashboard"
            element={<PatientDashboard />}
          />

          <Route
            path="cases"
            element={<MyCases />}
          />

          <Route
            path="appointments"
            element={<Appointments />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />

          <Route
            path="notifications"
            element={<Notifications />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="settings"
            element={<Settings />}
          />

          <Route
            path="help"
            element={<HelpSupport />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;