import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Md. Jamal Hossain",
    patientId: "SIH-2026-00125",
    dateOfBirth: "15 March 1981",
    gender: "Male",
    phone: "+91 98765 43210",
    email: "jamal@example.com",
    address: "24 Main Street, New Delhi, India",
    emergencyContact: "+91 98765 11111",
  });

  const [editForm, setEditForm] = useState(profile);

  const openEditModal = () => {
    setEditForm(profile);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setEditForm(profile);
    setIsEditOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEditForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();

    setProfile(editForm);
    setIsEditOpen(false);
  };

  const getInitials = (name) => {
    const parts = name.trim().split(" ").filter(Boolean);

    if (parts.length === 0) return "P";

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };

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

        <button
          type="button"
          className="profile-edit-button"
          onClick={openEditModal}
        >
          ✎ <span>Edit Profile</span>
        </button>
      </div>

      {/* Profile Overview */}
      <section className="profile-overview-card">
        <div className="profile-avatar-large">
          {getInitials(profile.fullName)}
        </div>

        <div className="profile-overview-info">
          <h2>{profile.fullName}</h2>
          <p>Patient ID: {profile.patientId}</p>

          <div className="profile-overview-meta">
            <span>45 Years</span>
            <span>•</span>
            <span>{profile.gender}</span>
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
            <strong>{profile.fullName}</strong>
          </div>

          <div className="profile-info-item">
            <span>Patient ID</span>
            <strong>{profile.patientId}</strong>
          </div>

          <div className="profile-info-item">
            <span>Date of Birth</span>
            <strong>{profile.dateOfBirth}</strong>
          </div>

          <div className="profile-info-item">
            <span>Gender</span>
            <strong>{profile.gender}</strong>
          </div>

          <div className="profile-info-item">
            <span>Phone Number</span>
            <strong>{profile.phone}</strong>
          </div>

          <div className="profile-info-item">
            <span>Email Address</span>
            <strong>{profile.email}</strong>
          </div>

          <div className="profile-info-item profile-info-full">
            <span>Address</span>
            <strong>{profile.address}</strong>
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
            <strong>{profile.emergencyContact}</strong>
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

      {/* Edit Profile Modal */}
      {isEditOpen && (
        <div
          className="profile-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeEditModal();
            }
          }}
        >
          <div
            className="profile-edit-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-edit-title"
          >
            <div className="profile-modal-header">
              <div>
                <p className="profile-modal-eyebrow">
                  Patient Profile
                </p>

                <h2 id="profile-edit-title">Edit Profile</h2>

                <p>
                  Update your personal and contact information.
                </p>
              </div>

              <button
                type="button"
                className="profile-modal-close"
                onClick={closeEditModal}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="profile-edit-form">
                <div className="profile-form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={editForm.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group">
                  <label htmlFor="patientId">Patient ID</label>
                  <input
                    id="patientId"
                    name="patientId"
                    type="text"
                    value={editForm.patientId}
                    disabled
                  />
                  <small>
                    Patient ID cannot be changed.
                  </small>
                </div>

                <div className="profile-form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="text"
                    value={editForm.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={editForm.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="profile-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={editForm.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={editForm.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group profile-form-full">
                  <label htmlFor="address">Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={editForm.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group profile-form-full">
                  <label htmlFor="emergencyContact">
                    Emergency Contact
                  </label>
                  <input
                    id="emergencyContact"
                    name="emergencyContact"
                    type="tel"
                    value={editForm.emergencyContact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="profile-modal-footer">
                <button
                  type="button"
                  className="profile-cancel-button"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="profile-save-button"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;