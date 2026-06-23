import FadeUp from './FadeUp';
import { FAQ_ITEMS } from '../constants/appInfo';

export default function FAQ() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-desc">Everything you need to know before getting started.</p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <FadeUp key={item.question}>
              <details className="faq-item glass">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}