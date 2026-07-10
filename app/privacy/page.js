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
          <p className="policy-updated mono">Last updated: 2026</p>

          <p className="post-para">
            InstantAppointment AI LLC ("we," "us," or "our") respects your privacy and is committed to
            protecting the personal information you share with us. This Privacy Policy describes how we
            collect, use, and safeguard your information when you visit our website{" "}
            <a href="https://instantappointment-ai.com/">https://instantappointment-ai.com/</a> or interact
            with our services, including text messaging communications.
          </p>

          <h2 className="policy-h">Information We Collect</h2>
          <p className="post-para">We may collect the following types of personal information:</p>
          <ul className="policy-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Information about your home service needs</li>
            <li>Any other information you voluntarily provide through our contact forms or communications</li>
          </ul>

          <h2 className="policy-h">How We Use Your Information</h2>
          <p className="post-para">We use the information we collect to:</p>
          <ul className="policy-list">
            <li>Respond to your inquiries and service requests</li>
            <li>Schedule and confirm appointments</li>
            <li>Send appointment reminders and service updates via SMS/text message</li>
            <li>Send marketing communications about our services (only with your explicit consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="policy-h">Text Messaging (SMS/MMS)</h2>
          <p className="post-para">
            If you opt in to receive text messages from InstantAppointment AI LLC, you consent to receive
            recurring automated text messages at the phone number you provided. Message types may include
            appointment confirmations, service reminders, follow-ups regarding your inquiry, and promotional
            offers (if you opted in to marketing messages).
          </p>
          <ul className="policy-list">
            <li>Message frequency varies.</li>
            <li>Message and data rates may apply.</li>
            <li>You can opt out at any time by replying <strong>STOP</strong> to any text message.</li>
            <li>
              For help, reply <strong>HELP</strong> or contact us at{" "}
              <a href="mailto:team@instantappointment-ai.com">team@instantappointment-ai.com</a> or{" "}
              <a href="tel:+14694614559">+1 (469) 461-4559</a>.
            </li>
          </ul>

          <div className="policy-callout">
            No mobile information will be shared with third parties/affiliates for marketing/promotional
            purposes. Information sharing to subcontractors in support services, such as customer service, is
            permitted. All other use case categories exclude text messaging originator opt-in data and
            consent; this information will not be shared with any third parties.
          </div>

          <h2 className="policy-h">Information Sharing</h2>
          <p className="post-para">
            We do not sell, rent, or trade your personal information to third parties. We may share your
            information only in the following circumstances:
          </p>
          <ul className="policy-list">
            <li>
              With service providers who assist us in operating our business (e.g., CRM platforms, messaging
              services), subject to confidentiality agreements
            </li>
            <li>When required by law, regulation, or legal process</li>
            <li>
              To protect the rights, property, or safety of InstantAppointment AI LLC, our users, or the
              public
            </li>
          </ul>
          <p className="post-para">
            All the above categories exclude text messaging originator opt-in data and consent; this
            information will not be shared with any third parties, excluding aggregators and providers of the
            text message services.
          </p>

          <h2 className="policy-h">Data Security</h2>
          <p className="post-para">
            We implement reasonable administrative, technical, and physical safeguards to protect your
            personal information. However, no method of electronic transmission or storage is completely
            secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="policy-h">Your Rights</h2>
          <p className="post-para">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="policy-list">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p className="post-para">
            To exercise these rights, contact us at{" "}
            <a href="mailto:team@instantappointment-ai.com">team@instantappointment-ai.com</a> or{" "}
            <a href="tel:+14694614559">+1 (469) 461-4559</a>.
          </p>

          <h2 className="policy-h">Cookies and Tracking</h2>
          <p className="post-para">
            Our website may use cookies and similar technologies to improve your browsing experience. You can
            control cookie settings through your browser preferences.
          </p>

          <h2 className="policy-h">Changes to This Policy</h2>
          <p className="post-para">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with
            an updated revision date.
          </p>

          <h2 className="policy-h">Contact Us</h2>
          <p className="post-para">If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="policy-list">
            <li>
              Email: <a href="mailto:team@instantappointment-ai.com">team@instantappointment-ai.com</a>
            </li>
            <li>
              Phone: <a href="tel:+14694614559">+1 (469) 461-4559</a>
            </li>
            <li>
              Website: <a href="https://instantappointment-ai.com/">https://instantappointment-ai.com/</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}