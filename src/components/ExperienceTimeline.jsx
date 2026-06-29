const EXPERIENCES = [
  {
    title: 'Hardware Design & Algorithm',
    year: '2026',
    company: 'CPE Design Project Thesis',
    description: 'Leading hardware-software integration for IoT-based LPG safety system'
  },
  {
    title: 'Software & Hardware Lead',
    year: '2025',
    company: 'Airlink Defense System',
    description: 'Led development of encrypted communication system for the AFP'
  },
  {
    title: 'Project Manager',
    year: '2022',
    company: 'Red Cross Software System',
    description: 'Managed full-stack development of blood bank management system'
  },
  {
    title: 'BS Computer Engineering',
    year: '2021',
    company: 'University — Manila',
    description: 'Pursuing degree with focus on embedded systems and software engineering'
  },
  {
    title: 'First Line of Code',
    year: '2021',
    company: 'Personal Milestone',
    description: 'Began the journey into software development and engineering'
  }
];

export default function ExperienceTimeline() {
  return (
    <section className="sidebar-section">
      <h2 className="section-title">Experience</h2>
      <div className="exp-list">
        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="exp-row">
            <div className="exp-marker">
              <div className="exp-box"></div>
            </div>
            <div className="exp-info">
              <div className="exp-top-row">
                <strong>{exp.title}</strong>
                <span className="exp-yr">{exp.year}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
