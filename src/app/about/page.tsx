'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import { 
  User, 
  Briefcase, 
  Code2, 
  Palette, 
  Settings, 
  Cpu,
  Award,
  MapPin,
  Mail,
  Calendar
} from 'lucide-react';
import { skills, experience } from '@/content/skills';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Daniel Awuni | Full-Stack Developer & BSc Computer Engineering Graduate';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Meet Daniel Awuni, a BSc Computer Engineering graduate and full-stack developer specializing in web applications, graphic design, digital fabrication, and hardware systems. Based in Accra, Ghana.');
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', 'About Daniel Awuni | Full-Stack Developer & Digital Designer');
    if (ogDescription) ogDescription.setAttribute('content', 'Learn about Daniel Awuni\'s journey as a BSc Computer Engineering graduate and full-stack developer specializing in modern web applications, graphic design, digital fabrication, and hardware systems.');
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const skillCategories = [
    { icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { icon: Palette, color: 'from-purple-500 to-pink-500' },
    { icon: Settings, color: 'from-orange-500 to-red-500' },
    { icon: Cpu, color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Software Developer & Digital Fabricator blending full‑stack engineering, CNC production, and design thinking.
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-12 mb-20"
        >
          {/* Profile Image & Quick Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="glass-card p-8 text-center mb-8">
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <User size={80} className="text-white/60" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Software Developer & Digital Fabricator</h2>
              <p className="text-white/70 mb-6">Full‑Stack | CNC | AI‑Assisted Workflows</p>
              
              {/* Quick Stats */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <Award size={18} className="text-purple-400" />
                  <span>BSc Computer Engineering, GCTU</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin size={18} className="text-purple-400" />
                  <span>Accra, Ghana (Remote & On‑site)</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar size={18} className="text-purple-400" />
                  <span>4+ Years Professional Experience</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Award size={18} className="text-purple-400" />
                  <span>20+ Software & Fabrication Projects</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Mail size={20} className="text-purple-400" />
                Let&apos;s Connect
              </h3>
              <p className="text-white/70 mb-4 text-sm">
                Always open to discussing new opportunities and interesting projects.
              </p>
              <motion.a
                href="/contact"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            {/* About Story */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Briefcase className="text-purple-400" />
                Professional Journey
              </h2>
              
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  I build scalable software and fabricate high‑quality physical outputs—bridging code, design, and precision manufacturing. My path started with hardware tinkering and evolved into full‑stack development and advanced digital fabrication.
                </p>
                <p>
                  Today I architect web platforms (Next.js, React, Node, Flutter) and integrate performance, accessibility, and maintainability from the outset. On the fabrication side I translate CAD concepts into production‑ready outputs using CNC machining, laser cutting and iterative prototyping.
                </p>
                <p>
                  I actively integrate AI tooling into research, content generation, workflow acceleration and early design exploration—treating it as an augmentation layer, not a replacement for craft.
                </p>
                <p>
                  Education in Computer Engineering (GCTU) strengthened my systems mindset, enabling smooth navigation between abstractions (APIs, state, data) and physical constraints (materials, tolerances, mounting).
                </p>
                <p>
                  Whether delivering multilingual platforms, optimizing e‑commerce flows, or fabricating exhibition signage, I focus on clarity, reliability, and measurable impact.
                </p>
              </div>
            </div>

            {/* Values/Approach */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">My Approach</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-purple-400">Innovation First</h3>
                  <p className="text-white/70 text-sm">
                    Always exploring cutting-edge technologies and creative solutions 
                    that push boundaries and deliver exceptional results.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-cyan-400">Quality Craftsmanship</h3>
                  <p className="text-white/70 text-sm">
                    Attention to detail in every line of code, every design element, 
                    and every fabricated component ensures lasting value.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-green-400">Collaborative Spirit</h3>
                  <p className="text-white/70 text-sm">
                    Working closely with clients and teams to understand needs and 
                    deliver solutions that exceed expectations.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-orange-400">Continuous Learning</h3>
                  <p className="text-white/70 text-sm">
                    Staying current with industry trends and constantly expanding 
                    skill sets across multiple disciplines.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => {
              const categoryStyle = skillCategories[categoryIndex % skillCategories.length];
              return (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryStyle.color}`}>
                      <categoryStyle.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{skillCategory.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {skillCategory.items.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/90">{skill.name}</span>
                          <span className="text-white/60">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${categoryStyle.color} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Mobile Background SVG */}
          <div className="lg:hidden sticky top-40 pointer-events-none h-screen flex items-center justify-center">
            <Image
              src="/Daniei_standing.svg"
              alt=""
              width={400}
              height={600}
              className="w-full max-w-sm h-auto object-contain opacity-30"
              aria-hidden="true"
            />
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            {/* Sticky Image - Hidden on Mobile */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:block lg:sticky lg:top-20"
            >
              <div className="glass-card p-8 text-center">
                <Image
                  src="/Daniei_standing.svg"
                  alt="Daniel Standing"
                  width={400}
                  height={600}
                  className="w-full max-w-sm mx-auto h-auto"
                />
                <p className="text-white/60 mt-4 text-sm">
                  Professional journey through code & creation
                </p>
              </div>
            </motion.div>
            
            {/* Timeline Content */}
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <div className="text-sm text-purple-400 font-semibold mb-2">
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-white/60 mb-3">{exp.company}</div>
                  <p className="text-white/80 mb-4">{exp.description}</p>
                  
                  <div className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center gap-2 text-sm text-white/70">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
