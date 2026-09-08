import "./Profile.css";

function Profile() {
  return (
    <div className="patient-profile-page">
      {/* Page Header */}
      <div className="profile-page-header">
        <div>
          <p className="profile-breadcrumb">
            Patient Portal / My Profile
          </p>

          <h1>My Profile</h1>

          <p className="profile-subtitle">
            View and manage your personal and health information.
          </p>
        </div>

        <button className="profile-edit-button">
          ✎ <span>Edit Profile</span>
        </button>
      </div>

      {/* Profile Overview */}
      <section className="profile-overview-card">
        <div className="profile-avatar-large">MJ</div>

        <div className="profile-overview-info">
          <h2>Md. Jamal Hossain</h2>
          <p>Patient ID: SIH-2026-00125</p>

          <div className="profile-overview-meta">
            <span>45 Years</span>
            <span>•</span>
            <span>Male</span>
            <span>•</span>
            <span>Patient</span>
          </div>
        </div>

        <div className="profile-status">
          <span className="profile-status-dot"></span>
          Active Patient
        </div>
      </section>

      {/* Personal Information */}
      <section className="profile-section-card">
        <div className="profile-section-header">
          <div>
            <h2>Personal Information</h2>
            <p>Your basic personal details</p>
          </div>
        </div>

        <div className="profile-info-grid">
          <div className="profile-info-item">
            <span>Full Name</span>
            <strong>Md. Jamal Hossain</strong>
          </div>

          <div className="profile-info-item">
            <span>Patient ID</span>
            <strong>SIH-2026-00125</strong>
          </div>

          <div className="profile-info-item">
            <span>Date of Birth</span>
            <strong>15 March 1981</strong>
          </div>

          <div className="profile-info-item">
            <span>Gender</span>
            <strong>Male</strong>
          </div>

          <div className="profile-info-item">
            <span>Phone Number</span>
            <strong>+91 98765 43210</strong>
          </div>

          <div className="profile-info-item">
            <span>Email Address</span>
            <strong>jamal@example.com</strong>
          </div>

          <div className="profile-info-item profile-info-full">
            <span>Address</span>
            <strong>
              24 Main Street, New Delhi, India
            </strong>
          </div>
        </div>
      </section>

      {/* Health Information */}
      <section className="profile-section-card">
        <div className="profile-section-header">
          <div>
            <h2>Health Information</h2>
            <p>Your basic health information</p>
          </div>
        </div>

        <div className="profile-health-grid">
          <div className="profile-health-item">
            <span>Blood Group</span>
            <strong>O+</strong>
          </div>

          <div className="profile-health-item">
            <span>Height</span>
            <strong>172 cm</strong>
          </div>

          <div className="profile-health-item">
            <span>Weight</span>
            <strong>68 kg</strong>
          </div>

          <div className="profile-health-item">
            <span>Allergies</span>
            <strong>None Reported</strong>
          </div>

          <div className="profile-health-item">
            <span>Active Conditions</span>
            <strong>None Reported</strong>
          </div>

          <div className="profile-health-item">
            <span>Emergency Contact</span>
            <strong>+91 98765 11111</strong>
          </div>
        </div>
      </section>

      {/* Account Information */}
      <section className="profile-section-card">
        <div className="profile-section-header">
          <div>
            <h2>Account Information</h2>
            <p>Your portal account details</p>
          </div>
        </div>

        <div className="profile-account-row">
          <div>
            <span>Account Status</span>
            <strong>Active</strong>
          </div>

          <div>
            <span>Member Since</span>
            <strong>14 August 2026</strong>
          </div>

          <div>
            <span>Last Login</span>
            <strong>Today, 10:15 AM</strong>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;