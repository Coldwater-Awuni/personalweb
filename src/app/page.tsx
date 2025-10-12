import Hero from "@/components/home/Hero";
import SkillsGrid from "@/components/home/SkillsGrid";
import Stats from "@/components/home/Stats";
import FeaturedProjects from "@/components/home/FeaturedProjects";

export const metadata = {
  title: "Daniel Awuni | Full-Stack Developer & Digital Designer",
  description: "Daniel Awuni - BSc Computer Engineering graduate and full-stack developer specializing in modern web applications, graphic design (vector graphics), digital fabrication, IT systems, and computer hardware. View my portfolio and get in touch.",
  keywords: [
    "Daniel Awuni",
    "full-stack developer",
    "web developer",
    "graphic designer",
    "digital fabrication",
    "computer engineering",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "portfolio",
    "Ghana developer",
    "freelance developer"
  ],
  openGraph: {
    title: "Daniel Awuni | Full-Stack Developer & Digital Designer",
    description: "BSc Computer Engineering graduate and full-stack developer specializing in web applications, graphic design, digital fabrication, and hardware systems.",
    type: "website",
  },
  twitter: {
    title: "Daniel Awuni | Full-Stack Developer & Digital Designer",
    description: "Full-stack developer and digital designer creating innovative solutions with modern web technologies and digital fabrication.",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <section className="py-20">
        <div className="container mx-auto px-6">
          <SkillsGrid />
        </div>
      </section> */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Stats />
        </div>
      </section>
      <FeaturedProjects />
    </div>
  );
}

