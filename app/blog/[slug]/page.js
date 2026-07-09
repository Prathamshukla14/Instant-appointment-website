import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero, FinalCTA } from "@/components/Layout";
import { Reveal } from "@/components/Primitives";
import { BLOG_POSTS, SITE } from "@/lib/content";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    url: `${SITE.domain}/blog/${post.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <section className="page-hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap post-wrap">
          <Link href="/blog" className="post-back">&larr; All articles</Link>
          <div className="blog-meta mono anim-up">{post.date} &middot; {post.read}</div>
          <h1 className="page-h1 anim-up d1" style={{ maxWidth: 760 }}>{post.title}</h1>
        </div>
      </section>
      <section className="section post-body-sec">
        <div className="wrap post-wrap">
          {post.body.map((para, i) => (
            <Reveal as="p" className="post-para" delay={i * 20} key={i}>{para}</Reveal>
          ))}
        </div>
      </section>
      <FinalCTA h="Want appointments instead of advice?" sub="We run this whole system for remodeling contractors on a pay per shown appointment basis." />
    </main>
  );
}
