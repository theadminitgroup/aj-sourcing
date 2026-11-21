export const siteConfig = {
  name: "AJ Sourcing",
  tagline: "One platform for every import, from China to your door.",
  email: "hello@ajsourcing.com",
  phone: "+92 300 123 4567",
  location: "Lahore, Pakistan · On-ground in China",
  whatsapp: "https://wa.me/923001234567",
  instagram: "https://instagram.com/ajsourcing",
};

export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
];

export const homepageCopy = {
  hero: {
    heading: "Import from China with confidence",
    subtext:
      "China import support for manufacturers, products, logistics, and delivery — all in one place.",
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
      "We help customers source products from China, coordinate manufacturing, inspect goods, and manage shipping and delivery.",
  },
  brandLaunch: {
    heading: "Starting Something New?",
    subtext:
      "Need products for your business? We can also help connect you with support for branding, websites, development, and digital presence.",
    primaryCta: "Explore Services",
    primaryHref: "#services",
    secondaryCta: "Contact Us",
  },
  howItWorks: {
    heading: "How It Works",
    subtext: "A simple process from enquiry to delivery.",
  },
  shipping: {
    heading: "Shipping Terms",
    subtext:
      "Choose the delivery arrangement that fits your product, destination, and level of support.",
    note: "AJ Sourcing can coordinate road and sea freight into Pakistan, and air or sea freight internationally, subject to the destination and service arrangement.",
  },
  whyUs: {
    heading: "Why Choose Us",
    subtext: "Work with one partner from sourcing to delivery.",
  },
  metrics: {
    heading: "By the Numbers",
    subtext: "A quick snapshot of our experience and performance.",
  },
  banner: {
    heading: "Ready to Import?",
    subtext: "Tell us what you need and we’ll guide you on the next step.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "Contact Us",
  },
  showcase: {
    label: "PRODUCT SHOWCASE",
    heading: "Products we source across industries",
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
    icon: "factory" as const,
    title: "Manufacturer Sourcing",
    description:
      "We help identify the right manufacturer for your product and requirements.",
  },
  {
    id: "coordination",
    icon: "message" as const,
    title: "Product Coordination",
    description:
      "We manage supplier communication and keep the sourcing process moving.",
  },
  {
    id: "inspection",
    icon: "clipboard" as const,
    title: "Quality Inspection",
    description:
      "We inspect goods after manufacturing to help confirm they meet the agreed requirements.",
  },
  {
    id: "freight",
    icon: "ship" as const,
    title: "Freight Management",
    description:
      "We coordinate shipping by air or sea for international destinations.",
  },
  {
    id: "pakistan",
    icon: "truck" as const,
    title: "Pakistan Delivery",
    description:
      "For Pakistan, we can arrange shipment by sea or by truck depending on the order.",
  },
  {
    id: "import",
    icon: "globe" as const,
    title: "Import Support",
    description:
      "We help simplify the process from sourcing to dispatch and delivery.",
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
    icon: "route" as const,
    title: "End-to-End Handling",
    description: "We can support the full journey from sourcing to delivery.",
  },
  {
    icon: "map-pin" as const,
    title: "China-Based Support",
    description: "We work close to manufacturers and suppliers in China.",
  },
  {
    icon: "message" as const,
    title: "Clear Communication",
    description: "You stay informed with direct and practical updates.",
  },
  {
    icon: "clipboard" as const,
    title: "Goods Inspection",
    description:
      "We inspect manufactured goods before dispatch to help reduce risk.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Share Your Need",
    description:
      "Tell us what product you need, the quantity, and where it has to go.",
  },
  {
    step: "02",
    title: "Source & Quote",
    description:
      "We explore suitable manufacturers and prepare the right quote.",
  },
  {
    step: "03",
    title: "Inspect & Confirm",
    description:
      "We coordinate production and inspect the goods before dispatch.",
  },
  {
    step: "04",
    title: "Ship & Deliver",
    description:
      "We arrange shipping and delivery based on the selected terms.",
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
      "Goods are made available at the agreed factory or location. The buyer generally takes responsibility for collection and onward transport.",
  },
  {
    id: "fob",
    code: "FOB",
    title: "Free On Board",
    description:
      "For sea shipments, the seller delivers the goods on board the vessel at the named port of shipment.",
  },
  {
    id: "cif",
    code: "CIF",
    title: "Cost, Insurance & Freight",
    description:
      "For sea shipments, the seller pays freight and specified insurance to the destination port, although shipment risk transfers when goods are loaded at origin.",
  },
  {
    id: "ddp",
    code: "DDP",
    title: "Delivered Duty Paid",
    description:
      "The seller takes responsibility for delivery to the agreed destination, including import clearance and applicable duties.",
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
