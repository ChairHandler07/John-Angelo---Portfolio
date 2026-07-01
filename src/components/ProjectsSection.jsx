import { useState } from 'react';

const PROJECTS = [
  {
    id: "airlink",
    title: "Embedded Systems: Airlink Defense System",
    shortDesc: "Encryption message transmission tool built for the AFP to provide services in indigenous areas.",
    category: "hardware"
  },
  {
    id: "lpg-iot",
    title: "IoT-enabled LPG Leak Detection and Safety System",
    shortDesc: "Hardware and software development for LPG automation utilizing ESP32 microcontroller.",
    category: "iot"
  },
  {
    id: "blood-bank",
    title: "Software Design: Blood Bank Management System",
    shortDesc: "Web dashboard created to improve data exchange and enrich scalability.",
    category: "software"
  },
  {
    id: "hotellium",
    title: "Online Booking Hotel Reservation System for Tourists and Travelers",
    shortDesc: "A web-based hotel reservation system that allows users to book rooms online.",
    category: "software"
  }
];

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'software', label: 'Software' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'iot', label: 'IoT' }
];

export default function ProjectsSection({ onProjectClick }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section className="content-section">
      <div className="section-header-row">
        <h2 className="section-title">Recent Projects</h2>
      </div>

      <div className="project-filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`project-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <span className={`project-category-badge ${project.category}`}>
                {project.category}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>
            <button
              className="see-more-btn"
              onClick={() => onProjectClick(project)}
            >
              View Case Study <i className="fa-solid fa-arrow-right"></i>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
