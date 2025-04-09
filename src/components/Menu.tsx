import React from 'react';
import { MenuItem } from '../types';
import { Plus } from 'lucide-react';

interface MenuProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export function Menu({ items, onAddToCart }: MenuProps) {
  const categories = ['starters', 'main', 'desserts', 'drinks'];

  return (
    <section id="menu" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Menu</h2>
      
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold capitalize mb-6">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <span className="text-lg font-bold text-red-500">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button
                      onClick={() => onAddToCart(item)}
                      className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}