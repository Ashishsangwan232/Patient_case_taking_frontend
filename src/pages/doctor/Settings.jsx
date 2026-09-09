import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Settings.css";

function Settings() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState({
    appointments: true,
    caseUpdates: true,
    reminders: true,
    system: false,
  });

  const [preferences, setPreferences] = useState({
    email: true,
    sounds: true,
    compact: false,
  });

  const [saved, setSaved] = useState(false);

  const toggleNotification = (key) => {
    setNotifications((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const togglePreference = (key) => {
    setPreferences((previous) => ({
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
    <div className="doctor-settings-page">

      {/* ================= BREADCRUMB ================= */}

      <div className="doctor-settings-breadcrumb">
        Doctor Portal
        <span>/</span>
        Settings
      </div>

      {/* ================= HEADER ================= */}

      <div className="doctor-settings-header">

        <div>
          <h1>Settings</h1>

          <p>
            Manage your account and workspace preferences.
          </p>
        </div>

        <button
          type="button"
          className="doctor-settings-back"
          onClick={() =>
            navigate("/doctor/dashboard")
          }
        >
          ← Dashboard
        </button>

      </div>

      {/* ================= PROFILE ================= */}

      <section className="doctor-settings-card">

        <div className="doctor-settings-card-heading">

          <div className="doctor-settings-heading-icon">
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
          </div>

          <div>
            <h2>Doctor Profile</h2>
            <p>Your account and professional information</p>
          </div>

        </div>

        <div className="doctor-settings-profile">

          <div className="doctor-settings-avatar">
            DR
          </div>

          <div className="doctor-settings-profile-info">

            <strong>
              Dr. Ahmed Rahman
            </strong>

            <span>
              General Physician
            </span>

            <small>
              Doctor ID: DOC-2026-008
            </small>

          </div>

          <div className="doctor-settings-active">
            <i></i>
            Active
          </div>

        </div>

        <div className="doctor-settings-fields">

          <div className="doctor-settings-field">
            <label>Full Name</label>

            <input
              type="text"
              value="Dr. Ahmed Rahman"
              readOnly
            />
          </div>

          <div className="doctor-settings-field">
            <label>Specialization</label>

            <input
              type="text"
              value="General Physician"
              readOnly
            />
          </div>

          <div className="doctor-settings-field">
            <label>Email</label>

            <input
              type="email"
              value="ahmed.rahman@ayushcare.local"
              readOnly
            />
          </div>

          <div className="doctor-settings-field">
            <label>Registration ID</label>

            <input
              type="text"
              value="MED-REG-2026-008"
              readOnly
            />
          </div>

        </div>

      </section>

      {/* ================= NOTIFICATIONS ================= */}

      <section className="doctor-settings-card">

        <div className="doctor-settings-card-heading">

          <div className="doctor-settings-heading-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
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
            <p>Choose which updates you want to receive</p>
          </div>

        </div>

        <div className="doctor-settings-options">

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              A
            </div>

            <div className="doctor-option-content">
              <strong>
                Appointment Updates
              </strong>

              <span>
                Get notified about new, changed and cancelled
                appointments.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                notifications.appointments
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("appointments")
              }
            >
              <i></i>
            </button>

          </div>

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              C
            </div>

            <div className="doctor-option-content">
              <strong>
                Case Updates
              </strong>

              <span>
                Receive notifications when patient cases are
                updated or completed.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                notifications.caseUpdates
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("caseUpdates")
              }
            >
              <i></i>
            </button>

          </div>

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              R
            </div>

            <div className="doctor-option-content">
              <strong>
                Appointment Reminders
              </strong>

              <span>
                Get reminders before your scheduled patient
                appointments.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                notifications.reminders
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("reminders")
              }
            >
              <i></i>
            </button>

          </div>

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              S
            </div>

            <div className="doctor-option-content">
              <strong>
                System Notifications
              </strong>

              <span>
                Receive important system and maintenance
                notifications.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                notifications.system
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                toggleNotification("system")
              }
            >
              <i></i>
            </button>

          </div>

        </div>

      </section>

      {/* ================= PREFERENCES ================= */}

      <section className="doctor-settings-card">

        <div className="doctor-settings-card-heading">

          <div className="doctor-settings-heading-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="M8 9h8M8 13h5M8 17h7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <h2>Workspace Preferences</h2>
            <p>Customize your clinical workspace</p>
          </div>

        </div>

        <div className="doctor-settings-options">

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              E
            </div>

            <div className="doctor-option-content">
              <strong>
                Email Notifications
              </strong>

              <span>
                Send important appointment and case updates
                to your registered email.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                preferences.email
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                togglePreference("email")
              }
            >
              <i></i>
            </button>

          </div>

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              S
            </div>

            <div className="doctor-option-content">
              <strong>
                Notification Sounds
              </strong>

              <span>
                Play subtle sounds for important workspace
                notifications.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                preferences.sounds
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                togglePreference("sounds")
              }
            >
              <i></i>
            </button>

          </div>

          <div className="doctor-settings-option">

            <div className="doctor-option-icon">
              C
            </div>

            <div className="doctor-option-content">
              <strong>
                Compact Tables
              </strong>

              <span>
                Display more patients and cases in table views.
              </span>
            </div>

            <button
              type="button"
              className={`doctor-settings-toggle ${
                preferences.compact
                  ? "on"
                  : ""
              }`}
              onClick={() =>
                togglePreference("compact")
              }
            >
              <i></i>
            </button>

          </div>

        </div>

      </section>

      {/* ================= SECURITY ================= */}

      <section className="doctor-settings-card">

        <div className="doctor-settings-card-heading">

          <div className="doctor-settings-heading-icon security">
            <svg viewBox="0 0 24 24" fill="none">
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
            </svg>
          </div>

          <div>
            <h2>Security</h2>
            <p>Manage your account security</p>
          </div>

        </div>

        <div className="doctor-security-list">

          <div className="doctor-security-row">

            <div>
              <strong>Password</strong>

              <span>
                Last changed 28 days ago
              </span>
            </div>

            <button
              type="button"
              className="doctor-security-button"
            >
              Change Password
            </button>

          </div>

          <div className="doctor-security-row">

            <div>
              <strong>Current Session</strong>

              <span>
                This device · Active now
              </span>
            </div>

            <span className="doctor-session-active">
              Active
            </span>

          </div>

        </div>

      </section>

      {/* ================= SAVE ================= */}

      <div className="doctor-settings-footer">

        {saved && (
          <div className="doctor-settings-saved">
            <span>✓</span>
            Settings saved successfully
          </div>
        )}

        <button
          type="button"
          className="doctor-settings-save"
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