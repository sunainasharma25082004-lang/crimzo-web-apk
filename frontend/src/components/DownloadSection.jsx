import FadeUp from './FadeUp';
import { BrandName } from './BrandLogo';
import DownloadIcon from './DownloadIcon';
import { APK_FILENAME, APK_URL, APP_INFO, CREATORS } from '../constants/appInfo';

export default function DownloadSection() {
  return (
    <section className="section download" id="download">
      <div className="container">
        <FadeUp>
          <div className="download-card glass">
            <div className="download-glow" aria-hidden="true" />
            <div className="download-content">
              <img
                src="/assets/logo.png"
                alt=""
                className="download-logo"
                width="64"
                height="64"
                aria-hidden="true"
              />
              <h2>
                Ready to Join <BrandName />?
              </h2>
              <p>Download the latest version and start connecting, streaming, and earning today.</p>
              <a href={APK_URL} className="btn btn-primary btn-xl" download={APK_FILENAME}>
                <DownloadIcon size={24} />
                Download APP for Android
              </a>
              <p className="download-note">
                Free for Android {APP_INFO.androidMin} · Latest v{APP_INFO.version}
              </p>
              <div className="download-info">
                <div className="info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                  </svg>
                  <span>
                    Version <strong>{APP_INFO.version}</strong>
                  </span>
                </div>
                <div className="info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>
                    Android <strong>{APP_INFO.androidMin}</strong> (Marshmallow &amp; above)
                  </span>
                </div>
                <div className="info-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  <span>
                    Size <strong>{APP_INFO.size}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="download-visual" aria-hidden="true">
              <div className="promo-creators">
                {CREATORS.map((creator) => (
                  <img key={creator.name} src={creator.photo} alt="" className="promo-creator" />
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}