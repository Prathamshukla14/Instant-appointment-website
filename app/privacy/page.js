/* eslint-disable react/no-unescaped-entities */
import { PageHero } from "@/components/Layout";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for InstantAppointment AI LLC.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero eyebrow="PRIVACY POLICY" title="Privacy Policy" />
      <section className="section">
        <div className="wrap post-wrap">
          <div className="post-para">
            <p><strong>Effective Date:</strong> January 2026</p>
            <p><strong>Last Updated:</strong> January 2026</p>
            <p>InstantAppointment AI LLC ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website instantappointment-ai.com (the "Site") and use our services.</p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>1. Information We Collect</h2>
          <div className="post-para">
            <p><strong>Information You Provide:</strong> When you fill out our contact form or request information, we collect:</p>
            <ul style={{ marginLeft: 20 }}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Service area / Market</li>
              <li>Any additional information you provide in your message</li>
            </ul>
            <p><strong>Automatically Collected Information:</strong> We may automatically collect limited information about your device and browsing activity, including:</p>
            <ul style={{ marginLeft: 20 }}>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring URL</li>
            </ul>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>2. How We Use Your Information</h2>
          <div className="post-para">
            <p>We use the information we collect to:</p>
            <ul style={{ marginLeft: 20 }}>
              <li>Respond to your inquiries and process your requests</li>
              <li>Route leads to our GoHighLevel CRM system for follow-up</li>
              <li>Contact you about our services and market availability</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>3. How We Share Your Information</h2>
          <div className="post-para">
            <p>We do not sell your personal information. We may share your information:</p>
            <ul style={{ marginLeft: 20 }}>
              <li><strong>With Service Providers:</strong> We use GoHighLevel to manage and route leads. Your information will be shared with GoHighLevel in accordance with our service agreement.</li>
              <li><strong>As Required by Law:</strong> We may disclose information if required by law or to protect our legal rights.</li>
              <li><strong>Business Transfers:</strong> If we sell or transfer our business, your information may be transferred as part of that transaction.</li>
            </ul>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>4. Cookies and Tracking</h2>
          <div className="post-para">
            <p>Our Site may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings in your browser. Disabling cookies may limit some functionality of the Site.</p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>5. Data Retention</h2>
          <div className="post-para">
            <p>We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, or as required by law. Generally, we retain contact information for 2 years after your last interaction with us.</p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>6. Your Rights</h2>
          <div className="post-para">
            <p>Depending on your location, you may have rights including:</p>
            <ul style={{ marginLeft: 20 }}>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your information</li>
              <li>Opt-out of certain communications</li>
            </ul>
            <p>To exercise these rights, contact us at the information below.</p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>7. Security</h2>
          <div className="post-para">
            <p>We use industry-standard security measures to protect your information. However, no internet transmission is 100% secure. We cannot guarantee absolute security of any information you provide.</p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>8. Third-Party Links</h2>
          <div className="post-para">
            <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices of those sites. Please review their privacy policies.</p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>9. Contact Us</h2>
          <div className="post-para">
            <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <p>
              <strong>InstantAppointment AI LLC</strong><br />
              117 S Lexington St Ste 100<br />
              Harrisonville, MO 64701<br />
              Email: <a href="mailto:team@instantappointment-ai.com">team@instantappointment-ai.com</a><br />
              Phone: <a href="tel:+14694611559">+1 (469) 461-1559</a>
            </p>
          </div>

          <h2 style={{ marginTop: 40, marginBottom: 20 }}>10. Policy Changes</h2>
          <div className="post-para">
            <p>We may update this Privacy Policy from time to time. Changes will be effective when posted to this page. Your continued use of the Site constitutes acceptance of the updated Privacy Policy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
