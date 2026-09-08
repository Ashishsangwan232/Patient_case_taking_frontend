import "./HelpSupport.css";

const Icon = ({ name, size = 22 }) => {
  const icons = {
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 4.2 1.3c-.8 1-2 1.2-2 2.7" />
        <path d="M12 16.5h.01" />
      </>
    ),

    book: (
      <>
        <path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v18H7.5A2.5 2.5 0 0 0 5 22V4.5Z" />
        <path d="M5 4.5V20M9 6h6M9 10h6M9 14h4" />
      </>
    ),

    message: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4.5a2.5 2.5 0 0 1-1-2V5.5Z" />
        <path d="M8 8h8M8 12h5" />
      </>
    ),

    phone: (
      <>
        <path d="M7 3h3l1.2 4-2 1.5a14 14 0 0 0 6.3 6.3L17 12.8 21 14v3a2 2 0 0 1-2 2C10.7 19 5 13.3 5 5a2 2 0 0 1 2-2Z" />
      </>
    ),

    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),

    arrow: <path d="m9 18 6-6-6-6" />,

    chevron: <path d="m9 9 3 3 3-3" />,
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

function HelpSupport() {
  const faqs = [
    {
      question: "How can I view my medical reports?",
      answer:
        "Open the Reports section from the sidebar to view and access your available medical documents.",
    },
    {
      question: "How can I check my upcoming appointments?",
      answer:
        "Go to Appointments from the sidebar to view your upcoming and previous consultations.",
    },
    {
      question: "How can I view my consultation cases?",
      answer:
        "Open My Cases to view your consultation history, case status and case details.",
    },
    {
      question: "How can I update my profile?",
      answer:
        "Open My Profile and select Edit Profile to update your personal information.",
    },
  ];

  return (
    <div className="help-page">
      {/* PAGE HEADER */}
      <div className="help-page-header">
        <div>
          <p className="help-breadcrumb">
            Patient Portal / Help & Support
          </p>

          <h1>Help & Support</h1>

          <p className="help-subtitle">
            Find answers to common questions or get help with your
            patient portal.
          </p>
        </div>
      </div>

      {/* SUPPORT OPTIONS */}
      <section className="help-support-grid">
        <div className="help-support-card">
          <div className="help-card-icon blue">
            <Icon name="book" size={23} />
          </div>

          <div className="help-card-content">
            <h3>Help Center</h3>

            <p>
              Find helpful information about using the patient
              portal.
            </p>

            <button className="help-link-button">
              Browse Help Center
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>

        <div className="help-support-card">
          <div className="help-card-icon purple">
            <Icon name="message" size={23} />
          </div>

          <div className="help-card-content">
            <h3>Contact Support</h3>

            <p>
              Need assistance? Our support team is here to help
              you.
            </p>

            <button className="help-link-button">
              Contact Support
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="help-card">
        <div className="help-card-header">
          <div className="help-header-icon">
            <Icon name="help" size={22} />
          </div>

          <div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Quick answers to common patient portal questions.
            </p>
          </div>
        </div>

        <div className="help-faq-list">
          {faqs.map((faq) => (
            <details className="help-faq-item" key={faq.question}>
              <summary>
                <span>{faq.question}</span>

                <span className="help-faq-chevron">
                  <Icon name="chevron" size={18} />
                </span>
              </summary>

              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="help-card">
        <div className="help-card-header">
          <div className="help-header-icon green">
            <Icon name="message" size={22} />
          </div>

          <div>
            <h2>Still Need Help?</h2>

            <p>
              Contact our support team for assistance with your
              account or portal.
            </p>
          </div>
        </div>

        <div className="help-contact-grid">
          <div className="help-contact-item">
            <div className="help-contact-icon">
              <Icon name="phone" size={19} />
            </div>

            <div>
              <span>Support Helpline</span>
              <strong>1800-123-4567</strong>
            </div>
          </div>

          <div className="help-contact-item">
            <div className="help-contact-icon">
              <Icon name="mail" size={19} />
            </div>

            <div>
              <span>Email Support</span>
              <strong>support@sihportal.com</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelpSupport;