'use client';

import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
} from 'react-icons/fa';

interface SocialIconsProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showLabels?: boolean;
}

const iconSizes = {
  sm: 'w-3 h-3 sm:w-4 sm:h-4',
  md: 'w-4 h-4 sm:w-5 sm:h-5',
  lg: 'w-5 h-5 sm:w-6 sm:h-6'
};

const variantColors = {
  light: 'text-white hover:text-vibrant-pink',
  dark: 'text-charcoal hover:text-vibrant-pink'
};

export default function SocialIcons({ 
  variant = 'light', 
  size = 'md', 
  className = '',
  showLabels = false
}: SocialIconsProps) {
  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a 
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${variantColors[variant]} transition-colors flex items-center gap-2`}
            aria-label={social.label}
          >
            <Icon className={iconSizes[size]} />
            {showLabels && (
              <span className="text-sm hidden sm:inline">{social.label}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}