import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    appointmentReminders: true,
    reportNotifications: true,
    profileVisibility: "private",
    language: "english",
  });

  const [savedSettings, setSavedSettings] = useState(settings);

  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isTwoFactorOpen, setIsTwoFactorOpen] = useState(false);
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");

  const handleToggle = (name) => {
    setSettings((previous) => ({
      ...previous,
      [name]: !previous[name],
    }));
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;

    setSettings((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setSavedSettings(settings);
  };

  const handleResetChanges = () => {
    setSettings(savedSettings);
  };

  const openPasswordModal = () => {
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setPasswordMessage("");
    setIsPasswordOpen(true);
  };

  const closePasswordModal = () => {
    setIsPasswordOpen(false);
    setPasswordMessage("");
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswordForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setPasswordMessage("");
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    if (passwordForm.newPassword.length < 6) {
      setPasswordMessage(
        "New password must contain at least 6 characters."
      );
      return;
    }

    if (
      passwordForm.newPassword !==
      passwordForm.confirmPassword
    ) {
      setPasswordMessage("New passwords do not match.");
      return;
    }

    setPasswordMessage("Password updated successfully.");

    setTimeout(() => {
      setIsPasswordOpen(false);
      setPasswordMessage("");
    }, 900);
  };

  const handleTwoFactorToggle = () => {
    setTwoFactorEnabled((previous) => !previous);
    setIsTwoFactorOpen(false);
  };

  const handleSignOut = () => {
    setIsSignOutOpen(false);

    // Frontend-only for now.
    // Real logout API/auth integration will be added later.
    alert("You have been signed out.");
  };

  return (
    <div className="patient-settings-page">
      {/* Page Header */}
      <div className="settings-page-header">
        <div>
          <p className="settings-breadcrumb">
            Patient Portal / Settings
          </p>

          <h1>Settings</h1>

          <p className="settings-subtitle">
            Manage your account preferences and privacy settings.
          </p>
        </div>
      </div>

      {/* Account Settings */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon blue">⚙</div>

          <div>
            <h2>Account Settings</h2>
            <p>Manage your account preferences</p>
          </div>
        </div>

        <div className="settings-list">
          <div className="settings-row">
            <div>
              <strong>Email Notifications</strong>
              <span>
                Receive updates about appointments and reports.
              </span>
            </div>

            <label className="settings-switch">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={() =>
                  handleToggle("emailNotifications")
                }
              />
              <span></span>
            </label>
          </div>

          <div className="settings-row">
            <div>
              <strong>Appointment Reminders</strong>
              <span>
                Get reminders before your scheduled appointments.
              </span>
            </div>

            <label className="settings-switch">
              <input
                type="checkbox"
                checked={settings.appointmentReminders}
                onChange={() =>
                  handleToggle("appointmentReminders")
                }
              />
              <span></span>
            </label>
          </div>

          <div className="settings-row">
            <div>
              <strong>Report Notifications</strong>
              <span>
                Get notified when a new medical report is available.
              </span>
            </div>

            <label className="settings-switch">
              <input
                type="checkbox"
                checked={settings.reportNotifications}
                onChange={() =>
                  handleToggle("reportNotifications")
                }
              />
              <span></span>
            </label>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon purple">🔒</div>

          <div>
            <h2>Privacy & Security</h2>
            <p>Manage your privacy and security preferences</p>
          </div>
        </div>

        <div className="settings-list">
          <div className="settings-row">
            <div>
              <strong>Profile Visibility</strong>
              <span>
                Control how your profile information is displayed.
              </span>
            </div>

            <select
              className="settings-select"
              name="profileVisibility"
              value={settings.profileVisibility}
              onChange={handleSelectChange}
            >
              <option value="private">Private</option>
              <option value="limited">Limited</option>
            </select>
          </div>

          <div className="settings-row">
            <div>
              <strong>Two-Factor Authentication</strong>
              <span>
                {twoFactorEnabled
                  ? "Two-factor authentication is currently enabled."
                  : "Add an extra layer of security to your account."}
              </span>
            </div>

            <button
              type="button"
              className={
                twoFactorEnabled
                  ? "settings-action-button enabled"
                  : "settings-action-button"
              }
              onClick={() => setIsTwoFactorOpen(true)}
            >
              {twoFactorEnabled ? "Enabled" : "Enable"}
            </button>
          </div>

          <div className="settings-row">
            <div>
              <strong>Change Password</strong>
              <span>
                Update your account password regularly.
              </span>
            </div>

            <button
              type="button"
              className="settings-action-button"
              onClick={openPasswordModal}
            >
              Change
            </button>
          </div>
        </div>
      </section>

      {/* Language */}
      <section className="settings-card">
        <div className="settings-card-header">
          <div className="settings-icon green">文</div>

          <div>
            <h2>Language & Preferences</h2>
            <p>Customize your portal experience</p>
          </div>
        </div>

        <div className="settings-preference">
          <div>
            <strong>Preferred Language</strong>
            <span>
              Select the language you prefer to use in the portal.
            </span>
          </div>

          <select
            className="settings-language"
            name="language"
            value={settings.language}
            onChange={handleSelectChange}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="bengali">Bengali</option>
          </select>
        </div>
      </section>

      {/* Save / Reset */}
      <div className="settings-save-bar">
        <div>
          <strong>Settings Preferences</strong>
          <span>
            Save your changes to keep your preferences.
          </span>
        </div>

        <div className="settings-save-actions">
          <button
            type="button"
            className="settings-reset-button"
            onClick={handleResetChanges}
          >
            Reset
          </button>

          <button
            type="button"
            className="settings-save-button"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Account Actions */}
      <section className="settings-card danger-card">
        <div className="settings-card-header">
          <div className="settings-icon red">!</div>

          <div>
            <h2>Account Actions</h2>
            <p>Manage your account</p>
          </div>
        </div>

        <div className="settings-danger-row">
          <div>
            <strong>Sign Out</strong>
            <span>
              Sign out from your current patient portal session.
            </span>
          </div>

          <button
            type="button"
            className="settings-signout-button"
            onClick={() => setIsSignOutOpen(true)}
          >
            Sign Out
          </button>
        </div>
      </section>

      {/* Change Password Modal */}
      {isPasswordOpen && (
        <div
          className="settings-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closePasswordModal();
            }
          }}
        >
          <div className="settings-modal">
            <div className="settings-modal-header">
              <div>
                <p className="settings-modal-eyebrow">
                  Privacy & Security
                </p>

                <h2>Change Password</h2>

                <p>
                  Create a new password for your account.
                </p>
              </div>

              <button
                type="button"
                className="settings-modal-close"
                onClick={closePasswordModal}
              >
                ×
              </button>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <div className="settings-password-form">
                <div className="settings-form-group">
                  <label htmlFor="currentPassword">
                    Current Password
                  </label>

                  <input
                    id="currentPassword"
                    name="currentPassword"
                    type="password"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                <div className="settings-form-group">
                  <label htmlFor="newPassword">
                    New Password
                  </label>

                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    required
                  />

                  <small>
                    Use at least 6 characters.
                  </small>
                </div>

                <div className="settings-form-group">
                  <label htmlFor="confirmPassword">
                    Confirm New Password
                  </label>

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>

                {passwordMessage && (
                  <div
                    className={
                      passwordMessage.includes("successfully")
                        ? "settings-form-message success"
                        : "settings-form-message error"
                    }
                  >
                    {passwordMessage}
                  </div>
                )}
              </div>

              <div className="settings-modal-footer">
                <button
                  type="button"
                  className="settings-reset-button"
                  onClick={closePasswordModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="settings-save-button"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Two-Factor Modal */}
      {isTwoFactorOpen && (
        <div
          className="settings-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsTwoFactorOpen(false);
            }
          }}
        >
          <div className="settings-confirm-modal">
            <div className="settings-confirm-icon">🔐</div>

            <h2>
              {twoFactorEnabled
                ? "Disable Two-Factor Authentication?"
                : "Enable Two-Factor Authentication?"}
            </h2>

            <p>
              {twoFactorEnabled
                ? "Your account will have an additional security layer removed."
                : "Two-factor authentication will add an extra security layer to your account."}
            </p>

            <div className="settings-confirm-actions">
              <button
                type="button"
                className="settings-reset-button"
                onClick={() => setIsTwoFactorOpen(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="settings-save-button"
                onClick={handleTwoFactorToggle}
              >
                {twoFactorEnabled ? "Disable" : "Enable"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Out Modal */}
      {isSignOutOpen && (
        <div
          className="settings-modal-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsSignOutOpen(false);
            }
          }}
        >
          <div className="settings-confirm-modal">
            <div className="settings-confirm-icon red">
              !
            </div>

            <h2>Sign Out?</h2>

            <p>
              Are you sure you want to sign out from the
              patient portal?
            </p>

            <div className="settings-confirm-actions">
              <button
                type="button"
                className="settings-reset-button"
                onClick={() => setIsSignOutOpen(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="settings-signout-button"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;