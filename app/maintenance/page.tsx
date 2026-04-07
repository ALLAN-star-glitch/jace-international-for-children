// app/maintenance/page.tsx
'use client';

import { useEffect } from 'react';

export default function MaintenancePage() {
  // Prevent any other content from loading
  useEffect(() => {
    // Hide any modals, toasts, or floating elements
    const style = document.createElement('style');
    style.id = 'maintenance-override';
    style.textContent = `
      /* Force hide all navigation, footer, and other site elements */
      header, 
      footer, 
      nav, 
      .site-header, 
      .main-navigation,
      [role="navigation"],
      .footer-section {
        display: none !important;
      }
      
      /* Ensure maintenance takes full viewport */
      html, body {
        margin: 0 !important;
        padding: 0 !important;
        overflow-x: hidden !important;
      }
      
      /* Remove any background from main content areas */
      main, .main-content {
        background: transparent !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Clean up when component unmounts
      const existingStyle = document.getElementById('maintenance-override');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-9999 bg-[#FBF9F7] flex flex-col items-center justify-center px-4 py-12 overflow-auto"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: '#FBF9F7',
      }}
    >
      {/* Decorative top accent */}
      <div className="w-16 h-px bg-[#FF0066]/30 mb-8" />
      
      {/* Main Content */}
      <div className="max-w-2xl text-center">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#0000FF] font-light mb-6 tracking-tight">
          Coming Soon
        </h1>
        
        <div className="w-20 h-px bg-[#FF0066] mx-auto mb-8" />
        
        <p className="text-[#2C3E50] text-lg sm:text-xl leading-relaxed mb-8">
          We&apos;re making thoughtful improvements to serve children and families better.
          Our site will be back with renewed purpose.
        </p>
        
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 bg-[#F0ECE7] px-4 py-2 rounded-full mb-12">
          <div className="w-2 h-2 bg-[#009933] rounded-full animate-pulse" />
          <span className="text-[#8C9AA6] text-sm uppercase tracking-wider">
            Maintenance in progress
          </span>
        </div>
        
        {/* Contact Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm border border-[#F0ECE7] max-w-md mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#0000FF]/5 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#0000FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-serif text-xl text-[#0000FF] mb-2">Need immediate assistance?</h3>
          <p className="text-[#2C3E50]/70 text-sm mb-4">Our team is still available during maintenance.</p>
          <a 
            href="mailto:info@jacechildren.org" 
            className="text-[#FF0066] hover:text-[#FF0066]/80 transition-colors font-medium inline-flex items-center gap-2"
          >
            info@jacechildren.org
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-[#8C9AA6] text-xs uppercase tracking-wider">
          JACE for Children International — Every child belongs in a family
        </p>
      </div>
    </div>
  );
}