import { useRef, useState } from 'react';

export default function IdentityCard() {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
    '--mouse-x': '50%',
    '--mouse-y': '50%'
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      '--mouse-x': `${x}px`,
      '--mouse-y': `${y}px`
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      '--mouse-x': '50%',
      '--mouse-y': '50%'
    });
  };

  return (
    <div
      className="identity-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="id-card-pattern"></div>
      <div className="id-card-content">
        <div className="id-card-header">
          <span className="id-cursor">&gt;_</span>
          <span className="id-verify">
            <i className="fa-solid fa-shield-halved"></i> VERIFIED
          </span>
        </div>
        <div className="id-card-body">
          <p className="id-org">COMPUTER ENGINEER</p>
          <p className="id-type">PORTFOLIO ACCESS CARD</p>
        </div>
        <div className="id-card-footer">
          <p className="id-member-label">IDEATHON 2025 FINALIST</p>
          <p className="id-name">ANGELO CONCEPCION</p>
          <div className="id-card-row">
            <div className="id-role-group">
              <p className="id-role">SOFTWARE ENGINEER</p>
              <p className="id-id">ID: CPE-2026-001</p>
            </div>
            <div className="id-qr">
              <i className="fa-solid fa-qrcode"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
