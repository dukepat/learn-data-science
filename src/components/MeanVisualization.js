import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MeanVisualization = () => {
  const data = [
    { value: 2, label: 'Student 1' },
    { value: 4, label: 'Student 2' },
    { value: 3, label: 'Student 3' },
    { value: 5, label: 'Student 4' },
    { value: 1, label: 'Student 5' },
  ];

  const mean = data.reduce((sum, item) => sum + item.value, 0) / data.length;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Understanding Mean (Average)</h2>
      <div className="mb-4 text-center">
        <p className="text-lg mb-2">🎯 Mean = Sum of all values ÷ Number of values</p>
        <p className="text-sm text-gray-600">Example: Student Test Scores (1-5)</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="label" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="value" fill="#4299e1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">
          Mean = (2 + 4 + 3 + 5 + 1) ÷ 5 = {mean}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          The mean represents the average or "center" of your data
        </p>
      </div>
    </div>
  );
};

export default MeanVisualization;