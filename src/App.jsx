import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ==================== DOCTOR ====================

import DoctorLayout from "./layouts/DoctorLayout";
import DoctorDashboard from "./pages/doctor/Dashboard";
import DoctorPatients from "./pages/doctor/Patients";
import PatientDetails from "./pages/doctor/PatientDetails";
import DoctorAppointments from "./pages/doctor/Appointments";
import DoctorCaseHistory from "./pages/doctor/CaseHistory";
import DoctorAnalytics from "./pages/doctor/Analytics";
import DoctorSettings from "./pages/doctor/Settings";
import DoctorHelpSupport from "./pages/doctor/HelpSupport";

// ==================== PATIENT ====================

import PatientLayout from "./layouts/PatientLayout";
import PatientDashboard from "./pages/patient/Dashboard";
import MyCases from "./pages/patient/MyCases";
import Appointments from "./pages/patient/Appointments";
import Reports from "./pages/patient/Reports";
import Notifications from "./pages/patient/Notifications";
import Profile from "./pages/patient/Profile";
import Settings from "./pages/patient/Settings";
import HelpSupport from "./pages/patient/HelpSupport";

// ==================== RECEPTIONIST ====================

import ReceptionistLayout from "./layouts/ReceptionistLayout";
import ReceptionistDashboard from "./pages/receptionist/Dashboard";
import NewPatient from "./pages/receptionist/NewPatient";
import Queue from "./pages/receptionist/Queue";
import ReceptionistAppointments from "./pages/receptionist/Appointments";
import ReceptionistPatients from "./pages/receptionist/Patients";
import ReceptionistHelpSupport from "./pages/receptionist/HelpSupport";
import ReceptionistSettings from "./pages/receptionist/Settings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================================
            DEFAULT
        ===================================================== */}

        <Route
          path="/"
          element={
            <Navigate
              to="/doctor/dashboard"
              replace
            />
          }
        />

        {/* =====================================================
            DOCTOR PORTAL
        ===================================================== */}

        <Route
          path="/doctor"
          element={<DoctorLayout />}
        >

          <Route
            path="dashboard"
            element={<DoctorDashboard />}
          />

          <Route
            path="patients"
            element={<DoctorPatients />}
          />

          <Route
            path="patients/:patientId"
            element={<PatientDetails />}
          />

          <Route
            path="appointments"
            element={<DoctorAppointments />}
          />

          <Route
            path="case-history"
            element={<DoctorCaseHistory />}
          />

          <Route
            path="analytics"
            element={<DoctorAnalytics />}
          />

          <Route
            path="settings"
            element={<DoctorSettings />}
          />

          <Route
            path="help"
            element={<DoctorHelpSupport />}
          />

        </Route>

        {/* =====================================================
            PATIENT PORTAL
        ===================================================== */}

        <Route
          path="/patient"
          element={<PatientLayout />}
        >

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

        {/* =====================================================
            RECEPTIONIST PORTAL
        ===================================================== */}

        <Route
          path="/receptionist"
          element={<ReceptionistLayout />}
        >

          <Route
            path="dashboard"
            element={<ReceptionistDashboard />}
          />

          <Route
            path="new-patient"
            element={<NewPatient />}
          />

          <Route
            path="queue"
            element={<Queue />}
          />

          <Route
            path="appointments"
            element={<ReceptionistAppointments />}
          />

          <Route
            path="patients"
            element={<ReceptionistPatients />}
          />

          <Route
            path="help"
            element={<ReceptionistHelpSupport />}
          />

          <Route
            path="settings"
            element={<ReceptionistSettings />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;