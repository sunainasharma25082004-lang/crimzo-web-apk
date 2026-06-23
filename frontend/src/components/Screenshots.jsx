import { useState, useEffect, useCallback, useRef } from 'react';
import PhonePreview from './PhonePreview';
import { SCREENSHOTS } from '../constants/appInfo';

export default function Screenshots() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setCurrent(((index % SCREENSHOTS.length) + SCREENSHOTS.length) % SCREENSHOTS.length);
  }, []);

  const resetAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SCREENSHOTS.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetAutoplay]);

  const handlePrev = () => {
    goTo(current - 1);
    resetAutoplay();
  };

  const handleNext = () => {
    goTo(current + 1);
    resetAutoplay();
  };

  const handleTouchStart = (e) => {
    touchStart.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      goTo(current + (diff > 0 ? 1 : -1));
      resetAutoplay();
    }
  };

  return (
    <section className="section screenshots" id="screenshots">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">App Preview</span>
          <h2 className="section-title">
            See CRIMZO <span className="gradient-text">In Action</span>
          </h2>
          <p className="section-desc">Real creators, real connections — see what awaits you inside CRIMZO.</p>
        </div>

        <div className="carousel-wrapper">
          <button className="carousel-btn carousel-prev" onClick={handlePrev} aria-label="Previous screenshot">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="carousel" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {SCREENSHOTS.map((slide) => (
                <div className="carousel-slide" key={slide.caption}>
                  <div className="screenshot-frame glass screenshot-frame--phone">
                    <PhonePreview
                      photo={slide.photo}
                      variant={slide.variant}
                      name={slide.name}
                      viewers={slide.viewers}
                      followers={slide.followers}
                    />
                  </div>
                  <p className="slide-caption">{slide.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn carousel-next" onClick={handleNext} aria-label="Next screenshot">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="carousel-dots" role="tablist" aria-label="Screenshot navigation">
            {SCREENSHOTS.map((slide, i) => (
              <button
                key={slide.caption}
                className={`carousel-dot${i === current ? ' active' : ''}`}
                role="tab"
                aria-label={`Go to screenshot ${i + 1}`}
                aria-selected={i === current}
                onClick={() => {
                  goTo(i);
                  resetAutoplay();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}