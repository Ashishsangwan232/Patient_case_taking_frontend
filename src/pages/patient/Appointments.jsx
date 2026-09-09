import { useState } from "react";
import "./Appointments.css";

const Icon = ({ name, size = 20 }) => {
  const icons = {
    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),

    doctor: (
      <>
        <circle cx="12" cy="7" r="3.2" />
        <path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),

    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    arrow: (
      <>
        <path d="m9 18 6-6-6-6" />
      </>
    ),

    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),

    check: (
      <>
        <path d="m5 12 4 4L19 6" />
      </>
    ),

    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),

    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
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

function Appointments() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAllPrevious, setShowAllPrevious] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const [bookingData, setBookingData] = useState({
    doctor: "",
    type: "In-person",
    date: "",
    time: "",
    reason: "",
  });

  const upcomingAppointments = [
    {
      id: "APT-2026-0910",
      date: "10",
      month: "SEP",
      fullDate: "10 September 2026",
      title: "General Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "10:30 AM",
      type: "In-person",
      location: "Main Hospital",
      status: "Confirmed",
      reason: "General health consultation",
    },
    {
      id: "APT-2026-0918",
      date: "18",
      month: "SEP",
      fullDate: "18 September 2026",
      title: "Follow-up Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "03:00 PM",
      type: "Video Consultation",
      location: "Online",
      status: "Confirmed",
      reason: "Follow-up consultation",
    },
  ];

  const pastAppointments = [
    {
      id: "APT-2026-0906",
      date: "06",
      month: "SEP",
      fullDate: "06 September 2026",
      title: "General Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "10:24 AM",
      type: "In-person",
      location: "Main Hospital",
      status: "Completed",
      reason: "General health consultation",
    },
    {
      id: "APT-2026-0828",
      date: "28",
      month: "AUG",
      fullDate: "28 August 2026",
      title: "Follow-up Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "03:15 PM",
      type: "Video Consultation",
      location: "Online",
      status: "Completed",
      reason: "Follow-up consultation",
    },
    {
      id: "APT-2026-0814",
      date: "14",
      month: "AUG",
      fullDate: "14 August 2026",
      title: "Initial Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "11:40 AM",
      type: "In-person",
      location: "Main Hospital",
      status: "Completed",
      reason: "Initial consultation",
    },
    {
      id: "APT-2026-0802",
      date: "02",
      month: "AUG",
      fullDate: "02 August 2026",
      title: "General Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "09:45 AM",
      type: "In-person",
      location: "Main Hospital",
      status: "Completed",
      reason: "General health consultation",
    },
  ];

  const visiblePastAppointments = showAllPrevious
    ? pastAppointments
    : pastAppointments.slice(0, 3);

  const handleBookingChange = (event) => {
    const { name, value } = event.target;

    setBookingData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setBookingSubmitted(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setBookingSubmitted(false);
    setBookingData({
      doctor: "",
      type: "In-person",
      date: "",
      time: "",
      reason: "",
    });
  };

  return (
    <div className="appointments-page">
      {/* PAGE HEADER */}
      <div className="appointments-page-header">
        <div>
          <p className="appointments-breadcrumb">
            Patient Portal / Appointments
          </p>

          <h1>Appointments</h1>

          <p className="appointments-subtitle">
            Manage your upcoming and previous appointments.
          </p>
        </div>

        <button
          className="book-appointment-button"
          onClick={() => setShowBookingModal(true)}
        >
          <Icon name="plus" size={18} />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* UPCOMING APPOINTMENTS */}
      <section className="appointments-section">
        <div className="appointments-section-header">
          <div>
            <h2>Upcoming Appointments</h2>
            <p>Your scheduled consultations</p>
          </div>

          <span className="appointment-count">
            {upcomingAppointments.length} Upcoming
          </span>
        </div>

        <div className="upcoming-appointments-list">
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((appointment) => (
              <div
                className="upcoming-appointment-card"
                key={appointment.id}
              >
                {/* DATE */}
                <div className="appointment-date-box">
                  <strong>{appointment.date}</strong>
                  <span>{appointment.month}</span>
                </div>

                {/* MAIN INFO */}
                <div className="appointment-main-info">
                  <div className="appointment-title-row">
                    <h3>{appointment.title}</h3>

                    <span className="appointment-confirmed">
                      <span className="status-dot"></span>
                      {appointment.status}
                    </span>
                  </div>

                  <div className="appointment-details">
                    <span>
                      <Icon name="doctor" size={16} />
                      {appointment.doctor}
                    </span>

                    <span>
                      <Icon name="clock" size={16} />
                      {appointment.time}
                    </span>

                    <span>
                      <Icon
                        name={
                          appointment.type === "Video Consultation"
                            ? "video"
                            : "location"
                        }
                        size={16}
                      />
                      {appointment.type}
                    </span>
                  </div>

                  <div className="appointment-location">
                    {appointment.location}
                  </div>
                </div>

                {/* ACTION */}
                <button
                  className="view-appointment-button"
                  onClick={() => setSelectedAppointment(appointment)}
                >
                  View Appointment
                  <Icon name="arrow" size={17} />
                </button>
              </div>
            ))
          ) : (
            <div className="empty-appointments">
              <div className="empty-appointments-icon">
                <Icon name="calendar" size={24} />
              </div>
              <h3>No upcoming appointments</h3>
              <p>You don't have any scheduled appointments.</p>
            </div>
          )}
        </div>
      </section>

      {/* PREVIOUS APPOINTMENTS */}
      <section className="appointments-section previous-section">
        <div className="appointments-section-header">
          <div>
            <h2>Previous Appointments</h2>
            <p>Your appointment history</p>
          </div>

          {pastAppointments.length > 3 && (
            <button
              className="view-all-appointments"
              onClick={() => setShowAllPrevious((previous) => !previous)}
            >
              {showAllPrevious ? "Show Less" : "View All"}
              <span
                className={showAllPrevious ? "arrow-rotated" : ""}
              >
                <Icon name="arrow" size={16} />
              </span>
            </button>
          )}
        </div>

        <div className="previous-appointments-list">
          {visiblePastAppointments.map((appointment) => (
            <div
              className="previous-appointment-row"
              key={appointment.id}
            >
              <div className="previous-date-box">
                <strong>{appointment.date}</strong>
                <span>{appointment.month}</span>
              </div>

              <div className="previous-appointment-info">
                <strong>{appointment.title}</strong>

                <span>
                  <Icon name="doctor" size={14} />
                  {appointment.doctor}
                </span>
              </div>

              <div className="previous-time">
                <Icon name="clock" size={15} />
                <span>{appointment.time}</span>
              </div>

              <span className="completed-status">
                <span className="completed-dot"></span>
                <Icon name="check" size={13} />
                {appointment.status}
              </span>

              <button
                className="previous-view-button"
                onClick={() => setSelectedAppointment(appointment)}
                aria-label={`View ${appointment.title}`}
              >
                <Icon name="arrow" size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* APPOINTMENT DETAILS MODAL */}
      {selectedAppointment && (
        <div
          className="appointment-modal-overlay"
          onClick={() => setSelectedAppointment(null)}
        >
          <div
            className="appointment-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="appointment-modal-header">
              <div>
                <span className="modal-label">Appointment Details</span>
                <h2>{selectedAppointment.title}</h2>
              </div>

              <button
                className="modal-close-button"
                onClick={() => setSelectedAppointment(null)}
                aria-label="Close appointment details"
              >
                <Icon name="close" size={19} />
              </button>
            </div>

            <div className="appointment-modal-status">
              <span className="status-dot"></span>
              {selectedAppointment.status}
            </div>

            <div className="appointment-info-grid">
              <div className="appointment-info-item">
                <span className="appointment-info-icon">
                  <Icon name="calendar" size={18} />
                </span>

                <div>
                  <small>Date</small>
                  <strong>{selectedAppointment.fullDate}</strong>
                </div>
              </div>

              <div className="appointment-info-item">
                <span className="appointment-info-icon">
                  <Icon name="clock" size={18} />
                </span>

                <div>
                  <small>Time</small>
                  <strong>{selectedAppointment.time}</strong>
                </div>
              </div>

              <div className="appointment-info-item">
                <span className="appointment-info-icon">
                  <Icon name="doctor" size={18} />
                </span>

                <div>
                  <small>Doctor</small>
                  <strong>{selectedAppointment.doctor}</strong>
                </div>
              </div>

              <div className="appointment-info-item">
                <span className="appointment-info-icon">
                  <Icon
                    name={
                      selectedAppointment.type === "Video Consultation"
                        ? "video"
                        : "location"
                    }
                    size={18}
                  />
                </span>

                <div>
                  <small>Appointment Type</small>
                  <strong>{selectedAppointment.type}</strong>
                </div>
              </div>
            </div>

            <div className="appointment-detail-block">
              <span>Location</span>
              <strong>{selectedAppointment.location}</strong>
            </div>

            <div className="appointment-detail-block">
              <span>Reason for Visit</span>
              <strong>{selectedAppointment.reason}</strong>
            </div>

            <div className="appointment-id-row">
              <span>Appointment ID</span>
              <strong>{selectedAppointment.id}</strong>
            </div>

            <button
              className="modal-done-button"
              onClick={() => setSelectedAppointment(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* BOOK APPOINTMENT MODAL */}
      {showBookingModal && (
        <div
          className="appointment-modal-overlay"
          onClick={closeBookingModal}
        >
          <div
            className="appointment-modal booking-modal"
            onClick={(event) => event.stopPropagation()}
          >
            {!bookingSubmitted ? (
              <>
                <div className="appointment-modal-header">
                  <div>
                    <span className="modal-label">Patient Portal</span>
                    <h2>Book Appointment</h2>
                  </div>

                  <button
                    className="modal-close-button"
                    onClick={closeBookingModal}
                    aria-label="Close booking form"
                  >
                    <Icon name="close" size={19} />
                  </button>
                </div>

                <p className="booking-modal-description">
                  Select your preferred doctor, appointment type, date and
                  time.
                </p>

                <form
                  className="booking-form"
                  onSubmit={handleBookingSubmit}
                >
                  <div className="booking-form-grid">
                    <label>
                      <span>Doctor</span>

                      <select
                        name="doctor"
                        value={bookingData.doctor}
                        onChange={handleBookingChange}
                        required
                      >
                        <option value="">Select doctor</option>
                        <option value="Dr. Ahmed Rahman">
                          Dr. Ahmed Rahman
                        </option>
                        <option value="Dr. Priya Sharma">
                          Dr. Priya Sharma
                        </option>
                        <option value="Dr. Arjun Mehta">
                          Dr. Arjun Mehta
                        </option>
                      </select>
                    </label>

                    <label>
                      <span>Appointment Type</span>

                      <select
                        name="type"
                        value={bookingData.type}
                        onChange={handleBookingChange}
                        required
                      >
                        <option value="In-person">In-person</option>
                        <option value="Video Consultation">
                          Video Consultation
                        </option>
                      </select>
                    </label>

                    <label>
                      <span>Preferred Date</span>

                      <input
                        type="date"
                        name="date"
                        value={bookingData.date}
                        onChange={handleBookingChange}
                        required
                      />
                    </label>

                    <label>
                      <span>Preferred Time</span>

                      <select
                        name="time"
                        value={bookingData.time}
                        onChange={handleBookingChange}
                        required
                      >
                        <option value="">Select time</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:30 PM">03:30 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                      </select>
                    </label>
                  </div>

                  <label className="booking-reason-field">
                    <span>Reason for Visit</span>

                    <textarea
                      name="reason"
                      value={bookingData.reason}
                      onChange={handleBookingChange}
                      placeholder="Briefly describe the reason for your visit"
                      rows="3"
                      required
                    />
                  </label>

                  <div className="booking-info-note">
                    <Icon name="info" size={16} />
                    <span>
                      Your appointment request will be submitted for
                      confirmation.
                    </span>
                  </div>

                  <div className="booking-form-actions">
                    <button
                      type="button"
                      className="booking-cancel-button"
                      onClick={closeBookingModal}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="booking-submit-button"
                    >
                      Request Appointment
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="booking-success">
                <div className="booking-success-icon">
                  <Icon name="check" size={28} />
                </div>

                <h2>Appointment Requested</h2>

                <p>
                  Your appointment request has been submitted successfully.
                  You will see the confirmed appointment here once it is
                  approved.
                </p>

                <div className="booking-success-summary">
                  <div>
                    <span>Doctor</span>
                    <strong>{bookingData.doctor}</strong>
                  </div>

                  <div>
                    <span>Date</span>
                    <strong>{bookingData.date}</strong>
                  </div>

                  <div>
                    <span>Time</span>
                    <strong>{bookingData.time}</strong>
                  </div>
                </div>

                <button
                  className="modal-done-button"
                  onClick={closeBookingModal}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;