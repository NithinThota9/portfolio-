const projects = [
  {
    title: "Healthcare Data Analysis",
    description: "End-to-end analytics pipeline on healthcare datasets to uncover patient risk trends. Built data models to standardize complex records.",
    tech: ["Python", "Pandas", "ETL", "Tableau"],
    github: "https://github.com/NithinThota9/Healthcare-Data-Analysis-main",
    external: null
  },
  {
    title: "Amazon Prime Video Dashboard",
    description: "Interactive dashboard visualizing content distribution strategies. Processed 10k+ metadata records to analyze genre popularity.",
    tech: ["Power BI", "DAX", "Data Modeling"],
    github: "https://github.com/NithinThota9/Amazon-Prime-Video-Dashboard",
    external: null
  },
  {
    title: "Income Statement Analyzer",
    description: "Financial reporting tool automating P&L statement generation. KPI tracking for revenue, expenses, and net profit margins.",
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/NithinThota9/Income-Statement--Dashboard-/tree/main",
    external: null
  }
];

// Render Projects
const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
  projectGrid.innerHTML = projects.map(project => `
      <div class="card">
        <div class="card-header">
          <i class="ri-folder-3-line folder-icon"></i>
          <div class="card-links">
            ${project.github ? `<a href="${project.github}" target="_blank" aria-label="GitHub"><i class="ri-github-line"></i></a>` : ''}
            ${project.external ? `<a href="${project.external}" target="_blank" aria-label="External Link"><i class="ri-external-link-line"></i></a>` : ''}
          </div>
        </div>
        <a href="${project.github}" target="_blank">
            <h3 class="card-title">${project.title}</h3>
        </a>
        <div class="card-desc">
          <p>${project.description}</p>
        </div>
        <ul class="card-tech">
          ${project.tech.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `).join('');
}

// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Optional: Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
  section.classList.add('fade-in-section'); // Add CSS class for updated styling later if needed
  observer.observe(section);
});
