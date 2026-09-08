import "./PatientDetails.css";

function PatientDetails() {
  return (
    <div className="patient-details-page">
      {/* Breadcrumb */}
      <div className="patient-details-breadcrumb">
        <span>Doctor Portal</span>
        <span>/</span>
        <span>Patients</span>
        <span>/</span>
        <strong>Patient Details</strong>
      </div>

      {/* Page Header */}
      <div className="patient-details-header">
        <div>
          <h1>Patient Details</h1>
          <p>View patient information, cases and medical history.</p>
        </div>

        <div className="patient-details-actions">
          <button className="secondary-action">
            View Case History
          </button>

          <button className="primary-action">
            <span>+</span>
            Start New Case
          </button>
        </div>
      </div>

      {/* Patient Profile Card */}
      <section className="patient-profile-card">
        <div className="patient-profile-left">
          <div className="patient-large-avatar">MJ</div>

          <div className="patient-profile-info">
            <div className="patient-name-row">
              <h2>Md. Jamal Hossain</h2>
              <span className="patient-status-badge">
                ● Active Case
              </span>
            </div>

            <p className="patient-id">Patient ID: SIH-2026-00125</p>

            <div className="patient-meta">
              <span>45 Years</span>
              <span>•</span>
              <span>Male</span>
              <span>•</span>
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>

        <div className="profile-last-visit">
          <span>Last Visit</span>
          <strong>Today, 10:24 AM</strong>
          <small>Case in progress</small>
        </div>
      </section>

      {/* Information Grid */}
      <div className="patient-info-grid">
        {/* Personal Information */}
        <section className="details-card">
          <div className="details-card-header">
            <div>
              <h3>Personal Information</h3>
              <p>Basic patient information</p>
            </div>

            <button className="edit-button">Edit</button>
          </div>

          <div className="details-fields">
            <div className="detail-field">
              <span>Full Name</span>
              <strong>Md. Jamal Hossain</strong>
            </div>

            <div className="detail-field">
              <span>Patient ID</span>
              <strong>SIH-2026-00125</strong>
            </div>

            <div className="detail-field">
              <span>Age</span>
              <strong>45 Years</strong>
            </div>

            <div className="detail-field">
              <span>Gender</span>
              <strong>Male</strong>
            </div>

            <div className="detail-field">
              <span>Phone Number</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="detail-field">
              <span>Blood Group</span>
              <strong>O+</strong>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="details-card">
          <div className="details-card-header">
            <div>
              <h3>Contact Information</h3>
              <p>Patient contact details</p>
            </div>

            <button className="edit-button">Edit</button>
          </div>

          <div className="details-fields">
            <div className="detail-field full-width">
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="detail-field full-width">
              <span>Email</span>
              <strong>jamal.hossain@example.com</strong>
            </div>

            <div className="detail-field full-width">
              <span>Address</span>
              <strong>
                24 Green Park, New Delhi, India
              </strong>
            </div>
          </div>
        </section>
      </div>

      {/* Current Case */}
      <section className="details-card current-case-card">
        <div className="details-card-header">
          <div>
            <h3>Current Case</h3>
            <p>Latest patient case information</p>
          </div>

          <span className="case-progress-badge">
            In Progress
          </span>
        </div>

        <div className="case-summary">
          <div className="case-item">
            <span>Case ID</span>
            <strong>CASE-2026-00481</strong>
          </div>

          <div className="case-item">
            <span>Started On</span>
            <strong>06 Sep 2026, 10:24 AM</strong>
          </div>

          <div className="case-item">
            <span>Last Updated</span>
            <strong>Today, 10:42 AM</strong>
          </div>

          <div className="case-item">
            <span>Assigned Doctor</span>
            <strong>Dr. Ahmed Rahman</strong>
          </div>
        </div>

        <div className="complaint-box">
          <span>Chief Complaint</span>
          <p>
            Patient reports recurring headache and fatigue for the
            past few days.
          </p>
        </div>
      </section>

      {/* Recent Visits */}
      <section className="details-card">
        <div className="details-card-header">
          <div>
            <h3>Recent Visits</h3>
            <p>Patient's recent consultations</p>
          </div>

          <button className="view-all-button">
            View All →
          </button>
        </div>

        <div className="visit-list">
          <div className="visit-row">
            <div className="visit-date">
              <strong>06</strong>
              <span>SEP</span>
            </div>

            <div className="visit-info">
              <strong>General Consultation</strong>
              <span>Dr. Ahmed Rahman • 10:24 AM</span>
            </div>

            <span className="visit-status progress">
              In Progress
            </span>

            <button className="visit-arrow">→</button>
          </div>

          <div className="visit-row">
            <div className="visit-date">
              <strong>28</strong>
              <span>AUG</span>
            </div>

            <div className="visit-info">
              <strong>Follow-up Consultation</strong>
              <span>Dr. Ahmed Rahman • 03:15 PM</span>
            </div>

            <span className="visit-status completed">
              Completed
            </span>

            <button className="visit-arrow">→</button>
          </div>

          <div className="visit-row">
            <div className="visit-date">
              <strong>14</strong>
              <span>AUG</span>
            </div>

            <div className="visit-info">
              <strong>Initial Consultation</strong>
              <span>Dr. Ahmed Rahman • 11:40 AM</span>
            </div>

            <span className="visit-status completed">
              Completed
            </span>

            <button className="visit-arrow">→</button>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="details-card documents-card">
        <div className="details-card-header">
          <div>
            <h3>Documents</h3>
            <p>Patient reports and uploaded documents</p>
          </div>

          <button className="upload-button">
            + Upload Document
          </button>
        </div>

        <div className="document-list">
          <div className="document-item">
            <div className="document-icon">PDF</div>

            <div className="document-info">
              <strong>Previous_Consultation_Report.pdf</strong>
              <span>Uploaded 28 Aug 2026 • 1.2 MB</span>
            </div>

            <button className="document-action">
              View
            </button>
          </div>

          <div className="document-item">
            <div className="document-icon">IMG</div>

            <div className="document-info">
              <strong>Blood_Test_Report.jpg</strong>
              <span>Uploaded 28 Aug 2026 • 845 KB</span>
            </div>

            <button className="document-action">
              View
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PatientDetails;