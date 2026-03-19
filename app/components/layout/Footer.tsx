/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SOCIAL_LINKS, CONTACT_INFO, NAVIGATION_ITEMS } from '../../lib/Constants';
import Container from '@/app/components/shared/Container';

// Simple icon components with proper aria labels
const IconMap = {
  facebook: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
  ),
  twitter: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
  ),
  linkedin: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
  ),
  instagram: (props: any) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
  ),
  location: (props: any) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ),
  phone: (props: any) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
  ),
  email: (props: any) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const getIcon = (platform: string) => {
    const Icon = IconMap[platform as keyof typeof IconMap];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <footer className="relative text-white" role="contentinfo">
      {/* Background Image Container - Using Next.js Image for optimization */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/kenya-savanna-golden-hour.png"
          alt="Kenyan savanna landscape at golden hour"
          fill
          className="object-cover"
          priority={false}
          quality={85}
          sizes="100vw"
        />
        
        {/* Multi-layer gradient overlay for elegant depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/95 via-deep-blue/80 to-deep-blue/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent_70%)]" />
        
        {/* Subtle diagonal pattern overlay for texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #ffffff 0px,
              #ffffff 2px,
              transparent 2px,
              transparent 8px
            )`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* Footer Content */}
      <div className="relative pt-20 pb-8 backdrop-blur-[2px]">
        <Container>
          {/* Decorative top line */}
          <div className="w-24 h-px bg-gradient-to-r from-vibrant-pink/50 via-rich-green/30 to-transparent mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
            {/* Column 1: Brand - 30% width on desktop */}
            <div className="md:col-span-4 space-y-6">
              <h3 className="font-serif text-3xl text-white drop-shadow-lg">
                <Link 
                  href="/" 
                  className="hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm"
                >
                  JACE <span className="font-light">for Children</span>
                </Link>
              </h3>
              <p className="text-white/80 italic text-lg leading-relaxed drop-shadow">
                Every child belongs in a family.
              </p>
              <div className="flex space-x-5 pt-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    className="text-white/70 hover:text-vibrant-pink transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm p-1"
                    aria-label={`Follow us on ${social.platform}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links - 20% width */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="small-caps text-white/60 tracking-wider text-sm" id="footer-explore">EXPLORE</h4>
              <ul className="space-y-3" aria-labelledby="footer-explore">
                {NAVIGATION_ITEMS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link 
                        href={item.href}
                        className={[
                          'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm px-2 py-1 inline-block relative group',
                          isActive ? 'text-white font-medium' : 'text-white/70 hover:text-white'
                        ].filter(Boolean).join(' ')}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                        <span className="absolute -bottom-0.5 left-2 w-0 h-px bg-vibrant-pink/50 group-hover:w-4 transition-all duration-300" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 3: Contact - 25% width */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="small-caps text-white/60 tracking-wider text-sm" id="footer-contact">CONNECT</h4>
              <ul className="space-y-4" aria-labelledby="footer-contact">
                <li className="flex items-start gap-3 group">
                  <span className="text-rich-green/70 mt-0.5 flex-shrink-0 group-hover:text-rich-green transition-colors" aria-hidden="true">{getIcon('location')}</span>
                  <address className="text-white/70 not-italic group-hover:text-white/90 transition-colors">
                    {CONTACT_INFO.address}
                  </address>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="text-rich-green/70 flex-shrink-0 group-hover:text-rich-green transition-colors" aria-hidden="true">{getIcon('phone')}</span>
                  <a 
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                    className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm px-2 py-1"
                    aria-label="Call us"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <span className="text-rich-green/70 flex-shrink-0 group-hover:text-rich-green transition-colors" aria-hidden="true">{getIcon('email')}</span>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm px-2 py-1"
                    aria-label="Email us"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter - 25% width */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="small-caps text-white/60 tracking-wider text-sm" id="footer-newsletter">UPDATE</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Subscribe to our newsletter for updates on our work and ways to support children in Kenya.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="footer-newsletter">
                <label htmlFor="email-input" className="sr-only">
                  Email address for newsletter
                </label>
                <div className="relative">
                  <input
                    id="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/40 focus:outline-none focus:border-vibrant-pink transition-colors duration-300 pr-8"
                    required
                    aria-required="true"
                  />
                  <div className="absolute right-0 bottom-3 w-4 h-px bg-vibrant-pink/50 opacity-0 focus-within:opacity-100 transition-opacity" />
                </div>
                
                {isSubscribed && (
                  <p className="text-rich-green text-sm animate-fadeIn bg-rich-green/10 backdrop-blur-sm px-3 py-2 rounded" role="status">
                    ✓ Thank you for subscribing!
                  </p>
                )}
                
                <button
                  type="submit"
                  className="text-vibrant-pink small-caps text-sm hover:text-white hover:bg-vibrant-pink/20 px-4 py-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-pink inline-flex items-center gap-2 group"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Copyright with elegant divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-deep-blue/30 backdrop-blur-sm px-6 py-2 rounded-full text-white/50 small-caps text-xs border border-white/10">
                © {currentYear} JACE for Children International. All rights reserved.
              </span>
            </div>
            <p className="text-center text-white/40 small-caps text-xs mt-4">
              Registered charity in Kenya.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}