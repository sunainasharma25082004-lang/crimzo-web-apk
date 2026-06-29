import { Link } from 'react-router-dom';
import { APP_INFO } from '../constants/appInfo';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Privacy() {
  usePageTitle('Privacy Policy', '/privacy');
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: June 23, 2026</p>

        <p>
          CRIMZO (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Account information such as name, email, phone number, and profile photo</li>
          <li>Usage data including live streams watched, interactions, and app activity</li>
          <li>Device information such as device model, operating system, and unique identifiers</li>
          <li>Content you create, including live streams, messages, and profile information</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and improve the CRIMZO app experience</li>
          <li>Enable live streaming and social features</li>
          <li>Process rewards and diamond transactions</li>
          <li>Send important updates and notifications</li>
          <li>Ensure platform safety and prevent abuse</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your personal information.
          However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data by contacting us at{' '}
          <a href={`mailto:${APP_INFO.email}`} className="legal-link">{APP_INFO.email}</a>.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href={`mailto:${APP_INFO.email}`} className="legal-link">{APP_INFO.email}</a>.
        </p>
      </div>
    </main>
  );
}