import { Outlet } from "react-router-dom";

import PatientSidebar from "../components/patient/PatientSidebar";
import PatientHeader from "../components/patient/PatientHeader";

import "./PatientLayout.css";

function PatientLayout() {
  return (
    <div className="patient-layout">
      <PatientSidebar />

      <div className="patient-main">
        <PatientHeader />

        <main className="patient-page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default PatientLayout;