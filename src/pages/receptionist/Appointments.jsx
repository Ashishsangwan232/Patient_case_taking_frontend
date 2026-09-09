import { useMemo, useState } from "react";
import "./Appointments.css";

const TODAY = "08 Sep 2026";

const initialAppointments = [
  {
    id: "APT-001",
    patient: "Md. Jamal Hossain",
    patientId: "SIH-2026-00125",
    doctor: "Dr. Priya Sharma",
    date: TODAY,
    time: "10:30 AM",
    type: "Follow-up",
    status: "Confirmed",
    notes: "Regular follow-up consultation.",
  },
  {
    id: "APT-002",
    patient: "Sabina Akter",
    patientId: "SIH-2026-00124",
    doctor: "Dr. Arjun Mehta",
    date: TODAY,
    time: "11:00 AM",
    type: "New Visit",
    status: "Checked In",
    notes: "Initial consultation.",
  },
  {
    id: "APT-003",
    patient: "Rifat Hasan",
    patientId: "SIH-2026-00123",
    doctor: "Dr. Priya Sharma",
    date: TODAY,
    time: "11:30 AM",
    type: "Consultation",
    status: "Confirmed",
    notes: "General consultation.",
  },
  {
    id: "APT-004",
    patient: "Farhana Islam",
    patientId: "SIH-2026-00122",
    doctor: "Dr. Neha Verma",
    date: TODAY,
    time: "12:00 PM",
    type: "Follow-up",
    status: "Pending",
    notes: "Follow-up visit.",
  },
  {
    id: "APT-005",
    patient: "Abdullah Al Mamun",
    patientId: "SIH-2026-00121",
    doctor: "Dr. Rahul Kapoor",
    date: TODAY,
    time: "02:00 PM",
    type: "New Visit",
    status: "Confirmed",
    notes: "New patient consultation.",
  },
  {
    id: "APT-006",
    patient: "Jannatul Ferdous",
    patientId: "SIH-2026-00120",
    doctor: "Dr. Neha Verma",
    date: TODAY,
    time: "03:30 PM",
    type: "Report Review",
    status: "Confirmed",
    notes: "Review previous reports.",
  },
  {
    id: "APT-007",
    patient: "Rahul Kumar",
    patientId: "SIH-2026-00119",
    doctor: "Dr. Arjun Mehta",
    date: "09 Sep 2026",
    time: "10:00 AM",
    type: "Follow-up",
    status: "Confirmed",
    notes: "Follow-up consultation.",
  },
  {
    id: "APT-008",
    patient: "Ayesha Khan",
    patientId: "SIH-2026-00118",
    doctor: "Dr. Neha Verma",
    date: "10 Sep 2026",
    time: "11:30 AM",
    type: "New Visit",
    status: "Pending",
    notes: "New appointment.",
  },
];

const doctors = [
  "All Doctors",
  "Dr. Priya Sharma",
  "Dr. Arjun Mehta",
  "Dr. Neha Verma",
  "Dr. Rahul Kapoor",
];

const appointmentStatuses = [
  "All Status",
  "Confirmed",
  "Checked In",
  "Pending",
  "Cancelled",
];

