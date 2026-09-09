import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    appointments: true,
    queue: true,
    reminders: true,
    system: false,
  });

  const [display, setDisplay] = useState({
    compact: false,
    sounds: true,
  });

  const [saved, setSaved] = useState(false);

  const toggleNotification = (key) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const toggleDisplay = (key) => {
    setDisplay((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="receptionist-settings-page">

      {/* ==================== BREADCRUMB ==================== */}

      <div className="receptionist-settings-breadcrumb">
        Receptionist Portal
        <span>/</span>
        Settings
      </div>

      {/* ==================== HEADER ==================== */}

      <div className="receptionist-settings-heading">

        <div>
          <h1>Settings</h1>

          <p>
            Manage your receptionist preferences and account settings.
          </p>
        </div>

        <button
          type="button"
          className="receptionist-settings-dashboard-button"
          onClick={() =>
            navigate("/receptionist/dashboard")
          }
        >
          ← Dashboard
        </button>

      </div>

      {/* ==================== PROFILE ==================== */}

      <section className="receptionist-settings-card">

        <div className="receptionist-settings-card-heading">

          <div className="settings-heading-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="8"
                r="3.2"
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
          </div>

          <div>
            <h2>Profile Information</h2>

            <p>
              Your receptionist account information
            </p>
          </div>

        </div>

        <div className="receptionist-profile-settings">

          <div className="settings-profile-avatar">
            AS
          </div>

          <div className="settings-profile-info">
            <strong>
              Ananya Sharma
            </strong>

            <span>
              Receptionist
            </span>

            <small>
              Staff ID: REC-2026-014
            </small>
          </div>

          <div className="settings-profile-status">
            <i></i>
            Active
          </div>

        </div>

        <div className="settings-fields-grid">

          <div className="settings-field">
            <label>Full Name</label>

            <input
              type="text"
              value="Ananya Sharma"
              readOnly
            />
          </div>

          <div className="settings-field">
            <label>Role</label>

            <input
              type="text"
              value="Receptionist"
              readOnly
            />
          </div>

          <div className="settings-field">
            <label>Email</label>

            <input
              type="email"
              value="ananya.sharma@ayushcare.local"
              readOnly
            />
          </div>

          <div className="settings-field">
            <label>Mobile</label>

            <input
              type="text"
              value="+91 98765 41000"
              readOnly
            />
          </div>

        </div>

      </section>

      {/* ==================== NOTIFICATIONS ==================== */}

      <section className="receptionist-settings-card">

        <div className="receptionist-settings-card-heading">

          <div className="settings-heading-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M10 21h4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <h2>Notifications</h2>

            <p>
              Choose which receptionist alerts you receive
            </p>
          </div>

        </div>

        <div className="settings-options">

          <div className="settings-option">

            <div className="settings-option-icon">
              A
            </div>

            <div className="settings-option-content">
              <strong>
                Appointment Updates
              </strong>

              <span>
                Get notified when appointments are created,
                changed or cancelled.
              </span>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.appointments
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("appointments")
              }
              aria-label="Toggle appointment notifications"
            >
              <i></i>
            </button>

          </div>

          <div className="settings-option">

            <div className="settings-option-icon">
              Q
            </div>

            <div className="settings-option-content">
              <strong>
                Queue Alerts
              </strong>

              <span>
                Receive alerts about queue activity and
                patient check-ins.
              </span>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.queue
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("queue")
              }
              aria-label="Toggle queue notifications"
            >
              <i></i>
            </button>

          </div>

          <div className="settings-option">

            <div className="settings-option-icon">
              R
            </div>

            <div className="settings-option-content">
              <strong>
                Appointment Reminders
              </strong>

              <span>
                Receive reminders for upcoming appointments
                and scheduled visits.
              </span>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.reminders
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("reminders")
              }
              aria-label="Toggle reminder notifications"
            >
              <i></i>
            </button>

          </div>

          <div className="settings-option">

            <div className="settings-option-icon">
              S
            </div>

            <div className="settings-option-content">
              <strong>
                System Notifications
              </strong>

              <span>
                Receive important platform and maintenance
                notifications.
              </span>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                notifications.system
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("system")
              }
              aria-label="Toggle system notifications"
            >
              <i></i>
            </button>

          </div>

        </div>

      </section>

      {/* ==================== DISPLAY ==================== */}

      <section className="receptionist-settings-card">

        <div className="receptionist-settings-card-heading">

          <div className="settings-heading-icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="3.5"
                y="4"
                width="17"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M8 17h8M9 8h6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <h2>Display &amp; Desk Preferences</h2>

            <p>
              Customize your reception workspace
            </p>
          </div>

        </div>

        <div className="settings-options">

          <div className="settings-option">

            <div className="settings-option-icon">
              C
            </div>

            <div className="settings-option-content">
              <strong>
                Compact Layout
              </strong>

              <span>
                Show more information in tables and lists
                by reducing spacing.
              </span>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                display.compact
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleDisplay("compact")
              }
              aria-label="Toggle compact layout"
            >
              <i></i>
            </button>

          </div>

          <div className="settings-option">

            <div className="settings-option-icon">
              S
            </div>

            <div className="settings-option-content">
              <strong>
                Queue Sounds
              </strong>

              <span>
                Play a subtle sound when important queue
                activity occurs.
              </span>
            </div>

            <button
              type="button"
              className={`settings-toggle ${
                display.sounds
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleDisplay("sounds")
              }
              aria-label="Toggle queue sounds"
            >
              <i></i>
            </button>

          </div>

        </div>

      </section>

      {/* ==================== SECURITY ==================== */}

      <section className="receptionist-settings-card">

        <div className="receptionist-settings-card-heading">

          <div className="settings-heading-icon security">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="5"
                y="10"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M8 10V7a4 4 0 0 1 8 0v3"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="15"
                r="1"
                fill="currentColor"
              />
            </svg>
          </div>

          <div>
            <h2>Security</h2>

            <p>
              Account security and session information
            </p>
          </div>

        </div>

        <div className="security-items">

          <div className="security-item">

            <div>
              <strong>
                Password
              </strong>

              <span>
                Last changed 28 days ago
              </span>
            </div>

            <button
              type="button"
              className="security-action"
            >
              Change Password
            </button>

          </div>

          <div className="security-item">

            <div>
              <strong>
                Current Session
              </strong>

              <span>
                This device · Active now
              </span>
            </div>

            <span className="current-session">
              Active
            </span>

          </div>

        </div>

      </section>

      {/* ==================== SAVE ==================== */}

      <div className="receptionist-settings-footer">

        {saved && (
          <div className="settings-saved-message">
            <span>✓</span>
            Settings saved successfully
          </div>
        )}

        <button
          type="button"
          className="settings-save-button"
          onClick={handleSave}
        >
          Save Changes
          <span>→</span>
        </button>

      </div>

    </div>
  );
}

export default Settings;