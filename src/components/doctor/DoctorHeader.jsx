function DoctorHeader() {
  return (
    <header className="doctor-header">
      <div className="header-search">
        <span className="search-icon">⌕</span>

        <input
          type="text"
          placeholder="Search patients, cases..."
        />
      </div>

      <div className="header-actions">
        <button className="header-icon-button">
          ♧
          <span className="notification-dot">3</span>
        </button>

        <div className="header-divider"></div>

        <div className="doctor-profile">
          <div className="doctor-avatar">DR</div>

          <div className="doctor-profile-info">
            <strong>Dr. Ahmed Rahman</strong>
            <span>General Physician</span>
          </div>

          <span className="profile-arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default DoctorHeader;