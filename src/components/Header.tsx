import React from 'react';
import { ShoppingCart, User, Menu as MenuIcon } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
  cartItemsCount: number;
  onLoginClick: () => void;
}

export function Header({ onCartClick, cartItemsCount, onLoginClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">FoodieHub</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#menu" className="text-gray-700 hover:text-gray-900">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <User className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={onCartClick}
              className="p-2 rounded-full hover:bg-gray-100 relative"
            >
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}