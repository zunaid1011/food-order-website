import React from 'react';

interface HeroProps {
  onOrderNow: () => void;
}

export function Hero({ onOrderNow }: HeroProps) {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Delicious Food Delivered
          <br />
          To Your Doorstep
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Experience the finest cuisine from top local restaurants, delivered fresh and hot to your location.
        </p>
        <button
          onClick={onOrderNow}
          className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Start Ordering
        </button>
      </div>
    </div>
  );
}