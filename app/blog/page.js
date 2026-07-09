import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import { BLOG_POSTS } from "@/lib/content";

export const metadata = {
  title: "Remodeling Marketing Blog",
  description: "What we learn running appointment campaigns for remodeling contractors: shared leads vs exclusive, speed to lead, and what a qualified appointment really means.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageHero eyebrow="THE BLOG" title="Remodeling marketing, without the fluff."
        sub="What we learn running appointment campaigns for remodelers, written down." />
      <section className="section">
        <div className="wrap blog-grid">
          {BLOG_POSTS.map((p, i) => (
            <Reveal className="blog-card" delay={i * 60} key={p.slug} as="article">
              <Link href={`/blog/${p.slug}`} className="blog-in">
                <div className="blog-meta mono">{p.date} &middot; {p.read}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="link-arrow">Read article <ArrowRight size={15} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
