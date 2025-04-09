import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (itemId: string, change: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

export function Cart({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 mb-4 p-4 bg-gray-50 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-200 rounded"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="p-2 hover:bg-gray-200 rounded"
                >
                  <X className="h-5 w-5 text-red-500" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={onCheckout}
            disabled={items.length === 0}
            className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}