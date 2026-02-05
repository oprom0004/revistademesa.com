import React from 'react';
import { NAV_LINKS, APP_NAME } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { Monitor } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Monitor className="w-6 h-6 text-amber-400" />
              <Link to="/" className="font-bold text-xl tracking-tight">
                {APP_NAME} <span className="text-slate-400 text-sm font-normal hidden sm:inline">| Power Supply Guide</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-slate-800 text-amber-400'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
             {/* Mobile simplified nav */}
             <div className="md:hidden">
                <Link to="/variable-power-supplies" className="text-sm text-amber-400 font-medium">Browse All</Link>
             </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{APP_NAME}</h3>
            <p className="text-sm">
              Your trusted partner in precision DC power solutions. Serving the T2 engineering community since 2026.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
              <li><Link to="/variable-power-supplies" className="hover:text-amber-400">Category Index</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Disclaimer</h3>
            <p className="text-xs text-slate-500">
              Information provided on revistademesa.com is for educational purposes. Always consult equipment datasheets before high-voltage testing.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-slate-800 text-center text-xs">
          © 2026 {APP_NAME}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;