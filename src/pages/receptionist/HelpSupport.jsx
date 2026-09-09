import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HelpSupport.css";

const faqs = [
  {
    question: "How do I register a new patient?",
    answer:
      "Open New Patient from the sidebar or Dashboard, enter the patient's basic information, contact details, emergency contact and consent, then click Register Patient.",
  },
  {
    question: "How do I add a patient to today's queue?",
    answer:
      "Open Registration / Queue, search using the Patient ID or mobile number, select the doctor and visit type, then click Add to Queue.",
  },
  {
    question: "How do I check in an appointment?",
    answer:
      "Open Appointments, find the confirmed appointment and click Check In. The appointment status will change to Checked In.",
  },
  {
    question: "What should I do for an urgent patient?",
    answer:
      "Mark the registration priority as Urgent and immediately communicate the case to the assigned doctor or appropriate clinical staff.",
  },
  {
    question: "Can I create an appointment for a new patient?",
    answer:
      "Yes. First make sure the patient is registered in the system. You can then create an appointment using the New Appointment action.",
  },
  {
    question: "Where can I find a patient's basic information?",
    answer:
      "Open Patients from the sidebar and search by patient name, Patient ID or mobile number. Use View to open the patient's basic profile.",
  },
];

function HelpSupport() {
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState(null);

  const [showContact, setShowContact] = useState(false);

  const [issue, setIssue] = useState("");

  const toggleFaq = (index) => {
    setOpenFaq((previous) =>
      previous === index ? null : index
    );
  };

  const handleSubmitIssue = (event) => {
    event.preventDefault();

    setIssue("");

    setShowContact(false);

    window.alert(
      "Support request submitted successfully."
    );
  };

  return (
    <div className="receptionist-help-page">

      {/* ==================== BREADCRUMB ==================== */}

      <div className="receptionist-help-breadcrumb">
        Receptionist Portal
        <span>/</span>
        Help &amp; Support
      </div>

      {/* ==================== HEADER ==================== */}

      <div className="receptionist-help-heading">

        <div>
          <h1>Help &amp; Support</h1>

          <p>
            Find quick answers and get help with reception workflows.
          </p>
        </div>

        <button
          type="button"
          className="receptionist-help-dashboard-button"
          onClick={() =>
            navigate("/receptionist/dashboard")
          }
        >
          ← Dashboard
        </button>

      </div>

      {/* ==================== SUPPORT HERO ==================== */}

      <section className="receptionist-help-hero">

        <div className="receptionist-help-hero-icon">

          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="currentColor"
              strokeWidth="1.7"
            />

            <path
              d="M9.7 9a2.4 2.4 0 1 1 4.2 1.6c-.9.9-1.9 1.3-1.9 2.7"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <circle
              cx="12"
              cy="16.7"
              r=".9"
              fill="currentColor"
            />
          </svg>

        </div>

        <div className="receptionist-help-hero-content">

          <h2>
            How can we help?
          </h2>

          <p>
            Search the common questions below or contact the support team
            if you need additional assistance.
          </p>

        </div>

        <button
          type="button"
          className="receptionist-contact-button"
          onClick={() =>
            setShowContact(true)
          }
        >
          Contact Support
        </button>

      </section>

      {/* ==================== QUICK HELP ==================== */}

      <section className="receptionist-quick-help">

        <div className="receptionist-section-heading">

          <div>
            <h2>Quick Help</h2>

            <p>
              Common reception tasks
            </p>
          </div>

        </div>

        <div className="receptionist-help-actions">

          <button
            type="button"
            onClick={() =>
              navigate("/receptionist/new-patient")
            }
          >
            <span className="help-action-icon">
              +
            </span>

            <span>
              <strong>Register Patient</strong>
              <small>
                Create a new patient record
              </small>
            </span>

            <b>→</b>
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/receptionist/queue")
            }
          >
            <span className="help-action-icon">
              Q
            </span>

            <span>
              <strong>Manage Queue</strong>
              <small>
                Register and check-in patients
              </small>
            </span>

            <b>→</b>
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/receptionist/appointments")
            }
          >
            <span className="help-action-icon">
              A
            </span>

            <span>
              <strong>Appointments</strong>
              <small>
                Manage scheduled visits
              </small>
            </span>

            <b>→</b>
          </button>

          <button
            type="button"
            onClick={() =>
              navigate("/receptionist/patients")
            }
          >
            <span className="help-action-icon">
              P
            </span>

            <span>
              <strong>Patient Directory</strong>
              <small>
                Search registered patients
              </small>
            </span>

            <b>→</b>
          </button>

        </div>

      </section>

      {/* ==================== MAIN CONTENT ==================== */}

      <div className="receptionist-help-grid">

        {/* ==================== FAQ ==================== */}

        <section className="receptionist-faq-card">

          <div className="receptionist-section-heading">

            <div>
              <h2>Frequently Asked Questions</h2>

              <p>
                Quick answers for common reception tasks
              </p>
            </div>

            <span className="faq-count">
              {faqs.length} Topics
            </span>

          </div>

          <div className="receptionist-faq-list">

            {faqs.map((faq, index) => (
              <div
                className={`receptionist-faq-item ${
                  openFaq === index
                    ? "open"
                    : ""
                }`}
                key={faq.question}
              >

                <button
                  type="button"
                  onClick={() =>
                    toggleFaq(index)
                  }
                >

                  <span>
                    {faq.question}
                  </span>

                  <b>
                    {openFaq === index
                      ? "−"
                      : "+"}
                  </b>

                </button>

                {openFaq === index && (
                  <div className="receptionist-faq-answer">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </section>

        {/* ==================== SUPPORT CARD ==================== */}

        <aside className="receptionist-support-card">

          <div className="support-card-top">

            <div className="support-status-dot"></div>

            <span>
              Support available
            </span>

          </div>

          <h2>
            Need more help?
          </h2>

          <p>
            If you&apos;re facing a technical issue or need assistance
            with the clinical platform, contact the support team.
          </p>

          <div className="support-contact-item">

            <div className="support-contact-icon">
              @
            </div>

            <div>
              <span>Email</span>
              <strong>
                support@ayushcare.local
              </strong>
            </div>

          </div>

          <div className="support-contact-item">

            <div className="support-contact-icon">
              #
            </div>

            <div>
              <span>Support Desk</span>
              <strong>
                Internal Help Desk
              </strong>
            </div>

          </div>

          <button
            type="button"
            className="support-request-button"
            onClick={() =>
              setShowContact(true)
            }
          >
            Raise a Support Request
            <span>→</span>
          </button>

        </aside>

      </div>

      {/* ==================== SYSTEM TIPS ==================== */}

      <section className="receptionist-tips-card">

        <div className="receptionist-tips-icon">
          !
        </div>

        <div>

          <h3>
            Reception Desk Reminder
          </h3>

          <p>
            Always verify patient identity before creating a record,
            appointment or queue entry. Patient information should only
            be accessed for authorized clinical and administrative work.
          </p>

        </div>

      </section>

      {/* ==================== SUPPORT MODAL ==================== */}

      {showContact && (
        <div
          className="receptionist-support-overlay"
          onClick={() =>
            setShowContact(false)
          }
        >

          <div
            className="receptionist-support-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="receptionist-support-modal-header">

              <div>
                <span>Support</span>

                <h2>
                  Raise a Support Request
                </h2>

                <p>
                  Tell us what you need help with.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowContact(false)
                }
              >
                ×
              </button>

            </div>

            <form
              className="receptionist-support-form"
              onSubmit={handleSubmitIssue}
            >

              <div className="support-form-field">

                <label>
                  Issue / Description
                  <span>*</span>
                </label>

                <textarea
                  value={issue}
                  onChange={(event) =>
                    setIssue(event.target.value)
                  }
                  placeholder="Describe the issue you're facing..."
                  rows="5"
                  required
                />

              </div>

              <div className="support-form-note">
                Please do not include unnecessary sensitive patient
                information in a support request.
              </div>

              <div className="support-form-actions">

                <button
                  type="button"
                  onClick={() =>
                    setShowContact(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                >
                  Submit Request
                  <span>→</span>
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default HelpSupport;