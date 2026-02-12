const projects = [
  {
    title: "Polypharmacy Effects System",
    description: "Built a scalable data pipeline to ingest, transform, and publish healthcare datasets for adverse drug interaction analysis. Reduced insight turnaround time by 40%.",
    tech: ["Python", "ETL", "Healthcare Data"],
    github: "https://github.com/NithinThota9",
    external: null
  },
  {
    title: "Urban Audio Classification",
    description: "Developed an end-to-end data processing workflow to generate reusable feature datasets and evaluation metrics for intelligent audio analysis.",
    tech: ["Python", "Audio Processing", "Data Pipelines"],
    github: "https://github.com/NithinThota9",
    external: null
  },
  {
    title: "Travelers & Accenture Work",
    description: "Implemented enterprise-scale ETL pipelines using SSIS and SQL Server. Designed governed data models and Tableau/Power BI dashboards for claims and utilization analytics.",
    tech: ["SQL Server", "SSIS", "Tableau", "Power BI"],
    github: "https://github.com/NithinThota9",
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
