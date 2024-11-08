import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const ModeVisualization = () => {
  // Sample data: Shoe sizes in a store inventory
  const data = [
    { size: '6', count: 15, label: 'Size 6' },
    { size: '7', count: 25, label: 'Size 7' },
    { size: '8', count: 45, label: 'Size 8' },
    { size: '9', count: 35, label: 'Size 9' },
    { size: '10', count: 20, label: 'Size 10' },
    { size: '11', count: 10, label: 'Size 11' },
  ];

  // Calculate mode
  const mode = data.reduce((a, b) => a.count > b.count ? a : b).size;
  const modeCount = Math.max(...data.map(item => item.count));

  return (
    <div className="w-full min-h-screen bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="w-full mb-6">
          <h2 className="text-3xl font-bold text-green-600">Day 3: Understanding Mode</h2>
          <p className="text-xl text-gray-500">Statistical Concepts Series</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
          {/* Left Column - Explanation */}
          <div className="flex flex-col justify-between">
            {/* Quick Stats */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">👟 Shoe Store Inventory Analysis</h3>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <ul className="space-y-3 text-lg">
                  <li className="flex justify-between">
                    <span>Most Common Size:</span>
                    <span className="font-bold text-green-700">Size {mode}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Quantity in Stock:</span>
                    <span className="font-bold">{modeCount} pairs</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Size Range:</span>
                    <span className="font-semibold">6 - 11</span>
                  </li>
                  <li className="flex justify-between text-green-700">
                    <span>Total Inventory:</span>
                    <span className="font-bold">{data.reduce((sum, item) => sum + item.count, 0)} pairs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                📊 Introducing the Mode - Your Data's Most Popular Player! After exploring mean and median, 
                let's meet the mode: the value that appears most frequently in your dataset. Think of it as 
                your data's trending star! 
              </p>
              <p className="text-gray-600 mb-4">
                In our shoe store example, Size 8 is the mode with {modeCount} pairs in stock. This tells us 
                something crucial that mean or median couldn't - the size we need to stock the most! While the 
                mean might give us 8.5 (a size we don't even carry), and the median splits our inventory in half, 
                the mode tells us exactly what our customers are most likely to ask for.
              </p>
              <p className="text-gray-600 mb-4">
                Mode shines when you're dealing with categorical data or when you need to find the most common 
                occurrence. It's particularly useful in retail, customer preferences, and anywhere you need to 
                identify the most popular choice!
              </p>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  #DataScience #Statistics #Mode #DataAnalysis #RetailAnalytics
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Visualization */}
          <div className="h-[600px] bg-white p-4 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="label" 
                  label={{ value: 'Shoe Size', position: 'bottom', offset: 0 }}
                />
                <YAxis 
                  label={{ value: 'Number of Pairs', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#22c55e">
                </Bar>
                <ReferenceLine 
                  y={modeCount} 
                  stroke="#15803d" 
                  strokeDasharray="3 3" 
                  label={{ value: 'Mode (Most Common)', fill: '#15803d', fontWeight: 'bold' }} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeVisualization;