import { PageHero } from "@/components/Layout";

export const metadata = {
  title: "Contact Us | Book a Growth Call",
  description: "Book your RemodelingPro Growth Call with InstantAppointment AI. Check availability and schedule a consultation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="CONTACT US" title="Let's see if your market is open."
        sub="Book your RemodelingPro Growth Call below. We'll check your territory and discuss your remodeling business." />
      <section className="section contact-sec">
        <div className="wrap">
          <div className="calendar-embed">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/wa1dsl7BTyanmXxlAmLS" 
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
              scrolling="no"
              id="wa1dsl7BTyanmXxlAmLS_1783592340398"
              title="Book RemodelingPro Growth Call"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript" />
          </div>
        </div>
      </section>
    </main>
  );
}