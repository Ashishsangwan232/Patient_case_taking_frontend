import "./Settings.css";

function Settings() {
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
              <input type="checkbox" defaultChecked />
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
              <input type="checkbox" defaultChecked />
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
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>
        </div>
      </section>

      {/* Privacy */}
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

            <select className="settings-select" defaultValue="private">
              <option value="private">Private</option>
              <option value="limited">Limited</option>
            </select>
          </div>

          <div className="settings-row">
            <div>
              <strong>Two-Factor Authentication</strong>
              <span>
                Add an extra layer of security to your account.
              </span>
            </div>

            <button className="settings-action-button">
              Enable
            </button>
          </div>

          <div className="settings-row">
            <div>
              <strong>Change Password</strong>
              <span>
                Update your account password regularly.
              </span>
            </div>

            <button className="settings-action-button">
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

          <select className="settings-language" defaultValue="english">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="bengali">Bengali</option>
          </select>
        </div>
      </section>

      {/* Danger Zone */}
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

          <button className="settings-signout-button">
            Sign Out
          </button>
        </div>
      </section>
    </div>
  );
}

export default Settings;