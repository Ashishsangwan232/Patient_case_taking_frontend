import { Outlet } from "react-router-dom";

import DoctorSidebar from "../components/doctor/DoctorSidebar";
import DoctorHeader from "../components/doctor/DoctorHeader";

import "./DoctorLayout.css";

function DoctorLayout() {
  return (
    <div className="doctor-layout">

      <DoctorSidebar />

      <div className="doctor-main">

        <DoctorHeader />

        <main className="doctor-page-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DoctorLayout;