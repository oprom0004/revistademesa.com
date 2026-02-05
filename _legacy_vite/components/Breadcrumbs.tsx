import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light' }) => {
  const textColor = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';
  const activeColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const hoverColor = variant === 'dark' ? 'hover:text-amber-400' : 'hover:text-slate-800';
  const separatorColor = variant === 'dark' ? 'text-slate-600' : 'text-slate-400';

  return (
    <nav className="flex items-center text-xs sm:text-sm font-medium mb-6 animate-fade-in" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className={`flex items-center ${textColor} ${hoverColor} transition-colors`}>
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className={`w-4 h-4 ${separatorColor} flex-shrink-0 mx-1`} />
            {item.path ? (
              <Link 
                to={item.path} 
                className={`${textColor} ${hoverColor} transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`${activeColor} cursor-default font-semibold truncate max-w-[150px] sm:max-w-xs`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;