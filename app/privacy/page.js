import Header from '../components/Header';
import Footer from '../components/Footer';
import { CONTACT_EMAIL } from '../../lib/constants';

export const metadata = {
  title: 'Privacy · Sofiane El Habib',
  description: 'Privacy policy detailing how Sofiane El Habib handles personal information and visitor data on this portfolio site.'
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="container-prose py-12 lg:py-16">
        <article className="prose dark:prose-invert max-w-none">
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> September 24, 2025</p>
          <p>
            This Privacy Policy explains how Sofiane El Habib ("we", "us", or "our") collects, uses, and protects personal information when you use this
            website (the "Site"). By visiting the Site you consent to the practices described below.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Contact details:</strong> name, email address, and message content submitted through the contact form.</li>
            <li><strong>Usage data:</strong> privacy-focused analytics such as device, browser, and interaction patterns.</li>
          </ul>

          <h2>2. How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to inquiries and provide the services or information you request.</li>
            <li>Maintain, improve, and secure the Site.</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>

          <h2>3. Legal Basis</h2>
          <p>
            We process personal data based on legitimate interests in operating the Site, fulfilling a contract when responding to your requests, or your consent where required by law.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell your personal information. Limited data may be shared with trusted service providers that help operate the Site—for example analytics or email services. These providers act on our behalf under confidentiality agreements.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            Contact messages are retained only as long as needed to manage correspondence. Analytics data is stored in aggregate form without identifying individual visitors.
          </p>

          <h2>6. Security</h2>
          <p>
            We implement reasonable technical and organizational safeguards to protect personal information. However, no method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to access, correct, delete, restrict, or object to our use of your data, and request portability. Contact us to exercise these rights.
          </p>

          <h2>8. International Transfers</h2>
          <p>
            If data is transferred across borders, we take steps to ensure it receives protection consistent with applicable privacy laws.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date reflects the latest revision. Material changes will be highlighted on the Site.
          </p>

          <h2>10. Contact</h2>
          <p>
            For questions or privacy requests, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
