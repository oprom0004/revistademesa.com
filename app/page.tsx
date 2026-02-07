import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Settings, Zap, Cpu, Sliders, HelpCircle, ExternalLink, ShoppingCart } from 'lucide-react';
import { VOLTAGE_PAGES } from '../lib/constants';

export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                        Variable DC Power Supply: <span className="text-amber-400">{currentYear} Workbench</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        The definitive technical reference for <strong>120V to 800V DC power sources</strong>.
                        Match precision specifications to your NEMA, IEC, and automotive testing benchmarks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/variable-power-supplies"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-sm text-slate-900 bg-amber-400 hover:bg-amber-500 md:text-lg transition-colors font-bold tracking-wide"
                        >
                            Browse by Voltage
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        {/* High Value Outbound Link - Hero Position */}
                        <a
                            href="https://variabledcpowersupply.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-slate-600 text-base font-medium rounded-sm text-white hover:bg-slate-800 hover:border-slate-500 md:text-lg transition-all group"
                        >
                            Check Live Inventory
                            <ExternalLink className="ml-2 w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Intro / Value Prop */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Precision Engineering for Every Voltage Node</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto">
                        In 2026, the ecosystem of <strong>variable DC power supplies</strong> has evolved. The demand for specific voltage nodes has exploded with the rise of <strong>high-voltage EV components</strong> and <strong>solar inverter integration</strong>.
                        Selecting the correct <strong>adjustable power supply</strong> is no longer just about wattage—it's about matching <strong>transient response</strong> and safety standards to your specific industry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 bg-white rounded-sm shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center mb-4 border border-blue-100">
                            <Shield className="w-6 h-6 text-blue-700" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Safety & Isolation</h3>
                        <p className="text-slate-600">
                            Crucial for high-voltage testing. Understanding galvanic isolation differences between a <strong>120V lab bench supply</strong> and a <strong>220V industrial power source</strong> is critical for operator safety.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-sm shadow-sm border border-slate-200 hover:border-amber-300 transition-colors">
                        <div className="w-12 h-12 bg-amber-50 flex items-center justify-center mb-4 border border-amber-100">
                            <Settings className="w-6 h-6 text-amber-700" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Precise Regulation</h3>
                        <p className="text-slate-600">
                            Modern <strong>programmable power supplies</strong> offer <span className="font-mono text-sm bg-slate-100 px-1 border border-slate-300">0.01V</span> resolution. We break down the <strong>load regulation</strong> specs for sensitive semiconductor characterization.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-sm shadow-sm border border-slate-200 hover:border-emerald-300 transition-colors">
                        <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-100">
                            <CheckCircle className="w-6 h-6 text-emerald-700" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Application Specificity</h3>
                        <p className="text-slate-600">
                            Don't overpay for a <strong>600V power system</strong> if you only need a <strong>150V bench unit</strong> for R&D. Our hub structure guides you to the exact <strong>adjustable voltage source</strong> required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Deep Dive (SEO Content) */}
            <section className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Defining the Modern Benchtop Standard</h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    A <strong>variable DC power supply</strong> is the cornerstone of any electronics laboratory. Unlike fixed adapters, these versatile units allow engineers to dial in the exact electrical potential required to test circuits under various conditions, simulating everything from a dying battery to a power grid surge.
                                </p>
                                <p>
                                    When evaluating a <strong>lab bench power supply</strong>, the choice often comes down to topology. <strong>Linear DC power supplies</strong> are revered for their exceptionally low output ripple and noise, making them ideal for audio and RF applications. However, for high-power demands in automotive or industrial automation, <strong>switching power supplies</strong> provide the necessary efficiency and power density.
                                </p>
                                <p>
                                    Advanced features now standard in 2026 models include <strong>Constant Voltage (CV)</strong> and <strong>Constant Current (CC)</strong> crossover modes, which automatically protect your Device Under Test (DUT) from over-current events. Whether you are performing burn-in testing on capacitors with a <strong>500V supply</strong> or validating logic levels with a <strong>120V unit</strong>, stability is paramount.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all group">
                                <Zap className="w-8 h-8 text-amber-600 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-slate-900 mb-2">CV / CC Modes</h3>
                                <p className="text-sm text-slate-600">Automatic crossover ensures precise control over both voltage and amperage, preventing thermal runaway.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:border-blue-400 hover:bg-blue-50/30 transition-all group">
                                <Cpu className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-slate-900 mb-2">Programmable Control</h3>
                                <p className="text-sm text-slate-600">USB, LAN, and RS232 interfaces allow for automated test sequences and remote data logging via PC software.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all group">
                                <Sliders className="w-8 h-8 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-slate-900 mb-2">Low Ripple Noise</h3>
                                <p className="text-sm text-slate-600">Essential for signal integrity. Quality linear supplies maintain ripple below 1mVrms for clean power delivery.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-sm border border-slate-200 hover:border-red-400 hover:bg-red-50/30 transition-all group">
                                <Shield className="w-8 h-8 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-slate-900 mb-2">OVP & OCP Protection</h3>
                                <p className="text-sm text-slate-600">Over-Voltage and Over-Current Protection circuits act as a fail-safe, instantly cutting power if limits are exceeded.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Procurement / Sourcing Block (High Value External Link Section) */}
            <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Sourcing & Procurement Guide</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
                        Revista De Mesa focuses on technical analysis. For commercial procurement, wholesale pricing, and immediate stock availability of the units discussed in our guides, we direct engineers to our authorized inventory partner.
                    </p>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm inline-block max-w-3xl w-full">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-amber-400 mb-2 flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    VariableDCPowerSupply.com
                                </h3>
                                <p className="text-sm text-slate-400">
                                    North America's leading distributor for industrial power systems.
                                    Stocking 30V, 60V, 1000V+ models and custom configurations.
                                </p>
                            </div>
                            <a
                                href="https://variabledcpowersupply.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 px-6 py-4 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold uppercase tracking-wider rounded-sm transition-all hover:scale-105 shadow-lg"
                            >
                                Visit Official Store
                                <ExternalLink className="inline-block ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Homepage FAQ Section */}
            <section className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
                            <HelpCircle className="w-8 h-8 text-slate-400" />
                            Common Questions
                        </h2>
                        <p className="text-slate-600 mt-4 text-lg">Essential knowledge for beginners and professional engineers alike.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">What is the difference between CV and CC mode?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                <strong>Constant Voltage (CV)</strong> mode maintains a set voltage level regardless of the load's current draw (ideal for powering most electronics).
                                <strong>Constant Current (CC)</strong> mode limits the current flow to a set maximum, automatically lowering the voltage if necessary (essential for charging batteries or driving LEDs).
                                Automatic crossover allows the supply to switch seamlessly between these modes based on the load.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Can I connect multiple DC power supplies in series?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Yes, most isolated variable DC power supplies can be connected in series to achieve a higher total voltage (e.g., two 30V supplies in series = 60V).
                                However, you must ensure that the <strong>reverse bias protection diodes</strong> are present and that the chassis ground is not shorting the output (use floating outputs).
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Why is galvanic isolation important?</h3>
                            <p className="text-slate-700 leading-relaxed">
                                Galvanic isolation electrically separates the output circuit from the AC mains grid. This prevents ground loops which can introduce noise into sensitive measurements, and more importantly, it protects the operator from electric shock by ensuring the output is "floating" rather than referenced to earth ground.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="bg-white py-16 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Featured Categories</h2>
                        <Link href="/variable-power-supplies" className="text-slate-700 hover:text-slate-900 font-medium text-sm flex items-center border-b border-transparent hover:border-slate-900 transition-all">
                            View All <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VOLTAGE_PAGES.slice(0, 3).map(config => (
                            <Link key={config.slug} href={config.slug} className="group block bg-white p-6 rounded-sm shadow-sm hover:border-slate-400 transition-all border border-slate-200">
                                <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-600">{config.voltage}V Series</h3>
                                <p className="text-sm text-slate-500 mt-2">{config.subtitle}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
