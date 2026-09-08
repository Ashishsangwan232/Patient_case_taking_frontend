import "./Reports.css";

const reports = [
  {
    id: 1,
    type: "PDF",
    typeClass: "pdf",
    title: "Consultation Report",
    description: "General consultation report",
    date: "28 Aug 2026",
    size: "1.2 MB",
    doctor: "Dr. Ahmed Rahman",
  },
  {
    id: 2,
    type: "IMG",
    typeClass: "image",
    title: "Blood Test Report",
    description: "Complete blood count report",
    date: "28 Aug 2026",
    size: "845 KB",
    doctor: "Dr. Ahmed Rahman",
  },
  {
    id: 3,
    type: "PDF",
    typeClass: "pdf",
    title: "Prescription",
    description: "Medication prescription",
    date: "14 Aug 2026",
    size: "620 KB",
    doctor: "Dr. Ahmed Rahman",
  },
  {
    id: 4,
    type: "PDF",
    typeClass: "pdf",
    title: "Follow-up Consultation Report",
    description: "Follow-up consultation summary",
    date: "02 Aug 2026",
    size: "980 KB",
    doctor: "Dr. Ahmed Rahman",
  },
];

const Icon = ({ name, size = 20 }) => {
  const icons = {
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),

    filter: (
      <>
        <path d="M4 6h16M7 12h10M10 18h4" />
      </>
    ),

    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),

    arrow: <path d="m9 18 6-6-6-6" />,

    download: (
      <>
        <path d="M12 3v11" />
        <path d="m8 10 4 4 4-4" />
        <path d="M5 20h14" />
      </>
    ),

    eye: (
      <>
        <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.5" />
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

function Reports() {
  return (
    <div className="patient-reports-page">
      {/* PAGE HEADER */}
      <div className="reports-page-header">
        <div>
          <p className="reports-breadcrumb">
            Patient Portal / Reports
          </p>

          <h1>Medical Reports</h1>

          <p className="reports-subtitle">
            View and access your medical reports and documents.
          </p>
        </div>

        <div className="reports-count-card">
          <strong>6</strong>
          <span>Total Reports</span>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="reports-summary">
        <div className="report-summary-card">
          <div className="report-summary-icon blue">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>All Reports</span>
            <strong>6</strong>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon purple">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>Consultation</span>
            <strong>3</strong>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon green">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>Lab Reports</span>
            <strong>2</strong>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon orange">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>Prescriptions</span>
            <strong>1</strong>
          </div>
        </div>
      </div>

      {/* REPORTS CARD */}
      <section className="reports-card">
        <div className="reports-card-header">
          <div>
            <h2>My Reports</h2>
            <p>Your medical documents and reports</p>
          </div>

          <div className="reports-card-actions">
            <div className="reports-search">
              <Icon name="search" size={18} />

              <input
                type="text"
                placeholder="Search reports..."
              />
            </div>

            <button className="reports-filter-button">
              <Icon name="filter" size={17} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* TABLE HEADER */}
        <div className="reports-table-header">
          <div>Document</div>
          <div>Doctor</div>
          <div>Date</div>
          <div>Size</div>
          <div></div>
        </div>

        {/* REPORT LIST */}
        <div className="reports-list">
          {reports.map((report) => (
            <div className="report-row" key={report.id}>
              <div className="report-document">
                <div
                  className={`report-file-icon ${report.typeClass}`}
                >
                  {report.type}
                </div>

                <div className="report-document-info">
                  <strong>{report.title}</strong>
                  <span>{report.description}</span>
                </div>
              </div>

              <div className="report-doctor">
                {report.doctor}
              </div>

              <div className="report-date">
                <Icon name="calendar" size={16} />
                <span>{report.date}</span>
              </div>

              <div className="report-size">
                {report.size}
              </div>

              <div className="report-actions">
                <button
                  className="report-action-button"
                  aria-label={`View ${report.title}`}
                >
                  <Icon name="eye" size={17} />
                  <span>View</span>
                </button>

                <button
                  className="report-download-button"
                  aria-label={`Download ${report.title}`}
                >
                  <Icon name="download" size={17} />
                </button>

                <button
                  className="report-arrow-button"
                  aria-label={`Open ${report.title}`}
                >
                  <Icon name="arrow" size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="reports-footer">
          <span>
            Showing <strong>1–4</strong> of <strong>6</strong> reports
          </span>

          <div className="reports-pagination">
            <button className="reports-page-button disabled">
              ←
            </button>

            <button className="reports-page-button active">
              1
            </button>

            <button className="reports-page-button">
              2
            </button>

            <button className="reports-page-button">
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reports;