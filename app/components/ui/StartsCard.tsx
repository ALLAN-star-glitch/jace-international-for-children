interface StatsCardProps {
  number: string;
  label: string;
  color?: 'blue' | 'green';
  delay?: number;
}

export default function StatsCard({ 
  number, 
  label, 
  color = 'blue',
  delay = 0 
}: StatsCardProps) {
  const colorClasses = {
    blue: 'text-deep-blue',
    green: 'text-rich-green'
  };

  const delayClass = delay ? `animate-delay-${delay}` : '';

  return (
    <div 
      className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`text-4xl font-bold ${colorClasses[color]} mb-2 font-serif`}>
        {number}
      </div>
      <div className="text-soft-gray text-sm small-caps">
        {label}
      </div>
    </div>
  );
}