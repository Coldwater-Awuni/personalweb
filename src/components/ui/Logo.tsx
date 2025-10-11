'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showHover?: boolean;
}

const Logo = ({ className = '', size = 'md', showHover = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <Link
      href="/"
      className={`${sizeClasses[size]} font-bold gradient-text ${showHover ? 'hover:scale-105' : ''} transition-transform duration-300 ${className}`}
    >
      DA
    </Link>
  );
};

export default Logo;