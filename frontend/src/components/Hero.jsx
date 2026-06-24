import FadeUp from './FadeUp';
import DownloadIcon from './DownloadIcon';
import PhonePreview from './PhonePreview';
import { APK_FILENAME, APK_URL, CREATORS } from '../constants/appInfo';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <FadeUp>
            <div className="badge">
              <span className="badge-dot" />
              Now Available on Android
            </div>
          </FadeUp>

          <FadeUp delay={1}>
            <h1 className="hero-title">
              Connect, Go Live &amp; <span className="gradient-text">Earn Rewards</span>
            </h1>
          </FadeUp>

          <FadeUp delay={2}>
            <p className="hero-subtitle">
              Join CRIMZO — India&apos;s live streaming app. Connect with creators, go live, and earn rewards.
            </p>
          </FadeUp>

          <FadeUp delay={3}>
            <div className="hero-actions">
              <a href={APK_URL} className="btn btn-primary btn-lg" download={APK_FILENAME}>
                <DownloadIcon />
                Download APP for Android
              </a>
              <a href="#features" className="btn btn-ghost btn-lg">
                Explore Features
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={4}>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">10K+</span>
                <span className="stat-label">Active Users</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Live Streams</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">Free</span>
                <span className="stat-label">To Download</span>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={2} className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <PhonePreview
                  photo={CREATORS[0].photo}
                  variant="live"
                  name={CREATORS[0].name}
                  viewers={CREATORS[0].viewers}
                  followers="18.5K"
                />
              </div>
            </div>
            <div className="floating-card card-1 glass">
              <img src={CREATORS[2].photo} alt="" className="card-avatar" />
              <div>
                <strong>{CREATORS[2].name}</strong>
                <span>{CREATORS[2].viewers} watching</span>
              </div>
            </div>
            <div className="floating-card card-2 glass">
              <div className="card-icon diamond-icon">💎</div>
              <div>
                <strong>+500 Diamonds</strong>
                <span>Reward earned!</span>
              </div>
            </div>
            <div className="glow-ring" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}