import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("Doctor");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      role,
      message: "Login submitted",
    });
  };

  return (
    <div className="login-page">
      <div className="login-background-shape shape-one"></div>
      <div className="login-background-shape shape-two"></div>

      <div className="login-container">
        {/* Left Side */}
        <div className="login-brand-section">
          <div className="brand-logo">
            <span>✚</span>
          </div>

          <h1>SIH</h1>

          <h2>Patient Case Taking System</h2>

          <p>
            Smart, structured and patient-centric healthcare
            case management.
          </p>

          <div className="login-features">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Smart & Organized</strong>
                <span>Manage patient cases efficiently.</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div>
                <strong>Secure & Private</strong>
                <span>Healthcare data stays protected.</span>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">✦</div>
              <div>
                <strong>AI Assisted</strong>
                <span>AI-powered clinical support.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="login-card">
          <div className="login-header">
            <h2>Welcome back</h2>

            <p>
              Sign in to continue to your healthcare workspace.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Role */}
            <div className="form-group">
              <label htmlFor="role">Login as</label>

              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Doctor">Doctor</option>
                <option value="Receptionist">Receptionist</option>
                <option value="Patient">Patient</option>
              </select>
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email / User ID</label>

              <input
                id="email"
                type="text"
                placeholder="Enter your email or user ID"
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>

                <button
                  type="button"
                  className="forgot-password"
                  onClick={() =>
                    alert("Password recovery will be connected later.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "◉" : "○"}
                </button>
              </div>
            </div>

            {/* Remember */}
            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
            </div>

            {/* Submit */}
            <button type="submit" className="login-button">
              Sign In
              <span>→</span>
            </button>
          </form>

          <div className="login-security">
            <span>🔒</span>
            <p>Your connection is secure and encrypted.</p>
          </div>
        </div>
      </div>

      <div className="login-footer">
        <span>SIH 2026</span>
        <span>•</span>
        <span>Patient Case Taking System</span>
      </div>
    </div>
  );
}

export default Login;