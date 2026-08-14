export const SERVICES_DATA: Record<
  string,
  {
    title: string;
    description: string;
    fullDescription: string;
    metaDescription: string;
    eyebrow?: string;
    capabilities: string[];
    benefits: string[];
  }
> = {
  "air-ocean-freight": {
    title: "Air & Ocean Freight",
    description:
      "Full-container, less-than-container, and air charter solutions across every major trade lane — optimized for speed, cost, or a balance of both.",
    fullDescription:
      "Our air and ocean freight services cover the full spectrum of international shipping needs. Whether you require express air cargo for time-critical components or cost-effective ocean freight for bulk shipments, we combine deep carrier relationships with route optimization to deliver the right solution for your cargo profile. Every shipment is tracked in real time through our control tower, with proactive exception management before issues impact your supply chain.",
    metaDescription:
      "Air and ocean freight forwarding across 40+ countries. Express, standard, and charter solutions with real-time tracking and customs brokerage.",
    eyebrow: "Freight Forwarding",
    capabilities: [
      "Full Container Load (FCL) and Less-than-Container Load (LCL) ocean freight",
      "General air cargo, express, and chartered aircraft solutions",
      "Out-of-gauge (OOG) and heavy-lift project cargo",
      "Hazardous materials and IATA-compliant shipping",
      "Port-to-port and door-to-door multimodal routing",
      "Real-time tracking via 24/7 control tower",
      "Freight consolidation and de-consolidation",
      "Customs brokerage included at origin and destination",
    ],
    benefits: [
      "Competitive rates through volume-based carrier agreements",
      "Guaranteed space allocation on peak-season routes",
      "Single point of contact for multimodal shipments",
      "Average 15% cost reduction vs. spot-market booking",
    ],
  },
  "warehousing-fulfillment": {
    title: "Warehousing & Fulfillment",
    description:
      "Strategic warehouse space in high-density logistics corridors — pick, pack, ship, and reverse logistics under one integrated WMS.",
    fullDescription:
      "Our warehousing and fulfillment network spans key logistics hubs across North America, Europe, and Asia-Pacific. Every facility is equipped with modern WMS technology, climate-controlled zones, and cross-docking capabilities. We handle everything from bulk storage and inventory management to kitting, labeling, and same-day dispatch — giving you the flexibility to scale up or down without capital investment.",
    metaDescription:
      "Strategic warehousing and e-commerce fulfillment across 40+ countries. WMS-integrated, climate-controlled, with cross-docking and reverse logistics.",
    eyebrow: "Warehousing",
    capabilities: [
      "Bonded and non-bonded warehouse space",
      "Climate-controlled and temperature-monitored storage",
      "E-commerce pick, pack, and same-day dispatch",
      "Cross-docking and transloading",
      "Kitting, labeling, and value-added services",
      "Reverse logistics and returns management",
      "Real-time inventory visibility via integrated WMS",
      "Scalable space — no long-term lease required",
    ],
    benefits: [
      "Reduce warehousing overhead by up to 30%",
      "Faster time-to-market with regional distribution",
      "Single platform for inventory, orders, and shipments",
      "Flexible capacity that scales with your demand cycles",
    ],
  },
  "customs-brokerage": {
    title: "Customs Brokerage",
    description:
      "Licensed customs brokers in 40+ jurisdictions managing classifications, duty optimization, compliance filings, and regulatory intelligence.",
    fullDescription:
      "International trade compliance is complex and constantly evolving. Our licensed customs brokerage team operates in over 40 jurisdictions, managing HS classification, duty optimization, regulatory filings, and trade agreement utilization. We help you avoid costly delays, penalties, and audit findings — while identifying savings through preferential tariff treatment and bonded warehouse strategies.",
    metaDescription:
      "Licensed customs brokerage across 40+ countries. HS classification, duty optimization, compliance, and regulatory intelligence.",
    eyebrow: "Trade Compliance",
    capabilities: [
      "Import and export customs clearance",
      "HS code classification and tariff optimization",
      "Trade agreement utilization (FTA, preferential rates)",
      "Regulatory compliance and documentation",
      "Bonded warehouse and duty deferral programs",
      "Audit readiness and compliance reviews",
      "License and permit management",
      "Proactive trade policy monitoring and alerts",
    ],
    benefits: [
      "Average 8–12% duty savings through optimization",
      "99.5%+ first-pass customs clearance rate",
      "Real-time regulatory change notifications",
      "Single broker for multi-country shipments",
    ],
  },
  "last-mile-delivery": {
    title: "Last-Mile Delivery",
    description:
      "Final-leg logistics that protects your brand promise — white-glove, scheduled, and same-day with proof of delivery and real-time ETAs.",
    fullDescription:
      "The last mile is where your brand experience is sealed — or broken. Our last-mile network covers urban and rural routes across 40+ countries, offering white-glove delivery, scheduled time windows, same-day dispatch, and returns pickup. Every delivery includes real-time ETA updates, photo proof of delivery, and signature capture, giving your customers the transparency they expect and your team the visibility they need.",
    metaDescription:
      "Last-mile delivery and white-glove logistics across 40+ countries. Scheduled, same-day, and returns management with real-time tracking.",
    eyebrow: "Last-Mile",
    capabilities: [
      "Same-day and next-day urban delivery",
      "Scheduled time-window delivery",
      "White-glove and threshold delivery",
      "Installation and assembly services",
      "Returns pickup and reverse logistics",
      "Real-time ETA and proof-of-delivery",
      "Temperature-controlled last-mile",
      "Delivery exception management",
    ],
    benefits: [
      "98%+ on-time delivery rate in urban markets",
      "Reduced failed-delivery attempts by 40%",
      "Brand-consistent delivery experience",
      "Integrated returns management",
    ],
  },
  "cold-chain": {
    title: "Cold Chain Logistics",
    description:
      "GDP-compliant temperature-controlled transport and storage for pharmaceuticals, biologics, and perishables with continuous data logging.",
    fullDescription:
      "Temperature-sensitive cargo demands unwavering control. Our cold chain solutions span active and passive refrigeration, GDP-compliant warehousing, and validated packaging — all monitored with continuous data logging and real-time alerting. From vaccine distribution to biologic research samples, we ensure your cargo stays within specification from origin to point of use.",
    metaDescription:
      "GDP-compliant cold chain logistics for pharmaceuticals and biologics. Active cooling, data logging, and validated packaging.",
    eyebrow: "Cold Chain",
    capabilities: [
      "Active and passive temperature-controlled transport",
      "GDP-compliant warehousing and storage",
      "Continuous data logging with real-time alerts",
      "Validated packaging solutions",
      "Pharma and biologic shipment handling",
      "Vaccine and clinical trial logistics",
      "Temperature excursion investigation and CAPA",
      "IATA CEIV Pharma-certified operations",
    ],
    benefits: [
      "Zero temperature excursions in 99.9% of shipments",
      "Full chain-of-custody documentation",
      "Regulatory audit-ready at all times",
      "Dedicated pharma-trained handling teams",
    ],
  },
  "consulting": {
    title: "Supply Chain Consulting",
    description:
      "Network design, cost modeling, and resilience planning from strategy to execution — building supply chains that scale with your growth.",
    fullDescription:
      "A well-designed supply chain is a competitive advantage. Our consulting practice works alongside your team to analyze current flows, identify bottlenecks, model cost scenarios, and design resilient networks that can adapt to demand shifts, regulatory changes, and geopolitical disruption. From greenfield market entry to optimization of existing corridors, we deliver actionable strategies with clear ROI timelines.",
    metaDescription:
      "Supply chain network design, cost modeling, and resilience planning. Actionable strategies with clear ROI for B2B logistics.",
    eyebrow: "Consulting",
    capabilities: [
      "Current-state supply chain assessment",
      "Network design and optimization modeling",
      "Cost-to-serve analysis and reduction planning",
      "Risk assessment and resilience strategy",
      "Market entry logistics planning",
      "Carrier and 3PL selection support",
      "KPI framework and performance dashboards",
      "Post-implementation support and monitoring",
    ],
    benefits: [
      "Average 18% total logistics cost reduction",
      "90-day project timelines for network redesign",
      "Data-driven recommendations with clear ROI",
      "Ongoing support through implementation",
    ],
  },
};
