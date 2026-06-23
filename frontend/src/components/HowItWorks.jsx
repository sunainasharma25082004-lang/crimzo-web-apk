import FadeUp from './FadeUp';
import FeatureIcon from './FeatureIcon';
import { STEPS } from '../constants/appInfo';

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">
            Get Started in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="section-desc">From download to your first live stream — it only takes minutes.</p>
        </div>

        <div className="steps">
          <div className="step-connector" aria-hidden="true" />
          {STEPS.map((step) => (
            <FadeUp key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content glass">
                <FeatureIcon name={step.icon} size="step" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}