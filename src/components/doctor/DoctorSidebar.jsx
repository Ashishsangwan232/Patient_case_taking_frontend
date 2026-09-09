import { NavLink } from "react-router-dom";
import "./DoctorSidebar.css";

function DoctorSidebar() {
  const menuItems = [
    {
      label: "Dashboard",
      path: "/doctor/dashboard",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 21v-6h6v6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Patients",
      path: "/doctor/patients",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="8"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M5 20a7 7 0 0 1 14 0"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Appointments",
      path: "/doctor/appointments",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="5"
            width="16"
            height="15"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 3v4M16 3v4M4 10h16"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M8 14h3M8 17h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Case History",
      path: "/doctor/case-history",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M6 4h12a1 1 0 0 1 1 1v15H5V5a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M8 8h8M8 12h8M8 16h5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Analytics",
      path: "/doctor/analytics",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M5 19V9M12 19V5M19 19v-8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3 19h18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const systemItems = [
    {
      label: "Settings",
      path: "/doctor/settings",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.04 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.04-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.44 15a1.7 1.7 0 0 0-1.56-1.04H6v-2.4h.88A1.7 1.7 0 0 0 8.44 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.7-1.7.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.72 5.2V5h2.4v.2a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06a1.7 1.7 0 0 0-.34 1.88A1.7 1.7 0 0 0 20.96 11H21v2.4h-.04A1.7 1.7 0 0 0 19.4 15Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Help & Support",
      path: "/doctor/help",
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M9.5 9a2.5 2.5 0 1 1 4.3 1.76c-.88.87-1.8 1.26-1.8 2.74"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="17"
            r=".8"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <aside className="doctor-sidebar">
      <div className="doctor-sidebar-brand">
        <div className="doctor-sidebar-logo">
          +
        </div>

        <div>
          <div className="doctor-sidebar-title">
            SIH
          </div>

          <div className="doctor-sidebar-subtitle">
            Case Taking System
          </div>
        </div>
      </div>

      <div className="doctor-sidebar-section-title">
        MAIN MENU
      </div>

      <nav className="doctor-sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `doctor-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="doctor-sidebar-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="doctor-sidebar-section-title system-title">
        SYSTEM
      </div>

      <nav className="doctor-sidebar-nav">
        {systemItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `doctor-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="doctor-sidebar-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="doctor-sidebar-profile">
        <div className="doctor-sidebar-profile-avatar">
          DR
        </div>

        <div className="doctor-sidebar-profile-info">
          <strong>Doctor Portal</strong>
          <span>SIH 2026</span>
        </div>
      </div>
    </aside>
  );
}

export default DoctorSidebar;