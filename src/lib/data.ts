export const siteConfig = {
  name: "AJ Sourcing",
  tagline: "One platform for every import, from China to your door.",
  email: "hello@ajsourcing.com",
  phone: "+92 300 123 4567",
  location: "Lahore, Pakistan · On-ground in China",
  whatsapp: "https://wa.me/923001234567",
  instagram: "https://instagram.com/ajsourcing",
  heroVideo: {
    src: "/videos/aj-hero.mp4",
    poster: "/videos/aj-hero-poster.jpg",
  },
};

export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
];

export const homepageCopy = {
  hero: {
    heading: "Import from China with confidence.",
    subtext:
      "From finding suitable manufacturers to coordinating production, quality inspections, and international shipping, AJ Sourcing helps you bring your products from China to your destination.",
    ctas: [
      { label: "Get a Free Quote", href: "#contact", variant: "primary" as const },
      { label: "Explore Services", href: "#services", variant: "secondary" as const },
    ],
  },
  clients: {
    heading: "Trusted by Businesses",
    subtext:
      "Companies across industries rely on AJ Sourcing for product sourcing and import support from China.",
  },
  services: {
    heading: "What We Do",
    subtext:
      "From finding manufacturers to inspecting finished goods and arranging international delivery, we coordinate the work behind your order.",
  },
  brandLaunch: {
    heading: "Starting Something New?",
    subtext:
      "From sourcing your first products to building your brand, we can connect you with support for design, websites, development, and digital marketing.",
    cta: "Let's Talk",
  },
  howItWorks: {
    heading: "How It Works",
    subtext:
      "Four straightforward steps, from your first enquiry to the agreed delivery arrangement.",
  },
  shipping: {
    heading: "Shipping Terms",
    subtext:
      "Understand how responsibilities, shipping costs, and delivery arrangements differ when importing from China.",
    note: "AJ Sourcing can coordinate sea and road freight between China and Pakistan, as well as international air and sea shipments, depending on the destination and requirements.",
    disclaimer:
      "These are international trade terms defining buyer and seller responsibilities. They do not automatically define the full scope of AJ Sourcing’s sourcing services.",
  },
  whyUs: {
    heading: "Why AJ Sourcing?",
    subtext:
      "One dedicated partner to coordinate your sourcing journey and keep you informed along the way.",
    brandStatement: "Your China Team.",
  },
  metrics: {
    heading: "By the Numbers",
    subtext: "Our experience and operations, at a glance.",
  },
  banner: {
    heading: "Ready to Import?",
    subtext:
      "Tell us what you’re looking for. We’ll help you explore sourcing options and the next steps.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Contact Us",
  },
  showcase: {
    heading: "What Can We Source?",
    subtext:
      "From everyday products to specialized equipment, we help businesses source across a wide range of industries.",
    ctaLabel: "Request a Product",
  },
  founder: {
    label: "OUR STORY",
  },
  testimonials: {
    label: "TESTIMONIALS",
    heading: "Trusted by businesses that import to grow",
  },
};

/** Legacy — not shown on the reordered homepage */
export const testimonials = [
  {
    title: "Supply chain we can trust",
    quote:
      "AJ Sourcing scaled our auto catalog with verified factories and consistent QC.",
    author: "Apex Autodrome",
    role: "Automotive parts",
  },
];

/** Legacy — not shown on the reordered homepage */
export const founder = {
  name: "Ahmad Amir",
  title: "Founder & CEO",
  quote:
    "Our job isn't just to find the cheapest supplier. It's to find the right one, verify quality, and get it to your door without surprises.",
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
    id: "manufacturers",
    number: "01",
    title: "Manufacturer Sourcing",
    description:
      "Find suitable manufacturers in China based on your product requirements.",
  },
  {
    id: "coordination",
    number: "02",
    title: "Supplier Coordination",
    description:
      "We handle supplier communication and keep your order moving.",
  },
  {
    id: "production",
    number: "03",
    title: "Production Follow-ups",
    description:
      "We coordinate with manufacturers and monitor production progress.",
  },
  {
    id: "inspection",
    number: "04",
    title: "Quality Inspection",
    description:
      "We inspect finished goods against agreed requirements before dispatch.",
  },
  {
    id: "freight",
    number: "05",
    title: "Freight Management",
    description:
      "We arrange international air and sea freight, plus road transport to Pakistan where available.",
  },
  {
    id: "customs",
    number: "06",
    title: "Customs & Delivery",
    description:
      "We coordinate customs clearance and final delivery when included in your chosen service.",
  },
];

