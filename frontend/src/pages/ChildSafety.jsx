import { Link } from 'react-router-dom';
import { APP_INFO } from '../constants/appInfo';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ChildSafety() {
  usePageTitle('Child Safety Standards', '/child-safety');
  return (
    <main className="legal-page">
      <div className="container legal-content">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Child Safety Standards</h1>
        <p className="updated">Last updated: June 29, 2026</p>

        <p>
          CRIMZO (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting children and maintaining a safe platform.
          This page outlines our Child Safety Standards and how we prevent child sexual abuse and exploitation (CSAE)
          on our mobile application and related services.
        </p>

        <h2>Age Requirement</h2>
        <p>
          CRIMZO is intended for users who are at least 18 years of age (or the minimum age required in their jurisdiction).
          We do not knowingly permit children under the applicable minimum age to create accounts or use our services.
          If we become aware that a user is under the required age, we will promptly suspend or terminate the account
          and delete associated personal data where appropriate.
        </p>

        <h2>Zero Tolerance for Child Sexual Abuse and Exploitation</h2>
        <p>
          We have zero tolerance for child sexual abuse material (CSAM), child sexual exploitation, grooming,
          or any content or behavior that endangers minors. Such activity is strictly prohibited on CRIMZO, including:
        </p>
        <ul>
          <li>Creating, uploading, sharing, or soliciting CSAM or sexually exploitative content involving minors</li>
          <li>Grooming, trafficking, or attempting to contact minors for sexual purposes</li>
          <li>Live streams, messages, profiles, or comments that sexualize, endanger, or exploit children</li>
          <li>Using CRIMZO to facilitate offline harm to minors</li>
        </ul>
        <p>
          Violations may result in immediate account termination, permanent bans, preservation of evidence,
          and referral to law enforcement and relevant child protection organizations.
        </p>

        <h2>Detection, Moderation, and Enforcement</h2>
        <p>We use a combination of measures to keep CRIMZO safe, including:</p>
        <ul>
          <li>User reporting tools available in the app for streams, profiles, messages, and comments</li>
          <li>Human review of reported content and accounts</li>
          <li>Automated and manual enforcement actions, including content removal and account suspension</li>
          <li>Cooperation with law enforcement and recognized child safety organizations when required by law</li>
        </ul>

        <h2>Reporting Child Safety Concerns</h2>
        <p>
          If you encounter content or behavior on CRIMZO that may involve child sexual abuse, exploitation,
          or a minor using the platform, please report it immediately using one of the following methods:
        </p>
        <ul>
          <li>
            <strong>In-app:</strong> Use the Report option on the relevant profile, live stream, message, or comment
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href={`mailto:${APP_INFO.email}?subject=Child%20Safety%20Report`} className="legal-link">
              {APP_INFO.email}
            </a>{' '}
            with the subject line &quot;Child Safety Report&quot;
          </li>
        </ul>
        <p>
          When reporting, include as much detail as possible (username, date/time, description of the issue, and screenshots if available)
          so our team can investigate quickly. For emergencies involving imminent danger to a child, contact your local law enforcement first.
        </p>

        <h2>Legal Compliance</h2>
        <p>
          CRIMZO complies with applicable child safety laws and regulations, including requirements related to
          reporting CSAM to appropriate authorities. We cooperate with law enforcement agencies and recognized
          organizations in investigations involving child safety violations.
        </p>

        <h2>Parental and Guardian Guidance</h2>
        <p>
          Parents and guardians should supervise minors&apos; use of mobile apps and ensure children do not access
          services not intended for their age group. If you believe your child has created a CRIMZO account,
          contact us at{' '}
          <a href={`mailto:${APP_INFO.email}`} className="legal-link">{APP_INFO.email}</a>{' '}
          and we will take appropriate action.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about these Child Safety Standards or to report a child safety concern, contact us at{' '}
          <a href={`mailto:${APP_INFO.email}`} className="legal-link">{APP_INFO.email}</a>.
        </p>
      </div>
    </main>
  );
}