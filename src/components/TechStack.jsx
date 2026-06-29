const STACK = {
  Frontend: ['React', 'JavaScript', 'React Native'],
  Backend: ['PHP', 'Laravel', 'Node.js', 'Python', 'Java'],
  'DevOps & Cloud': ['GitHub', 'Firebase', 'MySQL']
};

export default function TechStack() {
  return (
    <section className="content-section">
      <div className="section-header-row">
        <h2 className="section-title">Technical Proficiency</h2>
      </div>
      {Object.entries(STACK).map(([category, items]) => (
        <div key={category} className="stack-group">
          <h3 className="stack-label">{category}</h3>
          <div className="stack-pills">
            {items.map((item) => (
              <span key={item} className="stack-pill">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
