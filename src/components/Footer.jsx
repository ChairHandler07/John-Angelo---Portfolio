export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col footer-brand">
        <h4>Angelo Concepcion</h4>
        <p className="footer-tagline">Computer Engineer &middot; Full-Stack Developer</p>
      </div>
      <div className="footer-col">
        <h4>Connect</h4>
        <a href="https://www.linkedin.com/in/john-angelo-concepcion-09051b381" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:johnangeloconcepcion8@gmail.com">
          <i className="fa-solid fa-envelope"></i> Email
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
      </div>
      <div className="footer-col">
        <h4>Contact</h4>
        <p>johnangeloconcepcion8<br />@gmail.com</p>
        <p>Manila, Philippines</p>
      </div>
      <div className="footer-col">
        <h4>Expertise</h4>
        <p>IoT & Embedded Systems</p>
        <p>Full-Stack Engineering</p>
        <p>System Architecture</p>
      </div>
    </footer>
  );
}
