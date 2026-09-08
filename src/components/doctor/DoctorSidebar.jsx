import { NavLink } from "react-router-dom";

function DoctorSidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: "⌂",
      path: "/doctor/dashboard",
    },
    {
      name: "Patients",
      icon: "♙",
      path: "/doctor/patients",
    },
    {
      name: "New Case",
      icon: "+",
      path: "/doctor/new-case",
    },
    {
      name: "Appointments",
      icon: "▣",
      path: "/doctor/appointments",
    },
    {
      name: "Case History",
      icon: "▤",
      path: "/doctor/case-history",
    },
    {
      name: "Analytics",
      icon: "⌁",
      path: "/doctor/analytics",
    },
  ];

  return (
    <aside className="doctor-sidebar">

      <div className="sidebar-brand">
        <div className="sidebar-logo">✚</div>

        <div>
          <h2>SIH</h2>
          <span>Case Taking System</span>
        </div>
      </div>

      <nav className="sidebar-nav">

        <p className="sidebar-section-title">
          MAIN MENU
        </p>

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <p className="sidebar-section-title">
          SYSTEM
        </p>

        <button className="sidebar-item">
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </button>

        <button className="sidebar-item">
          <span className="sidebar-icon">?</span>
          <span>Help & Support</span>
        </button>

      </div>

      <div className="sidebar-footer">

        <div className="doctor-mini-avatar">
          DR
        </div>

        <div>
          <strong>Doctor Portal</strong>
          <span>SIH 2026</span>
        </div>

      </div>

    </aside>
  );
}

export default DoctorSidebar;