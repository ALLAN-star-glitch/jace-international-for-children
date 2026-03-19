import { cn } from "@/app/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  showDivider?: boolean;
  id?: string;
}

export default function SectionHeading({ 
  eyebrow, 
  title, 
  subtitle,
  align = 'center',
  className,
  showDivider = true,
  id
}: SectionHeadingProps) {
  const headingId = id || `heading-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={cn(
      'mb-16',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {eyebrow && (
        <p className="small-caps mb-3 text-rich-green" id={`${headingId}-eyebrow`}>
          {eyebrow}
        </p>
      )}
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl text-deep-blue mb-4 font-serif"
        id={headingId}
      >
        {title}
      </h2>
      {showDivider && (
        <div 
          className={cn(
            'divider-pink mx-auto',
            align === 'left' && 'mx-0',
            align === 'right' && 'mx-0 ml-auto'
          )} 
          aria-hidden="true"
        />
      )}
      {subtitle && (
        <p className="text-lg text-soft-gray mt-6 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}