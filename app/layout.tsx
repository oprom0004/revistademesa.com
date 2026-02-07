import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GeminiAssistant from "@/components/GeminiAssistant";
import SchemaMarkup from "@/components/SchemaMarkup";

const currentYear = new Date().getFullYear();

export const metadata: Metadata = {
    title: `Variable DC Power Supply Guide (${currentYear}): 120V - 800V Selection | Revista De Mesa`,
    description: "Precision Source for NEMA Standard Equipment & 96V Battery Architectures",
    metadataBase: new URL('https://revistademesa.com'),
    alternates: {
        canonical: './',
    },
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: `Variable DC Power Supply Guide (${currentYear})`,
        description: "Precision Source for NEMA Standard Equipment & 96V Battery Architectures",
        url: 'https://revistademesa.com',
        siteName: 'Variable DC Power Supply Guide',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `Variable DC Power Supply Guide (${currentYear})`,
        description: "Precision Source for NEMA Standard Equipment & 96V Battery Architectures",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
                <SchemaMarkup />
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <GeminiAssistant />
                <Footer />
            </body>
        </html>
    );
}
