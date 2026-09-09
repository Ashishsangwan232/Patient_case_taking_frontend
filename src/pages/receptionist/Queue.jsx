import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Queue.css";

const initialQueue = [
  {
    token: "Q-001",
    patientId: "SIH-2026-00125",
    patientName: "Md. Jamal Hossain",
    age: 42,
    gender: "Male",
    doctor: "Dr. Priya Sharma",
    caseId: "CASE-2026-00839",
    complaint: "Joint pain and stiffness",
    visitType: "Follow-up",
    priority: "Normal",
    arrival: "09:32 AM",
    status: "Waiting",
  },
  {
    token: "Q-002",
    patientId: "SIH-2026-00124",
    patientName: "Sabina Akter",
    age: 35,
    gender: "Female",
    doctor: "Dr. Arjun Mehta",
    caseId: "CASE-2026-00840",
    complaint: "Digestive discomfort",
    visitType: "New Visit",
    priority: "Normal",
    arrival: "09:41 AM",
    status: "Ready for Doctor",
  },
  {
    token: "Q-003",
    patientId: "SIH-2026-00123",
    patientName: "Rifat Hasan",
    age: 28,
    gender: "Male",
    doctor: "Dr. Priya Sharma",
    caseId: "CASE-2026-00837",
    complaint: "Headache and fatigue",
    visitType: "Consultation",
    priority: "High",
    arrival: "09:48 AM",
    status: "In Consultation",
  },
  {
    token: "Q-004",
    patientId: "SIH-2026-00122",
    patientName: "Farhana Islam",
    age: 51,
    gender: "Female",
    doctor: "Dr. Neha Verma",
    caseId: "CASE-2026-00838",
    complaint: "Sleep disturbance",
    visitType: "Follow-up",
    priority: "Normal",
    arrival: "10:02 AM",
    status: "Waiting",
  },
  {
    token: "Q-005",
    patientId: "SIH-2026-00126",
    patientName: "Rahul Kumar",
    age: 39,
    gender: "Male",
    doctor: "Dr. Neha Verma",
    caseId: "CASE-2026-00842",
    complaint: "Lower back pain",
    visitType: "New Visit",
    priority: "Normal",
    arrival: "10:14 AM",
    status: "Ready for Doctor",
  },
];

const statusOrder = [
  "Waiting",
  "Ready for Doctor",
  "In Consultation",
  "Completed",
];

