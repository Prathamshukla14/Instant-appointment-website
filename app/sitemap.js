import { BLOG_POSTS, INDUSTRIES, SITE } from "@/lib/content";

export default function sitemap() {
  const routes = ["", "/services", "/industries", "/how-it-works", "/results", "/blog", "/about", "/contact", "/privacy", "/terms"];
  const staticPages = routes.map((r) => ({
    url: `${SITE.domain}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
  const industries = INDUSTRIES.map((ind) => ({
    url: `${SITE.domain}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  const posts = BLOG_POSTS.map((p) => ({
    url: `${SITE.domain}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticPages, ...industries, ...posts];
}
