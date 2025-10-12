'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const ContactPage = () => {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
  document.title = 'Contact | Let\u2019s Work Together';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ready to start your next project? Contact me for web development, graphic design, digital fabrication, or hardware solutions. Available worldwide with 24-hour response time.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'danielawuni53@gmail.com',
      href: 'mailto:danielawuni53@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 542 077 533',
      href: 'tel:+233542077533',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available Worldwide',
      href: null,
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours',
      href: null,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:text-sky-400'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Brand Identity',
    'Digital Fabrication',
    'Hardware Project',
    'Consultation',
    'Other'
  ];

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

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Collaborate</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let&apos;s discuss your project and 
            create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="text-purple-400" />
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    className="flex items-center gap-4"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color}`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">{info.label}</div>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-white hover:text-purple-400 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card hover:scale-110 transition-all duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h3 className="text-xl font-bold mb-4">Current Availability</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-white/70 text-sm">
                I&apos;m currently accepting new clients and exciting project opportunities. 
                Let&apos;s discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants} className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-white/90 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-gray-800">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white/90 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="" className="bg-gray-800">Select budget range</option>
                      <option value="under-5k" className="bg-gray-800">Under $5,000</option>
                      <option value="5k-10k" className="bg-gray-800">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-gray-800">$10,000 - $25,000</option>
                      <option value="25k-plus" className="bg-gray-800">$25,000+</option>
                      <option value="discuss" className="bg-gray-800">Let&apos;s discuss</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white/90 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="What's your project about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                    placeholder="Tell me more about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-white/60">
                    * Required fields
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isLoading ? { scale: 1.02 } : {}}
                    whileTap={!isLoading ? { scale: 0.98 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                >
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-green-400 font-medium">
                    Message sent successfully! I&apos;ll get back to you within 24 hours.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center gap-3"
                >
                  <AlertCircle size={20} className="text-red-400" />
                  <span className="text-red-400 font-medium">
                    Failed to send message. Please try again or email me directly.
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
