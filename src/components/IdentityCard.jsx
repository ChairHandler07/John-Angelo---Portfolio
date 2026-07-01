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
        <div className="id-card-top">
          <span className="id-prompt">&gt;_</span>
          <span className="id-badge">ACTIVE</span>
        </div>
        <div className="id-card-divider"></div>
        <p className="id-card-title">Computer Engineer</p>
        <p className="id-card-sub">&middot; Software Engineer &middot;</p>
        <div className="id-card-divider"></div>
        <div className="id-card-bottom">
          <span className="id-cursor-line">angelo@portfolio:~$</span>
          <span className="id-blink">&#9612;</span>
        </div>
      </div>
    </div>
  );
}
