
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useState, useEffect, useRef } from 'react';

interface SavingsLineChartProps {
  chartData: any[];
}

const formatLargeNumber = (value: number): string => {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(1)}B`;
  } else if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
};

export const SavingsLineChart = ({ chartData }: SavingsLineChartProps) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={chartData} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          className="text-neutral-600 dark:text-neutral-400"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.2} />
          <XAxis 
            dataKey="year" 
            stroke="currentColor"
          />
          <YAxis 
            yAxisId="savings"
            tickFormatter={(value) => formatLargeNumber(value)}
            stroke="currentColor"
          />
          <YAxis 
            yAxisId="co2"
            orientation="right"
            tickFormatter={(value) => `${value.toLocaleString()} tons`}
            stroke="currentColor"
          />
          <Tooltip 
            formatter={(value: number, name: string) => {
              if (name === "Cumulative Savings") {
                return [`$${value.toLocaleString()}`, name];
              }
              return [`${value.toLocaleString()} tons`, name];
            }}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '12px',
            }}
          />
          <Legend />
          <Line 
            yAxisId="savings"
            type="monotone" 
            dataKey="savings" 
            name="Cumulative Savings"
            stroke="#93C851" 
            strokeWidth={2}
            dot={{ fill: '#93C851' }}
            animationDuration={1000}
          />
          <Line 
            yAxisId="co2"
            type="monotone" 
            dataKey="co2Saved" 
            name="CO2 Reduction"
            stroke="#2563eb" 
            strokeWidth={2}
            dot={{ fill: '#2563eb' }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
