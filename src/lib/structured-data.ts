export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Daniel Awuni",
    "alternateName": "Daniel Awuni",
    "jobTitle": "Full-Stack Developer & Digital Designer",
    "description": "BSc Computer Engineering graduate and full-stack developer specializing in modern web applications, graphic design (vector graphics), digital fabrication, IT systems, and computer hardware.",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev"}/og-image.jpg`,
    "sameAs": [
      "https://github.com/Coldwater-Awuni",
      "https://linkedin.com/in/daniel-awuni",
      "https://twitter.com/danielawuni"
    ],
    "knowsAbout": [
      "Web Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "Graphic Design",
      "Vector Graphics",
      "Adobe Illustrator",
      "Digital Fabrication",
      "CNC Machining",
      "3D Printing",
      "Hardware Systems",
      "IT Systems",
      "Computer Engineering",
      "Software Architecture",
      "UI/UX Design",
      "Database Design",
      "API Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full-Stack Developer",
      "occupationLocation": {
        "@type": "Place",
        "name": "Accra, Ghana"
      },
      "skills": [
        "React",
        "Flutter",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "MongoDB",
        "Docker",
        "Git",
        "Adobe Creative Suite",
        "CNC Machining",
        "3D Modeling"
      ]
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Ghana Communication Technology University (GCTU)",
      "educationalCredentialAwarded": "BSc Computer Engineering"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Accra",
      "addressCountry": "Ghana"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233 542 077 533",
      "contactType": "personal",
      "email": "danielawuni53@gmail.com",
      "availableLanguage": "English"
    },
    "gender": "Male",
    "nationality": "Ghanaian"
  },

  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Daniel Awuni Portfolio",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev",
    "description": "Professional portfolio showcasing full-stack development, graphic design, and digital fabrication services by Daniel Awuni.",
    "founder": {
      "@type": "Person",
      "name": "Daniel Awuni"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+233 542 077 533",
      "contactType": "customer service",
      "email": "danielawuni53@gmail.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://github.com/Coldwater-Awuni",
      "https://linkedin.com/in/daniel-awuni"
    ]
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Daniel Awuni | Full-Stack Developer & Digital Designer Portfolio",
    "alternateName": "Daniel Awuni Portfolio",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev",
    "description": "Professional portfolio of Daniel Awuni, a BSc Computer Engineering graduate and full-stack developer specializing in web applications, graphic design, digital fabrication, and hardware systems.",
    "author": {
      "@type": "Person",
      "name": "Daniel Awuni",
      "jobTitle": "Full-Stack Developer",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Ghana Communication Technology University (GCTU)"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Daniel Awuni"
    },
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Person",
      "name": "Daniel Awuni"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev"}/projects?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Daniel Awuni",
      "jobTitle": "Full-Stack Developer",
      "description": "BSc Computer Engineering graduate specializing in web development, graphic design, and digital fabrication."
    }
  },

  breadcrumb: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev"}/about`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev"}/projects`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${process.env.NEXT_PUBLIC_SITE_URL || "https://danielawuni.dev"}/contact`
      }
    ]
  }
};