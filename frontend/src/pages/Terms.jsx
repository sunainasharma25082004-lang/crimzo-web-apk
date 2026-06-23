import { Link } from 'react-router-dom';
import { APP_INFO } from '../constants/appInfo';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Terms() {
  usePageTitle('Terms & Conditions');
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Terms &amp; Conditions</h1>
        <p className="updated">Last updated: June 23, 2026</p>

        <p>
          Welcome to CRIMZO. By downloading, installing, or using our application, you agree to be bound by these Terms and Conditions.
          Please read them carefully.
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using CRIMZO, you confirm that you are at least 18 years old (or the minimum age required in your jurisdiction)
          and agree to comply with these terms.
        </p>

        <h2>User Accounts</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials.
          You agree to provide accurate information and notify us immediately of any unauthorized use of your account.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Post harmful, abusive, or illegal content during live streams or in messages</li>
          <li>Harass, threaten, or impersonate other users</li>
          <li>Use automated tools to manipulate rewards or engagement metrics</li>
          <li>Attempt to reverse engineer, hack, or disrupt the platform</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>

        <h2>Rewards &amp; Diamonds</h2>
        <p>
          Diamonds and rewards earned through CRIMZO have no real-world monetary value unless explicitly stated.
          We reserve the right to modify, suspend, or discontinue the rewards program at any time.
        </p>

        <h2>Content Ownership</h2>
        <p>
          You retain ownership of content you create on CRIMZO. By posting content, you grant us a non-exclusive license
          to display, distribute, and promote your content within the platform.
        </p>

        <h2>Termination</h2>
        <p>
          We may suspend or terminate your account if you violate these terms.
          You may delete your account at any time through the app settings.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms, contact us at{' '}
          <a href={`mailto:${APP_INFO.email}`} className="legal-link">{APP_INFO.email}</a>.
        </p>
      </div>
    </main>
  );
}