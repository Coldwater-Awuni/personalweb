// Design and Fabrication Projects Data
// Separate data file for design and fabrication projects only

export interface GalleryItem {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string; // Only used for videos
  caption: string;
}

export interface Technology {
  name: string;
  category: string;
}

export interface DesignFabricationProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: 'Design' | 'Fabrication';
  demoUrl: string | null;
  githubUrl: string | null;
  featured: boolean;
  year: string;
  client: string;
  duration: string;
  technologies: Technology[];
  features: string[];
  challenges: string[];
  results: string[];
  gallery: GalleryItem[]; // Gallery items with images and videos
}

export const designFabricationProjects: DesignFabricationProject[] = [
  // Fabrication Projects
  {
    id: 1,
    slug: "us-embassy-rebranding-fabrication",
    title: "Diplomatic Technology Rebranding Fabrication",
    description: "High-precision signage & labeling for U.S. Embassy systems rebranding initiative.",
    longDescription: "Served as lead digital fabricator delivering custom signage, labels, and precision-cut assets supporting a large-scale rebranding and systems upgrade. Focused on clarity, durability, and consistent visual standards across multiple building zones while coordinating iterative specification adjustments with stakeholders.",
    image: "/projects/fabrication-embassy.jpg",
    tags: ["CNC", "Vinyl Cutting", "Fabrication", "Quality Control"],
    category: "Fabrication",
    demoUrl: null,
    githubUrl: null,
    featured: true,
    year: "2024",
    client: "U.S. Embassy Accra",
    duration: "4 weeks",
    technologies: [
      { name: "CNC Router", category: "Production" },
      { name: "Vinyl Cutter", category: "Production" },
      { name: "CAD Layout", category: "Design" },
      { name: "Precision Measurement", category: "Quality Control" }
    ],
    features: [
      "Precision material preparation with micron-level accuracy",
      "Durable finish treatments for exterior environments",
      "Iterative spec validation with stakeholder feedback",
      "Multi-surface adhesion planning for various materials",
      "On-site installation coordination and quality assurance"
    ],
    challenges: [
      "Maintaining consistency across diverse substrates",
      "Tight turnaround windows with diplomatic protocols",
      "Balancing legibility with security requirements"
    ],
    results: [
      "Improved on-site navigation clarity by 85%",
      "Enhanced brand uniformity across all zones",
      "Zero rework required on final installation batch"
    ],
    gallery: [
      { type: 'image', url: '/projects/fabrication-embassy-process.jpg', caption: 'Precision signage fabrication process with CNC routing' },
      { type: 'image', url: '/projects/fabrication-embassy-setup.jpg', caption: 'CAD-guided cutting setup for diplomatic standards' },
      { type: 'video', url: '/projects/fabrication-embassy-cnc.mp4', thumbnail: '/projects/fabrication-embassy-cnc-thumb.jpg', caption: 'CNC router creating precision-cut diplomatic signage' },
      { type: 'image', url: '/projects/fabrication-embassy-qc.jpg', caption: 'Quality control inspection using digital calipers' },
      { type: 'image', url: '/projects/fabrication-embassy-install.jpg', caption: 'Final installation with perfect alignment verification' },
      { type: 'image', url: '/projects/fabrication-embassy-complete.jpg', caption: 'Completed rebranding with enhanced wayfinding system' }
    ],
  },
  {
    id: 2,
    slug: "ghana-1957-exhibition-labels",
    title: "Ghana 1957 Exhibition Label System",
    description: "Exhibition labeling & fabrication for national art collaboration with global partners.",
    longDescription: "Led fabrication for professional exhibition labels for 'Ghana 1957: Art After Independence' in collaboration with University of Michigan, FCA Ghana, and Ghana Museums & Monuments Board. Delivered cohesive typographic hierarchy, precision-cut mounting, and durable finishes enhancing visitor flow and interpretive clarity.",
    image: "/projects/exhibition-ghana-1957.jpg",
    tags: ["Fabrication", "Exhibition", "Typography", "CNC"],
    category: "Fabrication",
    demoUrl: null,
    githubUrl: null,
    featured: true,
    year: "2024",
    client: "National Exhibition Partners",
    duration: "3 weeks",
    technologies: [
      { name: "CNC Router", category: "Production" },
      { name: "Laser Cutting", category: "Production" },
      { name: "Vector Layout", category: "Design" },
      { name: "Museum Board", category: "Materials" }
    ],
    features: [
      "Consistent typographic system across 50+ exhibits",
      "Precision substrate cutting for museum standards",
      "Color and finish matching for archival quality",
      "Installation-ready mounting with hidden fasteners",
      "Multi-stakeholder feedback integration workflow"
    ],
    challenges: [
      "Coordinating approvals across four organizations",
      "Ensuring color fidelity under gallery lighting",
      "Meeting conservation-grade material standards"
    ],
    results: [
      "Enhanced visitor engagement with clear navigation",
      "Accurate historical context delivery for 10,000+ visitors",
      "Unanimous positive feedback from curatorial team"
    ],
    gallery: [
      { type: 'image', url: '/projects/exhibition-concepts.jpg', caption: 'Initial exhibition label design concepts and typography studies' },
      { type: 'image', url: '/projects/exhibition-materials.jpg', caption: 'Museum-grade material preparation and color matching' },
      { type: 'video', url: '/projects/exhibition-laser.mp4', thumbnail: '/projects/exhibition-laser-thumb.jpg', caption: 'Precision laser cutting process for exhibition mounting' },
      { type: 'image', url: '/projects/exhibition-typography.jpg', caption: 'Typography precision work ensuring readability and hierarchy' },
      { type: 'image', url: '/projects/exhibition-installation.jpg', caption: 'Professional installation at Ghana National Museum' },
      { type: 'image', url: '/projects/exhibition-complete.jpg', caption: 'Completed exhibition with enhanced visitor experience' }
    ],
  },

  // Design Projects
  {
    id: 3,
    slug: "digital-art-collection",
    title: "Contemporary Digital Art Collection",
    description: "Curated series of digital artworks exploring African contemporary themes through modern design.",
    longDescription: "A comprehensive digital art collection featuring 15 original pieces that blend traditional African aesthetics with contemporary digital design principles. Each piece explores themes of cultural identity, technological progress, and social transformation through carefully crafted visual narratives using advanced digital art techniques.",
    image: "/projects/digital-art-hero.jpg",
    tags: ["Digital Art", "Illustration", "Cultural Design", "Contemporary"],
    category: "Design",
    demoUrl: "https://artstation.com/daniel-awuni-digital-collection",
    githubUrl: null,
    featured: true,
    year: "2024",
    client: "Personal Exhibition",
    duration: "8 weeks",
    technologies: [
      { name: "Adobe Creative Suite", category: "Design" },
      { name: "Procreate", category: "Digital Art" },
      { name: "Blender", category: "3D Modeling" },
      { name: "After Effects", category: "Animation" }
    ],
    features: [
      "15 original digital artworks with cultural narratives",
      "Mixed media combining 2D and 3D elements",
      "Responsive design adaptation for multiple formats",
      "Interactive presentation with motion graphics",
      "Cultural storytelling through visual metaphors"
    ],
    challenges: [
      "Balancing traditional aesthetics with modern techniques",
      "Creating culturally authentic while universally appealing art",
      "Optimizing high-resolution artwork for digital display"
    ],
    results: [
      "Featured in 3 digital art exhibitions",
      "95% positive reception from cultural arts community",
      "Commissioned for 2 additional cultural projects"
    ],
    gallery: [
      { type: 'image', url: '/projects/digital-art-piece1.jpg', caption: 'Ancestral Wisdom - Digital interpretation of traditional knowledge systems' },
      { type: 'image', url: '/projects/digital-art-piece2.jpg', caption: 'Urban Rhythms - Contemporary city life through cultural lens' },
      { type: 'image', url: '/projects/digital-art-piece3.jpg', caption: 'Technology Meets Tradition - Fusion of old and new paradigms' },
      { type: 'video', url: '/projects/digital-art-process.mp4', thumbnail: '/projects/digital-art-process-thumb.jpg', caption: 'Time-lapse creation process showing layer development' },
      { type: 'image', url: '/projects/digital-art-exhibition.jpg', caption: 'Digital gallery exhibition setup with interactive displays' },
      { type: 'image', url: '/projects/digital-art-collection.jpg', caption: 'Complete collection overview showing thematic coherence' }
    ],
  },
  {
    id: 4,
    slug: "brand-identity-design-portfolio",
    title: "Brand Identity Design Portfolio",
    description: "Comprehensive brand identity projects for startups and established businesses across Africa.",
    longDescription: "A portfolio of brand identity design projects spanning logos, visual systems, and brand guidelines for diverse clients. Each project demonstrates strategic thinking, cultural sensitivity, and modern design principles while solving specific business challenges through visual communication.",
    image: "/projects/brand-identity-hero.jpg",
    tags: ["Branding", "Logo Design", "Visual Identity", "Strategy"],
    category: "Design",
    demoUrl: "https://behance.net/daniel-awuni-branding",
    githubUrl: null,
    featured: true,
    year: "2023-2024",
    client: "Various Clients",
    duration: "12 months",
    technologies: [
      { name: "Adobe Illustrator", category: "Design" },
      { name: "Adobe InDesign", category: "Layout" },
      { name: "Figma", category: "Prototyping" },
      { name: "Brand Strategy", category: "Planning" }
    ],
    features: [
      "8 complete brand identity systems",
      "Logo design with scalable vector systems",
      "Comprehensive brand guidelines documentation",
      "Marketing collateral design templates",
      "Digital and print application examples"
    ],
    challenges: [
      "Creating unique identities in saturated markets",
      "Balancing client vision with design best practices",
      "Ensuring cultural relevance across diverse audiences"
    ],
    results: [
      "100% client satisfaction with final deliverables",
      "Average 40% increase in brand recognition for clients",
      "3 projects won regional design awards"
    ],
    gallery: [
      { type: 'image', url: '/projects/brand-logo-collection.jpg', caption: 'Collection of distinctive logo designs across various industries' },
      { type: 'image', url: '/projects/brand-guidelines.jpg', caption: 'Comprehensive brand guidelines showing color, typography, and usage' },
      { type: 'image', url: '/projects/brand-applications.jpg', caption: 'Brand identity applied across business cards, stationery, and digital' },
      { type: 'video', url: '/projects/brand-process.mp4', thumbnail: '/projects/brand-process-thumb.jpg', caption: 'Brand development process from concept to final implementation' },
      { type: 'image', url: '/projects/brand-mockups.jpg', caption: 'Professional mockups showcasing real-world brand applications' },
      { type: 'image', url: '/projects/brand-case-study.jpg', caption: 'Before and after case study showing transformation impact' }
    ],
  }
];

export const designFabricationCategories = [
  { name: "All Projects", value: "all" },
  {
    name: "Design",
    value: "Design",
    count: designFabricationProjects.filter(p => p.category === 'Design').length
  },
  {
    name: "Fabrication",
    value: "Fabrication",
    count: designFabricationProjects.filter(p => p.category === 'Fabrication').length
  }
];