import Image from 'next/image';
import Link from 'next/link';
import { skills } from '@/content/skills';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">About Me</h1>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholders/profile.jpg" // Placeholder image
              alt="Profile Picture"
              fill={true}
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg text-foreground/80 mb-4">
            I am a passionate and versatile creator with a deep-rooted love for both the digital and physical realms of technology. My journey began with taking apart and reassembling computers, which sparked a lifelong curiosity for how things work.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
            This curiosity led me to the world of software development, where I specialize in building dynamic and user-friendly applications using modern technologies like React, Next.js, and Flutter. I thrive on solving complex problems and turning innovative ideas into tangible, high-quality products.
          </p>
          <p className="text-lg text-foreground/80">
            Beyond the screen, I am an avid maker and fabricator. I operate CNC machines, work with electronics, and utilize tools like Blender and Photoshop to bring my creative visions to life. This unique blend of skills allows me to approach challenges with a holistic perspective, bridging the gap between digital design and physical creation.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-primary/20 text-primary font-semibold px-4 py-2 rounded-full">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
            <Link href="/skills" className="text-primary hover:text-primary-hover transition-colors font-semibold">
                View Skill Details &rarr;
            </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
