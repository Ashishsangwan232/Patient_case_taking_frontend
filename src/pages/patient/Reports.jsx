import { useMemo, useState } from "react";
import "./Reports.css";

const reports = [
  {
    id: 1,
    type: "PDF",
    typeClass: "pdf",
    category: "Consultation",
    title: "Consultation Report",
    description: "General consultation report",
    date: "28 Aug 2026",
    size: "1.2 MB",
    doctor: "Dr. Ahmed Rahman",
    caseId: "CASE-2026-0828",
    status: "Available",
  },
  {
    id: 2,
    type: "IMG",
    typeClass: "image",
    category: "Lab Report",
    title: "Blood Test Report",
    description: "Complete blood count report",
    date: "28 Aug 2026",
    size: "845 KB",
    doctor: "Dr. Ahmed Rahman",
    caseId: "CASE-2026-0828",
    status: "Available",
  },
  {
    id: 3,
    type: "PDF",
    typeClass: "pdf",
    category: "Prescription",
    title: "Prescription",
    description: "Medication prescription",
    date: "14 Aug 2026",
    size: "620 KB",
    doctor: "Dr. Ahmed Rahman",
    caseId: "CASE-2026-0814",
    status: "Available",
  },
  {
    id: 4,
    type: "PDF",
    typeClass: "pdf",
    category: "Consultation",
    title: "Follow-up Consultation Report",
    description: "Follow-up consultation summary",
    date: "02 Aug 2026",
    size: "980 KB",
    doctor: "Dr. Ahmed Rahman",
    caseId: "CASE-2026-0802",
    status: "Available",
  },
  {
    id: 5,
    type: "PDF",
    typeClass: "pdf",
    category: "Consultation",
    title: "Initial Consultation Report",
    description: "Initial patient consultation summary",
    date: "14 Jul 2026",
    size: "1.1 MB",
    doctor: "Dr. Ahmed Rahman",
    caseId: "CASE-2026-0714",
    status: "Available",
  },
  {
    id: 6,
    type: "IMG",
    typeClass: "image",
    category: "Lab Report",
    title: "Diagnostic Test Report",
    description: "Diagnostic laboratory test results",
    date: "14 Jul 2026",
    size: "730 KB",
    doctor: "Dr. Ahmed Rahman",
    caseId: "CASE-2026-0714",
    status: "Available",
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

    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),

    check: <path d="m5 12 4 4L19 6" />,

    chevronLeft: <path d="m15 18-6-6 6-6" />,

    chevronRight: <path d="m9 18 6-6-6-6" />,
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
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const reportsPerPage = 4;

  const filteredReports = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return reports.filter((report) => {
      const matchesFilter =
        activeFilter === "All" || report.category === activeFilter;

      const matchesSearch =
        !normalizedSearch ||
        report.title.toLowerCase().includes(normalizedSearch) ||
        report.description.toLowerCase().includes(normalizedSearch) ||
        report.doctor.toLowerCase().includes(normalizedSearch) ||
        report.category.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredReports.length / reportsPerPage)
  );

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (safeCurrentPage - 1) * reportsPerPage;

  const visibleReports = filteredReports.slice(
    startIndex,
    startIndex + reportsPerPage
  );

  const consultationCount = reports.filter(
    (report) => report.category === "Consultation"
  ).length;

  const labReportCount = reports.filter(
    (report) => report.category === "Lab Report"
  ).length;

  const prescriptionCount = reports.filter(
    (report) => report.category === "Prescription"
  ).length;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setShowFilter(false);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleDownload = (report) => {
    const content = [
      "PATIENT MEDICAL REPORT",
      "",
      `Report: ${report.title}`,
      `Description: ${report.description}`,
      `Doctor: ${report.doctor}`,
      `Date: ${report.date}`,
      `Type: ${report.type}`,
      `Size: ${report.size}`,
      `Case ID: ${report.caseId}`,
      "",
      "This is a frontend demo document.",
      "Actual report files will be connected through the backend/API.",
    ].join("\n");

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${report.title.replace(/\s+/g, "-")}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

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
          <strong>{reports.length}</strong>
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
            <strong>{reports.length}</strong>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon purple">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>Consultation</span>
            <strong>{consultationCount}</strong>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon green">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>Lab Reports</span>
            <strong>{labReportCount}</strong>
          </div>
        </div>

        <div className="report-summary-card">
          <div className="report-summary-icon orange">
            <Icon name="file" size={21} />
          </div>

          <div>
            <span>Prescriptions</span>
            <strong>{prescriptionCount}</strong>
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
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div className="reports-filter-wrapper">
              <button
                className={`reports-filter-button ${
                  activeFilter !== "All" ? "active" : ""
                }`}
                onClick={() => setShowFilter((previous) => !previous)}
              >
                <Icon name="filter" size={17} />
                <span>
                  {activeFilter === "All" ? "Filter" : activeFilter}
                </span>
              </button>

              {showFilter && (
                <div className="reports-filter-menu">
                  {[
                    "All",
                    "Consultation",
                    "Lab Report",
                    "Prescription",
                  ].map((filter) => (
                    <button
                      key={filter}
                      className={
                        activeFilter === filter ? "selected" : ""
                      }
                      onClick={() => handleFilterChange(filter)}
                    >
                      <span>{filter}</span>

                      {activeFilter === filter && (
                        <Icon name="check" size={14} />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
          {visibleReports.length > 0 ? (
            visibleReports.map((report) => (
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
                    onClick={() => setSelectedReport(report)}
                    aria-label={`View ${report.title}`}
                  >
                    <Icon name="eye" size={17} />
                    <span>View</span>
                  </button>

                  <button
                    className="report-download-button"
                    onClick={() => handleDownload(report)}
                    aria-label={`Download ${report.title}`}
                  >
                    <Icon name="download" size={17} />
                  </button>

                  <button
                    className="report-arrow-button"
                    onClick={() => setSelectedReport(report)}
                    aria-label={`Open ${report.title}`}
                  >
                    <Icon name="arrow" size={17} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="reports-empty-state">
              <div className="reports-empty-icon">
                <Icon name="search" size={24} />
              </div>

              <h3>No reports found</h3>

              <p>
                Try changing your search or selecting a different
                filter.
              </p>

              {(searchTerm || activeFilter !== "All") && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("All");
                    setCurrentPage(1);
                  }}
                >
                  Clear Search & Filter
                </button>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {filteredReports.length > 0 && (
          <div className="reports-footer">
            <span>
              Showing{" "}
              <strong>
                {startIndex + 1}–
                {Math.min(
                  startIndex + reportsPerPage,
                  filteredReports.length
                )}
              </strong>{" "}
              of <strong>{filteredReports.length}</strong> reports
            </span>

            <div className="reports-pagination">
              <button
                className={`reports-page-button ${
                  safeCurrentPage === 1 ? "disabled" : ""
                }`}
                onClick={() =>
                  handlePageChange(safeCurrentPage - 1)
                }
                disabled={safeCurrentPage === 1}
                aria-label="Previous page"
              >
                <Icon name="chevronLeft" size={15} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`reports-page-button ${
                    safeCurrentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}

              <button
                className={`reports-page-button ${
                  safeCurrentPage === totalPages ? "disabled" : ""
                }`}
                onClick={() =>
                  handlePageChange(safeCurrentPage + 1)
                }
                disabled={safeCurrentPage === totalPages}
                aria-label="Next page"
              >
                <Icon name="chevronRight" size={15} />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* REPORT DETAILS MODAL */}
      {selectedReport && (
        <div
          className="report-modal-overlay"
          onClick={() => setSelectedReport(null)}
        >
          <div
            className="report-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="report-modal-header">
              <div>
                <span className="report-modal-label">
                  Medical Document
                </span>

                <h2>{selectedReport.title}</h2>
              </div>

              <button
                className="report-modal-close"
                onClick={() => setSelectedReport(null)}
                aria-label="Close report"
              >
                <Icon name="close" size={19} />
              </button>
            </div>

            <div className="report-modal-file">
              <div
                className={`report-file-icon large ${selectedReport.typeClass}`}
              >
                {selectedReport.type}
              </div>

              <div>
                <strong>{selectedReport.title}</strong>
                <span>{selectedReport.description}</span>
              </div>

              <span className="report-available-badge">
                <span></span>
                {selectedReport.status}
              </span>
            </div>

            <div className="report-detail-grid">
              <div>
                <span>Doctor</span>
                <strong>{selectedReport.doctor}</strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{selectedReport.date}</strong>
              </div>

              <div>
                <span>Document Type</span>
                <strong>{selectedReport.type}</strong>
              </div>

              <div>
                <span>File Size</span>
                <strong>{selectedReport.size}</strong>
              </div>

              <div>
                <span>Related Case</span>
                <strong>{selectedReport.caseId}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedReport.status}</strong>
              </div>
            </div>

            <div className="report-modal-note">
              <Icon name="file" size={17} />

              <p>
                This report belongs to your medical record. Actual
                report preview and secure file access will be connected
                through the backend.
              </p>
            </div>

            <div className="report-modal-actions">
              <button
                className="report-modal-secondary"
                onClick={() => setSelectedReport(null)}
              >
                Close
              </button>

              <button
                className="report-modal-primary"
                onClick={() => handleDownload(selectedReport)}
              >
                <Icon name="download" size={16} />
                Download Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;