import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Patients.css";

const patientsData = [
  {
    id: "SIH-2026-00126",
    name: "Rahul Kumar",
    initials: "RK",
    age: 39,
    gender: "Male",
    phone: "+91 98765 42665",
    email: "rahul.k@example.com",
    lastVisit: "08 Sep 2026",
    registered: "08 Sep 2026",
    status: "Active",
    bloodGroup: "A-",
    caseId: "CASE-2026-00842",
    complaint: "Lower back pain",
  },
  {
    id: "SIH-2026-00125",
    name: "Md. Jamal Hossain",
    initials: "MJ",
    age: 42,
    gender: "Male",
    phone: "+91 98765 43210",
    email: "jamal.h@example.com",
    lastVisit: "08 Sep 2026",
    registered: "12 Aug 2026",
    status: "Active",
    bloodGroup: "B+",
    caseId: "CASE-2026-00831",
    complaint: "Joint pain",
  },
  {
    id: "SIH-2026-00124",
    name: "Sabina Akter",
    initials: "SA",
    age: 35,
    gender: "Female",
    phone: "+91 98765 43122",
    email: "sabina.a@example.com",
    lastVisit: "08 Sep 2026",
    registered: "10 Aug 2026",
    status: "Active",
    bloodGroup: "O+",
    caseId: "CASE-2026-00820",
    complaint: "Digestive discomfort",
  },
  {
    id: "SIH-2026-00123",
    name: "Rifat Hasan",
    initials: "RH",
    age: 28,
    gender: "Male",
    phone: "+91 98765 43018",
    email: "rifat.h@example.com",
    lastVisit: "07 Sep 2026",
    registered: "05 Aug 2026",
    status: "Active",
    bloodGroup: "A+",
    caseId: "CASE-2026-00808",
    complaint: "Headache",
  },
  {
    id: "SIH-2026-00122",
    name: "Farhana Islam",
    initials: "FI",
    age: 51,
    gender: "Female",
    phone: "+91 98765 42987",
    email: "farhana.i@example.com",
    lastVisit: "08 Sep 2026",
    registered: "29 Jul 2026",
    status: "Active",
    bloodGroup: "AB+",
    caseId: "CASE-2026-00794",
    complaint: "Sleep difficulty",
  },
  {
    id: "SIH-2026-00121",
    name: "Abdullah Al Mamun",
    initials: "AM",
    age: 46,
    gender: "Male",
    phone: "+91 98765 42841",
    email: "abdullah.m@example.com",
    lastVisit: "05 Sep 2026",
    registered: "21 Jul 2026",
    status: "Active",
    bloodGroup: "O-",
    caseId: "CASE-2026-00781",
    complaint: "Knee pain",
  },
  {
    id: "SIH-2026-00120",
    name: "Jannatul Ferdous",
    initials: "JF",
    age: 31,
    gender: "Female",
    phone: "+91 98765 42712",
    email: "jannatul.f@example.com",
    lastVisit: "03 Sep 2026",
    registered: "18 Jul 2026",
    status: "Active",
    bloodGroup: "B+",
    caseId: "CASE-2026-00765",
    complaint: "Fatigue",
  },
  {
    id: "SIH-2026-00118",
    name: "Priya Singh",
    initials: "PS",
    age: 27,
    gender: "Female",
    phone: "+91 98765 42542",
    email: "priya.s@example.com",
    lastVisit: "30 Aug 2026",
    registered: "08 Jul 2026",
    status: "Inactive",
    bloodGroup: "O+",
    caseId: "CASE-2026-00742",
    complaint: "General consultation",
  },
];

