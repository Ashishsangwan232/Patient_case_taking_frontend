import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

const appointments = [
  {
    id: "APT-1025",
    patient: "Md. Jamal Hossain",
    time: "10:00 AM",
    doctor: "Dr. Priya Sharma",
    type: "Follow-up",
    status: "Checked In",
  },
  {
    id: "APT-1026",
    patient: "Sabina Akter",
    time: "10:30 AM",
    doctor: "Dr. Arjun Mehta",
    type: "New Visit",
    status: "Waiting",
  },
  {
    id: "APT-1027",
    patient: "Rifat Hasan",
    time: "11:00 AM",
    doctor: "Dr. Priya Sharma",
    type: "Consultation",
    status: "Confirmed",
  },
  {
    id: "APT-1028",
    patient: "Farhana Islam",
    time: "11:30 AM",
    doctor: "Dr. Neha Verma",
    type: "Follow-up",
    status: "Waiting",
  },
];

const registrations = [
  {
    initials: "MJ",
    name: "Md. Jamal Hossain",
    id: "SIH-2026-00125",
    time: "09:42 AM",
    type: "Follow-up",
  },
  {
    initials: "SA",
    name: "Sabina Akter",
    id: "SIH-2026-00124",
    time: "09:28 AM",
    type: "New Patient",
  },
  {
    initials: "RH",
    name: "Rifat Hasan",
    id: "SIH-2026-00123",
    time: "09:15 AM",
    type: "Consultation",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="receptionist-dashboard">

      {/* ==================== BREADCRUMB ==================== */}

      <div className="receptionist-breadcrumb">
        Receptionist Portal <span>/</span> Dashboard
      </div>

      {/* ==================== PAGE HEADER ==================== */}

      <div className="receptionist-dashboard-heading">
        <div>
          <h1>Good morning, Ananya</h1>

          <p>
            Here&apos;s what&apos;s happening at the reception desk today.
          </p>
        </div>

        <div className="dashboard-date">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="16"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M16 3v4M8 3v4M3 10h18"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>

          <span>Today</span>
        </div>
      </div>

      {/* ==================== STATS ==================== */}

      <section className="receptionist-stats">

        {/* Registrations */}

        <div className="receptionist-stat-card">
          <div className="stat-icon registrations">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="9.5"
                cy="7.5"
                r="3.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M19 8v6M16 11h6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span className="stat-label">
              Today&apos;s Registrations
            </span>

            <strong className="stat-value">
              24
            </strong>

            <small className="stat-positive">
              +4 from yesterday
            </small>
          </div>
        </div>

        {/* Appointments */}

        <div className="receptionist-stat-card">
          <div className="stat-icon appointments">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="16"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M16 3v4M8 3v4M3 10h18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <path
                d="M8 14h3M8 17h5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span className="stat-label">
              Today&apos;s Appointments
            </span>

            <strong className="stat-value">
              38
            </strong>

            <small className="stat-neutral">
              6 remaining
            </small>
          </div>
        </div>

        {/* Waiting Patients */}

        <div className="receptionist-stat-card">
          <div className="stat-icon waiting">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M12 7.5V12l3 2"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <span className="stat-label">
              Waiting Patients
            </span>

            <strong className="stat-value">
              7
            </strong>

            <small className="stat-warning">
              2 waiting &gt; 20 min
            </small>
          </div>
        </div>

        {/* Pending Cases */}

        <div className="receptionist-stat-card">
          <div className="stat-icon cases">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M14 3v5h5M8 12h8M8 16h6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span className="stat-label">
              Pending Cases
            </span>

            <strong className="stat-value">
              5
            </strong>

            <small className="stat-neutral">
              Awaiting intake
            </small>
          </div>
        </div>

      </section>

      {/* ==================== QUICK ACTIONS ==================== */}

      <section className="receptionist-quick-actions">

        <div className="section-heading">
          <div>
            <h2>Quick Actions</h2>

            <p>
              Common tasks for the reception desk
            </p>
          </div>
        </div>

        <div className="quick-action-grid">

          {/* NEW PATIENT */}

          <button
            className="quick-action-card"
            type="button"
            onClick={() =>
              navigate("/receptionist/new-patient")
            }
          >
            <span className="quick-action-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="8"
                  r="3.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M3.5 20a5.5 5.5 0 0 1 11 0M17 8v6M14 11h6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span>
              <strong>
                New Patient
              </strong>

              <small>
                Register a new patient
              </small>
            </span>

            <span className="quick-arrow">
              →
            </span>
          </button>

          {/* NEW APPOINTMENT */}

          <button
            className="quick-action-card"
            type="button"
            onClick={() =>
              navigate("/receptionist/appointments")
            }
          >
            <span className="quick-action-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="16"
                  rx="2.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M16 3v4M8 3v4M3 10h18M8 14h8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span>
              <strong>
                New Appointment
              </strong>

              <small>
                Schedule a patient visit
              </small>
            </span>

            <span className="quick-arrow">
              →
            </span>
          </button>

          {/* WALK-IN REGISTRATION */}

          <button
            className="quick-action-card"
            type="button"
            onClick={() =>
              navigate("/receptionist/queue")
            }
          >
            <span className="quick-action-icon">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 5h16v14H4z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />

                <path
                  d="M8 9h8M8 13h5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span>
              <strong>
                Walk-in Registration
              </strong>

              <small>
                Add patient to today&apos;s queue
              </small>
            </span>

            <span className="quick-arrow">
              →
            </span>
          </button>

        </div>
      </section>

      {/* ==================== LOWER CONTENT ==================== */}

      <div className="receptionist-dashboard-grid">

        {/* APPOINTMENT QUEUE */}

        <section className="appointment-panel">

          <div className="panel-heading">
            <div>
              <h2>
                Today&apos;s Appointment Queue
              </h2>

              <p>
                Upcoming patient appointments
              </p>
            </div>

            <button
              type="button"
              className="view-all-button"
              onClick={() =>
                navigate("/receptionist/appointments")
              }
            >
              View All →
            </button>
          </div>

          <div className="appointment-table">

            <div className="appointment-table-head">
              <span>Patient</span>
              <span>Time</span>
              <span>Doctor</span>
              <span>Type</span>
              <span>Status</span>
            </div>

            {appointments.map((appointment) => (
              <div
                className="appointment-table-row"
                key={appointment.id}
              >

                <div className="appointment-patient">

                  <div className="appointment-avatar">
                    {appointment.patient
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div>
                    <strong>
                      {appointment.patient}
                    </strong>

                    <span>
                      {appointment.id}
                    </span>
                  </div>

                </div>

                <span className="appointment-time">
                  {appointment.time}
                </span>

                <span className="appointment-doctor">
                  {appointment.doctor}
                </span>

                <span className="appointment-type">
                  {appointment.type}
                </span>

                <span
                  className={`appointment-status ${appointment.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  <i></i>
                  {appointment.status}
                </span>

              </div>
            ))}

          </div>
        </section>

        {/* RECENT REGISTRATIONS */}

        <section className="registration-panel">

          <div className="panel-heading">
            <div>
              <h2>
                Recent Registrations
              </h2>

              <p>
                Latest patients registered
              </p>
            </div>
          </div>

          <div className="registration-list">

            {registrations.map((patient) => (
              <div
                className="registration-item"
                key={patient.id}
              >

                <div className="registration-avatar">
                  {patient.initials}
                </div>

                <div className="registration-info">
                  <strong>
                    {patient.name}
                  </strong>

                  <span>
                    {patient.id}
                  </span>
                </div>

                <div className="registration-meta">
                  <strong>
                    {patient.time}
                  </strong>

                  <span>
                    {patient.type}
                  </span>
                </div>

              </div>
            ))}

          </div>

          <button
            className="registration-footer-button"
            type="button"
            onClick={() =>
              navigate("/receptionist/patients")
            }
          >
            View Patient List →
          </button>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;