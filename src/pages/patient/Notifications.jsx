import { useMemo, useState } from "react";
import "./Notifications.css";

const initialNotifications = [
  {
    id: 1,
    type: "appointment",
    title: "Upcoming Appointment",
    message:
      "You have a General Consultation with Dr. Ahmed Rahman tomorrow at 10:30 AM.",
    time: "2 hours ago",
    date: "09 Sep 2026",
    unread: true,
  },
  {
    id: 2,
    type: "case",
    title: "Case Updated",
    message:
      "Your consultation case CASE-2026-00481 has been updated by Dr. Ahmed Rahman.",
    time: "5 hours ago",
    date: "09 Sep 2026",
    unread: true,
  },
  {
    id: 3,
    type: "report",
    title: "New Report Available",
    message:
      "Your Blood Test Report has been uploaded and is now available to view.",
    time: "Yesterday",
    date: "08 Sep 2026",
    unread: true,
  },
  {
    id: 4,
    type: "appointment",
    title: "Appointment Confirmed",
    message:
      "Your appointment for 18 Sep 2026 at 03:00 PM has been confirmed.",
    time: "Yesterday",
    date: "08 Sep 2026",
    unread: false,
  },
  {
    id: 5,
    type: "report",
    title: "Prescription Available",
    message:
      "A new prescription from Dr. Ahmed Rahman is available in your reports.",
    time: "28 Aug 2026",
    date: "28 Aug 2026",
    unread: false,
  },
  {
    id: 6,
    type: "system",
    title: "Profile Updated",
    message:
      "Your patient profile information was successfully updated.",
    time: "25 Aug 2026",
    date: "25 Aug 2026",
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

    check: <path d="m5 12 4 4L19 6" />,

    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),

    close: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),

    info: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 11v5M12 8h.01" />
      </>
    ),

    chevron: <path d="m9 18 6-6-6-6" />,
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
  const [notificationList, setNotificationList] = useState(
    initialNotifications
  );

  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedNotification, setSelectedNotification] =
    useState(null);

  const unreadCount = notificationList.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "All") {
      return notificationList;
    }

    if (activeFilter === "Unread") {
      return notificationList.filter(
        (notification) => notification.unread
      );
    }

    return notificationList.filter(
      (notification) => notification.type === activeFilter
    );
  }, [notificationList, activeFilter]);

  const visibleNotifications = showAll
    ? filteredNotifications
    : filteredNotifications.slice(0, 5);

  const markAllAsRead = () => {
    setNotificationList((previous) =>
      previous.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotificationList((previous) =>
      previous.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    setSelectedNotification({
      ...notification,
      unread: false,
    });
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const filterOptions = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Unread",
      label: "Unread",
    },
    {
      value: "appointment",
      label: "Appointments",
    },
    {
      value: "case",
      label: "Cases",
    },
    {
      value: "report",
      label: "Reports",
    },
    {
      value: "system",
      label: "System",
    },
  ];

  const getTypeLabel = (type) => {
    const labels = {
      appointment: "Appointment",
      case: "Case Update",
      report: "Report",
      system: "System",
    };

    return labels[type] || "Notification";
  };

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

        <button
          className="mark-all-button"
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
        >
          <Icon name="check" size={16} />

          <span>
            {unreadCount === 0
              ? "All notifications read"
              : "Mark all as read"}
          </span>
        </button>
      </div>

      {/* SUMMARY */}
      <div className="notifications-summary">
        <div className="notification-summary-card">
          <div className="notification-summary-number">
            {unreadCount}
          </div>

          <div>
            <strong>Unread</strong>
            <span>New notifications</span>
          </div>
        </div>

        <div className="notification-summary-card">
          <div className="notification-summary-number">
            {notificationList.length}
          </div>

          <div>
            <strong>Total Notifications</strong>
            <span>All updates</span>
          </div>
        </div>
      </div>

      {/* NOTIFICATIONS CARD */}
      <section className="notifications-card">
        <div className="notifications-card-header">
          <div>
            <h2>Recent Notifications</h2>
            <p>Your latest updates and alerts</p>
          </div>

          {unreadCount > 0 && (
            <span className="notification-count-badge">
              {unreadCount} Unread
            </span>
          )}
        </div>

        {/* FILTERS */}
        <div className="notification-filters">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              className={
                activeFilter === filter.value
                  ? "notification-filter active"
                  : "notification-filter"
              }
              onClick={() => handleFilterChange(filter.value)}
            >
              {filter.label}

              {filter.value === "Unread" && unreadCount > 0 && (
                <span>{unreadCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* NOTIFICATION LIST */}
        <div className="notifications-list">
          {visibleNotifications.length > 0 ? (
            visibleNotifications.map((notification) => (
              <div
                className={`notification-row ${
                  notification.unread
                    ? "notification-unread"
                    : ""
                }`}
                key={notification.id}
                onClick={() =>
                  handleNotificationClick(notification)
                }
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

                  <div className="notification-meta">
                    <span className="notification-time">
                      {notification.time}
                    </span>

                    <span className="notification-type">
                      {getTypeLabel(notification.type)}
                    </span>
                  </div>
                </div>

                <button
                  className="notification-more-button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleNotificationClick(notification);
                  }}
                  aria-label={`View ${notification.title}`}
                >
                  <Icon name="more" size={18} />
                </button>
              </div>
            ))
          ) : (
            <div className="notifications-empty">
              <div className="notifications-empty-icon">
                <Icon name="check" size={25} />
              </div>

              <h3>
                {activeFilter === "Unread"
                  ? "You're all caught up"
                  : "No notifications found"}
              </h3>

              <p>
                {activeFilter === "Unread"
                  ? "There are no unread notifications right now."
                  : "There are no notifications in this category."}
              </p>

              {activeFilter !== "All" && (
                <button
                  onClick={() => handleFilterChange("All")}
                >
                  View All Notifications
                </button>
              )}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {filteredNotifications.length > 0 && (
          <div className="notifications-footer">
            <span>
              Showing{" "}
              <strong>
                {showAll
                  ? filteredNotifications.length
                  : Math.min(
                      5,
                      filteredNotifications.length
                    )}
              </strong>{" "}
              of{" "}
              <strong>{filteredNotifications.length}</strong>{" "}
              notifications
            </span>

            {filteredNotifications.length > 5 && (
              <button
                className="view-all-notifications"
                onClick={() => setShowAll((previous) => !previous)}
              >
                {showAll ? "Show Less" : "View All"}

                <span
                  className={
                    showAll ? "notification-arrow rotated" : ""
                  }
                >
                  <Icon name="chevron" size={15} />
                </span>
              </button>
            )}
          </div>
        )}
      </section>

      {/* NOTIFICATION DETAIL MODAL */}
      {selectedNotification && (
        <div
          className="notification-modal-overlay"
          onClick={() => setSelectedNotification(null)}
        >
          <div
            className="notification-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="notification-modal-header">
              <div>
                <span className="notification-modal-label">
                  {getTypeLabel(selectedNotification.type)}
                </span>

                <h2>{selectedNotification.title}</h2>
              </div>

              <button
                className="notification-modal-close"
                onClick={() =>
                  setSelectedNotification(null)
                }
                aria-label="Close notification"
              >
                <Icon name="close" size={19} />
              </button>
            </div>

            <div
              className={`notification-modal-type-icon ${selectedNotification.type}`}
            >
              <Icon
                name={selectedNotification.type}
                size={23}
              />
            </div>

            <div className="notification-modal-message">
              <p>{selectedNotification.message}</p>
            </div>

            <div className="notification-detail-grid">
              <div>
                <span>Notification Type</span>
                <strong>
                  {getTypeLabel(selectedNotification.type)}
                </strong>
              </div>

              <div>
                <span>Date</span>
                <strong>{selectedNotification.date}</strong>
              </div>

              <div>
                <span>Received</span>
                <strong>{selectedNotification.time}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>Read</strong>
              </div>
            </div>

            <div className="notification-modal-note">
              <Icon name="info" size={17} />

              <p>
                This notification is part of your patient portal
                activity. Related details will be available in the
                corresponding section of your portal.
              </p>
            </div>

            <button
              className="notification-modal-done"
              onClick={() => setSelectedNotification(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;