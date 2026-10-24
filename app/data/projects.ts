export interface Project {
  id: string;
  title: string;
  category: "EdTech & SaaS" | "Directories & FinTech" | "Wellness & Tourism" | "Travel & Pilgrimage" | "B2B & Trade" | "Social Networking";
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  link: string;
  github?: string;
  featured: boolean;
  tags: string[];
  stats?: { label: string; value: string };
}

export const projects: Project[] = [
  {
    id: "thelibraryhub",
    title: "TheLibraryHub",
    category: "EdTech & SaaS",
    tagline: "Smart Library Discovery & Management Platform",
    description:
      "A flagship SaaS platform connecting students and learners with nearby libraries and quiet study spaces across India, while empowering library owners with automated seat reservation, digital cataloging, and membership subscription management.",
    highlights: [
      "Real-time seat discovery & instant online booking",
      "Comprehensive administration suite for library operators",
      "Automated membership subscriptions and renewals"
    ],
    image: "/thelibraryhub.png",
    link: "https://thelibraryhub.in/",
    featured: true,
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    stats: { label: "Coverage", value: "Pan-India" }
  },
  {
    id: "cadir",
    title: "cadir — CA Tools Directory",
    category: "Directories & FinTech",
    tagline: "Community Directory of Software for Indian Chartered Accountants",
    description:
      "The dedicated community-built directory of software tools tailored for Indian Chartered Accountants. Catalogs, categorizes, and reviews 100+ specialized accounting products covering GST return filing, audit working papers, ROC compliance, ITR calculation, and office practice management.",
    highlights: [
      "100+ curated tools across 22 professional accounting categories",
      "Peer reviews and community ratings from practicing CAs",
      "Instant search, category filters, and workflow recommendations"
    ],
    image: "/cadir.png",
    link: "https://cadir--catoolsdir.asia-southeast1.hosted.app/",
    featured: true,
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    stats: { label: "Tools Listed", value: "100+" }
  },
  {
    id: "askravi",
    title: "Askravi IND Foundation",
    category: "Wellness & Tourism",
    tagline: "Wellness Staycations & Sustainable Tourism Platform",
    description:
      "Official digital portal for the Askravi IND Foundation, promoting active wellness travel, mental well-being retreats, and rejuvenating staycations for public sector and corporate professionals, while driving sustainable youth employment across India's tourism destinations.",
    highlights: [
      "Curated wellness travel campaigns and retreat itineraries",
      "Youth empowerment and sustainable local tourism development",
      "Modern dynamic visual branding and smooth experiential UI"
    ],
    image: "/askravi.png",
    link: "https://askravi.in/",
    featured: false,
    tags: ["React", "Tailwind CSS", "Vite", "Node.js", "Framer Motion"],
    stats: { label: "Mission", value: "Active Wellness" }
  },
  {
    id: "safar-e-ibadat",
    title: "Safar-e-Ibadat",
    category: "Travel & Pilgrimage",
    tagline: "Sacred Pilgrimage & Travel Companion Portal",
    description:
      "A specialized pilgrimage travel portal designed to support spiritual seekers embarking on sacred Umrah, Hajj, and Ziyarat journeys. Provides verified package discovery, visa coordination, hotel accommodations near holy sanctuaries, and step-by-step spiritual rituals guides.",
    highlights: [
      "Complete Umrah, Hajj & Ziyarat package discovery",
      "Direct flight and sanctuary-adjacent hotel reservations",
      "Interactive spiritual guides, prayer schedules, and checklists"
    ],
    image: "/karbala.png",
    link: "https://karbala-fd637.web.app/",
    featured: false,
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    stats: { label: "Pilgrimage", value: "Full-Suite" }
  },
  {
    id: "crystindia",
    title: "CrystIndia",
    category: "B2B & Trade",
    tagline: "Global Chemical Export Excellence & Trade Portal",
    description:
      "Modern international trade and B2B export platform connecting certified Indian chemical and industrial product manufacturers with global buyers in over 50 countries. Features dynamic multi-category catalogs, instant Request-for-Quote (RFQ) inquiries, and international standards compliance.",
    highlights: [
      "Global export reach spanning 50+ countries worldwide",
      "Rapid B2B quote request system and inquiries workflow",
      "ISO 9001, CE Certified, and FDA regulatory compliance tracking"
    ],
    image: "/crystindia.png",
    link: "https://crystindia-ea765.web.app/",
    featured: false,
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    stats: { label: "Global Reach", value: "50+ Countries" }
  },
  {
    id: "socialplate",
    title: "SocialPlate",
    category: "Social Networking",
    tagline: "Real-time Community Social Networking App",
    description:
      "A feature-rich social networking web application facilitating real-time feed updates, story sharing, photo posting, messaging, and community interactions powered by scalable cloud databases.",
    highlights: [
      "Real-time feed updates and ephemeral visual story creation",
      "Interactive posts with photo sharing and user engagement",
      "Cloud-native database synchronization with Firebase"
    ],
    image: "/image2.png",
    link: "https://socialplate-e615e.web.app/",
    featured: false,
    tags: ["React", "Firebase", "Tailwind CSS", "Cloud Firestore"],
    stats: { label: "Architecture", value: "Realtime Cloud" }
  }
];

export const projectCategories = [
  "All",
  "EdTech & SaaS",
  "Directories & FinTech",
  "Wellness & Tourism",
  "Travel & Pilgrimage",
  "B2B & Trade"
] as const;
