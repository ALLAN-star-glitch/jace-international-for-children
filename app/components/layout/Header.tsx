'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/app/components/shared/Container';
import Button from '../shared/Button';
import { NAVIGATION_ITEMS } from '../../lib/Constants';
import Image from 'next/image';

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

  // No effect needed for closing menu - we'll handle it in the Link click

  const headerClasses = [
    'fixed top-0 w-full z-50 transition-all duration-300',
    isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  ].filter(Boolean).join(' ');

  // Function to close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={headerClasses}>
      <Container className="py-4">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo with semantic markup */}
        
<Link href="/" onClick={closeMobileMenu} className="block">
  {/* eslint-disable-next-line react/jsx-no-undef */}
  <Image 
    src="/logo-main.jpeg" 
    alt="JACE for Children International" 
    width={180} 
    height={50}
    className="h-10 w-auto"
    priority
  />
</Link>

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
                    isActive ? 'text-deep-blue font-medium' : 'text-charcoal hover:text-deep-blue'
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
            <Button variant="donate" size="sm" aria-label="Donate to support children in Kenya">
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-charcoal hover:text-deep-blue focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm p-2"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-navigation"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-navigation"
            className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-warm-sand shadow-lg animate-fadeIn"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <Container className="py-6 space-y-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu} // Close menu on click
                    className={[
                      'block transition py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-vibrant-pink',
                      isActive ? 'text-deep-blue bg-deep-blue/5 font-medium' : 'text-charcoal hover:text-deep-blue hover:bg-ivory'
                    ].filter(Boolean).join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Button 
                variant="donate" 
                size="sm" 
                fullWidth 
                onClick={closeMobileMenu}
                aria-label="Donate to support children in Kenya"
              >
                Donate
              </Button>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
}