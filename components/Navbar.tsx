'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Monitor } from 'lucide-react';
import { NAV_LINKS, APP_NAME } from '../lib/constants';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Monitor className="w-6 h-6 text-amber-400" />
                        <Link href="/" className="font-bold text-xl tracking-tight">
                            {APP_NAME}
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === link.path
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
                        <Link href="/variable-power-supplies" className="text-sm text-amber-400 font-medium">Browse All</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
