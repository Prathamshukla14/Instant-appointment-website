import { PageHero } from "@/components/Layout";
import ResultsContent from "@/components/ResultsContent";

export const metadata = {
  title: "Results & Testimonials",
  description: "Video and written testimonials from remodeling contractors whose calendars InstantAppointment AI fills with qualified, shown appointments.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <main>
      <PageHero eyebrow="RESULTS & TESTIMONIALS" title="Real remodelers. Real booked calendars."
        sub="Every quote and clip on this page comes from a contractor we actually work with." />
      <ResultsContent />
    </main>
  );
}
