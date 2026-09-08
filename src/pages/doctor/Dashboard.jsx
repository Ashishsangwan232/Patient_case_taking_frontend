const Icon = ({ name, size = 20, strokeWidth = 1.8 }) => {
  const icons = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),

    patient: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    followup: (
      <>
        <path d="M20 11a8 8 0 1 0 1 4" />
        <path d="M20 5v6h-6" />
        <path d="M12 8v4l2 2" />
      </>
    ),

    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),

    history: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),

    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),

    bell: (
      <>
        <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
        <path d="M10 21h4" />
      </>
    ),

    sparkles: (
      <>
        <path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3L12 3Z" />
        <path d="m19 16 .5 2.2L22 19l-2.5.8L19 22l-.5-2.2L16 19l2.5-.8L19 16Z" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
};

function Dashboard() {
  const appointments = [
    {
      time: "10:00 AM",
      name: "Md. Jamal Hossain",
      age: "45 Years, Male",
      status: "Confirmed",
    },
    {
      time: "10:30 AM",
      name: "Sabina Akter",
      age: "32 Years, Female",
      status: "Confirmed",
    },
    {
      time: "11:00 AM",
      name: "Rifat Hasan",
      age: "28 Years, Male",
      status: "Pending",
    },
    {
      time: "11:30 AM",
      name: "Farhana Islam",
      age: "36 Years, Female",
      status: "Pending",
    },
  ];

  const recentCases = [
    {
      id: "SIH-2026-00125",
      name: "Md. Jamal Hossain",
      date: "Today, 10:24 AM",
      status: "In Progress",
    },
    {
      id: "SIH-2026-00124",
      name: "Sabina Akter",
      date: "Yesterday, 03:15 PM",
      status: "Completed",
    },
    {
      id: "SIH-2026-00123",
      name: "Rifat Hasan",
      date: "Yesterday, 11:40 AM",
      status: "Draft",
    },
  ];

  return (
    <div className="doctor-dashboard">
      {/* =========================
          PAGE HEADING
      ========================= */}
      <div className="dashboard-heading">
        <div>
          <p className="dashboard-date">Sunday, 06 September 2026</p>

          <h1>
            Good afternoon, Dr. Ahmed <span>👋</span>
          </h1>

          <p className="dashboard-subtitle">
            Here's what's happening with your patients today.
          </p>
        </div>

        <button className="primary-action">
          <Icon name="plus" size={17} strokeWidth={2.2} />
          <span>New Patient Case</span>
        </button>
      </div>

      {/* =========================
          STATS
      ========================= */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon blue">
            <Icon name="calendar" size={21} />
          </div>

          <div>
            <span>Today's Appointments</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Icon name="patient" size={21} />
          </div>

          <div>
            <span>Today's Patients</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            <Icon name="clock" size={21} />
          </div>

          <div>
            <span>Pending Cases</span>
            <strong>5</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple">
            <Icon name="followup" size={21} />
          </div>

          <div>
            <span>Follow Ups</span>
            <strong>2</strong>
          </div>
        </div>
      </div>

      {/* =========================
          MAIN GRID
      ========================= */}
      <div className="dashboard-content-grid">

        {/* =========================
            APPOINTMENTS
        ========================= */}
        <section className="dashboard-card appointments-card">
          <div className="card-heading">
            <div>
              <h2>Upcoming Appointments</h2>
              <p>Today's scheduled patients</p>
            </div>

            <button className="text-button">
              View all
              <span>→</span>
            </button>
          </div>

          <div className="appointment-list">
            {appointments.map((appointment) => (
              <div className="appointment-row" key={appointment.name}>
                <div className="appointment-time">
                  {appointment.time}
                </div>

                <div className="patient-small-avatar">
                  {appointment.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="appointment-patient">
                  <strong>{appointment.name}</strong>
                  <span>{appointment.age}</span>
                </div>

                <span
                  className={`status ${
                    appointment.status === "Confirmed"
                      ? "confirmed"
                      : "pending"
                  }`}
                >
                  <span className="status-dot"></span>
                  {appointment.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            QUICK ACTIONS
        ========================= */}
        <section className="dashboard-card quick-actions-card">
          <div className="card-heading">
            <div>
              <h2>Quick Actions</h2>
              <p>Frequently used actions</p>
            </div>
          </div>

          <div className="quick-actions-grid">
            <button>
              <span className="quick-action-icon blue">
                <Icon name="plus" size={21} />
              </span>
              <strong>New Case</strong>
              <small>Create patient case</small>
            </button>

            <button>
              <span className="quick-action-icon green">
                <Icon name="patient" size={21} />
              </span>
              <strong>Patients</strong>
              <small>View all patients</small>
            </button>

            <button>
              <span className="quick-action-icon orange">
                <Icon name="calendar" size={21} />
              </span>
              <strong>Appointments</strong>
              <small>Manage schedule</small>
            </button>

            <button>
              <span className="quick-action-icon purple">
                <Icon name="history" size={21} />
              </span>
              <strong>Case History</strong>
              <small>View previous cases</small>
            </button>
          </div>
        </section>

        {/* =========================
            RECENT CASES
        ========================= */}
        <section className="dashboard-card recent-cases-card">
          <div className="card-heading">
            <div>
              <h2>Recent Patient Cases</h2>
              <p>Recently updated cases</p>
            </div>

            <button className="text-button">
              View all
              <span>→</span>
            </button>
          </div>

          <div className="recent-case-list">
            {recentCases.map((caseItem) => (
              <div className="recent-case-row" key={caseItem.id}>
                <div className="case-icon">
                  <Icon name="history" size={18} />
                </div>

                <div className="case-info">
                  <strong>{caseItem.name}</strong>
                  <span>
                    {caseItem.id} <i>•</i> {caseItem.date}
                  </span>
                </div>

                <span
                  className={`case-status ${caseItem.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {caseItem.status}
                </span>

                <button className="case-more" aria-label="More options">
                  ⋮
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            AI PLACEHOLDER
        ========================= */}
        <section className="dashboard-card ai-card">
          <div className="ai-card-header">
            <div className="ai-icon">
              <Icon name="sparkles" size={20} />
            </div>

            <div>
              <h2>AI Clinical Assistant</h2>
              <span>Coming in next phase</span>
            </div>

            <span className="ai-badge">PLANNED</span>
          </div>

          <p>
            AI-assisted history taking, clinical summarization
            and smart suggestions will appear here.
          </p>

          <div className="ai-placeholder">
            <div className="ai-placeholder-icon">
              <Icon name="sparkles" size={17} />
            </div>

            <div>
              <strong>AI features will be connected later</strong>
              <span>Clinical AI module is under development.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;