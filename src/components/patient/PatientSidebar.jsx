import { NavLink } from "react-router-dom";

const Icon = ({ name, size = 20 }) => {
  const icons = {
    dashboard: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),

    cases: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 3.5h6M9 9h6M9 13h6M9 17h4" />
      </>
    ),

    appointments: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2.5" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
      </>
    ),

    reports: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </>
    ),

    notifications: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),

    profile: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
      </>
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.9 1.9-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V22h-2.7v-.08a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.9-1.9.06-.06A1.7 1.7 0 0 0 7.6 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.7h.04A1.7 1.7 0 0 0 7.6 10a1.7 1.7 0 0 0-.34-1.88L7.2 8.06l1.9-1.9.06.06a1.7 1.7 0 0 0 1.88.34A1.7 1.7 0 0 0 12.07 5V4h2.7v1a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 1.9 1.9-.06.06A1.7 1.7 0 0 0 19.24 10a1.7 1.7 0 0 0 1.56 1.03h.04v2.7h-.04A1.7 1.7 0 0 0 19.4 15Z" />
      </>
    ),

    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 4.2 1.3c-.8 1-2 1.2-2 2.7" />
        <path d="M12 16.5h.01" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
};

function PatientSidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      icon: "dashboard",
      path: "/patient/dashboard",
    },
    {
      name: "My Cases",
      icon: "cases",
      path: "/patient/cases",
    },
    {
      name: "Appointments",
      icon: "appointments",
      path: "/patient/appointments",
    },
    {
      name: "Reports",
      icon: "reports",
      path: "/patient/reports",
    },
    {
      name: "Notifications",
      icon: "notifications",
      path: "/patient/notifications",
    },
    {
      name: "My Profile",
      icon: "profile",
      path: "/patient/profile",
    },
  ];

  return (
    <aside className="patient-sidebar">
      <div className="patient-sidebar-brand">
        <div className="patient-sidebar-logo">✚</div>

        <div>
          <h2>SIH</h2>
          <span>Patient Portal</span>
        </div>
      </div>

      <nav className="patient-sidebar-nav">
        <p className="patient-sidebar-section-title">
          MAIN MENU
        </p>

        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `patient-sidebar-item ${
                isActive ? "active" : ""
              }`
            }
          >
            <span className="patient-sidebar-icon">
              <Icon name={item.icon} size={19} />
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="patient-sidebar-bottom">
        <p className="patient-sidebar-section-title">
          SYSTEM
        </p>

        {/* SETTINGS */}
        <NavLink
          to="/patient/settings"
          className={({ isActive }) =>
            `patient-sidebar-item ${
              isActive ? "active" : ""
            }`
          }
        >
          <span className="patient-sidebar-icon">
            <Icon name="settings" size={19} />
          </span>

          <span>Settings</span>
        </NavLink>

        {/* HELP & SUPPORT */}
        <NavLink
          to="/patient/help"
          className={({ isActive }) =>
            `patient-sidebar-item ${
              isActive ? "active" : ""
            }`
          }
        >
          <span className="patient-sidebar-icon">
            <Icon name="help" size={19} />
          </span>

          <span>Help & Support</span>
        </NavLink>
      </div>

      <div className="patient-sidebar-footer">
        <div className="patient-mini-avatar">MJ</div>

        <div>
          <strong>Md. Jamal Hossain</strong>
          <span>Patient</span>
        </div>
      </div>
    </aside>
  );
}

export default PatientSidebar;