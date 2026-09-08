import "./Dashboard.css";

function Icon({ name, size = 20 }) {
  const icons = {
    heart: (
      <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
    ),

    case: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),

    report: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),

    consultation: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c.6-4 2.5-6 6-6s5.4 2 6 6" />
        <path d="M16 8h5M18.5 5.5v5" />
      </>
    ),

    arrow: <path d="m9 18 6-6-6-6" />,

    clock: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h9l4 4v14H6z" />
        <path d="M14 3v5h5" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
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
}

function PatientDashboard() {
  return (
    <div className="patient-dashboard">

      {/* =========================================
          PAGE INTRO
      ========================================= */}

      <div className="patient-dashboard-intro">
        <p>Patient Portal / Dashboard</p>

        <h1>
          Good afternoon, Jamal <span>👋</span>
        </h1>

        <span>
          Here's an overview of your health and recent activity.
        </span>
      </div>


      {/* =========================================
          HEALTH JOURNEY BANNER
      ========================================= */}

      <section className="patient-health-banner">
        <div className="health-banner-content">
          <span className="health-banner-label">
            YOUR HEALTH JOURNEY
          </span>

          <h2>Stay informed about your health.</h2>

          <p>
            Keep track of your consultations, appointments and
            medical reports in one place.
          </p>

          <button className="health-banner-button">
            View My Cases
            <Icon name="arrow" size={16} />
          </button>
        </div>

        <div className="health-banner-decoration">
          <div className="health-banner-circle outer"></div>
          <div className="health-banner-circle middle"></div>
          <div className="health-banner-circle inner">
            <Icon name="heart" size={30} />
          </div>
        </div>
      </section>


      {/* =========================================
          STATISTICS
      ========================================= */}

      <section className="patient-stats-grid">

        <div className="patient-stat-card">
          <div className="patient-stat-icon blue">
            <Icon name="case" size={21} />
          </div>

          <div>
            <span>Total Cases</span>
            <strong>4</strong>
            <small>2 completed</small>
          </div>
        </div>


        <div className="patient-stat-card">
          <div className="patient-stat-icon green">
            <Icon name="calendar" size={21} />
          </div>

          <div>
            <span>Appointments</span>
            <strong>2</strong>
            <small>Upcoming</small>
          </div>
        </div>


        <div className="patient-stat-card">
          <div className="patient-stat-icon purple">
            <Icon name="report" size={21} />
          </div>

          <div>
            <span>Reports</span>
            <strong>6</strong>
            <small>Available</small>
          </div>
        </div>


        <div className="patient-stat-card">
          <div className="patient-stat-icon orange">
            <Icon name="consultation" size={21} />
          </div>

          <div>
            <span>Consultations</span>
            <strong>5</strong>
            <small>This year</small>
          </div>
        </div>

      </section>


      {/* =========================================
          CURRENT CASE + UPCOMING APPOINTMENT
      ========================================= */}

      <section className="patient-dashboard-grid">

        {/* CURRENT CASE */}

        <div className="patient-dashboard-card current-case-card">

          <div className="patient-card-header">
            <div>
              <h3>Current Case</h3>
              <p>Your ongoing consultation</p>
            </div>

            <span className="patient-case-status">
              In Progress
            </span>
          </div>


          <div className="current-case-content">

            <div className="current-case-title">

              <div className="case-icon">
                <Icon name="case" size={21} />
              </div>

              <div>
                <strong>General Consultation</strong>
                <span>CASE-2026-00481</span>
              </div>

            </div>


            <div className="current-case-meta">

              <div>
                <span>Doctor</span>
                <strong>Dr. Ahmed Rahman</strong>
              </div>

              <div>
                <span>Started</span>
                <strong>06 Sep 2026</strong>
              </div>

            </div>


            <div className="case-reason">
              <span>Reason for Visit</span>

              <p>
                Recurring headache and fatigue for the past few days.
              </p>
            </div>


            <button className="case-details-button">
              View Case Details
              <Icon name="arrow" size={15} />
            </button>

          </div>

        </div>


        {/* UPCOMING APPOINTMENT */}

        <div className="patient-dashboard-card appointment-card">

          <div className="patient-card-header">
            <div>
              <h3>Upcoming Appointment</h3>
              <p>Your next consultation</p>
            </div>

            <Icon name="calendar" size={19} />
          </div>


          <div className="appointment-content">

            <div className="appointment-main">

              <div className="appointment-date">
                <strong>10</strong>
                <span>SEP</span>
              </div>

              <div className="appointment-info">
                <strong>General Consultation</strong>
                <span>Dr. Ahmed Rahman</span>

                <small>
                  <Icon name="clock" size={13} />
                  10:30 AM
                </small>
              </div>

            </div>


            <button className="appointment-button">
              View Appointment
              <Icon name="arrow" size={14} />
            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          RECENT VISITS
      ========================================= */}

      <section className="patient-dashboard-grid">

        <div className="patient-dashboard-card">

          <div className="patient-card-header">
            <div>
              <h3>Recent Visits</h3>
              <p>Your recent consultations</p>
            </div>

            <button className="card-view-all">
              View All
            </button>
          </div>


          <div className="patient-visit-list">

            <div className="patient-visit-row">

              <div className="visit-date">
                <strong>06</strong>
                <span>SEP</span>
              </div>

              <div className="visit-info">
                <strong>General Consultation</strong>
                <span>Dr. Ahmed Rahman</span>
              </div>

              <span className="visit-status progress">
                In Progress
              </span>

            </div>


            <div className="patient-visit-row">

              <div className="visit-date">
                <strong>28</strong>
                <span>AUG</span>
              </div>

              <div className="visit-info">
                <strong>Follow-up Consultation</strong>
                <span>Dr. Ahmed Rahman</span>
              </div>

              <span className="visit-status completed">
                Completed
              </span>

            </div>


            <div className="patient-visit-row">

              <div className="visit-date">
                <strong>14</strong>
                <span>AUG</span>
              </div>

              <div className="visit-info">
                <strong>Initial Consultation</strong>
                <span>Dr. Ahmed Rahman</span>
              </div>

              <span className="visit-status completed">
                Completed
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            RECENT REPORTS
        ========================================= */}

        <div className="patient-dashboard-card">

          <div className="patient-card-header">
            <div>
              <h3>Recent Reports</h3>
              <p>Your latest medical documents</p>
            </div>

            <button className="card-view-all">
              View All
            </button>
          </div>


          <div className="patient-report-list">

            <div className="patient-report-row">

              <div className="report-icon">
                PDF
              </div>

              <div className="report-info">
                <strong>Consultation Report</strong>
                <span>28 Aug 2026 • 1.2 MB</span>
              </div>

              <button className="report-arrow">
                <Icon name="arrow" size={15} />
              </button>

            </div>


            <div className="patient-report-row">

              <div className="report-icon">
                IMG
              </div>

              <div className="report-info">
                <strong>Blood Test Report</strong>
                <span>28 Aug 2026 • 845 KB</span>
              </div>

              <button className="report-arrow">
                <Icon name="arrow" size={15} />
              </button>

            </div>


            <div className="patient-report-row">

              <div className="report-icon">
                PDF
              </div>

              <div className="report-info">
                <strong>Prescription</strong>
                <span>14 Aug 2026 • 620 KB</span>
              </div>

              <button className="report-arrow">
                <Icon name="arrow" size={15} />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          HEALTH SUMMARY
      ========================================= */}

      <section className="patient-health-summary">

        <div className="patient-card-header">

          <div>
            <h3>Health Summary</h3>
            <p>Your basic health information</p>
          </div>

          <button className="card-view-all">
            View Profile
          </button>

        </div>


        <div className="health-summary-grid">

          <div>
            <span>Blood Group</span>
            <strong>O+</strong>
          </div>

          <div>
            <span>Age</span>
            <strong>45 Years</strong>
          </div>

          <div>
            <span>Gender</span>
            <strong>Male</strong>
          </div>

          <div>
            <span>Allergies</span>
            <strong>None Reported</strong>
          </div>

          <div>
            <span>Active Conditions</span>
            <strong>None Reported</strong>
          </div>

        </div>

      </section>

    </div>
  );
}

export default PatientDashboard;