import "./Notifications.css";

const notifications = [
  {
    id: 1,
    type: "appointment",
    title: "Upcoming Appointment",
    message:
      "You have a General Consultation with Dr. Ahmed Rahman tomorrow at 10:30 AM.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    type: "case",
    title: "Case Updated",
    message:
      "Your consultation case CASE-2026-00481 has been updated by Dr. Ahmed Rahman.",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 3,
    type: "report",
    title: "New Report Available",
    message:
      "Your Blood Test Report has been uploaded and is now available to view.",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 4,
    type: "appointment",
    title: "Appointment Confirmed",
    message:
      "Your appointment for 18 Sep 2026 at 03:00 PM has been confirmed.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 5,
    type: "report",
    title: "Prescription Available",
    message:
      "A new prescription from Dr. Ahmed Rahman is available in your reports.",
    time: "28 Aug 2026",
    unread: false,
  },
  {
    id: 6,
    type: "system",
    title: "Profile Updated",
    message:
      "Your patient profile information was successfully updated.",
    time: "25 Aug 2026",
    unread: false,
  },
];

const Icon = ({ name, size = 20 }) => {
  const icons = {
    appointment: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h2M14 14h2M8 17h2" />
      </>
    ),

    case: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),

    report: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),

    system: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2" />
      </>
    ),

    check: (
      <path d="m5 12 4 4L19 6" />
    ),

    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
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

function Notifications() {
  return (
    <div className="patient-notifications-page">
      {/* PAGE HEADER */}
      <div className="notifications-page-header">
        <div>
          <p className="notifications-breadcrumb">
            Patient Portal / Notifications
          </p>

          <h1>Notifications</h1>

          <p className="notifications-subtitle">
            Stay updated with your appointments, cases and reports.
          </p>
        </div>

        <button className="mark-all-button">
          <Icon name="check" size={16} />
          <span>Mark all as read</span>
        </button>
      </div>

      {/* SUMMARY */}
      <div className="notifications-summary">
        <div className="notification-summary-card">
          <div className="notification-summary-number">
            3
          </div>

          <div>
            <strong>Unread</strong>
            <span>New notifications</span>
          </div>
        </div>

        <div className="notification-summary-card">
          <div className="notification-summary-number">
            6
          </div>

          <div>
            <strong>Total Notifications</strong>
            <span>All updates</span>
          </div>
        </div>
      </div>

      {/* NOTIFICATIONS */}
      <section className="notifications-card">
        <div className="notifications-card-header">
          <div>
            <h2>Recent Notifications</h2>
            <p>Your latest updates and alerts</p>
          </div>

          <span className="notification-count-badge">
            3 Unread
          </span>
        </div>

        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              className={`notification-row ${
                notification.unread ? "notification-unread" : ""
              }`}
              key={notification.id}
            >
              <div
                className={`notification-icon ${notification.type}`}
              >
                <Icon
                  name={notification.type}
                  size={19}
                />
              </div>

              <div className="notification-content">
                <div className="notification-title-row">
                  <strong>{notification.title}</strong>

                  {notification.unread && (
                    <span className="unread-dot"></span>
                  )}
                </div>

                <p>{notification.message}</p>

                <span className="notification-time">
                  {notification.time}
                </span>
              </div>

              <button
                className="notification-more-button"
                aria-label="More options"
              >
                <Icon name="more" size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="notifications-footer">
          <span>
            Showing <strong>6</strong> notifications
          </span>

          <button className="view-all-notifications">
            View All
          </button>
        </div>
      </section>
    </div>
  );
}

export default Notifications;