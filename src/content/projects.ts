// Tailored project data derived from provided resume and detailed project descriptions.
// Each project emphasizes real-world impact, architecture, and Daniel's dual focus on software & fabrication.

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

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
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
  isPrivate?: boolean; // Indicates projects without public URLs (API, dashboard, internal tools)
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "subsaharan-investment-link-group",
    title: "SubSaharan Investment Link Group Corporate Platform",
    description: "Multilingual corporate website with 6-language i18n, 3D globe, and performance-focused Next.js 15 architecture.",
    longDescription: "A modern, multilingual corporate presence for a Sub-Saharan African consultancy. Implemented full internationalization across 6 languages (English, French, Spanish, Zulu, Hausa, Swahili) with SEO-friendly routing and metadata handling. Integrated an interactive 3D globe (react-globe.gl + Three.js) to visualize regional connectivity. Focused on accessibility, bundle splitting, and static export for global CDN distribution using Turbopack for rapid iteration.",
    image: "/projects/sub-saharan.png",
    tags: ["Next.js 15", "TypeScript", "i18n", "Three.js", "Framer Motion", "Turbopack"],
    category: "Development",
    demoUrl: "https://sub-saharaninvestmentlinkgroup.co.za/", 
    githubUrl: null, // Private repo
    featured: true,
    year: "2025",
    client: "SubSaharan Investment Link Group",
    duration: "4 weeks",
    technologies: [
      { name: "Next.js 15", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "react-globe.gl", category: "3D" },
      { name: "Three.js", category: "3D" },
      { name: "Framer Motion", category: "Animation" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "i18next", category: "Internationalization" }
    ],
    features: [
      "6-language internationalization with cultural adaptation",
      "Interactive 3D globe visualization",
      "Static export for CDN deployment",
      "Scroll-triggered motion & micro-interactions",
      "SEO-optimized dynamic metadata",
      "Performance tuned with bundle analysis"
    ],
    challenges: [
      "Balancing 3D interactivity with mobile performance",
      "Complex language routing & metadata",
      "Maintaining accessibility across dynamic content"
    ],
    results: [
      "70% faster dev builds via Turbopack",
      "Improved multilingual SEO foundation",
      "Scalable modular service data layer"
    ],
    gallery: [
      { type: 'image', url: '/projects/sub-saharan.png', caption: 'Project overview' },
      { type: 'image', url: '/projects/sub-saharan2.png', caption: 'Project About' }
    ],
  },
  {
    id: 2,
    slug: "bookstore-management-platform",
    title: "Bookstore Management Platform",
    description: "Full-stack bookstore with inventory, orders, AI marketing content, and secure payments.",
    longDescription: "A comprehensive e-commerce system supporting physical & digital book sales. Built an admin dashboard for inventory CRUD, order lifecycle, and customer insights. Integrated Paystack for payments, Firebase for auth + real-time Firestore updates, and Gemini AI (via Genkit) for automated promotional banner content. Emphasis on modular architecture, type safety, and operational efficiency.",
      image: "/projects/store.png",
      tags: ["Next.js", "Firebase", "Paystack", "AI", "TypeScript", "Zod"],
    category: "Development",
    demoUrl: "https://shop.sub-saharaninvestmentlinkgroup.co.za/store",
    githubUrl: null,
    featured: true,
    year: "2025",
    client: "SubSaharan Investment Link Group",
    duration: "6 weeks",
    technologies: [
      { name: "Next.js 14", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "Firebase Firestore", category: "Database" },
      { name: "Firebase Auth", category: "Auth" },
      { name: "Paystack", category: "Payments" },
      { name: "Zod", category: "Validation" },
      { name: "React Email", category: "Email" }
    ],
    features: [
      "Dual physical/digital product flow",
      "Role-based admin dashboard",
      "AI-generated marketing copy",
      "Automated email receipts",
      "Multi-currency pricing support",
      "Real-time inventory syncing"
    ],
    challenges: [
      "Coordinating asynchronous order/payment states",
      "Securing digital file delivery",
      "Balancing AI content with brand tone"
    ],
    results: [
      "Reduced manual promo writing time",
      "Enhanced operational clarity",
      "Scalable catalog architecture"
    ],
    gallery: [
      { type: 'image', url: '/projects/store.png', caption: 'Project overview' },
      { type: 'image', url: '/projects/store1.png', caption: 'Checkout flow' },
      { type: 'image', url: '/projects/store2.png', caption: 'Dashboard' }
    ],
  },
  {
    id: 3,
    slug: "brick-and-mortar-decor",
    title: "Brick & Mortar Decor E-Commerce Platform",
    description: "Luxury-focused storefront with 3D visualization, guest checkout, and performance optimization.",
    longDescription: "Premium e-commerce experience emphasizing brand storytelling and high performance. Implemented feature-based architecture with Zustand state management, Three.js for product visualization, WebP image pipeline, Paystack integration, and accessibility-aware responsive design. Created dynamic sitemaps and structured data for SEO growth.",
    image: "/projects/brickandmortardecor.png",
    tags: ["React", "Vite", "Three.js", "Zustand", "Tailwind", "SEO"],
    category: "Development",
    demoUrl: "https://brickandmortardecorgh.com",
    githubUrl: null,
    featured: true,
    year: "2025",
    client: "Brick & Mortar Decor",
    duration: "8 weeks",
    technologies: [
      { name: "React 18", category: "Framework" },
      { name: "Vite", category: "Build" },
      { name: "TypeScript", category: "Language" },
      { name: "Zustand", category: "State" },
      { name: "Three.js", category: "3D" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "MongoDB", category: "Database" }
    ],
    features: [
      "3D product visualization",
      "Guest + authenticated checkout",
      "Advanced image optimization pipeline",
      "Feature-based modular architecture",
      "Structured data & dynamic sitemap",
      "Dual storage (Firebase + R2)"
    ],
    challenges: [
      "Maintaining performance with rich media",
      "Synchronizing multi-provider storage",
      "Designing luxury UX with accessibility"
    ],
    results: [
      "Improved Core Web Vitals scores",
      "Higher user engagement on 3D views",
      "Scalable foundation for new verticals"
    ],
    gallery: [
      { type: 'image', url: '/projects/brickandmortardecor.png', caption: 'Project overview' },
      { type: 'image', url: '/projects/brickandmortardecor3.png', caption: 'Customer Usage' },
      { type: 'image', url: '/projects/brickandmortardecor2.png', caption: '3D Viewer' },
      { type: 'image', url: '/projects/brickandmortardecor_cart.png', caption: 'Cart' }


    ],
  },
  {
    id: 4,
    slug: "craftd-habitat-portfolio",
    title: "Craft'd Habitat Architectural Portfolio",
    description: "Performance-optimized static portfolio with custom lazy loading and luxury design system.",
    longDescription: "Architectural showcase site combining aesthetic precision with engineering performance. Built custom IntersectionObserver-based lazy loading for images/videos, modular CSS variable system, hierarchical navigation, and dual Firestore + EmailJS contact capture. Delivered an immersive browsing experience for project case studies.",
    image: "/projects/craftdhabitat.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Firebase", "Lazy Loading", "UI Architecture"],
    category: "Development",
    demoUrl: "https://craftdhabitat.com",
    githubUrl: null,
    featured: true,
    year: "2024",
    client: "Craft'd Habitat",
    duration: "6 weeks",
    technologies: [
      { name: "Vanilla JS (ES6)", category: "Frontend" },
      { name: "Firebase Firestore", category: "Database" },
      { name: "EmailJS", category: "Integration" },
      { name: "Swiper.js", category: "Carousel" },
      { name: "CSS Custom Properties", category: "Design System" }
    ],
    features: [
      "Custom media lazy loading system",
      "Responsive luxury typography scale",
      "Expandable content modules",
      "Firestore-backed contact capture",
      "Email notification workflow",
      "Touch-optimized navigation"
    ],
    challenges: [
      "Performance under heavy media load",
      "Consistent luxury brand feel across pages",
      "Progressive enhancement without build step"
    ],
    results: [
      "Reduced initial media payload",
      "Improved time-to-interactive",
      "Streamlined lead capture process"
    ],
    gallery: [
      { type: 'image', url: '/projects/craftdhabitat.png', caption: 'Home Page' }
    ],
  },
  {
    id: 5,
    slug: "ecommerce-admin-dashboard",
    title: "E-Commerce Admin Dashboard",
    description: "AI-assisted admin suite with analytics, coupon intelligence, and real-time operations.",
    longDescription: "Administrative control center for a commerce ecosystem: product, order, customer, and coupon management with AI-driven promotional recommendations. Implemented role-based access, Recharts analytics, real-time status transitions, and Genkit-powered insights. Emphasis on type safety (100% TS) and modular UI scalability.",
    image: "/projects/ecom-dashboard.png",
    tags: ["Next.js 15", "TypeScript", "AI", "Analytics", "Zod", "Tailwind"],
    category: "Development",
    demoUrl: "#",
    githubUrl: null,
    featured: false,
    year: "2025",
    client: "Internal Tooling",
    duration: "9 weeks",
    technologies: [
      { name: "Next.js 15", category: "Framework" },
      { name: "TypeScript", category: "Language" },
      { name: "Genkit AI", category: "AI" },
      { name: "Recharts", category: "Visualization" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Zod", category: "Validation" }
    ],
    features: [
      "Real-time dashboard metrics",
      "AI coupon & sales suggestions",
      "Order lifecycle management",
      "Role-based access control",
      "Data export & reporting",
      "Responsive admin UI kit"
    ],
    challenges: [
      "Synthesizing analytic + AI layers",
      "Maintaining type integrity across modules",
      "Optimizing large dataset rendering"
    ],
    results: [
      "Reduced manual promo planning",
      "Improved operational visibility",
      "Accelerated admin workflows"
    ],
    gallery: [
      { type: 'image', url: '/projects/ecom-dashboard.png', caption: 'Project overview' }
    ],
    isPrivate: true,
  },
  {
    id: 6,
    slug: "online-store-api-backend",
    title: "Online Store API Backend",
    description: "Secure, modular Node/Express API with dual storage, payment webhooks, and variant system.",
    longDescription: "Backend powering a modern commerce stack. Implemented flexible product variants (predefined + custom), Paystack payment verification with idempotent order creation, dual storage abstraction (Firebase + Cloudflare R2), Sharp-based image optimization, and comprehensive security middleware (rate limiting, origin allowlisting, structured logging).",
    image: "/projects/API.webp",
    tags: ["Node.js", "Express", "MongoDB", "Paystack", "Cloudflare R2", "Sharp"],
    category: "Development",
    demoUrl: "#",
    githubUrl: null,
    featured: false,
    year: "2024",
    client: "Platform Infrastructure",
    duration: "9 weeks",
    technologies: [
      { name: "Node.js", category: "Runtime" },
      { name: "Express.js", category: "Framework" },
      { name: "MongoDB", category: "Database" },
      { name: "Firebase Storage", category: "Storage" },
      { name: "Cloudflare R2", category: "Storage" },
      { name: "Sharp", category: "Image Processing" }
    ],
    features: [
      "Flexible product variant system",
      "Secure Paystack webhook flow",
      "Image optimization pipeline",
      "Dual cloud storage abstraction",
      "Comprehensive logging & rate limiting",
      "Guest + authenticated checkout support"
    ],
    challenges: [
      "Ensuring idempotent payment/order flow",
      "Managing multi-provider file storage",
      "Balancing security and developer velocity"
    ],
    results: [
      "99.9% uptime in testing",
      "Reduced media bandwidth usage",
      "Simplified future feature integration"
    ],
    gallery: [
      { type: 'image', url: '/projects/API.webp"', caption: 'Project overview' }
    ],
    isPrivate: true,
  }
];

export const categories = [
  { name: "All", value: "all" },
  { name: "Development", value: "Development" }
];