import { PageHero } from "@/components/Layout";
import ContactCalendars from "@/components/ContactCalendars";

export const metadata = {
  title: "Contact Us | Book a Call",
  description: "Book a call with InstantAppointment AI. Start a 3-day exclusive lead trial, or book a RemodelingPro Growth Call for remodeling and HVAC appointments.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({ searchParams }) {
  const type = searchParams?.type === "appointments" ? "appointments" : "leads";
  return (
    <main>
      <PageHero eyebrow="CONTACT US" title="Let's get exclusive homeowners in your pipeline."
        sub="Pick the option that fits your business, then grab a time below. We'll confirm your market is open and size your volume." />
      <section className="section contact-sec">
        <div className="wrap">
          <ContactCalendars defaultType={type} />
        </div>
      </section>
    </main>
  );
}
