import FadeUp from './FadeUp';
import FeatureIcon from './FeatureIcon';
import { FEATURES } from '../constants/appInfo';

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Connect &amp; Shine</span>
          </h2>
          <p className="section-desc">
            CRIMZO brings together live streaming, social networking, and rewards in one powerful app.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <FadeUp key={feature.title}>
              <article className={`feature-card glass${feature.wide ? ' feature-card-wide' : ''}`}>
                <div className={`feature-icon ${feature.iconClass}`}>
                  <FeatureIcon name={feature.icon} />
                </div>
                {feature.wide ? (
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ) : (
                  <>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </>
                )}
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}