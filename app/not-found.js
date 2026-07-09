import Link from "next/link";
import { PageHero } from "@/components/Layout";
export default function NotFound() {
  return (
    <main>
      <PageHero eyebrow="404" title="Page not found." sub="That page does not exist. Let's get you back on track." />
      <section className="section"><div className="wrap"><Link href="/" className="btn btn-brass">Back to home</Link></div></section>
    </main>
  );
}
