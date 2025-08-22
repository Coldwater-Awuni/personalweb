import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: FaTwitter, href: 'https://twitter.com' },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-foreground text-center md:text-left mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Portfolio Owner. All rights reserved.</p>
          <p className="text-sm text-foreground/60">Built with Next.js and Tailwind CSS</p>
        </div>
        <div className="flex items-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