function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);

  const [activeTab, setActiveTab] = useState("Today");
  const [search, setSearch] = useState("");
  const [doctorFilter, setDoctorFilter] = useState("All Doctors");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [toast, setToast] = useState("");

  const [formData, setFormData] = useState({
    patientId: "",
    doctor: "",
    date: TODAY,
    time: "",
    type: "",
    notes: "",
  });

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      patientId: "",
      doctor: "",
      date: TODAY,
      time: "",
      type: "",
      notes: "",
    });
  };

  const handleCreateAppointment = (event) => {
    event.preventDefault();

    const nextNumber =
      Math.max(
        0,
        ...appointments.map((appointment) =>
          Number(appointment.id.replace("APT-", ""))
        )
      ) + 1;

    const newAppointment = {
      id: `APT-${String(nextNumber).padStart(3, "0")}`,
      patient: formData.patientId || "New Patient",
      patientId: formData.patientId || "SIH-2026-00126",
      doctor: formData.doctor,
      date: formData.date,
      time: formData.time,
      type: formData.type,
      status: "Pending",
      notes: formData.notes,
    };

    setAppointments((previous) => [...previous, newAppointment]);

    resetForm();
    setShowModal(false);

    showToast("Appointment created successfully");
  };

  const updateStatus = (id, status) => {
    const appointment = appointments.find(
      (item) => item.id === id
    );

    setAppointments((previous) =>
      previous.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
            }
          : item
      )
    );

    if (appointment) {
      if (status === "Checked In") {
        showToast(
          `${appointment.patient} checked in successfully`
        );
      } else if (status === "Confirmed") {
        showToast(
          `${appointment.patient}'s appointment confirmed`
        );
      } else if (status === "Cancelled") {
        showToast(
          `${appointment.patient}'s appointment cancelled`
        );
      }
    }
  };

  const filteredAppointments = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return appointments.filter((appointment) => {
      const matchesSearch =
        !searchValue ||
        appointment.patient.toLowerCase().includes(searchValue) ||
        appointment.patientId.toLowerCase().includes(searchValue) ||
        appointment.id.toLowerCase().includes(searchValue);

      const matchesDoctor =
        doctorFilter === "All Doctors" ||
        appointment.doctor === doctorFilter;

      const matchesStatus =
        statusFilter === "All Status" ||
        appointment.status === statusFilter;

      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Today" &&
          appointment.date === TODAY) ||
        (activeTab === "Upcoming" &&
          appointment.date !== TODAY);

      return (
        matchesSearch &&
        matchesDoctor &&
        matchesStatus &&
        matchesTab
      );
    });
  }, [
    appointments,
    search,
    doctorFilter,
    statusFilter,
    activeTab,
  ]);

  const todayCount = appointments.filter(
    (appointment) => appointment.date === TODAY
  ).length;

  const confirmedCount = appointments.filter(
    (appointment) => appointment.status === "Confirmed"
  ).length;

  const checkedInCount = appointments.filter(
    (appointment) => appointment.status === "Checked In"
  ).length;

  const pendingCount = appointments.filter(
    (appointment) => appointment.status === "Pending"
  ).length;

  const getInitials = (name) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replaceAll(" ", "-");
  };

  return (
    <div className="receptionist-appointments-page">
      {/* BREADCRUMB */}
      <div className="appointments-breadcrumb">
        Receptionist Portal
        <span>/</span>
        Appointments
      </div>

      {/* HEADER */}
      <div className="appointments-page-heading">
        <div>
          <div className="appointments-heading-label">
            APPOINTMENT MANAGEMENT
          </div>

          <h1>Appointments</h1>

          <p>
            Schedule appointments, manage confirmations and check patients in.
          </p>
        </div>

        <button
          type="button"
          className="new-appointment-button"
          onClick={() => setShowModal(true)}
        >
          <span>+</span>
          New Appointment
        </button>
      </div>

      {/* SUMMARY */}
      <section className="appointments-summary">
        <div className="appointment-summary-card">
          <div className="appointment-summary-icon today">
            <span>▣</span>
          </div>

          <div>
            <span>Today&apos;s Appointments</span>
            <strong>{todayCount}</strong>
            <small>Scheduled today</small>
          </div>
        </div>

        <div className="appointment-summary-card">
          <div className="appointment-summary-icon confirmed">
            <span>✓</span>
          </div>

          <div>
            <span>Confirmed</span>
            <strong>{confirmedCount}</strong>
            <small>Ready for visit</small>
          </div>
        </div>

        <div className="appointment-summary-card">
          <div className="appointment-summary-icon checked">
            <span>↻</span>
          </div>

          <div>
            <span>Checked In</span>
            <strong>{checkedInCount}</strong>
            <small>At reception</small>
          </div>
        </div>

        <div className="appointment-summary-card">
          <div className="appointment-summary-icon pending">
            <span>◷</span>
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingCount}</strong>
            <small>Awaiting confirmation</small>
          </div>
        </div>
      </section>

      {/* WORKFLOW INFO */}
      <div className="appointment-flow">
        <div className="appointment-flow-icon">i</div>

        <div>
          <strong>Reception workflow</strong>

          <span>
            Create appointment → Confirm → Check In → Patient moves to the
            queue for doctor consultation.
          </span>
        </div>
      </div>

      {/* APPOINTMENTS CARD */}
      <section className="appointments-card">
        {/* CARD HEADER */}
        <div className="appointments-card-header">
          <div>
            <h2>Appointment Schedule</h2>
            <p>View and manage scheduled patient visits.</p>
          </div>

          <div className="appointments-date">
            <span>Today</span>
            <strong>{TODAY}</strong>
          </div>
        </div>

        {/* TABS */}
        <div className="appointment-tabs-wrapper">
          <div className="appointment-tabs">
            {["Today", "Upcoming", "All"].map((tab) => (
              <button
                type="button"
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="appointments-filter-bar">
          <div className="appointment-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search patient, ID or appointment..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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
            value={doctorFilter}
            onChange={(event) =>
              setDoctorFilter(event.target.value)
            }
          >
            {doctors.map((doctor) => (
              <option key={doctor} value={doctor}>
                {doctor}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value)
            }
          >
            {appointmentStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="filter-button"
            onClick={() => {
              setSearch("");
              setDoctorFilter("All Doctors");
              setStatusFilter("All Status");
              setActiveTab("Today");
            }}
          >
            ↻ Reset
          </button>
        </div>

        {/* TABLE */}
        <div className="appointments-table-wrapper">
          <div className="appointments-table">
            <div className="appointments-table-header">
              <span>Time</span>
              <span>Patient</span>
              <span>Doctor</span>
              <span>Visit Type</span>
              <span>Status</span>
              <span>Action</span>
            </div>

            {filteredAppointments.length === 0 ? (
              <div className="appointments-empty">
                <div>⌕</div>
                <strong>No appointments found</strong>
                <span>
                  Try changing your search or filters.
                </span>
              </div>
            ) : (
              filteredAppointments.map((appointment) => (
                <div
                  className="appointments-table-row"
                  key={appointment.id}
                >
                  {/* TIME */}
                  <div className="appointment-time">
                    <strong>{appointment.time}</strong>
                    <span>{appointment.date}</span>
                  </div>

                  {/* PATIENT */}
                  <div className="appointment-patient">
                    <div className="appointment-avatar">
                      {getInitials(appointment.patient)}
                    </div>

                    <div>
                      <strong>{appointment.patient}</strong>

                      <span>
                        {appointment.patientId} · {appointment.id}
                      </span>
                    </div>
                  </div>

                  {/* DOCTOR */}
                  <div className="appointment-doctor">
                    <strong>{appointment.doctor}</strong>
                  </div>

                  {/* TYPE */}
                  <div className="appointment-type">
                    <span>{appointment.type}</span>
                  </div>

                  {/* STATUS */}
                  <div>
                    <span
                      className={`appointment-status ${getStatusClass(
                        appointment.status
                      )}`}
                    >
                      <i></i>
                      {appointment.status}
                    </span>
                  </div>

                  {/* ACTION */}
                  <div className="appointment-actions">
                    {appointment.status === "Pending" && (
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

                    {appointment.status === "Confirmed" && (
                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(
                            appointment.id,
                            "Checked In"
                          )
                        }
                      >
                        Check In
                      </button>
                    )}

                    {appointment.status === "Checked In" && (
                      <button
                        type="button"
                        className="view-action"
                        onClick={() =>
                          setSelectedAppointment(appointment)
                        }
                      >
                        View
                      </button>
                    )}

                    {appointment.status === "Cancelled" && (
                      <button
                        type="button"
                        className="view-action"
                        onClick={() =>
                          setSelectedAppointment(appointment)
                        }
                      >
                        View
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="appointments-footer">
          <span>
            Showing <strong>{filteredAppointments.length}</strong>{" "}
            of <strong>{appointments.length}</strong> appointments
          </span>

          <span>
            Checked-in patients can be managed from the Queue.
          </span>
        </div>
      </section>

      {/* NEW APPOINTMENT MODAL */}
      {showModal && (
        <div
          className="appointment-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="appointment-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="appointment-modal-header">
              <div>
                <span>RECEPTION DESK</span>
                <h2>New Appointment</h2>
                <p>
                  Schedule a visit for an existing registered patient.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <form
              className="appointment-modal-form"
              onSubmit={handleCreateAppointment}
            >
              {/* PATIENT */}
              <div className="appointment-modal-field full">
                <label>
                  Patient ID / Mobile Number
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="patientId"
                  value={formData.patientId}
                  onChange={handleFormChange}
                  placeholder="Enter registered patient ID or mobile number"
                  required
                />

                <small>
                  Appointment should be created for a registered patient.
                </small>
              </div>

              {/* DOCTOR */}
              <div className="appointment-modal-field">
                <label>
                  Doctor
                  <span>*</span>
                </label>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select doctor</option>

                  {doctors
                    .filter((doctor) => doctor !== "All Doctors")
                    .map((doctor) => (
                      <option key={doctor} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                </select>
              </div>

              {/* VISIT TYPE */}
              <div className="appointment-modal-field">
                <label>
                  Visit Type
                  <span>*</span>
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select visit type</option>
                  <option value="New Visit">New Visit</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Report Review">Report Review</option>
                </select>
              </div>

              {/* DATE */}
              <div className="appointment-modal-field">
                <label>
                  Appointment Date
                  <span>*</span>
                </label>

                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  placeholder="DD MMM YYYY"
                  required
                />
              </div>

              {/* TIME */}
              <div className="appointment-modal-field">
                <label>
                  Time
                  <span>*</span>
                </label>

                <select
                  name="time"
                  value={formData.time}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select time</option>
                  <option>09:30 AM</option>
                  <option>10:00 AM</option>
                  <option>10:30 AM</option>
                  <option>11:00 AM</option>
                  <option>11:30 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>02:30 PM</option>
                  <option>03:00 PM</option>
                  <option>03:30 PM</option>
                  <option>04:00 PM</option>
                  <option>04:30 PM</option>
                </select>
              </div>

              {/* NOTES */}
              <div className="appointment-modal-field full">
                <label>Notes</label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleFormChange}
                  placeholder="Add appointment notes..."
                  rows="3"
                />
              </div>

              <div className="appointment-modal-info">
                <span>i</span>
                <p>
                  After check-in, the patient can proceed through the
                  receptionist queue before seeing the doctor.
                </p>
              </div>

              {/* ACTIONS */}
              <div className="appointment-modal-actions">
                <button
                  type="button"
                  className="appointment-modal-cancel"
                  onClick={() => {
                    resetForm();
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="appointment-modal-submit"
                >
                  Create Appointment
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {selectedAppointment && (
        <div
          className="appointment-modal-overlay"
          onClick={() => setSelectedAppointment(null)}
        >
          <div
            className="appointment-view-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="appointment-modal-header">
              <div>
                <span>APPOINTMENT DETAILS</span>
                <h2>{selectedAppointment.patient}</h2>
                <p>
                  {selectedAppointment.patientId} ·{" "}
                  {selectedAppointment.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedAppointment(null)}
              >
                ×
              </button>
            </div>

            <div className="view-modal-body">
              <div className="view-status-row">
                <span
                  className={`appointment-status ${getStatusClass(
                    selectedAppointment.status
                  )}`}
                >
                  <i></i>
                  {selectedAppointment.status}
                </span>

                <span className="appointment-type-badge">
                  {selectedAppointment.type}
                </span>
              </div>

              <div className="appointment-details-grid">
                <div>
                  <span>Doctor</span>
                  <strong>{selectedAppointment.doctor}</strong>
                </div>

                <div>
                  <span>Date</span>
                  <strong>{selectedAppointment.date}</strong>
                </div>

                <div>
                  <span>Time</span>
                  <strong>{selectedAppointment.time}</strong>
                </div>

                <div>
                  <span>Appointment ID</span>
                  <strong>{selectedAppointment.id}</strong>
                </div>

                <div className="full-detail">
                  <span>Notes</span>
                  <strong>
                    {selectedAppointment.notes || "No notes added."}
                  </strong>
                </div>
              </div>

              <div className="view-modal-note">
                <span>✓</span>
                This appointment has been checked in. The receptionist can
                now manage the patient through the queue.
              </div>

              <div className="view-modal-actions">
                <button
                  type="button"
                  onClick={() => setSelectedAppointment(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && <div className="appointment-toast">✓ {toast}</div>}
    </div>
  );
}

export default Appointments;