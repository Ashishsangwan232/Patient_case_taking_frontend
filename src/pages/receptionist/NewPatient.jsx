import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./NewPatient.css";

const steps = [
  {
    number: 1,
    title: "Patient Information",
    subtitle: "Registration details",
  },
  {
    number: 2,
    title: "Initial Case",
    subtitle: "Complaint & history",
  },
  {
    number: 3,
    title: "AYUSH Intake",
    subtitle: "Additional information",
  },
  {
    number: 4,
    title: "Review",
    subtitle: "Verify & create case",
  },
];

function NewPatient() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    // Patient information
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
    idType: "",
    idNumber: "",
    bloodGroup: "",

    // Initial case
    chiefComplaint: "",
    complaintDuration: "",
    complaintDurationUnit: "Days",
    symptoms: "",
    symptomSeverity: "",
    previousTreatment: "",
    previousTreatmentDetails: "",
    pastMedicalHistory: "",
    familyHistory: "",
    currentMedications: "",
    allergies: "",

    // AYUSH intake
    appetite: "",
    sleep: "",
    bowelHabits: "",
    thirst: "",
    stressLevel: "",
    lifestyleNotes: "",
    ayushNotes: "",

    // Documents
    hasDocuments: "",
    documentNotes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((previous) => previous + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((previous) => previous - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSuccess(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      emergencyName: "",
      emergencyRelation: "",
      emergencyPhone: "",
      idType: "",
      idNumber: "",
      bloodGroup: "",
      chiefComplaint: "",
      complaintDuration: "",
      complaintDurationUnit: "Days",
      symptoms: "",
      symptomSeverity: "",
      previousTreatment: "",
      previousTreatmentDetails: "",
      pastMedicalHistory: "",
      familyHistory: "",
      currentMedications: "",
      allergies: "",
      appetite: "",
      sleep: "",
      bowelHabits: "",
      thirst: "",
      stressLevel: "",
      lifestyleNotes: "",
      ayushNotes: "",
      hasDocuments: "",
      documentNotes: "",
    });

    setCurrentStep(1);
    setShowSuccess(false);
  };

  return (
    <div className="new-patient-page">
      {/* Breadcrumb */}
      <div className="new-patient-breadcrumb">
        <span>Receptionist Portal</span>
        <b>/</b>
        <span>Patients</span>
        <b>/</b>
        <strong>New Patient</strong>
      </div>

      {/* Header */}
      <div className="new-patient-heading">
        <div>
          <h1>Register New Patient</h1>
          <p>
            Register the patient and collect their initial case information
            before the doctor consultation.
          </p>
        </div>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/receptionist/dashboard")}
        >
          <span>←</span>
          Back to Dashboard
        </button>
      </div>

      {/* Progress */}
      <div className="registration-progress">
        {steps.map((step, index) => (
          <div className="progress-wrapper" key={step.number}>
            <div
              className={`progress-step ${
                currentStep >= step.number ? "active" : ""
              } ${currentStep === step.number ? "current" : ""}`}
            >
              <span>{step.number}</span>

              <div>
                <strong>{step.title}</strong>
                <small>{step.subtitle}</small>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`progress-line ${
                  currentStep > step.number ? "completed" : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* =====================================================
            STEP 1 - PATIENT INFORMATION
        ====================================================== */}
        {currentStep === 1 && (
          <div className="step-content">
            {/* Personal Information */}
            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="3.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M5 20a7 7 0 0 1 14 0"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2>Personal Information</h2>
                  <p>Enter the patient's basic demographic details.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field full-width">
                  <label>
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter patient's full name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Date of Birth</label>

                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>
                    Gender <span>*</span>
                  </label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">
                      Prefer not to say
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Blood Group</label>

                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                  >
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 5.5A2.5 2.5 0 0 1 6.5 3H8l2 4-2 1.5a12 12 0 0 0 5 5L14.5 11l4 2v1.5a2.5 2.5 0 0 1-2.5 2.5C10 17 7 14 5 9.5 4.3 8 4 6.7 4 5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2>Contact Information</h2>
                  <p>How the patient can be contacted.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>
                    Mobile Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter mobile number"
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-field full-width">
                  <label>Address</label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter residential address"
                    rows="3"
                  />
                </div>

                <div className="form-field">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                  />
                </div>

                <div className="form-field">
                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                  />
                </div>

                <div className="form-field">
                  <label>PIN Code</label>

                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter PIN code"
                  />
                </div>
              </div>
            </section>

            {/* Emergency Contact */}
            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon emergency">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 21s7-3.5 7-9.5V5l-7-2-7 2v6.5C5 17.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8v5M9.5 10.5h5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2>Emergency Contact</h2>
                  <p>Contact person to reach in case of emergency.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>Contact Name</label>

                  <input
                    type="text"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleChange}
                    placeholder="Enter contact name"
                  />
                </div>

                <div className="form-field">
                  <label>Relationship</label>

                  <select
                    name="emergencyRelation"
                    value={formData.emergencyRelation}
                    onChange={handleChange}
                  >
                    <option value="">Select relationship</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Emergency Phone</label>

                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    placeholder="Enter emergency number"
                  />
                </div>
              </div>
            </section>

            {/* Identity */}
            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle
                      cx="8"
                      cy="11"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13 10h5M13 14h4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div>
                  <h2>Identity Information</h2>
                  <p>Optional identity information for patient verification.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>Identity Document</label>

                  <select
                    name="idType"
                    value={formData.idType}
                    onChange={handleChange}
                  >
                    <option value="">Select document</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving Licence">
                      Driving Licence
                    </option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Document Number</label>

                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleChange}
                    placeholder="Enter document number"
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =====================================================
            STEP 2 - INITIAL CASE
        ====================================================== */}
        {currentStep === 2 && (
          <div className="step-content">
            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon case-icon">
                  <span>✚</span>
                </div>

                <div>
                  <h2>Initial Case Information</h2>
                  <p>
                    Record the patient's main reason for visiting and current
                    symptoms.
                  </p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field full-width">
                  <label>
                    Chief Complaint <span>*</span>
                  </label>

                  <textarea
                    name="chiefComplaint"
                    value={formData.chiefComplaint}
                    onChange={handleChange}
                    placeholder="Describe the patient's main complaint or reason for visit"
                    rows="4"
                    required
                  />

                  <small className="field-help">
                    Record the complaint in the patient's own words where
                    possible.
                  </small>
                </div>

                <div className="form-field">
                  <label>Complaint Duration</label>

                  <div className="duration-field">
                    <input
                      type="number"
                      min="0"
                      name="complaintDuration"
                      value={formData.complaintDuration}
                      onChange={handleChange}
                      placeholder="Duration"
                    />

                    <select
                      name="complaintDurationUnit"
                      value={formData.complaintDurationUnit}
                      onChange={handleChange}
                    >
                      <option value="Hours">Hours</option>
                      <option value="Days">Days</option>
                      <option value="Weeks">Weeks</option>
                      <option value="Months">Months</option>
                      <option value="Years">Years</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Symptom Severity</label>

                  <select
                    name="symptomSeverity"
                    value={formData.symptomSeverity}
                    onChange={handleChange}
                  >
                    <option value="">Select severity</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                    <option value="Very Severe">Very Severe</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label>Symptoms</label>

                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    placeholder="Describe other symptoms, when they started, and any relevant details"
                    rows="4"
                  />
                </div>

                <div className="form-field">
                  <label>Previous Treatment</label>

                  <select
                    name="previousTreatment"
                    value={formData.previousTreatment}
                    onChange={handleChange}
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Known">Not Known</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label>Previous Treatment Details</label>

                  <textarea
                    name="previousTreatmentDetails"
                    value={formData.previousTreatmentDetails}
                    onChange={handleChange}
                    placeholder="Mention previous treatment, medicines, tests or outcomes if known"
                    rows="3"
                  />
                </div>
              </div>
            </section>

            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon history-icon">
                  <span>↻</span>
                </div>

                <div>
                  <h2>Medical History</h2>
                  <p>Capture relevant background information.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field full-width">
                  <label>Past Medical History</label>

                  <textarea
                    name="pastMedicalHistory"
                    value={formData.pastMedicalHistory}
                    onChange={handleChange}
                    placeholder="Previous illnesses, surgeries, hospitalizations or chronic conditions"
                    rows="4"
                  />
                </div>

                <div className="form-field full-width">
                  <label>Family History</label>

                  <textarea
                    name="familyHistory"
                    value={formData.familyHistory}
                    onChange={handleChange}
                    placeholder="Relevant family medical history"
                    rows="3"
                  />
                </div>

                <div className="form-field full-width">
                  <label>Current Medications</label>

                  <textarea
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleChange}
                    placeholder="List medicines currently being taken, if known"
                    rows="3"
                  />
                </div>

                <div className="form-field full-width">
                  <label>Known Allergies</label>

                  <textarea
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                    placeholder="Medicines, food or other known allergies"
                    rows="3"
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =====================================================
            STEP 3 - AYUSH INTAKE
        ====================================================== */}
        {currentStep === 3 && (
          <div className="step-content">
            <section className="form-card ayush-card">
              <div className="form-card-header">
                <div className="form-section-icon ayush-icon">
                  <span>🌿</span>
                </div>

                <div>
                  <h2>AYUSH Intake Information</h2>
                  <p>
                    Capture additional information that can support the
                    clinician during the consultation.
                  </p>
                </div>
              </div>

              <div className="ayush-note">
                <strong>Receptionist note</strong>
                <p>
                  Record information provided by the patient. Clinical
                  interpretation and final assessment will be done by the
                  doctor.
                </p>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label>Appetite</label>

                  <select
                    name="appetite"
                    value={formData.appetite}
                    onChange={handleChange}
                  >
                    <option value="">Select appetite</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                    <option value="Increased">Increased</option>
                    <option value="Variable">Variable</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Sleep</label>

                  <select
                    name="sleep"
                    value={formData.sleep}
                    onChange={handleChange}
                  >
                    <option value="">Select sleep pattern</option>
                    <option value="Normal">Normal</option>
                    <option value="Disturbed">Disturbed</option>
                    <option value="Insufficient">Insufficient</option>
                    <option value="Excessive">Excessive</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Bowel Habits</label>

                  <select
                    name="bowelHabits"
                    value={formData.bowelHabits}
                    onChange={handleChange}
                  >
                    <option value="">Select option</option>
                    <option value="Regular">Regular</option>
                    <option value="Constipation">Constipation</option>
                    <option value="Loose">Loose</option>
                    <option value="Irregular">Irregular</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Thirst</label>

                  <select
                    name="thirst"
                    value={formData.thirst}
                    onChange={handleChange}
                  >
                    <option value="">Select thirst pattern</option>
                    <option value="Normal">Normal</option>
                    <option value="Low">Low</option>
                    <option value="Increased">Increased</option>
                    <option value="Frequent">Frequent</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Stress Level</label>

                  <select
                    name="stressLevel"
                    value={formData.stressLevel}
                    onChange={handleChange}
                  >
                    <option value="">Select stress level</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Very High">Very High</option>
                  </select>
                </div>

                <div className="form-field full-width">
                  <label>Lifestyle Notes</label>

                  <textarea
                    name="lifestyleNotes"
                    value={formData.lifestyleNotes}
                    onChange={handleChange}
                    placeholder="Diet, daily routine, activity, work pattern or other information shared by the patient"
                    rows="4"
                  />
                </div>

                <div className="form-field full-width">
                  <label>Additional AYUSH Information</label>

                  <textarea
                    name="ayushNotes"
                    value={formData.ayushNotes}
                    onChange={handleChange}
                    placeholder="Any other relevant information provided by the patient"
                    rows="4"
                  />
                </div>
              </div>
            </section>

            {/* Documents */}
            <section className="form-card">
              <div className="form-card-header">
                <div className="form-section-icon document-icon">
                  <span>▣</span>
                </div>

                <div>
                  <h2>Documents & Reports</h2>
                  <p>
                    Record whether the patient has previous medical documents
                    or reports.
                  </p>
                </div>
              </div>

              <div className="document-placeholder">
                <div className="upload-symbol">↑</div>

                <div>
                  <strong>Document upload will be enabled here</strong>
                  <p>
                    This frontend placeholder can later connect with report
                    upload and OCR processing.
                  </p>
                </div>
              </div>

              <div className="form-grid document-fields">
                <div className="form-field">
                  <label>Previous Documents Available?</label>

                  <select
                    name="hasDocuments"
                    value={formData.hasDocuments}
                    onChange={handleChange}
                  >
                    <option value="">Select option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Sure">Not Sure</option>
                  </select>
                </div>

                <div className="form-field">
                  <label>Document Notes</label>

                  <input
                    type="text"
                    name="documentNotes"
                    value={formData.documentNotes}
                    onChange={handleChange}
                    placeholder="e.g. Previous lab reports"
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =====================================================
            STEP 4 - REVIEW
        ====================================================== */}
        {currentStep === 4 && (
          <div className="step-content">
            <section className="review-card">
              <div className="review-header">
                <div>
                  <h2>Review Patient & Case</h2>
                  <p>
                    Verify the collected information before creating the
                    patient case.
                  </p>
                </div>

                <div className="review-status">
                  <span>●</span>
                  Ready for submission
                </div>
              </div>

              <div className="review-section">
                <div className="review-section-title">
                  <h3>Patient Information</h3>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                  >
                    Edit
                  </button>
                </div>

                <div className="review-grid">
                  <ReviewItem
                    label="Full Name"
                    value={formData.fullName}
                  />
                  <ReviewItem
                    label="Date of Birth"
                    value={formData.dob}
                  />
                  <ReviewItem label="Gender" value={formData.gender} />
                  <ReviewItem
                    label="Blood Group"
                    value={formData.bloodGroup}
                  />
                  <ReviewItem label="Mobile" value={formData.phone} />
                  <ReviewItem label="Email" value={formData.email} />
                  <ReviewItem
                    label="Emergency Contact"
                    value={formData.emergencyName}
                  />
                  <ReviewItem
                    label="Emergency Phone"
                    value={formData.emergencyPhone}
                  />
                </div>
              </div>

              <div className="review-section">
                <div className="review-section-title">
                  <h3>Initial Case</h3>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                  >
                    Edit
                  </button>
                </div>

                <div className="review-wide-item">
                  <span>Chief Complaint</span>
                  <p>
                    {formData.chiefComplaint || "Not provided"}
                  </p>
                </div>

                <div className="review-grid">
                  <ReviewItem
                    label="Duration"
                    value={
                      formData.complaintDuration
                        ? `${formData.complaintDuration} ${formData.complaintDurationUnit}`
                        : ""
                    }
                  />
                  <ReviewItem
                    label="Severity"
                    value={formData.symptomSeverity}
                  />
                </div>

                <div className="review-wide-item">
                  <span>Symptoms</span>
                  <p>{formData.symptoms || "Not provided"}</p>
                </div>

                <div className="review-wide-item">
                  <span>Medical History</span>
                  <p>
                    {formData.pastMedicalHistory || "Not provided"}
                  </p>
                </div>

                <div className="review-wide-item">
                  <span>Current Medications</span>
                  <p>
                    {formData.currentMedications || "Not provided"}
                  </p>
                </div>

                <div className="review-wide-item">
                  <span>Allergies</span>
                  <p>{formData.allergies || "Not provided"}</p>
                </div>
              </div>

              <div className="review-section">
                <div className="review-section-title">
                  <h3>AYUSH Intake</h3>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                  >
                    Edit
                  </button>
                </div>

                <div className="review-grid">
                  <ReviewItem
                    label="Appetite"
                    value={formData.appetite}
                  />
                  <ReviewItem label="Sleep" value={formData.sleep} />
                  <ReviewItem
                    label="Bowel Habits"
                    value={formData.bowelHabits}
                  />
                  <ReviewItem label="Thirst" value={formData.thirst} />
                  <ReviewItem
                    label="Stress Level"
                    value={formData.stressLevel}
                  />
                  <ReviewItem
                    label="Documents"
                    value={formData.hasDocuments}
                  />
                </div>
              </div>

              <div className="ready-banner">
                <div className="ready-icon">✓</div>

                <div>
                  <strong>Ready for Doctor</strong>
                  <p>
                    After submission, this initial case will be available for
                    the doctor to review and complete the clinical assessment.
                  </p>
                </div>
              </div>

              <div className="consent-box">
                <div className="consent-check">
                  <input id="consent" type="checkbox" required />
                </div>

                <label htmlFor="consent">
                  I confirm that the information collected has been provided
                  by or on behalf of the patient and can be recorded for
                  healthcare purposes.
                </label>
              </div>
            </section>
          </div>
        )}

        {/* Actions */}
        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/receptionist/dashboard")}
          >
            Cancel
          </button>

          <div className="step-actions">
            {currentStep > 1 && (
              <button
                type="button"
                className="previous-button"
                onClick={previousStep}
              >
                ← Previous
              </button>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                className="register-button"
                onClick={nextStep}
              >
                Continue
                <span>→</span>
              </button>
            ) : (
              <button type="submit" className="register-button">
                Create Patient & Case
                <span>✓</span>
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Success */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-icon">✓</div>

            <h2>Patient & Case Created</h2>

            <p>
              The patient profile and initial case have been created
              successfully.
            </p>

            <div className="generated-id">
              <div>
                <span>Patient ID</span>
                <strong>SIH-2026-00126</strong>
              </div>

              <div>
                <span>Case ID</span>
                <strong>CASE-2026-00842</strong>
              </div>
            </div>

            <div className="ready-success">
              <span>●</span>
              Ready for Doctor
            </div>

            <div className="success-actions">
              <button
                type="button"
                onClick={() => navigate("/receptionist/dashboard")}
              >
                Back to Dashboard
              </button>

              <button type="button" onClick={resetForm}>
                Register Another Patient
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="review-item">
      <span>{label}</span>
      <strong>{value || "Not provided"}</strong>
    </div>
  );
}

export default NewPatient;