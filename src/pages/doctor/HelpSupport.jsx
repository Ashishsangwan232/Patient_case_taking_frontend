import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./HelpSupport.css";

function HelpSupport() {
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    {
      question: "How do I view a patient's details?",
      answer:
        "Open the Patients section from the sidebar and select a patient from the directory. You can then view the patient's available profile and clinical information.",
    },
    {
      question: "How can I check today's appointments?",
      answer:
        "Open Appointments from the sidebar. You can search patients, filter appointment status and manage the current appointment list from there.",
    },
    {
      question: "Where can I find previous patient cases?",
      answer:
        "Use Case History from the main menu. You can search by patient, case ID or complaint and filter cases by status and visit type.",
    },
    {
      question: "Where can I see practice analytics?",
      answer:
        "Open Analytics from the sidebar to view appointment activity, case status, visit types and recent practice activity.",
    },
    {
      question: "How do I update my preferences?",
      answer:
        "Open Settings from the System section. You can manage notification preferences, workspace preferences and account security information.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(
      openFaq === index ? -1 : index
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setShowModal(false);
    }, 2200);
  };

  return (
    <div className="doctor-help-page">

      {/* ================= BREADCRUMB ================= */}

      <div className="doctor-help-breadcrumb">
        Doctor Portal
        <span>/</span>
        Help &amp; Support
      </div>

      {/* ================= HEADER ================= */}

      <div className="doctor-help-header">

        <div>
          <h1>Help &amp; Support</h1>

          <p>
            Find answers or contact support for assistance.
          </p>
        </div>

        <button
          type="button"
          className="doctor-help-dashboard-button"
          onClick={() =>
            navigate("/doctor/dashboard")
          }
        >
          ← Dashboard
        </button>

      </div>

      {/* ================= SUPPORT HERO ================= */}

      <section className="doctor-help-hero">

        <div className="doctor-help-hero-icon">
          ?
        </div>

        <div className="doctor-help-hero-content">

          <h2>
            Need assistance?
          </h2>

          <p>
            Our support team can help you with portal
            access, appointments, patient cases and
            technical issues.
          </p>

        </div>

        <button
          type="button"
          className="doctor-contact-support-button"
          onClick={() =>
            setShowModal(true)
          }
        >
          Contact Support
          <span>→</span>
        </button>

      </section>

      {/* ================= QUICK HELP ================= */}

      <div className="doctor-help-section-title">
        <h2>Quick Help</h2>

        <p>
          Jump directly to the section you need.
        </p>
      </div>

      <div className="doctor-help-quick-grid">

        <button
          type="button"
          onClick={() =>
            navigate("/doctor/patients")
          }
        >
          <div className="doctor-help-quick-icon blue">
            P
          </div>

          <div>
            <strong>Patients</strong>

            <span>
              Search and view patient information
            </span>
          </div>

          <b>→</b>
        </button>

        <button
          type="button"
          onClick={() =>
            navigate("/doctor/appointments")
          }
        >
          <div className="doctor-help-quick-icon green">
            A
          </div>

          <div>
            <strong>Appointments</strong>

            <span>
              Manage today's appointments
            </span>
          </div>

          <b>→</b>
        </button>

        <button
          type="button"
          onClick={() =>
            navigate("/doctor/case-history")
          }
        >
          <div className="doctor-help-quick-icon purple">
            C
          </div>

          <div>
            <strong>Case History</strong>

            <span>
              Find previous clinical cases
            </span>
          </div>

          <b>→</b>
        </button>

        <button
          type="button"
          onClick={() =>
            navigate("/doctor/settings")
          }
        >
          <div className="doctor-help-quick-icon orange">
            S
          </div>

          <div>
            <strong>Settings</strong>

            <span>
              Manage account preferences
            </span>
          </div>

          <b>→</b>
        </button>

      </div>

      {/* ================= FAQ + CONTACT ================= */}

      <div className="doctor-help-main-grid">

        {/* FAQ */}

        <section className="doctor-help-card">

          <div className="doctor-help-card-heading">

            <div className="doctor-help-card-icon">
              ?
            </div>

            <div>
              <h2>Frequently Asked Questions</h2>

              <p>
                Common questions about the Doctor Portal
              </p>
            </div>

          </div>

          <div className="doctor-faq-list">

            {faqs.map((faq, index) => (
              <div
                className={`doctor-faq-item ${
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
                  <div className="doctor-faq-answer">
                    {faq.answer}
                  </div>
                )}

              </div>
            ))}

          </div>

        </section>

        {/* SUPPORT CARD */}

        <section className="doctor-help-card doctor-support-card">

          <div className="doctor-help-card-heading">

            <div className="doctor-help-card-icon support">
              @
            </div>

            <div>
              <h2>Contact Support</h2>

              <p>
                We're here to help
              </p>
            </div>

          </div>

          <div className="doctor-support-content">

            <div className="doctor-support-method">

              <div className="doctor-support-method-icon">
                @
              </div>

              <div>
                <span>Email Support</span>

                <strong>
                  support@ayushcare.local
                </strong>
              </div>

            </div>

            <div className="doctor-support-method">

              <div className="doctor-support-method-icon">
                ?
              </div>

              <div>
                <span>Support Hours</span>

                <strong>
                  Mon – Sat · 9:00 AM – 6:00 PM
                </strong>
              </div>

            </div>

            <button
              type="button"
              className="doctor-support-request-button"
              onClick={() =>
                setShowModal(true)
              }
            >
              Send a Support Request
            </button>

          </div>

        </section>

      </div>

      {/* ================= PRIVACY REMINDER ================= */}

      <div className="doctor-help-reminder">

        <div className="doctor-help-reminder-icon">
          !
        </div>

        <div>
          <strong>
            Protect patient information
          </strong>

          <p>
            Never include sensitive patient information
            in support requests. Use the patient or case
            ID only when necessary.
          </p>
        </div>

      </div>

      {/* ================= SUPPORT MODAL ================= */}

      {showModal && (
        <div
          className="doctor-help-modal-overlay"
          onClick={() =>
            setShowModal(false)
          }
        >

          <div
            className="doctor-help-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="doctor-help-modal-header">

              <div>
                <span>Support</span>

                <h2>
                  Contact Support
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowModal(false)
                }
              >
                ×
              </button>

            </div>

            {submitted ? (
              <div className="doctor-support-success">

                <div>
                  ✓
                </div>

                <strong>
                  Request Submitted
                </strong>

                <p>
                  Your support request has been recorded.
                  Our team will get back to you soon.
                </p>

              </div>
            ) : (
              <form
                className="doctor-support-form"
                onSubmit={handleSubmit}
              >

                <div className="doctor-support-field">

                  <label>
                    Subject
                  </label>

                  <select required>
                    <option value="">
                      Select an issue
                    </option>

                    <option>
                      Portal Access
                    </option>

                    <option>
                      Appointment Issue
                    </option>

                    <option>
                      Patient Case Issue
                    </option>

                    <option>
                      Technical Problem
                    </option>

                    <option>
                      Other
                    </option>
                  </select>

                </div>

                <div className="doctor-support-field">

                  <label>
                    Message
                  </label>

                  <textarea
                    placeholder="Describe your issue..."
                    required
                  ></textarea>

                </div>

                <div className="doctor-support-form-footer">

                  <button
                    type="button"
                    onClick={() =>
                      setShowModal(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="primary"
                  >
                    Submit Request
                  </button>

                </div>

              </form>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default HelpSupport;