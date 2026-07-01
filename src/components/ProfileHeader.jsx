import { useRef, useState } from 'react';

export default function ProfileHeader({ isDarkMode, onToggleTheme }) {
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ringRef.current) return;
    const rect = ringRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ringRef.current.style.setProperty('--mx', `${x}%`);
    ringRef.current.style.setProperty('--my', `${y}%`);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    ringRef.current?.style.removeProperty('--mx');
    ringRef.current?.style.removeProperty('--my');
  };

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
        <filter id="halftone" color-interpolation-filters="sRGB">
          <feColorMatrix type="saturate" values="0.15" />
          <feComponentTransfer>
            <feFuncR type="linear" slope="2.5" intercept="-0.75" />
            <feFuncG type="linear" slope="2.5" intercept="-0.75" />
            <feFuncB type="linear" slope="2.5" intercept="-0.75" />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 0.3 0.5 0.7 1" />
            <feFuncG type="discrete" tableValues="0 0.3 0.5 0.7 1" />
            <feFuncB type="discrete" tableValues="0 0.3 0.5 0.7 1" />
          </feComponentTransfer>
        </filter>
      </svg>
      <header className="profile-header">
      <div className="avatar-frame">
        <div
          className={`avatar-ring${isHovered ? ' hover' : ''}`}
          ref={ringRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="/Formal.png" className="avatar-image-clear" alt="" />
          <img src="/Formal.png" className="avatar-image-dotted" alt="John Angelo Concepcion" />
        </div>
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
    </>
  );
}
