import React from 'react';
import { VOLTAGE_PAGES } from '../../lib/constants';
import VoltageCard from '../../components/VoltageCard';
import Breadcrumbs from '../../components/Breadcrumbs';
import { FileText, Phone, HelpCircle, ExternalLink, Layers } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Browse Variable Power Supplies by Voltage (120V, 220V, 500V+) | Revista De Mesa',
    description: 'Select a voltage class to view technical specifications, compliance standards, and load regulation limits.',
};

export default function Hub() {
    return (
        <div className="bg-slate-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <Breadcrumbs
                    items={[
                        { label: 'Variable Power Supplies' }
                    ]}
                />

                {/* Header */}
                <div className="mb-12 border-b border-slate-300 pb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight uppercase">
                        Variable DC Power Supplies
                    </h1>
                    <p className="max-w-4xl text-lg text-slate-600 leading-relaxed font-light">
                        Select a voltage class below to view technical specifications, compliance standards, and load regulation limits.
                        All power supplies listed are rated for continuous industrial duty cycles.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {VOLTAGE_PAGES.map((config) => (
                        <VoltageCard key={config.voltage} config={config} />
                    ))}
                </div>

                {/* Cross-Link Banner / Inventory Extension Module */}
                <div className="bg-slate-900 rounded-sm shadow-lg p-8 mb-16 relative overflow-hidden border-l-4 border-amber-400 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Background decorative element */}
                    <div className="absolute right-0 top-0 h-full w-1/3 bg-slate-800 skew-x-12 translate-x-10 opacity-50 z-0 pointer-events-none"></div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                            <Layers className="w-8 h-8 text-amber-400" />
                            Looking for Standard 30V, 60V, or 1000V+ Models?
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                            This category index focuses on specialized high-voltage industrial nodes.
                            For our complete catalog of general-purpose lab bench supplies and custom voltage configurations, visit our main engineering portal.
                        </p>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                        <a
                            href="https://variabledcpowersupply.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm uppercase tracking-wider rounded-sm shadow-md transition-all hover:translate-y-[-2px]"
                        >
                            Visit Main Site
                            <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* FAQ Section - General Hub Questions */}
                <div className="bg-white rounded-sm border border-slate-300 shadow-sm p-8 mb-16">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <HelpCircle className="w-6 h-6 text-slate-400" />
                        General Selection FAQ
                    </h2>
                    <div className="space-y-6">
                        <div className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                            <h3 className="font-bold text-slate-800 mb-2 text-lg">Linear vs. Switching: Which topology do I need?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Choose <strong>Linear</strong> if your application is highly sensitive to noise (e.g., RF communications, audio R&D, low-level signal processing), as they offer the lowest ripple ( often &lt;1mV). Choose <strong>Switching</strong> for high-power applications (motors, electrolysis, battery charging) where efficiency and compact size are more critical than absolute signal purity.
                            </p>
                        </div>
                        <div className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                            <h3 className="font-bold text-slate-800 mb-2 text-lg">What does "Variable" or "Programmable" actually imply?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A "Variable" supply allows manual adjustment of voltage and current via front panel knobs. A "Programmable" supply adds digital interfaces (USB, RS232, LAN) allowing a computer to control the output sequence, making them essential for automated production line testing and data logging.
                            </p>
                        </div>
                        <div className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                            <h3 className="font-bold text-slate-800 mb-2 text-lg">How much "headroom" should I leave for voltage?</h3>
                            <p className="text-slate-600 leading-relaxed">
                                We generally recommend selecting a power supply with at least 20-25% more voltage capacity than your nominal operating requirement. This allows for over-voltage stress testing and ensures the power supply runs cooler by not operating at 100% duty cycle constantly.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Info / "No AI" Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-300 pt-8">
                    <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center uppercase tracking-wide">
                            <FileText className="w-5 h-5 mr-2 text-slate-400" />
                            Datasheets
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm">
                            Full PDF specifications, mechanical drawings, and communication protocol manuals (SCPI/Modbus) are available on individual product pages.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-slate-200 shadow-sm rounded-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center uppercase tracking-wide">
                            <Phone className="w-5 h-5 mr-2 text-slate-400" />
                            Support
                        </h3>
                        <p className="text-slate-600 mb-4 text-sm">
                            Require a custom voltage or modification? Our application engineers can assist with specific load matching.
                        </p>
                        <div className="text-slate-900 font-mono text-sm">
                            contact@variabledcpowersupply.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
