import Link from 'next/link';
import { Shield, Home, BookOpen } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: 'shield' | 'home' | 'book';
  color: string;
  imageAlt: string;
  delay?: number;
}

const iconMap = {
  shield: Shield,
  home: Home,
  book: BookOpen,
};

export default function ProgramCard({ 
  title, 
  description, 
  icon, 
  color, 
  imageAlt,
  delay = 0 
}: ProgramCardProps) {
  const IconComponent = iconMap[icon];
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <article 
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Area with Overlay */}
      <div className="relative h-48 overflow-hidden bg-warm-sand">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: "url('/images/program-placeholder.jpg')",
          }}
          role="img"
          aria-label={imageAlt}
        />
        <div className="absolute inset-0 bg-deep-blue/10 group-hover:bg-deep-blue/20 transition-colors" />
        
        {/* Icon positioned absolutely */}
        <div 
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          style={{ color }}
        >
          <IconComponent size={24} aria-hidden="true" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif text-deep-blue mb-3">
          <Link 
            href={`/programs/${slug}`}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm"
          >
            {title}
          </Link>
        </h3>
        <p className="text-charcoal/80 leading-relaxed mb-4">
          {description}
        </p>
        <Link 
          href={`/programs/${slug}`}
          className="inline-flex items-center text-rich-green hover:text-rich-green/80 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-vibrant-pink rounded-sm px-2 py-1"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}