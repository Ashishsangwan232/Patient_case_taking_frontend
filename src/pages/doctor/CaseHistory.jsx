import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CaseHistory.css";

function CaseHistory() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedCase, setSelectedCase] = useState(null);

  const cases = [
    {
      id: "SIH-2026-00125",
      patient: "Md. Jamal Hossain",
      age: 45,
      gender: "Male",
      date: "08 Sep 2026",
      time: "10:24 AM",
      type: "Follow-up",
      complaint: "Joint pain and stiffness",
      status: "In Progress",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00124",
      patient: "Sabina Akter",
      age: 32,
      gender: "Female",
      date: "07 Sep 2026",
      time: "03:15 PM",
      type: "Consultation",
      complaint: "Digestive discomfort",
      status: "Completed",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00123",
      patient: "Rifat Hasan",
      age: 28,
      gender: "Male",
      date: "07 Sep 2026",
      time: "11:40 AM",
      type: "New Consultation",
      complaint: "Headache and fatigue",
      status: "Draft",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00122",
      patient: "Farhana Islam",
      age: 36,
      gender: "Female",
      date: "06 Sep 2026",
      time: "01:20 PM",
      type: "Follow-up",
      complaint: "Lower back discomfort",
      status: "Completed",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00121",
      patient: "Arif Khan",
      age: 41,
      gender: "Male",
      date: "05 Sep 2026",
      time: "04:10 PM",
      type: "Consultation",
      complaint: "Sleep-related concerns",
      status: "Completed",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00120",
      patient: "Nusrat Jahan",
      age: 29,
      gender: "Female",
      date: "04 Sep 2026",
      time: "12:30 PM",
      type: "Follow-up",
      complaint: "Skin irritation",
      status: "Completed",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00119",
      patient: "Rahul Kumar",
      age: 34,
      gender: "Male",
      date: "03 Sep 2026",
      time: "10:50 AM",
      type: "Consultation",
      complaint: "Seasonal allergy",
      status: "Completed",
      doctor: "Dr. Ahmed Rahman",
    },
    {
      id: "SIH-2026-00118",
      patient: "Priya Singh",
      age: 27,
      gender: "Female",
      date: "02 Sep 2026",
      time: "02:45 PM",
      type: "Follow-up",
      complaint: "Digestive discomfort",
      status: "Completed",
      doctor: "Dr. Ahmed Rahman",
    },
  ];

  /* ================= FILTERED CASES ================= */

  const filteredCases = useMemo(() => {
    return cases.filter((item) => {
      const searchValue = search.toLowerCase().trim();

      const matchesSearch =
        !searchValue ||
        item.patient.toLowerCase().includes(searchValue) ||
        item.id.toLowerCase().includes(searchValue) ||
        item.complaint.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      const matchesType =
        typeFilter === "All" || item.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [search, statusFilter, typeFilter]);

  /* ================= DYNAMIC STATS ================= */

  const caseStats = useMemo(() => {
    return {
      total: cases.length,
      inProgress: cases.filter((item) => item.status === "In Progress").length,
      completed: cases.filter((item) => item.status === "Completed").length,
      draft: cases.filter((item) => item.status === "Draft").length,
    };
  }, [cases]);

  /* ================= STATUS CLASS ================= */

  const getStatusClass = (status) => {
    if (status === "Completed") return "completed";
    if (status === "In Progress") return "progress";
    if (status === "Draft") return "draft";

    return "";
  };

  /* ================= CLEAR FILTERS ================= */

  const clearFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setTypeFilter("All");
  };

  return (
    <div className="doctor-case-history-page">
      {/* ================= BREADCRUMB ================= */}

      <div className="doctor-case-history-breadcrumb">
        Doctor Portal
        <span>/</span>
        Case History
      </div>

      {/* ================= HEADER ================= */}

      <div className="doctor-case-history-header">
        <div>
          <h1>Case History</h1>

          <p>
            View and manage previous patient clinical cases.
          </p>
        </div>

        <button
          type="button"
          className="case-history-patients-button"
          onClick={() => navigate("/doctor/patients")}
        >
          View Patients
          <span>→</span>
        </button>
      </div>

      {/* ================= SUMMARY ================= */}

      <div className="case-history-stats">
        <div className="case-history-stat">
          <div className="case-stat-icon blue">C</div>

          <div>
            <span>Total Cases</span>
            <strong>{caseStats.total}</strong>
          </div>
        </div>

        <div className="case-history-stat">
          <div className="case-stat-icon purple">P</div>

          <div>
            <span>In Progress</span>
            <strong>{caseStats.inProgress}</strong>
          </div>
        </div>

        <div className="case-history-stat">
          <div className="case-stat-icon green">✓</div>

          <div>
            <span>Completed</span>
            <strong>{caseStats.completed}</strong>
          </div>
        </div>

        <div className="case-history-stat">
          <div className="case-stat-icon orange">D</div>

          <div>
            <span>Draft Cases</span>
            <strong>{caseStats.draft}</strong>
          </div>
        </div>
      </div>

      {/* ================= MAIN CARD ================= */}

      <section className="doctor-case-history-card">
        {/* ================= FILTER BAR ================= */}

        <div className="case-history-filter-bar">
          <div className="case-history-search">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="1.7"
              />

              <path
                d="m16 16 4 4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Search patient, case ID or complaint..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="All">All Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Draft">Draft</option>
          </select>

          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
          >
            <option value="All">All Types</option>
            <option value="Consultation">Consultation</option>
            <option value="New Consultation">New Consultation</option>
            <option value="Follow-up">Follow-up</option>
          </select>

          {(search ||
            statusFilter !== "All" ||
            typeFilter !== "All") && (
            <button
              type="button"
              className="case-history-clear"
              onClick={clearFilters}
            >
              Clear
            </button>
          )}
        </div>

        {/* ================= TABLE ================= */}

        <div className="case-history-table-wrapper">
          <table className="case-history-table">
            <thead>
              <tr>
                <th>CASE</th>
                <th>PATIENT</th>
                <th>VISIT TYPE</th>
                <th>PRIMARY COMPLAINT</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredCases.length > 0 ? (
                filteredCases.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="case-id-wrapper">
                        <div className="case-document-icon">
                          <svg viewBox="0 0 24 24" fill="none">
                            <rect
                              x="5"
                              y="3"
                              width="14"
                              height="18"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.7"
                            />

                            <path
                              d="M8 8h8M8 12h8M8 16h5"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>

                        <div>
                          <strong>{item.id}</strong>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="case-patient">
                        <div className="case-patient-avatar">
                          {item.patient
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div>
                          <strong>{item.patient}</strong>

                          <span>
                            {item.age} Years · {item.gender}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="case-type">{item.type}</span>
                    </td>

                    <td>
                      <span className="case-complaint">
                        {item.complaint}
                      </span>
                    </td>

                    <td>
                      <span className="case-date">{item.date}</span>
                    </td>

                    <td>
                      <span
                        className={`case-status ${getStatusClass(
                          item.status
                        )}`}
                      >
                        <i></i>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="case-view-button"
                        onClick={() => setSelectedCase(item)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="case-history-empty">
                    <strong>No cases found</strong>

                    <span>
                      Try changing your search or filters.
                    </span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="case-history-footer">
          <span>
            Showing <strong>{filteredCases.length}</strong> of{" "}
            <strong>{cases.length}</strong> cases
          </span>

          <span>
            Doctor: <strong>Dr. Ahmed Rahman</strong>
          </span>
        </div>
      </section>

      {/* ================= CASE MODAL ================= */}

      {selectedCase && (
        <div
          className="case-history-modal-overlay"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="case-history-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="case-history-modal-header">
              <div>
                <span>Clinical Case</span>

                <h2>{selectedCase.id}</h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCase(null)}
              >
                ×
              </button>
            </div>

            <div className="case-modal-patient">
              <div className="case-modal-avatar">
                {selectedCase.patient
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <strong>{selectedCase.patient}</strong>

                <span>
                  {selectedCase.age} Years · {selectedCase.gender}
                </span>
              </div>
            </div>

            <div className="case-modal-grid">
              <div>
                <label>Visit Type</label>
                <strong>{selectedCase.type}</strong>
              </div>

              <div>
                <label>Status</label>
                <strong>{selectedCase.status}</strong>
              </div>

              <div>
                <label>Date</label>
                <strong>{selectedCase.date}</strong>
              </div>

              <div>
                <label>Time</label>
                <strong>{selectedCase.time}</strong>
              </div>
            </div>

            <div className="case-modal-complaint">
              <label>Primary Complaint</label>

              <p>{selectedCase.complaint}</p>
            </div>

            <div className="case-modal-placeholder">
              <div>
                <span>+</span>
              </div>

              <div>
                <strong>Detailed clinical information</strong>

                <p>
                  History, examination, diagnosis and treatment
                  details will appear here.
                </p>
              </div>
            </div>

            <div className="case-modal-footer">
              <button
                type="button"
                onClick={() => navigate("/doctor/patients")}
              >
                View Patient
              </button>

              <button
                type="button"
                className="primary"
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

export default CaseHistory;