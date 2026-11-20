export const siteConfig = {
  name: "AJ Sourcing",
  tagline: "One platform for every import, from China to your door.",
  email: "hello@ajsourcing.com",
  phone: "+92 300 123 4567",
  location: "Lahore, Pakistan · On-ground in China",
};

export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About us", href: "#founder" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
];

export const homepageCopy = {
  hero: {
    badge: "Your trusted sourcing partner",
    heading: "Import from China with confidence",
    subtext:
      "One platform for every import. We find suppliers, verify quality, and deliver worldwide so you can scale without the risk.",
    ctas: [
      { label: "Get a Free Quote", href: "#contact", variant: "primary" as const },
      { label: "Explore Services", href: "#services", variant: "secondary" as const },
    ],
  },
  metrics: {
    label: "BY THE NUMBERS",
    heading: "Results you can measure.",
  },
  services: {
    label: "OUR SERVICES",
    heading: "Everything you need to import, in one place",
  },
  brandLaunch: {
    label: "NEW BUSINESS LAUNCH",
    heading: "Starting a business? We build it with you.",
    subtext:
      "One team for the plan, first products, website, socials, and ads, so you can launch and grow without juggling partners.",
    cta: "Start my launch",
    href: "#contact",
  },
  showcase: {
    label: "PRODUCT SHOWCASE",
    heading: "Products we source across industries",
  },
  whyUs: {
    label: "WHY AJ SOURCING",
    heading: "Built on trust. Made for importers.",
  },
  howItWorks: {
    label: "HOW IT WORKS",
    heading: "A simple process, from inquiry to delivery",
  },
  founder: {
    label: "OUR STORY",
  },
  testimonials: {
    label: "TESTIMONIALS",
    heading: "Trusted by businesses that import to grow",
  },
  banner: {
    label: "GET STARTED",
    heading: "Ready to import with one partner?",
    subtext:
      "Whether it's your first container or your fiftieth SKU, tell us what you need. We'll handle the rest.",
    cards: [
      {
        title: "Start a Project",
        description: "Share your product brief. Get a free quote within 24 hours.",
        cta: "Get a Free Quote",
        href: "#contact",
        primary: true,
      },
      {
        title: "Explore Services",
        description:
          "Sourcing, brand launch, website, socials, and ads. See the full stack.",
        cta: "Explore Services",
        href: "#services",
        primary: false,
      },
    ],
  },
};

export const metrics = [
  {
    id: "years",
    value: 10,
    suffix: "+",
    label: "Years of sourcing experience",
    accent: false,
  },
  {
    id: "orders",
    value: 500,
    suffix: "+",
    label: "Orders delivered worldwide",
    accent: false,
  },
  {
    id: "quote",
    value: 48,
    suffix: " hrs",
    label: "Average quote turnaround",
    accent: false,
  },
  {
    id: "ontime",
    value: 98,
    suffix: "%",
    label: "On-time delivery rate",
    accent: false,
  },
  {
    id: "partners",
    value: 200,
    suffix: "+",
    label: "Verified partners across China",
    accent: true,
  },
];

export const services = [
  {
    id: "suppliers",
    icon: "shield-check" as const,
    title: "Verified suppliers",
    description:
      "Every factory is audited before you see them, so you never gamble on an unverified manufacturer.",
  },
  {
    id: "global",
    icon: "globe" as const,
    title: "Global product sourcing",
    description:
      "From Guangzhou to Yiwu, we match your specs, MOQ, and budget to the right factory.",
  },
  {
    id: "inspection",
    icon: "clipboard" as const,
    title: "Quality inspection",
    description:
      "Pre-shipment QC with photo and video reports. Catch issues before goods leave China.",
  },
  {
    id: "messaging",
    icon: "message" as const,
    title: "Supplier communication",
    description:
      "We speak the language, manage samples, and keep production updates clear so you stay in control.",
  },
  {
    id: "logistics",
    icon: "truck" as const,
    title: "End-to-end logistics",
    description:
      "Freight, customs coordination, and door-to-door delivery. One timeline, one partner.",
  },
  {
    id: "quotes",
    icon: "scale" as const,
    title: "Transparent quote comparison",
    description:
      "Side-by-side factory pricing with clear breakdowns, so you choose with confidence, not guesswork.",
  },
];

export const showcaseItems = [
  { id: "auto", title: "Automobile", src: "/showcase/image-2269.png", tall: true },
  { id: "cosmetics", title: "Cosmetics", src: "/showcase/image-2260.png", tall: false },
  { id: "sports", title: "Sports", src: "/showcase/image-2268.png", wide: true },
  { id: "electronics", title: "Electronics", src: "/showcase/image-2265.png", tall: true },
  { id: "apparel", title: "Apparel", src: "/showcase/image-2259.png", tall: false },
  { id: "home", title: "Home & Living", src: "/showcase/image-2261.png", tall: false },
  { id: "machinery", title: "Machinery", src: "/showcase/image-2267.png", wide: true },
  { id: "medical", title: "Medical", src: "/showcase/image-2262.png", tall: false },
  { id: "lighting", title: "Lighting", src: "/showcase/image-2263.png", wide: true },
  { id: "packaging", title: "Packaging", src: "/showcase/image-2266.png", tall: false },
  { id: "tools", title: "Tools", src: "/showcase/image-2264.png", tall: false },
  { id: "custom", title: "Custom OEM", src: "/showcase/image-2270.png", tall: false },
];

export const whyUsFeatures = [
  {
    icon: "network" as const,
    title: "Trusted supplier network",
    description:
      "Audited factories we stand behind, not random Alibaba listings.",
  },
  {
    icon: "map-pin" as const,
    title: "On-the-ground team in China",
    description:
      "Local eyes in Guangzhou, Shenzhen, and Yiwu, on the factory floor for you.",
  },
  {
    icon: "zap" as const,
    title: "Clear communication",
    description:
      "Honest pricing, real timelines, proactive updates. No surprises mid-shipment.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Share specs, quantity, target price, and destination. We reply with a clear plan within 48 hours.",
  },
  {
    step: "02",
    title: "We find & verify suppliers",
    description:
      "Our China team shortlists factories, negotiates factory-direct pricing, and sends transparent quotes.",
  },
  {
    step: "03",
    title: "Inspect, produce & deliver",
    description:
      "QC checks, production tracking, and global logistics, from factory floor to your warehouse.",
  },
];

export const testimonials = [
  {
    title: "Supply chain we can trust",
    quote:
      "AJ Sourcing scaled our auto catalog with verified factories and consistent QC. Our import pipeline has never been this reliable.",
    author: "Apex Autodrome",
    role: "Automotive parts",
  },
  {
    title: "One partner, zero chaos",
    quote:
      "From inquiry to delivery, they handled every detail. Transparent pricing and on-ground support made importing feel simple.",
    author: "AFJA Trading Limited",
    role: "International trading",
  },
  {
    title: "Quality before shipment",
    quote:
      "They matched us with the right manufacturers immediately. Pre-shipment inspections gave us full confidence before goods left China.",
    author: "F & A Sourcing Limited",
    role: "Product procurement",
  },
  {
    title: "A partner that scales with us",
    quote:
      "Clear communication and dependable timelines. We treat AJ Sourcing as an extension of our operations team.",
    author: "Growth Partner",
    role: "Brand importer",
  },
];

export const founder = {
  name: "Ahmad Amir",
  title: "Founder & CEO",
  quote:
    "Our job isn't just to find the cheapest supplier. It's to find the right one, verify quality, and get it to your door without surprises.",
};