/** Editorial sourcing categories — transparent PNGs in /public/images/categories */
export const sourcingCategories = [
  {
    id: "automotive",
    title: "Automotive Parts & Accessories",
    src: "/images/categories/automotive.png",
  },
  {
    id: "electronics",
    title: "Electronics & Mobile Accessories",
    src: "/images/categories/electronics.png",
  },
  {
    id: "machinery",
    title: "Industrial Machinery & Equipment",
    src: "/images/categories/industrial-machinery.png",
  },
  {
    id: "home",
    title: "Home & Living",
    src: "/images/categories/home-living.png",
  },
  {
    id: "packaging",
    title: "Packaging & Materials",
    src: "/images/categories/packaging-materials.png",
  },
  {
    id: "apparel",
    title: "Apparel & Textiles",
    src: "/images/categories/apparel-textiles.png",
  },
  {
    id: "anything",
    title: "Anything You Need?",
    description: "Didn't find your category? Tell us what you're looking for.",
    cta: "Request a Product →",
    src: "/images/categories/anything-you-need.png",
    special: true,
  },
] as const;

/** @deprecated Prefer sourcingCategories */
export const showcaseItems = sourcingCategories
  .filter((c) => "src" in c)
  .map((c) => ({
    id: c.id,
    title: c.title,
    src: (c as { src: string }).src,
    tall: false as const,
  }));

export const whyUsFeatures = [
  {
    number: "01",
    title: "End-to-End Coordination",
    description:
      "From finding manufacturers to arranging delivery, we coordinate the services your order needs.",
  },
  {
    number: "02",
    title: "On-the-Ground Team",
    description:
      "Our China-based team communicates directly with manufacturers and coordinates your requirements.",
  },
  {
    number: "03",
    title: "One Dedicated Contact",
    description:
      "Work with one AJ Sourcing representative throughout your order instead of dealing with multiple parties.",
  },
  {
    number: "04",
    title: "Proactive Updates",
    description:
      "Stay informed about manufacturing, inspections, and shipping as your order progresses.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us what you need, your quantity, specifications, and destination.",
  },
  {
    step: "02",
    title: "Source & Quote",
    description:
      "We identify suitable manufacturers and prepare a quotation for your requirements.",
  },
  {
    step: "03",
    title: "Produce & Inspect",
    description:
      "We coordinate manufacturing and inspect finished goods against agreed specifications.",
  },
  {
    step: "04",
    title: "Ship & Deliver",
    description:
      "We arrange shipping, customs, and final delivery according to your selected service.",
  },
];

export const clients = [
  {
    id: "apex",
    name: "Apex Autodrome",
    logo: "/clients/apex-autodrome.svg",
  },
  {
    id: "afja",
    name: "AFJA Trading Limited",
    logo: "/clients/afja-trading.svg",
  },
  {
    id: "fa",
    name: "F & A Sourcing Limited",
    logo: "/clients/fa-sourcing.svg",
  },
  {
    id: "jd",
    name: "JD Trading Company",
    logo: "/clients/jd-trading.svg",
  },
  {
    id: "pause",
    name: "Pause It",
    logo: "/clients/pause-it.svg",
  },
  {
    id: "protect",
    name: "Protect It",
    logo: "/clients/protect-it.svg",
  },
  {
    id: "bare",
    name: "The Bare Edit",
    logo: "/clients/the-bare-edit.svg",
  },
];

export const shippingOptions = [
  {
    id: "exw",
    code: "EXW",
    title: "Ex Works",
    description:
      "Goods are made available at the agreed factory or location. The buyer generally arranges collection, export formalities, and onward transportation.",
  },
  {
    id: "fob",
    code: "FOB",
    title: "Free On Board",
    description:
      "For sea freight, the seller delivers the goods on board the vessel at the named port of shipment. The buyer generally arranges the main freight and subsequent import arrangements.",
  },
  {
    id: "cif",
    code: "CIF",
    title: "Cost, Insurance & Freight",
    description:
      "For sea freight, the seller pays for freight and the required insurance to the destination port. Risk transfers to the buyer when the goods are loaded on board at the origin port.",
  },
  {
    id: "ddp",
    code: "DDP",
    title: "Delivered Duty Paid",
    description:
      "The seller arranges delivery to the agreed destination and handles import clearance, including applicable duties and taxes. Unloading is normally the buyer's responsibility.",
  },
];

export const contactFormServices = [
  "Manufacturer Sourcing",
  "Product Coordination",
  "Quality Inspection",
  "Freight Management",
  "Pakistan Delivery",
  "Import Support",
  "New Business Launch",
  "Other",
];
