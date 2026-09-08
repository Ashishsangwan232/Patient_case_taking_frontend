import { useNavigate } from "react-router-dom";
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

    arrow: <path d="m9 18 6-6-6-6" />,

    filter: (
      <>
        <path d="M4 6h16M7 12h10M10 18h4" />
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

function MyCases() {
  const navigate = useNavigate();

  const cases = [
    {
      id: "CASE-2026-00481",
      title: "General Consultation",
      doctor: "Dr. Ahmed Rahman",
      date: "06 Sep 2026",
      time: "10:24 AM",
      complaint:
        "Recurring headache and fatigue for the past few days.",
      status: "In Progress",
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
    },
  ];

  return (
    <div className="my-cases-page">

      {/* Breadcrumb */}
      <div className="my-cases-breadcrumb">
        <span>Patient Portal</span>
        <span>/</span>
        <strong>My Cases</strong>
      </div>

      {/* Page Header */}
      <div className="my-cases-header">
        <div>
          <h1>My Cases</h1>
          <p>
            View your consultations, case history and medical records.
          </p>
        </div>

        <div className="my-cases-summary">
          <div>
            <strong>4</strong>
            <span>Total Cases</span>
          </div>

          <div>
            <strong>1</strong>
            <span>In Progress</span>
          </div>

          <div>
            <strong>3</strong>
            <span>Completed</span>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <section className="my-cases-card">

        <div className="my-cases-toolbar">

          <div className="my-cases-search">
            <Icon name="search" size={18} />

            <input
              type="text"
              placeholder="Search cases..."
            />
          </div>

          <div className="my-cases-filters">

            <button className="case-filter-button active">
              All Cases
              <span>4</span>
            </button>

            <button className="case-filter-button">
              In Progress
              <span>1</span>
            </button>

            <button className="case-filter-button">
              Completed
              <span>3</span>
            </button>

            <button className="case-filter-icon">
              <Icon name="filter" size={17} />
              <span>Filter</span>
            </button>

          </div>

        </div>

        {/* Cases List */}
        <div className="my-cases-list">

          {cases.map((item) => (
            <div className="my-case-item" key={item.id}>

              {/* Case Icon */}
              <div className="my-case-icon">
                <Icon name="case" size={21} />
              </div>

              {/* Case Main Info */}
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

              {/* Action */}
              <button
                className="my-case-view-button"
                onClick={() =>
                  navigate(`/patient/cases/${item.id}`)
                }
              >
                View Case
                <Icon name="arrow" size={16} />
              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default MyCases;