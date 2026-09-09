import { Outlet } from "react-router-dom";

import ReceptionistSidebar from "../components/receptionist/ReceptionistSidebar";
import ReceptionistHeader from "../components/receptionist/ReceptionistHeader";

import "./ReceptionistLayout.css";

function ReceptionistLayout() {
  return (
    <div className="receptionist-layout">
      <ReceptionistSidebar />

      <div className="receptionist-main">
        <ReceptionistHeader />

        <main className="receptionist-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ReceptionistLayout;