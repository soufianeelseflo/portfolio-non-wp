import Header from '../components/Header';
import Footer from '../components/Footer';
import { CONTACT_EMAIL } from '../../lib/constants';

export const metadata = {
  title: 'Terms · Sofiane El Habib',
  description: 'Terms of Service governing the use of Sofiane El Habib’s portfolio site and related services.'
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="container-prose py-12 lg:py-16">
        <article className="prose dark:prose-invert max-w-none">
          <h1>Terms of Service</h1>
          <p><strong>Last updated:</strong> September 24, 2025</p>
          <p>
            These Terms of Service ("Terms") govern your access to and use of this website (the "Site"), operated by Sofiane El Habib ("we", "us", or "our").
            By visiting or using the Site you agree to be bound by these Terms. If you do not agree, please do not use the Site.
          </p>

          <h2>1. Eligibility and Account Responsibility</h2>
          <p>
            You must be at least 18 years old or have legal guardian consent to use the Site. You are responsible for any activity that occurs through your use and for ensuring the information you provide is accurate and complete.
          </p>

          <h2>2. Acceptable Use</h2>
          <p>
            You agree not to misuse the Site or assist anyone else in doing so. Prohibited conduct includes attempting to gain unauthorized access, interfering with normal operations, reverse engineering any portion of the Site, or using the Site for unlawful, defamatory, or harmful purposes.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, design elements, and code snippets made available on the Site are owned by us or our licensors and are protected by intellectual property laws. You may view and share content for personal, non-commercial purposes. Any other use requires our prior written consent.
          </p>

          <h2>4. Third-Party Links and Services</h2>
          <p>
            The Site may reference or link to third-party services. We do not control and are not responsible for those services. Use them at your own risk and review their terms and policies.
          </p>

          <h2>5. Warranties and Disclaimers</h2>
          <p>
            The Site is provided "as is" and "as available" without warranties of any kind, express or implied. We do not warrant that the Site will be secure, error-free, or uninterrupted. You use the Site at your own discretion and risk.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the Site.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the Site or your violation of these Terms.
          </p>

          <h2>8. Modifications</h2>
          <p>
            We may revise these Terms at any time by posting an updated version on the Site. Continued use after changes become effective constitutes acceptance of the revised Terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Morocco, without regard to conflict of law principles. Any disputes will be resolved exclusively in the competent courts located in Morocco.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these Terms can be directed to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
