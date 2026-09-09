import { useState } from "react";
import "./Analytics.css";

const analyticsData = {
  "This Week": {
    chart: [
      { day: "Mon", appointments: 8, cases: 5 },
      { day: "Tue", appointments: 11, cases: 7 },
      { day: "Wed", appointments: 9, cases: 6 },
      { day: "Thu", appointments: 13, cases: 9 },
      { day: "Fri", appointments: 12, cases: 8 },
      { day: "Sat", appointments: 7, cases: 4 },
      { day: "Sun", appointments: 5, cases: 3 },
    ],

    stats: {
      appointments: {
        value: 65,
        change: "↑ 12% from last week",
      },
      completedCases: {
        value: 17,
        change: "↑ 8% from last week",
      },
      patientsSeen: {
        value: 51,
        change: "↑ 6% from last week",
      },
      followUps: {
        value: 18,
        change: "↑ 4% from last week",
      },
    },

    caseStatus: {
      total: 24,
      inProgress: 5,
      completed: 17,
      draft: 2,
    },

    visitTypes: [
      {
        label: "Consultation",
        percentage: 46,
      },
      {
        label: "Follow-up",
        percentage: 31,
      },
      {
        label: "New Consultation",
        percentage: 23,
      },
    ],

    activities: [
      {
        icon: "C",
        color: "blue",
        title: "Case completed",
        detail: "Md. Jamal Hossain · 10 min ago",
      },
      {
        icon: "P",
        color: "green",
        title: "Patient consultation recorded",
        detail: "Sabina Akter · 42 min ago",
      },
      {
        icon: "A",
        color: "orange",
        title: "Appointment confirmed",
        detail: "Rifat Hasan · 1 hour ago",
      },
    ],
  },

  "This Month": {
    chart: [
      { day: "W1", appointments: 28, cases: 18 },
      { day: "W2", appointments: 34, cases: 22 },
      { day: "W3", appointments: 31, cases: 20 },
      { day: "W4", appointments: 38, cases: 25 },
      { day: "W5", appointments: 35, cases: 23 },
      { day: "W6", appointments: 29, cases: 19 },
      { day: "W7", appointments: 25, cases: 16 },
    ],

    stats: {
      appointments: {
        value: 220,
        change: "↑ 9% from last month",
      },
      completedCases: {
        value: 58,
        change: "↑ 14% from last month",
      },
      patientsSeen: {
        value: 176,
        change: "↑ 11% from last month",
      },
      followUps: {
        value: 62,
        change: "↑ 7% from last month",
      },
    },

    caseStatus: {
      total: 78,
      inProgress: 14,
      completed: 58,
      draft: 6,
    },

    visitTypes: [
      {
        label: "Consultation",
        percentage: 49,
      },
      {
        label: "Follow-up",
        percentage: 29,
      },
      {
        label: "New Consultation",
        percentage: 22,
      },
    ],

    activities: [
      {
        icon: "C",
        color: "blue",
        title: "Case completed",
        detail: "Md. Jamal Hossain · Today",
      },
      {
        icon: "P",
        color: "green",
        title: "Patient consultation recorded",
        detail: "Sabina Akter · Yesterday",
      },
      {
        icon: "A",
        color: "orange",
        title: "Appointment confirmed",
        detail: "Rifat Hasan · 2 days ago",
      },
    ],
  },

  "Last 3 Months": {
    chart: [
      { day: "Jul", appointments: 74, cases: 48 },
      { day: "Aug", appointments: 86, cases: 57 },
      { day: "Sep", appointments: 94, cases: 63 },
    ],

    stats: {
      appointments: {
        value: 254,
        change: "↑ 14% from previous period",
      },
      completedCases: {
        value: 153,
        change: "↑ 17% from previous period",
      },
      patientsSeen: {
        value: 204,
        change: "↑ 13% from previous period",
      },
      followUps: {
        value: 71,
        change: "↑ 10% from previous period",
      },
    },

    caseStatus: {
      total: 196,
      inProgress: 27,
      completed: 153,
      draft: 16,
    },

    visitTypes: [
      {
        label: "Consultation",
        percentage: 51,
      },
      {
        label: "Follow-up",
        percentage: 28,
      },
      {
        label: "New Consultation",
        percentage: 21,
      },
    ],

    activities: [
      {
        icon: "C",
        color: "blue",
        title: "Case completed",
        detail: "Md. Jamal Hossain · 3 days ago",
      },
      {
        icon: "P",
        color: "green",
        title: "Patient consultation recorded",
        detail: "Sabina Akter · 5 days ago",
      },
      {
        icon: "A",
        color: "orange",
        title: "Appointment confirmed",
        detail: "Rifat Hasan · 1 week ago",
      },
    ],
  },
};

