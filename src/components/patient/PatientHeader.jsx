function PatientHeader() {
  return (
    <header className="patient-header">
      <div className="patient-header-left">
        <div className="patient-header-search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="6.5" />
            <path d="m16 16 4.5 4.5" />
          </svg>

          <input
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="patient-header-right">
        <button
          className="patient-notification-button"
          aria-label="Notifications"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
          </svg>

          <span className="patient-notification-dot"></span>
        </button>

        <div className="patient-header-profile">
          <div className="patient-header-avatar">MJ</div>

          <div className="patient-header-user">
            <strong>Md. Jamal Hossain</strong>
            <span>Patient</span>
          </div>

          <span className="patient-header-chevron">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default PatientHeader;