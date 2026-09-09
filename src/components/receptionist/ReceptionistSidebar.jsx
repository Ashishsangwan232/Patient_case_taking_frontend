import { NavLink } from "react-router-dom";
import "./ReceptionistSidebar.css";

const Icon = ({ name, size = 20 }) => {
  const icons = {
    dashboard: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),

    patients: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="9.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M17 11a3.5 3.5 0 1 0-1.2-6.8M21 20v-1.5a4 4 0 0 0-3-3.87"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),

    appointments: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 3v4M8 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 14h3M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),

    queue: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M5 6h14M5 12h14M5 18h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M18 16.5V18l1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),

    help: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9.6 9a2.5 2.5 0 1 1 4.2 1.8c-1.1.9-1.8 1.3-1.8 2.7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    ),

    settings: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1A1.8 1.8 0 0 0 5.3 12a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 0 1 0-3.6H4A1.8 1.8 0 0 0 5.3 2.2l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1A1.8 1.8 0 0 0 10.9-1.6v-.2a1.8 1.8 0 0 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1A1.8 1.8 0 0 0 21.4 5v.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.2Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),

    plus: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[name] || null;
};

function ReceptionistSidebar() {
  return (
    <aside className="receptionist-sidebar">
      <div className="receptionist-brand">
        <div className="receptionist-brand-mark">+</div>

        <div>
          <h2>AyushCare</h2>
          <span>Clinical Platform</span>
        </div>
      </div>

      <div className="receptionist-role">
        <span className="role-dot"></span>
        Receptionist Portal
      </div>

      <nav className="receptionist-nav">
        <div className="receptionist-nav-label">WORKSPACE</div>

        <NavLink
          to="/receptionist/dashboard"
          className={({ isActive }) =>
            `receptionist-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="receptionist-nav-icon">
            <Icon name="dashboard" size={19} />
          </span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/receptionist/patients"
          className={({ isActive }) =>
            `receptionist-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="receptionist-nav-icon">
            <Icon name="patients" size={19} />
          </span>
          <span>Patients</span>
        </NavLink>

        <NavLink
          to="/receptionist/appointments"
          className={({ isActive }) =>
            `receptionist-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="receptionist-nav-icon">
            <Icon name="appointments" size={19} />
          </span>
          <span>Appointments</span>
        </NavLink>

        <NavLink
          to="/receptionist/queue"
          className={({ isActive }) =>
            `receptionist-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="receptionist-nav-icon">
            <Icon name="queue" size={19} />
          </span>
          <span>Registration / Queue</span>
        </NavLink>
      </nav>

      <div className="receptionist-sidebar-bottom">
        <NavLink
          to="/receptionist/help"
          className={({ isActive }) =>
            `receptionist-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="receptionist-nav-icon">
            <Icon name="help" size={19} />
          </span>
          <span>Help & Support</span>
        </NavLink>

        <NavLink
          to="/receptionist/settings"
          className={({ isActive }) =>
            `receptionist-nav-item ${isActive ? "active" : ""}`
          }
        >
          <span className="receptionist-nav-icon">
            <Icon name="settings" size={19} />
          </span>
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default ReceptionistSidebar;