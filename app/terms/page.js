/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { PageHero } from "@/components/Layout";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for InstantAppointment AI LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <PageHero eyebrow="TERMS OF SERVICE" title="Terms of Service" />
      <section className="section">
        <div className="wrap post-wrap">
          <p className="policy-updated mono">Last updated: 2026</p>

          <h2 className="policy-h">1. About Our Services</h2>
          <p className="post-para">
            InstantAppointment AI LLC is a digital marketing agency that provides lead generation, appointment
            setting, and advertising management services for home service contractors. By using our website,
            submitting a contact form, or opting in to receive communications from us, you agree to these Terms
            of Service.
          </p>
          <p className="post-para">Our SMS messaging program provides the following types of messages:</p>
          <ul className="policy-list">
            <li>Appointment confirmations and reminders</li>
            <li>Follow-up messages related to your service inquiry</li>
            <li>Service updates and scheduling communications</li>
            <li>Promotional offers and marketing messages (only if you have opted in to marketing communications)</li>
          </ul>

          <h2 className="policy-h">2. Eligibility</h2>
          <p className="post-para">
            You must be at least 18 years of age to use our services. By using our website or opting in to our
            communications, you represent that you are at least 18 years old and have the legal capacity to
            agree to these terms.
          </p>

          <h2 className="policy-h">3. Text Messaging Terms</h2>
          <p className="post-para">
            By providing your phone number and opting in through our website contact form, you consent to
            receive text messages from InstantAppointment AI LLC as described in our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <p className="post-para">
            <strong>Opting Out:</strong> You can cancel the SMS service at any time. Simply text "STOP" to the
            number from which you received a message. After sending STOP, you will receive a one-time
            confirmation message confirming your unsubscription. After this, you will no longer receive text
            messages from us. If you want to join again, sign up as you did the first time and we will start
            sending text messages to you again.
          </p>
          <p className="post-para">
            <strong>Getting Help:</strong> If you are experiencing issues with the messaging program, you can
            reply with the keyword "HELP" for more assistance, or you can get help directly at{" "}
            <a href="mailto:team@instantappointment-ai.com">team@instantappointment-ai.com</a> or{" "}
            <a href="tel:+14694614559">+1 (469) 461-4559</a>.
          </p>
          <p className="post-para">
            <strong>Carrier Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.
          </p>

          <h2 className="policy-h">4. Message Frequency &amp; Data Rates</h2>
          <p className="post-para">
            Message and data rates may apply for any messages sent to you from us and to us from you. Message
            frequency varies based on the nature of your inquiry and your interaction with our services. If you
            have any questions about your text plan or data plan, it is best to contact your wireless provider.
          </p>

          <h2 className="policy-h">5. Privacy</h2>
          <p className="post-para">
            Your use of our services is also governed by our <Link href="/privacy">Privacy Policy</Link>, which
            describes how we collect, use, and protect your personal information, including your phone number
            and text messaging data. If you have opted in to receive text messages, your information is handled
            in accordance with our Privacy Policy.
          </p>

          <h2 className="policy-h">6. Use of Website</h2>
          <p className="post-para">
            You agree to use our website only for lawful purposes. You shall not:
          </p>
          <ul className="policy-list">
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use the website to transmit harmful, offensive, or disruptive content</li>
            <li>Interfere with the proper functioning of the website</li>
          </ul>

          <h2 className="policy-h">7. Intellectual Property</h2>
          <p className="post-para">
            All content on this website, including text, graphics, logos, and images, is the property of
            InstantAppointment AI LLC or its content suppliers and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, or create derivative works from our content
            without prior written consent.
          </p>

          <h2 className="policy-h">8. Limitation of Liability</h2>
          <p className="post-para">
            InstantAppointment AI LLC provides this website and its services on an "as is" basis. We make no
            warranties, express or implied, regarding the accuracy, reliability, or availability of our website
            or services. To the fullest extent permitted by law, InstantAppointment AI LLC shall not be liable
            for any indirect, incidental, special, or consequential damages arising from your use of our
            website or services.
          </p>

          <h2 className="policy-h">9. Indemnification</h2>
          <p className="post-para">
            You agree to indemnify and hold harmless InstantAppointment AI LLC, its officers, employees, and
            agents from any claims, damages, losses, or expenses arising from your use of our website or your
            violation of these Terms of Service.
          </p>

          <h2 className="policy-h">10. Changes to Terms</h2>
          <p className="post-para">
            We reserve the right to modify these Terms of Service at any time. Changes will be effective when
            posted on this page. Your continued use of our website after any changes constitutes your
            acceptance of the updated terms.
          </p>

          <h2 className="policy-h">11. Governing Law</h2>
          <p className="post-para">
            These Terms of Service shall be governed by and construed in accordance with the laws of the state
            in which InstantAppointment AI LLC operates, without regard to conflict of law principles.
          </p>

          <h2 className="policy-h">12. Contact Us</h2>
          <p className="post-para">
            If you have any questions about these Terms of Service, please contact us:
          </p>
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