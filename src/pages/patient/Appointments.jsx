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
  const upcomingAppointments = [
    {
      date: "10",
      month: "SEP",
      title: "General Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "10:30 AM",
      type: "In-person",
      location: "Main Hospital",
      status: "Confirmed",
    },
    {
      date: "18",
      month: "SEP",
      title: "Follow-up Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "03:00 PM",
      type: "Video Consultation",
      location: "Online",
      status: "Confirmed",
    },
  ];

  const pastAppointments = [
    {
      date: "06",
      month: "SEP",
      title: "General Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "10:24 AM",
      status: "Completed",
    },
    {
      date: "28",
      month: "AUG",
      title: "Follow-up Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "03:15 PM",
      status: "Completed",
    },
    {
      date: "14",
      month: "AUG",
      title: "Initial Consultation",
      doctor: "Dr. Ahmed Rahman",
      time: "11:40 AM",
      status: "Completed",
    },
  ];

  return (
    <div className="appointments-page">
      {/* Header */}
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

        <button className="book-appointment-button">
          <Icon name="plus" size={18} />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Upcoming Section */}
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
          {upcomingAppointments.map((appointment) => (
            <div
              className="upcoming-appointment-card"
              key={`${appointment.date}-${appointment.title}`}
            >
              {/* Date */}
              <div className="appointment-date-box">
                <strong>{appointment.date}</strong>
                <span>{appointment.month}</span>
              </div>

              {/* Main Info */}
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

              {/* Action */}
              <button className="view-appointment-button">
                View Appointment
                <Icon name="arrow" size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Appointments */}
      <section className="appointments-section previous-section">
        <div className="appointments-section-header">
          <div>
            <h2>Previous Appointments</h2>
            <p>Your appointment history</p>
          </div>

          <button className="view-all-appointments">
            View All
            <Icon name="arrow" size={16} />
          </button>
        </div>

        <div className="previous-appointments-list">
          {pastAppointments.map((appointment) => (
            <div
              className="previous-appointment-row"
              key={`${appointment.date}-${appointment.title}`}
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
                aria-label={`View ${appointment.title}`}
              >
                <Icon name="arrow" size={17} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Appointments;