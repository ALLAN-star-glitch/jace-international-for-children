'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/app/components/shared/Container';
import Button from '../shared/Button';
import { NAVIGATION_ITEMS } from '../../lib/Constants';
import Image from 'next/image';
import { 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

// Social Icons Component
const SocialIcons = () => (
  <div className="flex items-center space-x-4">
    <a 
      href="https://facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-vibrant-pink transition-colors"
      aria-label="Facebook"
    >
      <FaFacebookF className="w-4 h-4" />
    </a>
    <a 
      href="https://twitter.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-vibrant-pink transition-colors"
      aria-label="Twitter"
    >
      <FaTwitter className="w-4 h-4" />
    </a>
    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-vibrant-pink transition-colors"
      aria-label="Instagram"
    >
      <FaInstagram className="w-4 h-4" />
    </a>
    <a 
      href="https://linkedin.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-white hover:text-vibrant-pink transition-colors"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn className="w-4 h-4" />
    </a>
  </div>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getButtonVariant = () => {
    if (isScrolled) return 'donate';
    return 'primary';
  };

  return (
    <>
      {/* Top Header Bar - Contact Info and Socials */}
      <div className="bg-deep-blue text-white py-2 relative z-50">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <a 
                href="tel:+254123456789" 
                className="flex items-center gap-2 hover:text-vibrant-pink transition-colors"
              >
                <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+254 123 456 789</span>
              </a>
              <a 
                href="mailto:info@jacechildren.org" 
                className="flex items-center gap-2 hover:text-vibrant-pink transition-colors"
              >
                <FaEnvelope className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>info@jacechildren.org</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <SocialIcons />
          </div>
        </Container>
      </div>

      {/* Main Header - Solid Background */}
      <header className={`sticky top-0 w-full z-40 bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <Container className="py-3 md:py-4">
          <nav className="flex items-center justify-between" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu} className="block">
              <Image 
                src="/logo_transparent.png" 
                alt="JACE for Children International" 
                width={180} 
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Mobile Layout: Donate Button between Logo and Toggle */}
            <div className="flex items-center gap-4 md:hidden">
              <Button 
                variant="donate" 
                size="sm" 
                aria-label="Donate to support children in Kenya"
                className="whitespace-nowrap"
              >
                Donate
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-charcoal hover:text-vibrant-pink focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm p-2 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      'relative transition-colors focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm px-2 py-1',
                      'text-charcoal hover:text-deep-blue',
                      isActive && 'text-deep-blue font-medium'
                    ].filter(Boolean).join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-deep-blue" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
              <Button 
                variant="donate" 
                size="sm" 
                aria-label="Donate to support children in Kenya"
              >
                Donate
              </Button>
            </div>
          </nav>

          {/* Mobile Menu - Sidebar with proper animations */}
          <>
            {/* Backdrop */}
            <div 
              className={`
                fixed inset-0 bg-black/50 z-40 md:hidden transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
              `}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            
            {/* Sidebar Menu - Slides from Left */}
            <div 
              id="mobile-navigation"
              className={`
                fixed top-0 left-0 bottom-0 w-64 bg-white shadow-xl z-50 md:hidden
                transition-transform duration-300 ease-out transform
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
              `}
              role="navigation"
              aria-label="Mobile navigation"
            >
              {/* Close button inside sidebar */}
              <div className="flex justify-end p-4 border-b border-warm-sand">
                <button
                  onClick={closeMobileMenu}
                  className="text-charcoal hover:text-vibrant-pink focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm p-2"
                  aria-label="Close menu"
                >
                  <HiX className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                {NAVIGATION_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={[
                        'block py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-vibrant-pink',
                        isActive 
                          ? 'bg-deep-blue/5 text-deep-blue font-medium' 
                          : 'text-charcoal hover:text-deep-blue hover:bg-ivory'
                      ].filter(Boolean).join(' ')}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-4">
                  <Button 
                    variant="donate" 
                    size="md" 
                    fullWidth 
                    onClick={closeMobileMenu}
                    aria-label="Donate to support children in Kenya"
                  >
                    Donate Now
                  </Button>
                </div>
                
                {/* Contact Info in Mobile Menu */}
                <div className="pt-6 mt-6 border-t border-warm-sand">
                  <div className="space-y-3">
                    <a 
                      href="tel:+254123456789" 
                      className="flex items-center gap-2 text-sm text-charcoal hover:text-vibrant-pink transition-colors"
                    >
                      <FaPhone className="w-4 h-4" />
                      <span>+254 123 456 789</span>
                    </a>
                    <a 
                      href="mailto:info@jacechildren.org" 
                      className="flex items-center gap-2 text-sm text-charcoal hover:text-vibrant-pink transition-colors"
                    >
                      <FaEnvelope className="w-4 h-4" />
                      <span>info@jacechildren.org</span>
                    </a>
                  </div>
                  
                  {/* Social Icons in Mobile Menu */}
                  <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-warm-sand">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-vibrant-pink transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-vibrant-pink transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-vibrant-pink transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-charcoal hover:text-vibrant-pink transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Container>
      </header>
    </>
  );
}