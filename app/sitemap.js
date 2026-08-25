import { BLOG_POSTS, NICHES, SITE } from "@/lib/content";

export default function sitemap() {
  const routes = ["", "/services", "/how-it-works", "/pricing", "/results", "/blog", "/about", "/contact", "/privacy", "/terms"];
  const staticPages = routes.map((r) => ({
    url: `${SITE.domain}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  const niches = NICHES.filter((n) => n.live).map((n) => ({
    url: `${SITE.domain}/services/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const posts = BLOG_POSTS.map((p) => ({
    url: `${SITE.domain}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...niches, ...posts];
}
