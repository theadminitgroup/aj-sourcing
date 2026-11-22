export const siteConfig = {
  name: "AJ Sourcing",
  tagline: "One platform for every import, from China to your door.",
  email: "ahmad@ahj.com.hk",
  location:
    "Room 1506, International Trade Centre, Sha Tsui Road, Tsuen Wan, New Territories, Hong Kong",
  instagram: "https://www.instagram.com/ajsourcing.com.hk/",
  facebook: "https://www.facebook.com/profile.php?id=61596692887448",
  /** Singular primary CTA label — use everywhere. */
  primaryCta: "Get a Free Quote",
  heroVideo: {
    src: "/videos/aj-hero.mp4",
    poster: "/videos/aj-hero-poster.jpg",
  },
};

export const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
];

export const homepageCopy = {
  hero: {
    heading: "Import from China with confidence.",
    subtext:
      "From finding suitable manufacturers to coordinating production, quality inspections, and international shipping, AJ Sourcing helps you bring your products from China to your destination.",
    ctas: [
      { label: siteConfig.primaryCta, href: "#contact", variant: "primary" as const },
      { label: "Explore Services", href: "#services", variant: "secondary" as const },
    ],
  },
  clients: {
    heading: "Trusted Across Industries",
    subtext:
      "Businesses across industries rely on AJ Sourcing for product sourcing and import support from China.",
  },
  services: {
    heading: "What We Do",
    subtext:
      "From finding manufacturers to inspecting finished goods and arranging delivery, we coordinate the work behind your order.",
  },
  brandLaunch: {
    heading: "Starting Something New?",
    subtext:
      "Launching a business comes with a lot to figure out. From sourcing your first products to building your brand and getting online, we can help connect the pieces.",
    pillars: [
      {
        id: "product-sourcing",
        title: "Product Sourcing",
        description:
          "Find suitable manufacturers in China, coordinate product requirements, and bring your sourcing plans to life.",
      },
      {
        id: "branding-design",
        title: "Branding & Design",
        description:
          "Get connected with creative professionals for brand identity, packaging, and product presentation.",
      },
      {
        id: "digital-presence",
        title: "Digital Presence",
        description:
          "Build your online presence with support for websites, online stores, and digital marketing.",
      },
    ] as const,
  },
  howItWorks: {
    heading: "How It Works",
    subtext:
      "Four straightforward steps, from your first enquiry to the agreed delivery arrangement.",
  },
  shipping: {
    heading: "Import on Your Terms",
    subtext:
      "From factory pickup to door-to-door delivery, we coordinate shipping arrangements that suit your requirements.",
  },
  whyUs: {
    heading: "Why AJ Sourcing?",
    subtext:
      "One dedicated partner to coordinate your sourcing journey and keep you informed along the way.",
  },
  metrics: {
    heading: "By the Numbers",
    subtext: "Our experience and operations, at a glance.",
  },
  about: {
    label: "About Us",
    body:
      "We are a China sourcing partner committed to clarity, quality, and accountability on every order. With over a decade of experience, we help businesses find manufacturers, coordinate production, inspect finished goods, and deliver worldwide.",
    metrics: [
      {
        value: "10",
        unit: "YRS",
        label: "Sourcing experience",
      },
      {
        value: "200",
        unit: "PARTNERS",
        label: "Across China",
      },
    ],
  },
  banner: {
    heading: "Ready to Import?",
    subtext:
      "Tell us what you're looking for. We'll help you find the right way to source it from China.",
    primaryCta: siteConfig.primaryCta,
    secondaryCta: "Email Us",
  },
  showcase: {
    heading: "What Can We Source?",
    subtext:
      "From everyday products to specialized equipment, we help businesses source across a wide range of industries.",
    ctaLabel: siteConfig.primaryCta,
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
    label: "On time delivery rate",
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
      "We identify suitable manufacturers in China based on your product requirements, specifications, and quantities.",
    image: "/images/services/01-manufacturer-sourcing.jpg",
    imageAlt:
      "AJ Sourcing team reviewing product samples with a manufacturer in China",
  },
  {
    id: "production",
    number: "02",
    title: "Production Coordination",
    description:
      "We communicate with manufacturers, coordinate requirements, and monitor production progress.",
    image: "/images/services/02-production-coordination.jpg",
    imageAlt:
      "On site production coordination with factory staff reviewing progress on a tablet",
  },
  {
    id: "inspection",
    number: "03",
    title: "Quality Inspection",
    description:
      "We inspect finished goods against agreed specifications before they are dispatched.",
    image: "/images/services/03-quality-inspection.jpg",
    imageAlt:
      "Quality inspector checking finished goods against specifications before dispatch",
  },
  {
    id: "shipping",
    number: "04",
    title: "Shipping & Delivery",
    description:
      "We coordinate international freight, customs clearance, and delivery according to your chosen arrangement.",
    image: "/images/services/04-shipping-delivery.jpg",
    imageAlt:
      "Port logistics coordinating container shipping and international freight",
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
    id: "sports",
    title: "Sports & Outdoor",
    src: "/images/categories/sports-outdoor.png",
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
    title: "End to End Coordination",
    description:
      "From finding suitable manufacturers to arranging shipment, we coordinate the services your order requires.",
  },
  {
    number: "02",
    title: "On the Ground Team",
    description:
      "Our China based team works directly with manufacturers and suppliers to coordinate your sourcing requirements.",
  },
  {
    number: "03",
    title: "One Dedicated Contact",
    description:
      "Communicate with one AJ Sourcing representative throughout your order instead of managing multiple parties.",
  },
  {
    number: "04",
    title: "Proactive Updates",
    description:
      "Stay informed about production, inspection, and shipping as your order progresses.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us what you need, including quantity, specifications, and destination.",
    image: "/images/how-it-works/01-share-requirements.png",
    imageAlt:
      "Discussing product requirements and sourcing needs with the AJ Sourcing team",
  },
  {
    step: "02",
    title: "Source & Quote",
    description:
      "We identify suitable manufacturers and prepare your quotation.",
    image: "/images/how-it-works/02-source-quote.png",
    imageAlt:
      "Coordinating with manufacturers in China to prepare a clear quotation",
  },
  {
    step: "03",
    title: "Produce & Inspect",
    description:
      "We coordinate manufacturing and inspect finished goods against agreed requirements.",
    image: "/images/how-it-works/03-produce-inspect.png",
    imageAlt:
      "Inspecting finished goods against agreed specifications before dispatch",
  },
  {
    step: "04",
    title: "Ship & Deliver",
    description:
      "We arrange shipping, customs, and delivery according to your selected service.",
    image: "/images/how-it-works/04-ship-deliver.png",
    imageAlt:
      "Arranging international shipping and delivery to the agreed destination",
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
    description:
      "Under Ex Works, goods are ready at the factory. We can arrange collection and onward shipping to your destination.",
  },
  {
    id: "fob",
    code: "FOB",
    description:
      "With Free On Board, your supplier loads the goods onto the vessel. We can arrange sea freight and onward delivery.",
  },
  {
    id: "cif",
    code: "CIF",
    description:
      "Under Cost, Insurance & Freight, your supplier covers sea freight and required insurance to the destination port. We can coordinate clearance and final delivery.",
  },
  {
    id: "ddp",
    code: "DDP",
    description:
      "With Delivered Duty Paid, shipping, import clearance, and duties are included up to the agreed destination. We can coordinate this arrangement where available.",
  },
];

export const contactFormServices = [
  "Product Sourcing & Manufacturing",
  "Production & Quality Inspection",
  "Shipping & Import Logistics",
  "Complete Sourcing Support",
  "New Business Launch",
  "Other / Not Sure Yet",
];
