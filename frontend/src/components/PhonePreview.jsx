import { CREATORS } from '../constants/appInfo';

export default function PhonePreview({
  photo,
  variant = 'live',
  name = 'Priya_Live',
  viewers = '2.4K',
  followers = '12.5K',
}) {
  return (
    <div className={`phone-preview phone-preview--${variant}`}>
      <img className="phone-preview__photo" src={photo} alt={name} loading="lazy" />
      <div className="phone-preview__overlay">
        <div className="phone-preview__status">9:41</div>

        {variant === 'live' && (
          <>
            <div className="preview-live-badge">
              <span className="preview-live-dot" />
              LIVE
            </div>
            <div className="preview-viewers">👁 {viewers}</div>
            <div className="preview-bottom">
              <div className="preview-streamer glass">
                <img className="preview-avatar" src={photo} alt="" />
                <div className="preview-streamer-info">
                  <strong>{name}</strong>
                  <span>{followers} followers</span>
                </div>
                <span className="preview-follow-btn">Follow</span>
              </div>
              <div className="preview-chat">
                <p><strong>Ankit_99:</strong> Amazing stream! 🔥</p>
                <p><strong>Rahul_J:</strong> Sent a gift 💎</p>
              </div>
            </div>
          </>
        )}

        {variant === 'discover' && (
          <>
            <div className="preview-discover-header">
              <h3>Discover</h3>
              <span>🔍</span>
            </div>
            <div className="preview-stories">
              {[photo, CREATORS[4].photo, CREATORS[5].photo].map((src) => (
                <div className="preview-story" key={src}>
                  <img src={src} alt="" />
                </div>
              ))}
            </div>
            <div className="preview-feed-card glass">
              <div className="preview-feed-head">
                <img src={photo} alt="" />
                <div>
                  <strong>{name}</strong>
                  <span>Live now</span>
                </div>
              </div>
              <p>Join my live — let&apos;s connect &amp; chat! ✨</p>
            </div>
          </>
        )}

        {variant === 'profile' && (
          <>
            <div className="preview-profile-banner" />
            <img className="preview-profile-avatar" src={photo} alt={name} />
            <div className="preview-profile-info">
              <strong>{name}</strong>
              <span>Live streamer &amp; creator ✨</span>
            </div>
            <div className="preview-profile-stats">
              <div><strong>{followers}</strong><span>Followers</span></div>
              <div><strong>248</strong><span>Following</span></div>
              <div><strong>1.2K</strong><span>Likes</span></div>
            </div>
            <div className="preview-profile-actions">
              <span className="preview-follow-btn">Follow</span>
              <span className="preview-msg-btn">Message</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}