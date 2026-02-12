const projects = [
  {
    title: "Healthcare Data Analysis",
    overview:
      "Exploratory and analytical project focused on healthcare datasets to uncover trends and potential risk indicators.",
    details: [
      "Cleaned and transformed raw healthcare data using Python and Pandas",
      "Performed exploratory data analysis to identify patterns and anomalies",
      "Generated insights to support healthcare decision-making"
    ],
    tech: ["Python", "Pandas", "Healthcare Analytics"],
    outcome:
      "Improved data quality and delivered actionable insights from complex healthcare datasets.",
    github: "https://github.com/NithinThota9/Healthcare-Data-Analysis-main"
  },
  {
    title: "Amazon Prime Video Analytics Dashboard",
    overview:
      "Interactive dashboard analyzing Amazon Prime Video content distribution and trends.",
    details: [
      "Modeled and prepared content metadata for analysis",
      "Built Power BI visuals for genre, rating, and release trends",
      "Designed dashboard for intuitive exploration by users"
    ],
    tech: ["Power BI", "Data Visualization", "Analytics"],
    outcome:
      "Enabled quick understanding of content trends through an interactive dashboard.",
    github:
      "https://github.com/NithinThota9/Amazon-Prime-Video-Dashboard-Using-PowerBi-main"
  },
  {
    title: "Income Statement Dashboard",
    overview:
      "Financial analytics project visualizing revenue, expenses, and profitability.",
    details: [
      "Structured financial data for reporting and analysis",
      "Created KPIs for revenue, expenses, and net profit",
      "Designed dashboard for clear financial performance tracking"
    ],
    tech: ["Power BI", "Finance Analytics", "Data Modeling"],
    outcome:
      "Simplified financial performance review using clear visual KPIs.",
    github:
      "https://github.com/NithinThota9/Simple-Income-Statement-Dashboard"
  }
];

const grid = document.getElementById("projectGrid");

grid.innerHTML = projects
  .map(
    (p) => `
    <div class="card">
      <h4>${p.title}</h4>

      <p><strong>Overview:</strong> ${p.overview}</p>

      <ul>
        ${p.details.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <div class="tags">
        ${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}
      </div>

      <p><strong>Outcome:</strong> ${p.outcome}</p>

      <div class="card-links">
        <a href="${p.github}" target="_blank">View Code</a>
      </div>
    </div>
  `
  )
  .join("");
