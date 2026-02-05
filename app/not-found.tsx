import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Visual */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                        404
                    </h1>
                    <div className="mt-4 text-2xl font-semibold text-slate-300">
                        Page Not Found
                    </div>
                </div>

                {/* Message */}
                <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        Go to Homepage
                    </Link>

                    <Link
                        href="/variable-power-supplies"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Browse Categories
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-16 pt-8 border-t border-slate-700">
                    <p className="text-slate-500 text-sm mb-4">Popular Pages:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/120v-dc-power-supply" className="text-amber-400 hover:text-amber-300 text-sm">
                            120V Power Supply
                        </Link>
                        <span className="text-slate-600">•</span>
                        <Link href="/220v-dc-power-supply" className="text-amber-400 hover:text-amber-300 text-sm">
                            220V Power Supply
                        </Link>
                        <span className="text-slate-600">•</span>
                        <Link href="/800v-dc-power-supply" className="text-amber-400 hover:text-amber-300 text-sm">
                            800V Power Supply
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
