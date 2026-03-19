interface CountyTagProps {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function CountyTag({ name, isActive = false, onClick }: CountyTagProps) {
  const baseClasses = 'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-pink';
  
  const stateClasses = isActive 
    ? 'bg-rich-green text-white shadow-md' 
    : 'bg-rich-green/10 text-rich-green hover:bg-rich-green/20 border border-rich-green/20';

  const combinedClasses = `${baseClasses} ${stateClasses}`;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={combinedClasses}
        aria-pressed={isActive}
      >
        {name}
      </button>
    );
  }

  return (
    <span className={combinedClasses}>
      {name}
    </span>
  );
}