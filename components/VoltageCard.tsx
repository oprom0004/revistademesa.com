import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getIconForVoltage } from '../lib/constants';
import { VoltagePageConfig } from '../lib/types';

interface VoltageCardProps {
    config: VoltagePageConfig;
}

const VoltageCard: React.FC<VoltageCardProps> = ({ config }) => {
    return (
        <div className="bg-white border border-slate-300 flex flex-col h-full hover:border-slate-500 transition-colors duration-200 shadow-sm rounded-sm">
            {/* Header Section */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight font-mono">
                    {typeof config.voltage === 'number' ? (
                        <>
                            {config.voltage}V <span className="text-slate-500 text-lg">DC</span>
                        </>
                    ) : (
                        config.voltage
                    )}
                </h2>
                <div className="opacity-80">
                    {getIconForVoltage(config.voltage)}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {config.subtitle.split(':')[0]}
                </h3>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                    {config.description}
                </p>

                {/* Mini Specs */}
                <div className="mb-6 bg-slate-50 p-3 text-xs text-slate-600 font-mono border border-slate-200">
                    {config.technicalSpecs.ripple && (
                        <div className="flex justify-between mb-1">
                            <span>Ripple:</span>
                            <span className="text-slate-900">{config.technicalSpecs.ripple}</span>
                        </div>
                    )}
                    {config.technicalSpecs.cooling && (
                        <div className="flex justify-between">
                            <span>Cooling:</span>
                            <span className="text-slate-900">{config.technicalSpecs.cooling.split(' ')[0]}...</span>
                        </div>
                    )}
                    {!config.technicalSpecs.ripple && config.technicalSpecs.outputVoltage && (
                        <div className="flex justify-between mb-1">
                            <span>Output:</span>
                            <span className="text-slate-900">{config.technicalSpecs.outputVoltage}</span>
                        </div>
                    )}
                    {!config.technicalSpecs.cooling && config.technicalSpecs.inputVoltage && (
                        <div className="flex justify-between">
                            <span>Input:</span>
                            <span className="text-slate-900">{config.technicalSpecs.inputVoltage}</span>
                        </div>
                    )}
                </div>

                <Link
                    href={config.slug}
                    className="group inline-flex items-center justify-center w-full px-4 py-3 bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors rounded-sm"
                >
                    <span>View Technical Data</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default VoltageCard;