function Queue() {
  const [queue, setQueue] = useState(initialQueue);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [doctorFilter, setDoctorFilter] = useState("All");
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [toast, setToast] = useState("");

  const doctors = useMemo(() => {
    return ["All", ...new Set(queue.map((patient) => patient.doctor))];
  }, [queue]);

  const filteredQueue = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return queue.filter((patient) => {
      const matchesSearch =
        !searchText ||
        patient.patientName.toLowerCase().includes(searchText) ||
        patient.patientId.toLowerCase().includes(searchText) ||
        patient.token.toLowerCase().includes(searchText) ||
        patient.caseId.toLowerCase().includes(searchText) ||
        patient.complaint.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || patient.status === statusFilter;

      const matchesDoctor =
        doctorFilter === "All" || patient.doctor === doctorFilter;

      return matchesSearch && matchesStatus && matchesDoctor;
    });
  }, [queue, search, statusFilter, doctorFilter]);

  const counts = useMemo(
    () => ({
      total: queue.length,
      waiting: queue.filter((p) => p.status === "Waiting").length,
      ready: queue.filter((p) => p.status === "Ready for Doctor").length,
      consultation: queue.filter((p) => p.status === "In Consultation").length,
      completed: queue.filter((p) => p.status === "Completed").length,
    }),
    [queue]
  );

  const getNextStatus = (currentStatus) => {
    const currentIndex = statusOrder.indexOf(currentStatus);

    if (currentIndex === -1 || currentIndex === statusOrder.length - 1) {
      return null;
    }

    return statusOrder[currentIndex + 1];
  };

  const getActionLabel = (status) => {
    switch (status) {
      case "Waiting":
        return "Mark Ready";
      case "Ready for Doctor":
        return "Start Consultation";
      case "In Consultation":
        return "Complete";
      default:
        return "Completed";
    }
  };

  const updateStatus = (token) => {
    const currentPatient = queue.find((patient) => patient.token === token);

    if (!currentPatient) return;

    const nextStatus = getNextStatus(currentPatient.status);

    if (!nextStatus) return;

    setQueue((currentQueue) =>
      currentQueue.map((patient) =>
        patient.token === token
          ? { ...patient, status: nextStatus }
          : patient
      )
    );

    setToast(`${currentPatient.patientName} moved to ${nextStatus}`);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Waiting":
        return "status-waiting";
      case "Ready for Doctor":
        return "status-ready";
      case "In Consultation":
        return "status-consultation";
      case "Completed":
        return "status-completed";
      default:
        return "";
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "priority-high";
      case "Urgent":
        return "priority-urgent";
      default:
        return "priority-normal";
    }
  };

  return (
    <div className="queue-page">
      {/* HEADER */}
      <div className="queue-header">
        <div>
          <div className="queue-breadcrumb">
            Receptionist Portal <span>/</span> Queue
          </div>

          <h1>Today&apos;s Patient Queue</h1>

          <p>
            Manage patient flow from registration to doctor consultation.
          </p>
        </div>

        <Link to="/receptionist/dashboard" className="back-dashboard-btn">
          ← Back to Dashboard
        </Link>
      </div>

      {/* FLOW INFO */}
      <div className="queue-flow-card">
        <div className="flow-title">
          <span className="flow-icon">↔</span>
          Patient Flow
        </div>

        <div className="flow-steps">
          <div className="flow-step">
            <span className="flow-number">1</span>
            <div>
              <strong>Registration</strong>
              <small>Patient + case created</small>
            </div>
          </div>

          <span className="flow-arrow">→</span>

          <div className="flow-step active">
            <span className="flow-number">2</span>
            <div>
              <strong>Queue</strong>
              <small>Manage patient flow</small>
            </div>
          </div>

          <span className="flow-arrow">→</span>

          <div className="flow-step">
            <span className="flow-number">3</span>
            <div>
              <strong>Doctor</strong>
              <small>Clinical consultation</small>
            </div>
          </div>

          <span className="flow-arrow">→</span>

          <div className="flow-step">
            <span className="flow-number">4</span>
            <div>
              <strong>Complete</strong>
              <small>Visit completed</small>
            </div>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="queue-summary">
        <div className="summary-card">
          <div className="summary-icon total-icon">👥</div>
          <div>
            <span>Total Patients</span>
            <strong>{counts.total}</strong>
            <small>Today&apos;s queue</small>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon waiting-icon">◷</div>
          <div>
            <span>Waiting</span>
            <strong>{counts.waiting}</strong>
            <small>In queue</small>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon ready-icon">✓</div>
          <div>
            <span>Ready for Doctor</span>
            <strong>{counts.ready}</strong>
            <small>Case complete</small>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon consultation-icon">●</div>
          <div>
            <span>In Consultation</span>
            <strong>{counts.consultation}</strong>
            <small>With doctor</small>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon completed-icon">✓</div>
          <div>
            <span>Completed</span>
            <strong>{counts.completed}</strong>
            <small>Today</small>
          </div>
        </div>
      </div>

      {/* QUEUE CARD */}
      <div className="queue-card">
        <div className="queue-card-header">
          <div>
            <h2>Patient Queue</h2>
            <p>
              Patients registered today and their current consultation status.
            </p>
          </div>

          <div className="queue-live">
            <span></span>
            Live Queue
          </div>
        </div>

        {/* FILTERS */}
        <div className="queue-filters">
          <div className="queue-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search patient, ID, token or case..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Waiting">Waiting</option>
            <option value="Ready for Doctor">Ready for Doctor</option>
            <option value="In Consultation">In Consultation</option>
            <option value="Completed">Completed</option>
          </select>

          <select
            value={doctorFilter}
            onChange={(e) => setDoctorFilter(e.target.value)}
          >
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor === "All" ? "All Doctors" : doctor}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="refresh-btn"
            onClick={() => {
              setSearch("");
              setStatusFilter("All");
              setDoctorFilter("All");
            }}
          >
            ↻ Reset
          </button>
        </div>

        {/* TABLE */}
        <div className="queue-table-wrapper">
          <table className="queue-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Patient</th>
                <th>Case / Complaint</th>
                <th>Doctor</th>
                <th>Priority</th>
                <th>Arrival</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredQueue.length > 0 ? (
                filteredQueue.map((patient) => (
                  <tr key={patient.token}>
                    <td>
                      <span className="token">{patient.token}</span>
                    </td>

                    <td>
                      <div className="patient-cell">
                        <div className="patient-avatar">
                          {patient.patientName.charAt(0)}
                        </div>

                        <div>
                          <strong>{patient.patientName}</strong>
                          <span>
                            {patient.patientId} · {patient.age} yrs ·{" "}
                            {patient.gender}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="case-cell">
                        <strong>{patient.complaint}</strong>
                        <span>
                          {patient.caseId} · {patient.visitType}
                        </span>
                      </div>
                    </td>

                    <td>
                      <span className="doctor-name">{patient.doctor}</span>
                    </td>

                    <td>
                      <span
                        className={`priority-badge ${getPriorityClass(
                          patient.priority
                        )}`}
                      >
                        {patient.priority}
                      </span>
                    </td>

                    <td>
                      <span className="arrival-time">{patient.arrival}</span>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${getStatusClass(
                          patient.status
                        )}`}
                      >
                        <span className="status-dot"></span>
                        {patient.status}
                      </span>
                    </td>

                    <td>
                      <div className="action-buttons">
                        <button
                          type="button"
                          className="view-btn"
                          onClick={() => setSelectedPatient(patient)}
                        >
                          View Case
                        </button>

                        {patient.status !== "Completed" && (
                          <button
                            type="button"
                            className="status-action-btn"
                            onClick={() => updateStatus(patient.token)}
                          >
                            {getActionLabel(patient.status)}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">
                    <div className="empty-state">
                      <div className="empty-icon">⌕</div>
                      <h3>No patients found</h3>
                      <p>
                        Try changing the search or filter to find a patient.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="queue-footer">
          <span>
            Showing <strong>{filteredQueue.length}</strong> of{" "}
            <strong>{queue.length}</strong> patients
          </span>

          <span className="footer-note">
            New registrations are added automatically to the queue.
          </span>
        </div>
      </div>

      {/* GUIDELINES */}
      <div className="guidelines-card">
        <div className="guidelines-icon">ℹ</div>

        <div>
          <h3>Queue Guidelines</h3>

          <div className="guideline-list">
            <span>
              <b>1.</b> New patients are registered and their initial case is
              captured from the <strong>New Patient</strong> page.
            </span>

            <span>
              <b>2.</b> Once the initial case is complete, the patient becomes
              <strong> Ready for Doctor</strong>.
            </span>

            <span>
              <b>3.</b> Receptionist only manages patient movement in the
              queue. Clinical decisions remain with the doctor.
            </span>
          </div>
        </div>
      </div>

      {/* VIEW CASE MODAL */}
      {selectedPatient && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPatient(null)}
        >
          <div
            className="case-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="case-modal-header">
              <div>
                <span className="modal-label">Patient Case</span>
                <h2>{selectedPatient.patientName}</h2>
                <p>
                  {selectedPatient.patientId} · {selectedPatient.caseId}
                </p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedPatient(null)}
              >
                ×
              </button>
            </div>

            <div className="modal-status-row">
              <span
                className={`status-badge ${getStatusClass(
                  selectedPatient.status
                )}`}
              >
                <span className="status-dot"></span>
                {selectedPatient.status}
              </span>

              <span
                className={`priority-badge ${getPriorityClass(
                  selectedPatient.priority
                )}`}
              >
                {selectedPatient.priority} Priority
              </span>
            </div>

            <div className="case-details-grid">
              <div className="detail-box">
                <span>Patient</span>
                <strong>{selectedPatient.patientName}</strong>
                <small>
                  {selectedPatient.age} years · {selectedPatient.gender}
                </small>
              </div>

              <div className="detail-box">
                <span>Doctor</span>
                <strong>{selectedPatient.doctor}</strong>
                <small>{selectedPatient.visitType}</small>
              </div>

              <div className="detail-box full-width">
                <span>Chief Complaint</span>
                <strong>{selectedPatient.complaint}</strong>
              </div>

              <div className="detail-box">
                <span>Arrival Time</span>
                <strong>{selectedPatient.arrival}</strong>
              </div>

              <div className="detail-box">
                <span>Queue Token</span>
                <strong>{selectedPatient.token}</strong>
              </div>
            </div>

            <div className="modal-note">
              <span>✓</span>
              Initial case information has been captured by the receptionist.
              The doctor can perform the clinical assessment from the Doctor
              portal.
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="modal-secondary"
                onClick={() => setSelectedPatient(null)}
              >
                Close
              </button>

              {selectedPatient.status !== "Completed" && (
                <button
                  type="button"
                  className="modal-primary"
                  onClick={() => {
                    updateStatus(selectedPatient.token);
                    setSelectedPatient(null);
                  }}
                >
                  {getActionLabel(selectedPatient.status)}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="queue-toast">✓ {toast}</div>}
    </div>
  );
}

export default Queue;