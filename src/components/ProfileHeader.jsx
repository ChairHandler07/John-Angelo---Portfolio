export default function ProfileHeader({ isDarkMode, onToggleTheme }) {
  return (
    <header className="profile-header">
      <div className="avatar-frame">
        <div className="avatar-ring">
          <img src="/Formal.png" className="avatar-image" alt="John Angelo Concepcion" />
        </div>
        <div className="avatar-status"></div>
      </div>

      <div className="profile-info">
        <div className="profile-top-row">
          <div className="name-group">
            <h1>
              John Angelo Concepcion
              <i className="fa-solid fa-circle-check verified-icon"></i>
            </h1>
            <p className="profile-location">
              <i className="fa-solid fa-location-dot"></i> Manila, Philippines
            </p>
            <p className="profile-title">Software Engineer &middot; Computer Engineer</p>
          </div>

          <button
            className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <div className="theme-track">
              <div className="theme-thumb">
                <i className={`fa-solid ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
              </div>
            </div>
          </button>
        </div>

        <div className="badge-row">
          <a
            href="https://www.facebook.com/share/p/17ud3a6m6D/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="champion-badge"
          >
            <i className="fa-solid fa-trophy"></i>
            Ideathon 2025 Finalist
            <i className="fa-solid fa-chevron-right badge-arrow"></i>
          </a>
        </div>

        <div className="profile-actions">
          <a href="mailto:johnangeloconcepcion8@gmail.com" className="btn-primary">
            <i className="fa-regular fa-envelope"></i> Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/john-angelo-concepcion-09051b381"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
