
'use client'
import Link from 'next/link';
import Button from '@/app/components/shared/Button';
import Container from '@/app/components/shared/Container';

export default function NotFound() {
  return (
    <Container className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-pink/20 via-transparent to-warm-yellow/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-deep-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      
      <div className="text-center max-w-2xl relative z-10">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[15rem] font-serif font-bold leading-none bg-gradient-to-r from-deep-blue via-pink-600 to-warm-orange bg-clip-text text-transparent animate-gradient">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg className="w-48 h-48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 8H22L16 12L19 18L12 14L5 18L8 12L2 8H9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-serif text-deep-blue mb-4">
          Oops! Lost in Kenya?
        </h2>
        
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-6 rounded-full" />
        
        <p className="text-charcoal mb-8 text-lg md:text-xl leading-relaxed">
          We couldn&apos;t find the page you&apos;re looking for. 
          <br />
          But don&apos;t worry—<span className="text-pink-600 font-semibold">children in Kenya still need your support</span>.
        </p>
        
        {/* Decorative icon row */}
        <div className="flex justify-center gap-3 mb-10">
          {['❤️', '🌟', '🌍', '🤝'].map((emoji, i) => (
            <span key={i} className="text-2xl animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
              {emoji}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/">
            <Button variant="primary" className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              🏠 Return Home
            </Button>
          </Link>
          <Link href="/get-involved">
            <Button variant="outline-pink" className="transform hover:scale-105 transition-all duration-300">
              🤝 Support Our Cause
            </Button>
          </Link>
        </div>

        {/* Additional helpful links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Quick links you might need:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link href="/about" className="text-deep-blue hover:text-pink-600 transition-colors">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/programs" className="text-deep-blue hover:text-pink-600 transition-colors">
              Our Programs
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="text-deep-blue hover:text-pink-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </Container>
  );
}