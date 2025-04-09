import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CartItem, UserDetails } from '../types';

interface CheckoutProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onPlaceOrder: (userDetails: UserDetails) => void;
}

export function Checkout({ items, isOpen, onClose, onPlaceOrder }: CheckoutProps) {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    phone: '',
    address: '',
  });

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder(userDetails);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Checkout</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Order Summary</h3>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between items-center font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>
                <textarea
                  required
                  value={userDetails.address}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows={3}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors mt-6"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}