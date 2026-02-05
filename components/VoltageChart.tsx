'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface VoltageChartProps {
    data: any[];
    accentColor: string;
}

const VoltageChart: React.FC<VoltageChartProps> = ({ data, accentColor }) => {
    return (
        <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 0, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <YAxis hide domain={[0, 110]} />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '12px' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="val" fill={accentColor} radius={[4, 4, 0, 0]} barSize={32} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VoltageChart;
