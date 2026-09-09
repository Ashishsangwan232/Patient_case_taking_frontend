import { useState } from "react";
import "./MyCases.css";

const Icon = ({ name, size = 20 }) => {
  const icons = {
    search: (
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4.5 4.5" />
      </>
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

    doctor: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
        <path d="M19 7h3M20.5 5.5v3" />
      </>
    ),

    close: (
      <>
        <path d="m7 7 10 10M17 7 7 17" />
      </>
    ),

    arrow: <path d="m9 18 6-6-6-6" />,

    filter: (
      <>
        <path d="M4 6h16M7 12h10M10 18h4" />
      </>
    ),

    check: <path d="m6 12 4 4L18 8" />,
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

const casesData = [
  {
    id: "CASE-2026-00481",
    title: "General Consultation",
    doctor: "Dr. Ahmed Rahman",
    date: "06 Sep 2026",
    time: "10:24 AM",
    complaint:
      "Recurring headache and fatigue for the past few days.",
    status: "In Progress",
    visitType: "General Consultation",
  },
  {
    id: "CASE-2026-00452",
    title: "Follow-up Consultation",
    doctor: "Dr. Ahmed Rahman",
    date: "28 Aug 2026",
    time: "03:15 PM",
    complaint:
      "Follow-up consultation regarding previous treatment.",
    status: "Completed",
    visitType: "Follow-up",
  },
  {
    id: "CASE-2026-00421",
    title: "Initial Consultation",
    doctor: "Dr. Ahmed Rahman",
    date: "14 Aug 2026",
    time: "11:40 AM",
    complaint:
      "Initial health consultation and medical history review.",
    status: "Completed",
    visitType: "Initial Consultation",
  },
  {
    id: "CASE-2026-00398",
    title: "General Consultation",
    doctor: "Dr. Ahmed Rahman",
    date: "02 Aug 2026",
    time: "02:20 PM",
    complaint:
      "Routine consultation and health assessment.",
    status: "Completed",
    visitType: "General Consultation",
  },
];

function MyCases() {
  const [cases] = useState(casesData);

  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const totalCases = cases.length;

  const progressCases = cases.filter(
    (item) => item.status === "In Progress"
  ).length;

  const completedCases = cases.filter(
    (item) => item.status === "Completed"
  ).length;

  const filteredCases = cases.filter((item) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      item.id.toLowerCase().includes(searchValue) ||
      item.title.toLowerCase().includes(searchValue) ||
      item.doctor.toLowerCase().includes(searchValue) ||
      item.complaint.toLowerCase().includes(searchValue);

    const matchesFilter =
      activeFilter === "All" || item.status === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="my-cases-page">

      {/* ==================== BREADCRUMB ==================== */}

      <div className="my-cases-breadcrumb">
        <span>Patient Portal</span>
        <span>/</span>
        <strong>My Cases</strong>
      </div>

      {/* ==================== HEADER ==================== */}

      <div className="my-cases-header">
        <div>
          <h1>My Cases</h1>
          <p>
            View your consultations, case history and medical records.
          </p>
        </div>

        <div className="my-cases-summary">
          <div>
            <strong>{totalCases}</strong>
            <span>Total Cases</span>
          </div>

          <div>
            <strong>{progressCases}</strong>
            <span>In Progress</span>
          </div>

          <div>
            <strong>{completedCases}</strong>
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CARD ==================== */}

      <section className="my-cases-card">

        {/* TOOLBAR */}

        <div className="my-cases-toolbar">

          <div className="my-cases-search">
            <Icon name="search" size={18} />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by case ID, doctor or complaint..."
            />
          </div>

          <div className="my-cases-filters">

            <button
              type="button"
              className={`case-filter-button ${
                activeFilter === "All" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("All")}
            >
              All Cases
              <span>{totalCases}</span>
            </button>

            <button
              type="button"
              className={`case-filter-button ${
                activeFilter === "In Progress" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("In Progress")}
            >
              In Progress
              <span>{progressCases}</span>
            </button>

            <button
              type="button"
              className={`case-filter-button ${
                activeFilter === "Completed" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("Completed")}
            >
              Completed
              <span>{completedCases}</span>
            </button>

            <button
              type="button"
              className="case-filter-icon"
              onClick={() => {
                setSearch("");
                setActiveFilter("All");
              }}
            >
              <Icon name="filter" size={17} />
              <span>Reset</span>
            </button>

          </div>
        </div>

        {/* ==================== CASE LIST ==================== */}

        <div className="my-cases-list">

          {filteredCases.length === 0 ? (
            <div className="my-cases-empty">
              <div className="my-cases-empty-icon">
                <Icon name="search" size={21} />
              </div>

              <strong>No cases found</strong>

              <span>
                Try a different search or filter.
              </span>
            </div>
          ) : (
            filteredCases.map((item) => (
              <div
                className="my-case-item"
                key={item.id}
              >

                {/* CASE ICON */}

                <div className="my-case-icon">
                  <Icon name="case" size={21} />
                </div>

                {/* MAIN INFORMATION */}

                <div className="my-case-main">

                  <div className="my-case-title-row">

                    <div>
                      <h3>{item.title}</h3>

                      <span className="my-case-id">
                        {item.id}
                      </span>
                    </div>

                    <span
                      className={`my-case-status ${
                        item.status === "In Progress"
                          ? "progress"
                          : "completed"
                      }`}
                    >
                      <span></span>
                      {item.status}
                    </span>

                  </div>

                  <div className="my-case-details">

                    <div>
                      <Icon name="doctor" size={15} />
                      <span>{item.doctor}</span>
                    </div>

                    <div>
                      <Icon name="calendar" size={15} />
                      <span>
                        {item.date} • {item.time}
                      </span>
                    </div>

                  </div>

                  <div className="my-case-complaint">
                    <span>Reason for Visit</span>
                    <p>{item.complaint}</p>
                  </div>

                </div>

                {/* VIEW BUTTON */}

                <button
                  type="button"
                  className="my-case-view-button"
                  onClick={() => setSelectedCase(item)}
                >
                  View Case
                  <Icon name="arrow" size={16} />
                </button>

              </div>
            ))
          )}

        </div>
      </section>

      {/* ==================== CASE DETAIL MODAL ==================== */}

      {selectedCase && (
        <div
          className="my-case-modal-overlay"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="my-case-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* MODAL HEADER */}

            <div className="my-case-modal-header">

              <div>
                <span>Case Details</span>
                <h2>{selectedCase.title}</h2>
              </div>

              <button
                type="button"
                className="my-case-modal-close"
                onClick={() => setSelectedCase(null)}
                aria-label="Close"
              >
                <Icon name="close" size={17} />
              </button>

            </div>

            {/* CASE PROFILE */}

            <div className="my-case-modal-profile">

              <div className="my-case-modal-icon">
                <Icon name="case" size={22} />
              </div>

              <div>
                <strong>{selectedCase.id}</strong>
                <span>
                  {selectedCase.visitType}
                </span>
              </div>

              <span
                className={`my-case-status ${
                  selectedCase.status === "In Progress"
                    ? "progress"
                    : "completed"
                }`}
              >
                <span></span>
                {selectedCase.status}
              </span>

            </div>

            {/* DETAILS */}

            <div className="my-case-modal-details">

              <div>
                <span>Doctor</span>
                <strong>{selectedCase.doctor}</strong>
              </div>

              <div>
                <span>Consultation Date</span>
                <strong>{selectedCase.date}</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>{selectedCase.time}</strong>
              </div>

              <div className="full">
                <span>Reason for Visit</span>
                <strong>{selectedCase.complaint}</strong>
              </div>

            </div>

            {/* STATUS INFORMATION */}

            <div className="my-case-status-info">

              <div className="my-case-status-info-icon">
                <Icon name="check" size={17} />
              </div>

              <div>
                <strong>
                  {selectedCase.status === "Completed"
                    ? "Case consultation completed"
                    : "Case is currently under review"}
                </strong>

                <p>
                  {selectedCase.status === "Completed"
                    ? "Your consultation has been completed. Available reports and records can be viewed from the Reports section."
                    : "Your case has been submitted and is currently being processed by the healthcare team."}
                </p>
              </div>

            </div>

            {/* ACTION */}

            <div className="my-case-modal-actions">
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default MyCases;