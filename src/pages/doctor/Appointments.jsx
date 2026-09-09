import { useMemo, useState } from "react";
import "./Appointments.css";

function Appointments() {
  const [activeTab, setActiveTab] = useState("Today");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "08 September 2026",
      time: "10:00 AM",
      patient: "Md. Jamal Hossain",
      patientId: "SIH-2026-00125",
      age: 45,
      gender: "Male",
      type: "Follow-up",
      status: "Confirmed",
      reason: "Follow-up consultation",
    },
    {
      id: 2,
      date: "08 September 2026",
      time: "10:30 AM",
      patient: "Sabina Akter",
      patientId: "SIH-2026-00124",
      age: 32,
      gender: "Female",
      type: "Consultation",
      status: "Confirmed",
      reason: "General health consultation",
    },
    {
      id: 3,
      date: "08 September 2026",
      time: "11:00 AM",
      patient: "Rifat Hasan",
      patientId: "SIH-2026-00123",
      age: 28,
      gender: "Male",
      type: "New Consultation",
      status: "Pending",
      reason: "New patient consultation",
    },
    {
      id: 4,
      date: "08 September 2026",
      time: "11:30 AM",
      patient: "Farhana Islam",
      patientId: "SIH-2026-00122",
      age: 36,
      gender: "Female",
      type: "Follow-up",
      status: "Pending",
      reason: "Follow-up consultation",
    },
    {
      id: 5,
      date: "08 September 2026",
      time: "12:00 PM",
      patient: "Arif Khan",
      patientId: "SIH-2026-00121",
      age: 41,
      gender: "Male",
      type: "Consultation",
      status: "Completed",
      reason: "General consultation",
    },
    {
      id: 6,
      date: "08 September 2026",
      time: "02:30 PM",
      patient: "Nusrat Jahan",
      patientId: "SIH-2026-00120",
      age: 29,
      gender: "Female",
      type: "Follow-up",
      status: "Confirmed",
      reason: "Treatment follow-up",
    },
    {
      id: 7,
      date: "09 September 2026",
      time: "10:00 AM",
      patient: "Imran Ahmed",
      patientId: "SIH-2026-00119",
      age: 38,
      gender: "Male",
      type: "Consultation",
      status: "Confirmed",
      reason: "Initial consultation",
    },
    {
      id: 8,
      date: "09 September 2026",
      time: "11:00 AM",
      patient: "Mariya Sultana",
      patientId: "SIH-2026-00118",
      age: 34,
      gender: "Female",
      type: "Follow-up",
      status: "Pending",
      reason: "Treatment review",
    },
    {
      id: 9,
      date: "10 September 2026",
      time: "09:30 AM",
      patient: "Rahul Das",
      patientId: "SIH-2026-00117",
      age: 31,
      gender: "Male",
      type: "New Consultation",
      status: "Confirmed",
      reason: "New consultation",
    },
    {
      id: 10,
      date: "10 September 2026",
      time: "11:30 AM",
      patient: "Ayesha Rahman",
      patientId: "SIH-2026-00116",
      age: 27,
      gender: "Female",
      type: "Consultation",
      status: "Confirmed",
      reason: "General consultation",
    },
    {
      id: 11,
      date: "11 September 2026",
      time: "10:30 AM",
      patient: "Tanvir Hossain",
      patientId: "SIH-2026-00115",
      age: 44,
      gender: "Male",
      type: "Follow-up",
      status: "Pending",
      reason: "Follow-up visit",
    },
    {
      id: 12,
      date: "11 September 2026",
      time: "01:00 PM",
      patient: "Sadia Khan",
      patientId: "SIH-2026-00114",
      age: 39,
      gender: "Female",
      type: "Consultation",
      status: "Confirmed",
      reason: "General health consultation",
    },
  ]);

  const todayDate = "08 September 2026";

  const filteredAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      const normalizedSearch = search.toLowerCase().trim();

      const matchesSearch =
        appointment.patient
          .toLowerCase()
          .includes(normalizedSearch) ||
        appointment.patientId
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "All" ||
        appointment.status === statusFilter;

      let matchesTab = true;

      if (activeTab === "Today") {
        matchesTab = appointment.date === todayDate;
      }

      if (activeTab === "Upcoming") {
        matchesTab = appointment.date !== todayDate;
      }

      return matchesSearch && matchesStatus && matchesTab;
    });
  }, [
    appointments,
    search,
    statusFilter,
    activeTab,
  ]);

  const stats = useMemo(() => {
    const todayAppointments = appointments.filter(
      (appointment) => appointment.date === todayDate
    );

    return {
      total: todayAppointments.length,
      confirmed: todayAppointments.filter(
        (appointment) => appointment.status === "Confirmed"
      ).length,
      pending: todayAppointments.filter(
        (appointment) => appointment.status === "Pending"
      ).length,
      completed: todayAppointments.filter(
        (appointment) => appointment.status === "Completed"
      ).length,
    };
  }, [appointments]);

  const updateStatus = (id, newStatus) => {
    setAppointments((previous) =>
      previous.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status: newStatus,
            }
          : appointment
      )
    );

    setSelectedAppointment((previous) =>
      previous && previous.id === id
        ? {
            ...previous,
            status: newStatus,
          }
        : previous
    );
  };

  const getStatusClass = (status) => {
    if (status === "Confirmed") return "confirmed";
    if (status === "Pending") return "pending";
    if (status === "Completed") return "completed";
    if (status === "Cancelled") return "cancelled";

    return "";
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="doctor-appointments-page">
      {/* Breadcrumb */}
      <div className="doctor-appointments-breadcrumb">
        Doctor Portal
        <span>/</span>
        Appointments
      </div>

      {/* Header */}
      <div className="doctor-appointments-header">
        <div>
          <h1>Appointments</h1>

          <p>
            Manage your scheduled patient appointments.
          </p>
        </div>

        <div className="doctor-appointments-date">
          <span>Today</span>
          <strong>08 September 2026</strong>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="doctor-appointment-stats">
        <div className="doctor-appointment-stat">
          <div className="appointment-stat-icon blue">
            <span>12</span>
          </div>

          <div>
            <span>Total Appointments</span>
            <strong>{stats.total}</strong>
          </div>
        </div>

        <div className="doctor-appointment-stat">
          <div className="appointment-stat-icon green">
            <span>✓</span>
          </div>

          <div>
            <span>Confirmed</span>
            <strong>{stats.confirmed}</strong>
          </div>
        </div>

        <div className="doctor-appointment-stat">
          <div className="appointment-stat-icon orange">
            <span>!</span>
          </div>

          <div>
            <span>Pending</span>
            <strong>{stats.pending}</strong>
          </div>
        </div>

        <div className="doctor-appointment-stat">
          <div className="appointment-stat-icon purple">
            <span>✓</span>
          </div>

          <div>
            <span>Completed</span>
            <strong>{stats.completed}</strong>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <section className="doctor-appointments-card">
        {/* Tabs */}
        <div className="doctor-appointments-tabs">
          {["Today", "Upcoming", "All"].map((tab) => (
            <button
              key={tab}
              type="button"
              className={
                activeTab === tab ? "active" : ""
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="doctor-appointments-filters">
          <div className="doctor-appointment-search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
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
              placeholder="Search patient or patient ID..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >
            <option value="All">All Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Table */}
        <div className="doctor-appointments-table-wrapper">
          <table className="doctor-appointments-table">
            <thead>
              <tr>
                <th>TIME</th>
                <th>PATIENT</th>
                <th>VISIT TYPE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td>
                      <span className="appointment-time">
                        {appointment.time}
                      </span>
                    </td>

                    <td>
                      <div className="appointment-patient">
                        <div className="appointment-avatar">
                          {getInitials(
                            appointment.patient
                          )}
                        </div>

                        <div>
                          <strong>
                            {appointment.patient}
                          </strong>

                          <span>
                            {appointment.patientId}
                            {" · "}
                            {appointment.age} Years,{" "}
                            {appointment.gender}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="appointment-type">
                        {appointment.type}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`appointment-status ${getStatusClass(
                          appointment.status
                        )}`}
                      >
                        <i></i>
                        {appointment.status}
                      </span>
                    </td>

                    <td>
                      <div className="appointment-actions">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedAppointment(
                              appointment
                            )
                          }
                        >
                          View
                        </button>

                        {appointment.status ===
                          "Pending" && (
                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(
                                appointment.id,
                                "Confirmed"
                              )
                            }
                          >
                            Confirm
                          </button>
                        )}

                        {appointment.status ===
                          "Confirmed" && (
                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(
                                appointment.id,
                                "Completed"
                              )
                            }
                          >
                            Complete
                          </button>
                        )}

                        {appointment.status ===
                          "Completed" && (
                          <span className="appointment-done">
                            Done
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="appointment-empty"
                  >
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="doctor-appointments-footer">
          <span>
            Showing{" "}
            <strong>
              {filteredAppointments.length}
            </strong>{" "}
            appointments
          </span>

          <span>
            Doctor: <strong>Dr. Ahmed Rahman</strong>
          </span>
        </div>
      </section>

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div
          className="appointment-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedAppointment(null);
            }
          }}
        >
          <div
            className="appointment-details-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-details-title"
          >
            <div className="appointment-modal-header">
              <div>
                <span>Appointment Details</span>
                <h2 id="appointment-details-title">
                  {selectedAppointment.patient}
                </h2>
              </div>

              <button
                type="button"
                className="appointment-modal-close"
                onClick={() =>
                  setSelectedAppointment(null)
                }
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="appointment-modal-patient">
              <div className="appointment-modal-avatar">
                {getInitials(
                  selectedAppointment.patient
                )}
              </div>

              <div>
                <strong>
                  {selectedAppointment.patient}
                </strong>

                <span>
                  {selectedAppointment.patientId}
                </span>
              </div>
            </div>

            <div className="appointment-details-grid">
              <div>
                <span>Date</span>
                <strong>
                  {selectedAppointment.date}
                </strong>
              </div>

              <div>
                <span>Time</span>
                <strong>
                  {selectedAppointment.time}
                </strong>
              </div>

              <div>
                <span>Age</span>
                <strong>
                  {selectedAppointment.age} Years
                </strong>
              </div>

              <div>
                <span>Gender</span>
                <strong>
                  {selectedAppointment.gender}
                </strong>
              </div>

              <div>
                <span>Visit Type</span>
                <strong>
                  {selectedAppointment.type}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  <span
                    className={`appointment-status ${getStatusClass(
                      selectedAppointment.status
                    )}`}
                  >
                    <i></i>
                    {selectedAppointment.status}
                  </span>
                </strong>
              </div>

              <div className="appointment-details-full">
                <span>Visit Reason</span>
                <strong>
                  {selectedAppointment.reason}
                </strong>
              </div>
            </div>

            <div className="appointment-modal-footer">
              {selectedAppointment.status ===
                "Pending" && (
                <button
                  type="button"
                  className="appointment-modal-primary"
                  onClick={() =>
                    updateStatus(
                      selectedAppointment.id,
                      "Confirmed"
                    )
                  }
                >
                  Confirm Appointment
                </button>
              )}

              {selectedAppointment.status ===
                "Confirmed" && (
                <button
                  type="button"
                  className="appointment-modal-primary"
                  onClick={() =>
                    updateStatus(
                      selectedAppointment.id,
                      "Completed"
                    )
                  }
                >
                  Mark Completed
                </button>
              )}

              <button
                type="button"
                className="appointment-modal-secondary"
                onClick={() =>
                  setSelectedAppointment(null)
                }
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

export default Appointments;