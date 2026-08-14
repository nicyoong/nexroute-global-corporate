import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights & Resources | NexRoute Global",
  description: "Industry intelligence, trade compliance guides, Incoterms 2020 reference, and logistics best practices from NexRoute Global experts.",
};

const articles = [
  {
    title: "Navigating Post-Brexit Trade: A Guide for US Manufacturers",
    excerpt: "Understanding the new customs requirements, documentation changes, and strategic adjustments needed for UK-EU trade flows.",
    category: "Trade Compliance",
    date: "June 2024",
    readTime: "8 min read",
    slug: "post-brexit-guide",
  },
  {
    title: "Cold Chain Excellence: Maintaining 2°C to 8°C Across Continental Routes",
    excerpt: "Best practices for temperature-controlled logistics in extreme climates, from pharmaceutical distribution to specialty foods.",
    category: "Cold Chain",
    date: "May 2024",
    readTime: "6 min read",
    slug: "cold-chain-excellence",
  },
  {
    title: "The Future of Last-Mile: Electric Vehicles and Micro-Fulfillment Centers",
    excerpt: "How urban logistics is evolving with sustainable delivery options and strategic micro-hubs in dense metropolitan areas.",
    category: "Last-Mile",
    date: "April 2024",
    readTime: "7 min read",
    slug: "future-last-mile",
  },
  {
    title: "Incoterms 2020: What Changed and Why It Matters for Your Supply Chain",
    excerpt: "A comprehensive breakdown of the latest Incoterms updates and their impact on liability, cost allocation, and risk transfer.",
    category: "Resources",
    date: "March 2024",
    readTime: "10 min read",
    slug: "incoterms-2020",
  },
  {
    title: "Supply Chain Resilience: Lessons from the Red Sea Crisis",
    excerpt: "How leading shippers adapted to Suez Canal disruptions and what contingency planning looks like in practice.",
    category: "Supply Chain",
    date: "February 2024",
    readTime: "9 min read",
    slug: "red-sea-crisis",
  },
  {
    title: "Digital Twins in Logistics: Simulating Your Network Before You Build It",
    excerpt: "Leveraging digital twin technology to optimize warehouse placement, transportation routes, and inventory positioning.",
    category: "Technology",
    date: "January 2024",
    readTime: "11 min read",
    slug: "digital-twins",
  },
];

const categories = ["All", "Trade Compliance", "Cold Chain", "Last-Mile", "Resources", "Supply Chain", "Technology"];

export default function InsightsPage() {
  return (
    <main id="main-content">
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Insights</li>
            </ol>
          </nav>
          <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
            Insights & Resources
          </h1>
          <p className="text-surface/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            Industry intelligence, trade compliance guides, and logistics best
            practices from our global team of experts.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-surface hover:bg-primary hover:text-white text-primary-600"
                aria-pressed={category === "All"}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="bg-surface rounded-xl p-6 hover:shadow-medium transition-shadow group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 text-xs">{article.date}</span>
                </div>
                <h2 className="font-display font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-primary-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{article.readTime}</span>
                  <span className="text-accent font-medium group-hover:underline">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