function Analytics() {
  const [period, setPeriod] = useState("This Week");

  const currentData = analyticsData[period];

  const maxValue = Math.max(
    ...currentData.chart.flatMap((item) => [
      item.appointments,
      item.cases,
    ])
  );

  const chartMax =
    Math.ceil(maxValue / 5) * 5;

  const getBarHeight = (value) => {
    return `${(value / chartMax) * 100}%`;
  };

  const yAxisValues = [
    chartMax,
    Math.round(chartMax * 0.75),
    Math.round(chartMax * 0.5),
    Math.round(chartMax * 0.25),
    0,
  ];

  const {
    total,
    inProgress,
    completed,
    draft,
  } = currentData.caseStatus;

  const progressAngle =
    (inProgress / total) * 360;

  const completedAngle =
    progressAngle + (completed / total) * 360;

  const donutBackground = `
    conic-gradient(
      #7350dc 0deg ${progressAngle}deg,
      #28a378 ${progressAngle}deg ${completedAngle}deg,
      #e99a2a ${completedAngle}deg 360deg
    )
  `;

  return (
    <div className="doctor-analytics-page">

      {/* ================= BREADCRUMB ================= */}

      <div className="doctor-analytics-breadcrumb">
        Doctor Portal
        <span>/</span>
        Analytics
      </div>

      {/* ================= HEADER ================= */}

      <div className="doctor-analytics-header">

        <div>
          <h1>Analytics</h1>

          <p>
            Overview of your appointments, cases and patient activity.
          </p>
        </div>

        <select
          value={period}
          onChange={(event) =>
            setPeriod(event.target.value)
          }
          className="analytics-period-select"
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
        </select>

      </div>

      {/* ================= SUMMARY ================= */}

      <div className="doctor-analytics-stats">

        {/* Total Appointments */}

        <div className="doctor-analytics-stat">

          <div className="analytics-stat-icon blue">
            A
          </div>

          <div>
            <span>Total Appointments</span>

            <strong>
              {currentData.stats.appointments.value}
            </strong>

            <small>
              {currentData.stats.appointments.change}
            </small>
          </div>

        </div>

        {/* Completed Cases */}

        <div className="doctor-analytics-stat">

          <div className="analytics-stat-icon green">
            C
          </div>

          <div>
            <span>Completed Cases</span>

            <strong>
              {currentData.stats.completedCases.value}
            </strong>

            <small>
              {currentData.stats.completedCases.change}
            </small>
          </div>

        </div>

        {/* Patients Seen */}

        <div className="doctor-analytics-stat">

          <div className="analytics-stat-icon purple">
            P
          </div>

          <div>
            <span>Patients Seen</span>

            <strong>
              {currentData.stats.patientsSeen.value}
            </strong>

            <small>
              {currentData.stats.patientsSeen.change}
            </small>
          </div>

        </div>

        {/* Follow-ups */}

        <div className="doctor-analytics-stat">

          <div className="analytics-stat-icon orange">
            F
          </div>

          <div>
            <span>Follow-ups</span>

            <strong>
              {currentData.stats.followUps.value}
            </strong>

            <small>
              {currentData.stats.followUps.change}
            </small>
          </div>

        </div>

      </div>

      {/* ================= CHART ROW ================= */}

      <div className="doctor-analytics-main-grid">

        {/* APPOINTMENT CHART */}

        <section className="doctor-analytics-card appointment-chart-card">

          <div className="analytics-card-header">

            <div>
              <h2>Appointments Overview</h2>

              <p>
                Scheduled appointments during the selected period
              </p>
            </div>

            <div className="analytics-legend">

              <span>
                <i className="legend-appointment"></i>
                Appointments
              </span>

              <span>
                <i className="legend-cases"></i>
                Cases
              </span>

            </div>

          </div>

          <div className="analytics-chart">

            <div className="chart-y-axis">

              {yAxisValues.map((value, index) => (
                <span key={index}>
                  {value}
                </span>
              ))}

            </div>

            <div className="chart-area">

              <div className="chart-grid-line line-1"></div>
              <div className="chart-grid-line line-2"></div>
              <div className="chart-grid-line line-3"></div>
              <div className="chart-grid-line line-4"></div>
              <div className="chart-grid-line line-5"></div>

              <div className="chart-bars">

                {currentData.chart.map((item) => (
                  <div
                    className="chart-column"
                    key={item.day}
                  >

                    <div className="bars">

                      <div
                        className="bar appointment-bar"
                        style={{
                          height: getBarHeight(
                            item.appointments
                          ),
                        }}
                        title={`${item.appointments} appointments`}
                      ></div>

                      <div
                        className="bar case-bar"
                        style={{
                          height: getBarHeight(
                            item.cases
                          ),
                        }}
                        title={`${item.cases} cases`}
                      ></div>

                    </div>

                    <span>
                      {item.day}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* CASE STATUS */}

        <section className="doctor-analytics-card case-status-card">

          <div className="analytics-card-header">

            <div>
              <h2>Case Status</h2>

              <p>
                Current distribution of your cases
              </p>
            </div>

          </div>

          <div className="case-status-content">

            <div
              className="case-donut"
              style={{
                background: donutBackground,
              }}
            >

              <div className="case-donut-inner">

                <strong>
                  {total}
                </strong>

                <span>
                  Total
                </span>

              </div>

            </div>

            <div className="case-status-list">

              <div className="case-status-row">

                <div>
                  <i className="status-dot progress"></i>
                  <span>In Progress</span>
                </div>

                <strong>
                  {inProgress}
                </strong>

              </div>

              <div className="case-status-row">

                <div>
                  <i className="status-dot completed"></i>
                  <span>Completed</span>
                </div>

                <strong>
                  {completed}
                </strong>

              </div>

              <div className="case-status-row">

                <div>
                  <i className="status-dot draft"></i>
                  <span>Draft</span>
                </div>

                <strong>
                  {draft}
                </strong>

              </div>

            </div>

          </div>

        </section>

      </div>

      {/* ================= BOTTOM GRID ================= */}

      <div className="doctor-analytics-bottom-grid">

        {/* VISIT TYPES */}

        <section className="doctor-analytics-card">

          <div className="analytics-card-header">

            <div>
              <h2>Visit Types</h2>

              <p>
                Distribution of patient visits
              </p>
            </div>

          </div>

          <div className="visit-type-list">

            {currentData.visitTypes.map((visit) => (
              <div
                className="visit-type-row"
                key={visit.label}
              >

                <div className="visit-type-label">

                  <span>
                    {visit.label}
                  </span>

                  <strong>
                    {visit.percentage}%
                  </strong>

                </div>

                <div className="visit-progress">

                  <span
                    style={{
                      width: `${visit.percentage}%`,
                    }}
                  ></span>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* RECENT ACTIVITY */}

        <section className="doctor-analytics-card">

          <div className="analytics-card-header">

            <div>
              <h2>Recent Activity</h2>

              <p>
                Latest updates from your practice
              </p>
            </div>

          </div>

          <div className="analytics-activity-list">

            {currentData.activities.map(
              (activity, index) => (
                <div
                  className="analytics-activity"
                  key={index}
                >

                  <div
                    className={`activity-icon ${activity.color}`}
                  >
                    {activity.icon}
                  </div>

                  <div>

                    <strong>
                      {activity.title}
                    </strong>

                    <span>
                      {activity.detail}
                    </span>

                  </div>

                </div>
              )
            )}

          </div>

        </section>

      </div>

      {/* ================= AI PLACEHOLDER ================= */}

      <section className="doctor-analytics-ai-card">

        <div className="analytics-ai-icon">
          ✦
        </div>

        <div className="analytics-ai-content">

          <div className="analytics-ai-title">

            <h2>
              AI Clinical Analytics
            </h2>

            <span>
              PLANNED
            </span>

          </div>

          <p>
            AI-powered insights, patient trends and clinical
            analytics will be available here once the AI module
            is connected.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Analytics;