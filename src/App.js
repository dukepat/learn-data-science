// src/App.js
import React from 'react';
import MedianVisualization from './components/MedianVisualization';
import MeanVisualization from './components/MeanVisualization';
import ModeVisualization from './components/ModeVisualization';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="space-y-8">
          <MeanVisualization />
          <MedianVisualization />
          <ModeVisualization />
        </div>
      </div>
    </div>
  );
}

export default App;