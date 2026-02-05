import React from 'react';
import Link from 'next/link';
import { APP_NAME } from '../lib/constants';

const Footer = () => {
    return (
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
                        <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
                        <li><Link href="/variable-power-supplies" className="hover:text-amber-400">Category Index</Link></li>
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
    );
};

export default Footer;
