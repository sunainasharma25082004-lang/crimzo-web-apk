import FadeUp from './FadeUp';
import { CREATORS } from '../constants/appInfo';

export default function LiveCreators() {
  return (
    <section className="section live-creators" id="creators">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Live Now</span>
          <h2 className="section-title">
            Meet Top <span className="gradient-text">Creators</span>
          </h2>
          <p className="section-desc">
            Indian creators going live every day — connect, chat, and earn rewards together.
          </p>
        </div>

        <div className="creators-grid">
          {CREATORS.map((creator, index) => (
            <FadeUp key={creator.name} delay={index % 3}>
              <article className="creator-card">
                <div className="creator-card__image-wrap">
                  <img
                    src={creator.photo}
                    alt={creator.name}
                    className="creator-card__photo"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="creator-card__gradient" />
                  {creator.live && (
                    <span className="creator-card__live">
                      <span className="preview-live-dot" />
                      LIVE
                    </span>
                  )}
                  <div className="creator-card__viewers">👁 {creator.viewers}</div>
                </div>
                <div className="creator-card__info">
                  <img src={creator.photo} alt="" className="creator-card__avatar" />
                  <div>
                    <h3>{creator.name}</h3>
                    <p>{creator.tagline}</p>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}