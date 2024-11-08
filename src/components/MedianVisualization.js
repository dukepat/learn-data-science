import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const MedianVisualization = () => {
  const data = [
    { value: 10, label: 'House 1' },
    { value: 12, label: 'House 2' },
    { value: 15, label: 'House 3' },
    { value: 16, label: 'House 4' },
    { value: 95, label: 'House 5' },
  ];

  const sortedValues = [...data].sort((a, b) => a.value - b.value);
  const median = sortedValues[Math.floor(data.length / 2)].value;
  const mean = Math.round(data.reduce((sum, item) => sum + item.value, 0) / data.length);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-6">
      {/* Main Container */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="w-full mb-4">
          <h2 className="text-3xl font-bold text-purple-600">Day 2: Understanding Median</h2>
          <p className="text-xl text-gray-500">Statistical Concepts Series</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
          {/* Left Column - Explanation */}
          <div className="flex flex-col justify-between">
            {/* Quick Stats */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">🏠 House Prices Analysis</h3>
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <ul className="space-y-3 text-lg">
                  <li className="flex justify-between">
                    <span>Typical Range:</span>
                    <span className="font-semibold">$10-16M</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Outlier Mansion:</span>
                    <span className="font-semibold">$95M</span>
                  </li>
                  <li className="flex justify-between text-purple-700">
                    <span>Median Price:</span>
                    <span className="font-bold">${median}M</span>
                  </li>
                  <li className="flex justify-between text-red-600">
                    <span>Mean Price:</span>
                    <span className="font-bold">${mean}M</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                📊 Meet the Median - Your Data's Middle Manager! Unlike the mean we discussed yesterday, 
                the median is your data's middle value when everything's lined up in order. In our example, 
                look at those house prices: most homes cost between $10-16M, but that one luxury mansion at $95M? 
                It barely affects the median (${median}M), while it drags the mean way up to ${mean}M!
              </p>
              <p className="text-gray-600 mb-4">
                This is why real estate agents often quote median prices - they give a better picture of what 
                typical buyers might expect to pay. The median is your go-to measure when your data has outliers 
                or is skewed. It's like that diplomatic friend who doesn't let one loud voice overshadow the group!
              </p>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  #DataScience #Statistics #MedianVsMean #DataAnalysis
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visualization */}
          <div className="h-[600px] bg-white p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="label" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="value" fill="#9f7aea" />
                <ReferenceLine 
                  y={median} 
                  stroke="#4c1d95" 
                  strokeDasharray="3 3" 
                  label={{ value: 'Median', fill: '#4c1d95', fontWeight: 'bold' }} 
                />
                <ReferenceLine 
                  y={mean} 
                  stroke="#dc2626" 
                  strokeDasharray="3 3" 
                  label={{ value: 'Mean', fill: '#dc2626', fontWeight: 'bold' }} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedianVisualization;