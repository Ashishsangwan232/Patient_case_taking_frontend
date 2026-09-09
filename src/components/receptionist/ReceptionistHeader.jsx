import "./ReceptionistHeader.css";

function ReceptionistHeader() {
  return (
    <header className="receptionist-header">
      <div className="receptionist-header-left">
        <span className="header-section-title">Reception Desk</span>
      </div>

      <div className="receptionist-header-right">
        <button className="header-notification" type="button" aria-label="Notifications">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
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
          <span className="notification-dot"></span>
        </button>

        <div className="header-divider"></div>

        <div className="receptionist-profile">
          <div className="receptionist-profile-avatar">AS</div>

          <div className="receptionist-profile-info">
            <strong>Ananya Sharma</strong>
            <span>Receptionist</span>
          </div>

          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="m7 10 5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default ReceptionistHeader;