function Patients() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patientsData.filter((patient) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      patient.name.toLowerCase().includes(searchValue) ||
      patient.id.toLowerCase().includes(searchValue) ||
      patient.phone.toLowerCase().includes(searchValue) ||
      patient.caseId.toLowerCase().includes(searchValue);

    const matchesStatus =
      statusFilter === "All" || patient.status === statusFilter;

    const matchesGender =
      genderFilter === "All" || patient.gender === genderFilter;

    return matchesSearch && matchesStatus && matchesGender;
  });

  const activePatients = patientsData.filter(
    (patient) => patient.status === "Active"
  ).length;

  const malePatients = patientsData.filter(
    (patient) => patient.gender === "Male"
  ).length;

  const femalePatients = patientsData.filter(
    (patient) => patient.gender === "Female"
  ).length;

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setGenderFilter("All");
  };

  return (
    <div className="receptionist-patients-page">
      {/* BREADCRUMB */}
      <div className="receptionist-patients-breadcrumb">
        <span>Receptionist Portal</span>
        <span>/</span>
        <strong>Patients</strong>
      </div>

      {/* PAGE HEADER */}
      <div className="receptionist-patients-heading">
        <div>
          <h1>Patients</h1>
          <p>
            Search and manage registered patient records.
          </p>
        </div>

        <button
          type="button"
          className="receptionist-new-patient-button"
          onClick={() => navigate("/receptionist/new-patient")}
        >
          <span>+</span>
          New Patient
        </button>
      </div>

      {/* SUMMARY */}
      <section className="receptionist-patient-summary">
        <div className="receptionist-patient-summary-card">
          <div className="patient-summary-icon total">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
              <circle
                cx="9.5"
                cy="7"
                r="3"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M17 11a3 3 0 0 0 0-6M20 20v-1.5a4 4 0 0 0-3-3.87"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span>Total Patients</span>
            <strong>{patientsData.length}</strong>
          </div>
        </div>

        <div className="receptionist-patient-summary-card">
          <div className="patient-summary-icon active">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m8 12 2.6 2.6L16.5 9"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <span>Active Patients</span>
            <strong>{activePatients}</strong>
          </div>
        </div>

        <div className="receptionist-patient-summary-card">
          <div className="patient-summary-icon male">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="10"
                cy="13"
                r="4"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="m13 10 6-6M15 4h4v4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <span>Male</span>
            <strong>{malePatients}</strong>
          </div>
        </div>

        <div className="receptionist-patient-summary-card">
          <div className="patient-summary-icon female">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="9"
                r="4"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M11 13v7M8 17h6M17 4v5M14.5 6.5H19.5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div>
            <span>Female</span>
            <strong>{femalePatients}</strong>
          </div>
        </div>
      </section>

      {/* PATIENT DIRECTORY */}
      <section className="receptionist-patients-card">
        <div className="receptionist-patients-card-header">
          <div>
            <h2>Patient Directory</h2>
            <p>
              {filteredPatients.length} of {patientsData.length} patients displayed
            </p>
          </div>

          <button
            type="button"
            className="patient-refresh-button"
            onClick={resetFilters}
          >
            ↻ Reset
          </button>
        </div>

        {/* FILTER BAR */}
        <div className="receptionist-patients-filter">
          <div className="receptionist-patient-search">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
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
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, patient ID, case ID or mobile..."
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <select
            value={genderFilter}
            onChange={(event) => setGenderFilter(event.target.value)}
          >
            <option value="All">All Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="receptionist-patients-table-wrapper">
          <div className="receptionist-patients-table">
            <div className="receptionist-patients-table-header">
              <span>Patient</span>
              <span>Patient ID</span>
              <span>Age / Gender</span>
              <span>Mobile</span>
              <span>Last Visit</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {filteredPatients.length === 0 ? (
              <div className="receptionist-patients-empty">
                <div>⌕</div>
                <strong>No patients found</strong>
                <span>
                  Try a different search or filter.
                </span>
              </div>
            ) : (
              filteredPatients.map((patient) => (
                <div
                  className="receptionist-patients-table-row"
                  key={patient.id}
                >
                  <div className="receptionist-patient-main">
                    <div className="receptionist-patient-avatar">
                      {patient.initials}
                    </div>

                    <div>
                      <strong>{patient.name}</strong>
                      <span>{patient.email}</span>
                    </div>
                  </div>

                  <div className="receptionist-patient-id">
                    {patient.id}
                  </div>

                  <div className="receptionist-patient-demographic">
                    <strong>{patient.age} Years</strong>
                    <span>{patient.gender}</span>
                  </div>

                  <div className="receptionist-patient-phone">
                    {patient.phone}
                  </div>

                  <div className="receptionist-patient-last-visit">
                    {patient.lastVisit}
                  </div>

                  <div>
                    <span
                      className={`receptionist-patient-status ${patient.status.toLowerCase()}`}
                    >
                      <i></i>
                      {patient.status}
                    </span>
                  </div>

                  <div className="receptionist-patient-action">
                    <button
                      type="button"
                      onClick={() => setSelectedPatient(patient)}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* PATIENT DETAIL MODAL */}
      {selectedPatient && (
        <div
          className="receptionist-patient-modal-overlay"
          onClick={() => setSelectedPatient(null)}
        >
          <div
            className="receptionist-patient-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="receptionist-patient-modal-header">
              <div>
                <span>Patient Profile</span>
                <h2>{selectedPatient.name}</h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPatient(null)}
              >
                ×
              </button>
            </div>

            <div className="receptionist-patient-profile">
              <div className="receptionist-profile-avatar">
                {selectedPatient.initials}
              </div>

              <div>
                <strong>{selectedPatient.id}</strong>
                <span>
                  Registered on {selectedPatient.registered}
                </span>
              </div>

              <span
                className={`receptionist-patient-status ${selectedPatient.status.toLowerCase()}`}
              >
                <i></i>
                {selectedPatient.status}
              </span>
            </div>

            <div className="receptionist-patient-details-grid">
              <div>
                <span>Age</span>
                <strong>{selectedPatient.age} Years</strong>
              </div>

              <div>
                <span>Gender</span>
                <strong>{selectedPatient.gender}</strong>
              </div>

              <div>
                <span>Blood Group</span>
                <strong>{selectedPatient.bloodGroup}</strong>
              </div>

              <div>
                <span>Mobile</span>
                <strong>{selectedPatient.phone}</strong>
              </div>

              <div className="full">
                <span>Email</span>
                <strong>{selectedPatient.email}</strong>
              </div>

              <div>
                <span>Case ID</span>
                <strong>{selectedPatient.caseId}</strong>
              </div>

              <div>
                <span>Last Visit</span>
                <strong>{selectedPatient.lastVisit}</strong>
              </div>

              <div className="full">
                <span>Chief Complaint</span>
                <strong>{selectedPatient.complaint}</strong>
              </div>
            </div>

            <div className="receptionist-patient-modal-actions">
              <button
                type="button"
                className="patient-modal-close"
                onClick={() => setSelectedPatient(null)}
              >
                Close
              </button>

              <button
                type="button"
                className="patient-modal-history"
                onClick={() => {
                  setSelectedPatient(null);
                  navigate("/doctor/case-history");
                }}
              >
                Case History
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;