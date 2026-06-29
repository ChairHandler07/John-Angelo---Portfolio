import { useRef } from 'react';

const IMAGES = [
  { src: '/Gallery1.png', alt: 'Project Gallery 1' },
  { src: '/Gallery2.png', alt: 'Project Gallery 2' },
  { src: '/Gallery3.png', alt: 'Project Gallery 3' },
  { src: '/Gallery4.png', alt: 'Project Gallery 4' }
];

export default function Gallery({ onImageClick }) {
  const galleryRef = useRef(null);

  const scroll = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === 'next' ? 320 : -320,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="content-section gallery-section">
      <div className="section-header-row">
        <h2 className="section-title">Visual Archive</h2>
        <div className="gallery-controls">
          <button className="gal-btn" onClick={() => scroll('prev')} aria-label="Previous">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="gal-btn" onClick={() => scroll('next')} aria-label="Next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="gallery-slider" ref={galleryRef}>
        {IMAGES.map((img, i) => (
          <div key={i} className="gallery-item" onClick={() => onImageClick(img.src)}>
            <img src={img.src} alt={img.alt} />
            <div className="gallery-item-overlay">
              <i className="fa-solid fa-expand"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
