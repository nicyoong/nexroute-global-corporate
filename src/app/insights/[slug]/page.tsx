import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Link from "next/link";

const articles = {
  "post-brexit-guide": {
    title: "Navigating Post-Brexit Trade: A Guide for US Manufacturers",
    excerpt: "Understanding the new customs requirements, documentation changes, and strategic adjustments needed for UK-EU trade flows.",
    category: "Trade Compliance",
    date: "June 2024",
    readTime: "8 min read",
    content: `
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-primary-600 leading-relaxed mb-8">
          Understanding the new customs requirements, documentation changes, and strategic adjustments needed for UK-EU trade flows.
        </p>
        
        <h2>The New Reality of UK-EU Trade</h2>
        <p>
          Since Brexit, the trade landscape between the United Kingdom and the European Union has undergone fundamental changes. 
          For US manufacturers who rely on UK-EU supply chains, these changes present both challenges and opportunities that require 
          careful navigation.
        </p>
        
        <h2>Key Documentation Changes</h2>
        <ul>
          <li><strong>Customs Declarations:</strong> All goods moving between the UK and EU now require formal customs declarations</li>
          <li><strong>Certificates of Origin:</strong> New rules determine whether goods qualify for preferential tariff treatment</li>
          <li><strong>Safety and Security Declarations:</strong> Additional requirements for pre-arrival processing</li>
          <li><strong>Product Compliance:</strong> UKCA marking replacing CE marking for many products</li>
        </ul>

        <h2>Strategic Adjustments for US Manufacturers</h2>
        <p>
          Successful companies have made several key adjustments to their logistics strategies including customs partnerships, 
          inventory positioning, digital transformation, and supply chain redesign.
        </p>
      </div>
    `,
  },
  "cold-chain-excellence": {
    title: "Cold Chain Excellence: Maintaining 2°C to 8°C Across Continental Routes",
    excerpt: "Best practices for temperature-controlled logistics in extreme climates, from pharmaceutical distribution to specialty foods.",
    category: "Cold Chain",
    date: "May 2024",
    readTime: "6 min read",
    content: `
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-primary-600 leading-relaxed mb-8">
          Best practices for temperature-controlled logistics in extreme climates, from pharmaceutical distribution to specialty foods.
        </p>
        
        <h2>The Critical Nature of Cold Chain</h2>
        <p>
          Temperature-sensitive shipments represent some of the most demanding logistics challenges. A single 
          temperature excursion can result in millions in lost product, regulatory violations, and compromised patient safety.
        </p>

        <h2>Key Components of Cold Chain Excellence</h2>
        <ul>
          <li><strong>Real-Time Monitoring:</strong> IoT sensors providing continuous temperature and humidity data</li>
          <li><strong>Packaging Engineering:</strong> Validated packaging systems for different transit times and climates</li>
          <li><strong>Asset Management:</strong> Reefers, cold storage, and active/passive packaging</li>
          <li><strong>Process Validation:</strong> Qualification of all equipment and procedures</li>
        </ul>
      </div>
    `,
  },
  "future-last-mile": {
    title: "The Future of Last-Mile: Electric Vehicles and Micro-Fulfillment Centers",
    excerpt: "How urban logistics is evolving with sustainable delivery options and strategic micro-hubs in dense metropolitan areas.",
    category: "Last-Mile",
    date: "April 2024",
    readTime: "7 min read",
    content: `
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-primary-600 leading-relaxed mb-8">
          How urban logistics is evolving with sustainable delivery options and strategic micro-hubs in dense metropolitan areas.
        </p>
        
        <h2>The Last-Mile Challenge</h2>
        <p>
          Last-mile delivery represents the most expensive and complex leg of the supply chain, accounting for 
          up to 53% of total shipping costs. As e-commerce continues to grow and customer expectations for 
          speed increase, companies are reimagining urban logistics from the ground up.
        </p>

        <h2>Electric Vehicle Revolution</h2>
        <p>
          Electric vehicles are transforming urban delivery with zero emissions, lower operating costs, 
          quiet operation, and access advantages in congested city centers.
        </p>
      </div>
    `,
  },
  "incoterms-2020": {
    title: "Incoterms 2020: What Changed and Why It Matters for Your Supply Chain",
    excerpt: "A comprehensive breakdown of the latest Incoterms updates and their impact on liability, cost allocation, and risk transfer.",
    category: "Resources",
    date: "March 2024",
    readTime: "10 min read",
    content: `
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-primary-600 leading-relaxed mb-8">
          A comprehensive breakdown of the latest Incoterms updates and their impact on liability, cost allocation, and risk transfer.
        </p>
        
        <h2>What Are Incoterms?</h2>
        <p>
          Incoterms (International Commercial Terms) are standardized trade terms published by the International 
          Chamber of Commerce (ICC). The 2020 version introduced important updates affecting global trade.
        </p>

        <h2>Key Changes in Incoterms 2020</h2>
        <ul>
          <li><strong>Carriage and Insurance Paid To (CIP):</strong> Now requires higher insurance coverage (All Risks)</li>
          <li><strong>Delivery at Place (DAP):</strong> Clarified unloading responsibilities</li>
          <li><strong>Delivered at Place Unloaded (DDP):</strong> Updated guidance on import clearance</li>
        </ul>
      </div>
    `,
  },
  "red-sea-crisis": {
    title: "Supply Chain Resilience: Lessons from the Red Sea Crisis",
    excerpt: "How leading shippers adapted to Suez Canal disruptions and what contingency planning looks like in practice.",
    category: "Supply Chain",
    date: "February 2024",
    readTime: "9 min read",
    content: `
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-primary-600 leading-relaxed mb-8">
          How leading shippers adapted to Suez Canal disruptions and what contingency planning looks like in practice.
        </p>
        
        <h2>The Red Sea Disruption</h2>
        <p>
          The Red Sea crisis that began in late 2023 represents one of the most significant supply chain 
          disruptions since the COVID-19 pandemic. Attacks on commercial vessels forced major shipping lines 
          to reroute around the Cape of Good Hope.
        </p>

        <h2>Immediate Response Strategies</h2>
        <ul>
          <li><strong>Route Diversification:</strong> Shifting cargo to alternative paths</li>
          <li><strong>Inventory Buffering:</strong> Building safety stock for critical components</li>
          <li><strong>Supplier Communication:</strong> Real-time visibility into shipment status</li>
          <li><strong>Capacity Booking:</strong> Securing space on alternative routes</li>
        </ul>
      </div>
    `,
  },
  "digital-twins": {
    title: "Digital Twins in Logistics: Simulating Your Network Before You Build It",
    excerpt: "Leveraging digital twin technology to optimize warehouse placement, transportation routes, and inventory positioning.",
    category: "Technology",
    date: "January 2024",
    readTime: "11 min read",
    content: `
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-primary-600 leading-relaxed mb-8">
          Leveraging digital twin technology to optimize warehouse placement, transportation routes, and inventory positioning.
        </p>
        
        <h2>What Are Digital Twins?</h2>
        <p>
          Digital twins are virtual representations of physical systems that allow organizations to simulate, 
          analyze, and optimize operations before implementing changes in the real world.
        </p>

        <h2>Key Applications in Logistics</h2>
        <ul>
          <li><strong>Network Design:</strong> Simulating warehouse and distribution center placements</li>
          <li><strong>Route Optimization:</strong> Testing transportation paths for efficiency</li>
          <li><strong>Inventory Positioning:</strong> Optimizing stock levels across the network</li>
          <li><strong>Risk Simulation:</strong> Testing responses to disruptions</li>
        </ul>
      </div>
    `,
  },
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articles[params.slug as keyof typeof articles];
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: `${article.title} | NexRoute Global`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles[params.slug as keyof typeof articles];
  
  if (!article) {
    notFound();
  }

  return (
    <main id="main-content">
      <section className="bg-primary py-16 md:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-surface/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">{article.title}</li>
            </ol>
          </nav>
          <div className="max-w-4xl">
            <span className="inline-block bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-surface/60 text-sm">
              <span>{article.date}</span>
              <span aria-hidden="true">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="max-w-4xl">
            <div 
              className="prose prose-lg prose-primary max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h2 className="font-display font-semibold text-2xl text-primary mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-primary-600 text-lg mb-6">
                Our logistics experts can help you implement the strategies discussed in this article.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg border border-slate-200 hover:border-accent hover:text-accent transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
