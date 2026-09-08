import { useNavigate } from "react-router-dom";
import "./Patients.css";

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

    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),

    patient: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),

    heart: (
      <>
        <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
      </>
    ),

    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),

    arrow: <path d="m9 18 6-6-6-6" />,

    refresh: (
      <>
        <path d="M20 11a8 8 0 1 0 1 4" />
        <path d="M20 5v6h-6" />
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

function Patients() {
  const navigate = useNavigate();

  const patients = [
    {
      id: "SIH-2026-00125",
      name: "Md. Jamal Hossain",
      age: 45,
      gender: "Male",
      phone: "+91 98765 43210",
      lastVisit: "Today, 10:24 AM",
      caseStatus: "In Progress",
      initials: "MJ",
      favorite: true,
    },
    {
      id: "SIH-2026-00124",
      name: "Sabina Akter",
      age: 32,
      gender: "Female",
      phone: "+91 98765 12345",
      lastVisit: "Yesterday, 03:15 PM",
      caseStatus: "Completed",
      initials: "SA",
      favorite: false,
    },
    {
      id: "SIH-2026-00123",
      name: "Rifat Hasan",
      age: 28,
      gender: "Male",
      phone: "+91 91234 56789",
      lastVisit: "Yesterday, 11:40 AM",
      caseStatus: "Draft",
      initials: "RH",
      favorite: false,
    },
    {
      id: "SIH-2026-00122",
      name: "Farhana Islam",
      age: 36,
      gender: "Female",
      phone: "+91 99887 66554",
      lastVisit: "05 Sep 2026, 04:20 PM",
      caseStatus: "Completed",
      initials: "FI",
      favorite: true,
    },
    {
      id: "SIH-2026-00121",
      name: "Abdullah Al Mamun",
      age: 50,
      gender: "Male",
      phone: "+91 97654 32109",
      lastVisit: "04 Sep 2026, 01:10 PM",
      caseStatus: "Completed",
      initials: "AM",
      favorite: false,
    },
    {
      id: "SIH-2026-00120",
      name: "Jannatul Ferdous",
      age: 29,
      gender: "Female",
      phone: "+91 96543 21098",
      lastVisit: "03 Sep 2026, 11:30 AM",
      caseStatus: "Follow Up",
      initials: "JF",
      favorite: false,
    },
  ];

  return (
    <div className="patients-page">

      {/* PAGE HEADER */}
      <div className="patients-page-header">
        <div>
          <p className="patients-breadcrumb">
            Doctor Portal / Patients
          </p>

          <h1>Patients</h1>

          <p className="patients-subtitle">
            Manage and access your patient records.
          </p>
        </div>

        <button className="patients-primary-btn">
          <Icon name="plus" size={18} />
          <span>New Patient</span>
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="patients-summary">

        <div className="patient-summary-card">
          <div className="patient-summary-icon blue">
            <Icon name="patient" size={20} />
          </div>

          <div>
            <span>Total Patients</span>
            <strong>248</strong>
          </div>
        </div>

        <div className="patient-summary-card">
          <div className="patient-summary-icon green">
            <Icon name="calendar" size={20} />
          </div>

          <div>
            <span>Today's Patients</span>
            <strong>8</strong>
          </div>
        </div>

        <div className="patient-summary-card">
          <div className="patient-summary-icon orange">
            <Icon name="heart" size={20} />
          </div>

          <div>
            <span>Follow Ups</span>
            <strong>12</strong>
          </div>
        </div>

        <div className="patient-summary-card">
          <div className="patient-summary-icon purple">
            <Icon name="refresh" size={20} />
          </div>

          <div>
            <span>Active Cases</span>
            <strong>24</strong>
          </div>
        </div>

      </div>

      {/* PATIENTS CARD */}
      <section className="patients-card">

        {/* TABS */}
        <div className="patients-tabs">

          <button className="patient-tab active">
            All Patients
            <span>248</span>
          </button>

          <button className="patient-tab">
            Recent
          </button>

          <button className="patient-tab">
            Follow Ups
            <span>12</span>
          </button>

          <button className="patient-tab">
            Favorites
          </button>

        </div>

        {/* SEARCH + FILTER */}
        <div className="patients-toolbar">

          <div className="patients-search">
            <Icon name="search" size={19} />

            <input
              type="text"
              placeholder="Search by patient name, ID or phone..."
            />
          </div>

          <button className="filter-button">
            <Icon name="filter" size={18} />
            <span>Filter</span>
          </button>

          <select
            className="sort-select"
            defaultValue="recent"
          >
            <option value="recent">
              Recently Updated
            </option>

            <option value="name">
              Name A-Z
            </option>

            <option value="oldest">
              Oldest First
            </option>
          </select>

        </div>

        {/* TABLE */}
        <div className="patients-table-wrapper">

          {/* TABLE HEADER */}
          <div className="patients-table-header">

            <div className="col-patient">
              Patient
            </div>

            <div className="col-id">
              Patient ID
            </div>

            <div className="col-age">
              Age / Gender
            </div>

            <div className="col-visit">
              Last Visit
            </div>

            <div className="col-status">
              Case Status
            </div>

            <div className="col-actions"></div>

          </div>

          {/* PATIENT LIST */}
          <div className="patients-list">

            {patients.map((patient) => (

              <div
                className="patient-row"
                key={patient.id}
              >

                {/* PATIENT */}
                <div className="patient-main col-patient">

                  <div className="patient-avatar">
                    {patient.initials}
                  </div>

                  <div className="patient-name-block">

                    <strong>
                      {patient.name}
                    </strong>

                    <span>
                      {patient.phone}
                    </span>

                  </div>

                </div>

                {/* PATIENT ID */}
                <div className="patient-id col-id">
                  {patient.id}
                </div>

                {/* AGE / GENDER */}
                <div className="patient-demographic col-age">

                  <strong>
                    {patient.age} Years
                  </strong>

                  <span>
                    {patient.gender}
                  </span>

                </div>

                {/* LAST VISIT */}
                <div className="patient-last-visit col-visit">

                  <strong>
                    {patient.lastVisit}
                  </strong>

                </div>

                {/* STATUS */}
                <div className="col-status">

                  <span
                    className={`patient-status ${patient.caseStatus
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >

                    <span className="patient-status-dot"></span>

                    {patient.caseStatus}

                  </span>

                </div>

                {/* ACTIONS */}
                <div className="patient-actions col-actions">

                  <button
                    className={`favorite-button ${
                      patient.favorite
                        ? "favorite-active"
                        : ""
                    }`}
                    aria-label="Favorite patient"
                  >
                    {patient.favorite ? "★" : "☆"}
                  </button>

                  <button
                    className="patient-view-button"
                    aria-label={`View ${patient.name}`}
                    onClick={() =>
                      navigate(
                        `/doctor/patients/${patient.id}`
                      )
                    }
                  >
                    <Icon name="arrow" size={17} />
                  </button>

                  <button
                    className="patient-more-button"
                    aria-label="More options"
                  >
                    <Icon name="more" size={17} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* FOOTER */}
        <div className="patients-footer">

          <span>
            Showing <strong>1–6</strong> of{" "}
            <strong>248</strong> patients
          </span>

          <div className="pagination">

            <button className="pagination-button disabled">
              ←
            </button>

            <button className="pagination-button active">
              1
            </button>

            <button className="pagination-button">
              2
            </button>

            <button className="pagination-button">
              3
            </button>

            <span>...</span>

            <button className="pagination-button">
              42
            </button>

            <button className="pagination-button">
              →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Patients;