import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { VOLTAGE_PAGES, getIconForVoltage, getColorForVoltage } from '../constants';
import { Check, BarChart2, Activity, ShieldCheck, HelpCircle, ExternalLink, ShoppingCart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Breadcrumbs from '../components/Breadcrumbs';

const VoltageDetail: React.FC = () => {
  const { pathname } = useLocation();
  
  // Find config by exact path match since we are using explicit routes now
  const config = VOLTAGE_PAGES.find(p => p.slug === pathname);

  if (!config) {
    return <Navigate to="/variable-power-supplies" />;
  }

  // Get dynamic color for this page (Only for charts/accents)
  const accentColor = getColorForVoltage(config.voltage);

  // Visualization Data
  const chartData = [
    { name: 'Stability', val: 95 },
    { name: 'Efficiency', val: parseFloat(config.technicalSpecs.efficiency) || 90 },
    { name: 'Ripple', val: 98 }, 
    { name: 'Safety', val: 100 },
  ];

  return (
    <div className="animate-fade-in bg-white">
      {/* Header - Dark Industrial Theme */}
      <div className="bg-slate-900 border-b border-slate-700 pt-8 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Dark Breadcrumbs */}
          <Breadcrumbs 
            variant="dark"
            items={[
              { label: 'Variable Power Supplies', path: '/variable-power-supplies' },
              { label: `${config.voltage}V Series` }
            ]}
          />

          <div className="flex flex-col md:flex-row md:items-start gap-8 mt-4">
             <div className="p-5 bg-slate-800/80 backdrop-blur-sm shadow-xl border border-slate-600 rounded-lg">
               {/* Force icon to white for dark background visibility */}
               <div className="transform scale-125 [&>svg]:text-white">
                 {getIconForVoltage(config.voltage)}
               </div>
             </div>
             <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight font-mono">
                  {config.voltage}V <span className="text-slate-400">DC Series</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                  {config.title}
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Long Form Content */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-slate-900 pl-4">
              Technical Overview
            </h2>
            <div className="text-slate-700 leading-8 text-lg space-y-6 whitespace-pre-line">
              {config.description}
            </div>
          </section>

          <section className="bg-slate-50 rounded-sm p-8 border border-slate-200">
             <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
               <Activity className="w-5 h-5 text-slate-600" />
               Application Engineering Note
             </h2>
             <p className="text-slate-700 font-medium leading-relaxed">
               {config.whyChoose}
             </p>
          </section>

          {config.complianceStandards && (
            <section className="bg-white rounded-sm p-6 border border-slate-300 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2 uppercase tracking-wide">
                <ShieldCheck className="w-5 h-5 text-slate-600" />
                Compliance Standards
              </h2>
              <p className="text-slate-800 font-mono text-sm leading-relaxed bg-slate-100 p-4 rounded-sm border border-slate-200">
                {config.complianceStandards}
              </p>
            </section>
          )}

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-slate-300 pl-4">
              Primary Use Cases
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {config.applications.map((app, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <div className="mt-1">
                     <Check className="w-5 h-5 text-slate-400" />
                  </div>
                  <span className="text-slate-800 font-medium text-lg">{app}</span>
                </div>
              ))}
            </div>
          </section>

          {/* New FAQ Section for Specific Voltage */}
          {config.faqs && config.faqs.length > 0 && (
            <section>
               <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-slate-300 pl-4">
                 Frequently Asked Questions ({config.voltage}V)
               </h2>
               <div className="space-y-6">
                 {config.faqs.map((faq, index) => (
                   <div key={index} className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
                     <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                        {faq.question}
                     </h3>
                     <p className="text-slate-600 leading-relaxed ml-7">
                        {faq.answer}
                     </p>
                   </div>
                 ))}
               </div>
            </section>
          )}

        </div>

        {/* Right Column: Specs & Data */}
        <div className="space-y-8">

          {/* NEW: Inventory / Pricing CTA */}
          <div className="bg-amber-400 p-6 rounded-sm shadow-md text-slate-900 relative overflow-hidden group border border-amber-500">
             <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-24 h-24" />
             </div>
             <h3 className="text-xl font-extrabold mb-2 relative z-10 flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Check Pricing & Stock
             </h3>
             <p className="text-slate-900 mb-6 relative z-10 font-medium text-sm leading-relaxed max-w-[90%]">
                View live inventory and wholesale pricing for the <strong>{config.voltage}V Series</strong> on our main distribution portal.
             </p>
             <a 
                href={config.mainSiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-sm hover:bg-slate-800 hover:shadow-lg transition-all relative z-10 uppercase tracking-wide text-sm"
             >
                View {config.voltage}V Products
                <ExternalLink className="w-4 h-4 ml-2" />
             </a>
          </div>
          
          {/* Technical Specs Table style */}
          <div className="bg-white border-2 border-slate-900 p-0 shadow-lg">
            <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
              <h3 className="text-white font-bold flex items-center gap-2 font-mono uppercase tracking-wider">
                <BarChart2 className="w-5 h-5 text-slate-300" />
                Spec Sheet
              </h3>
              <div className="px-2 py-1 bg-slate-800 text-xs font-mono text-white rounded">
                REV. 2026
              </div>
            </div>
            <div className="p-6">
              <table className="w-full text-sm mb-8">
                <tbody>
                   <tr className="border-b border-slate-200">
                     <td className="py-3 text-slate-500 font-medium">Output Ripple</td>
                     <td className="py-3 text-right font-mono font-bold text-slate-900">{config.technicalSpecs.ripple}</td>
                   </tr>
                   <tr className="border-b border-slate-200">
                     <td className="py-3 text-slate-500 font-medium">Efficiency</td>
                     <td className="py-3 text-right font-mono font-bold text-slate-900">{config.technicalSpecs.efficiency}</td>
                   </tr>
                   <tr>
                     <td className="py-3 text-slate-500 font-medium">Cooling</td>
                     <td className="py-3 text-right font-mono font-bold text-slate-900">{config.technicalSpecs.cooling}</td>
                   </tr>
                </tbody>
              </table>

              {/* Dynamic Color Chart */}
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{top: 20, right: 0, left: -25, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{fontSize: 10, fill: '#64748b', fontWeight: 600}} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 110]} />
                    <Tooltip 
                      cursor={{fill: 'transparent'}} 
                      contentStyle={{backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px'}} 
                      itemStyle={{color: '#fff'}}
                    />
                    <Bar dataKey="val" fill={accentColor} radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-2 text-xs text-slate-400 font-mono">Performance Index</div>
            </div>
          </div>

          <div className="bg-slate-100 p-6 border border-slate-200 text-center rounded-sm">
            <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
            <p className="text-sm text-slate-600 mb-4">
              Access the full PDF Manual, Safety Data Sheet, and ISO Calibration Certificate.
            </p>
            <button className="w-full px-4 py-3 bg-white border border-slate-300 text-slate-900 text-sm font-bold hover:bg-slate-200 transition-colors uppercase tracking-wide flex items-center justify-center gap-2">
              Download PDF
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VoltageDetail;