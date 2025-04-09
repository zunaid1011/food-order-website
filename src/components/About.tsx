import React from 'react';
import { Clock, Award, Users, Truck } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About FoodieHub</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80"
              alt="Restaurant kitchen"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2020, FoodieHub has revolutionized the way people experience food delivery. 
              We partner with the finest restaurants in your city to bring exceptional dining 
              experiences right to your doorstep.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Clock className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Average 30 min delivery time</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Award className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Best Quality</h4>
                  <p className="text-sm text-gray-600">Top-rated restaurants only</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Happy Customers</h4>
                  <p className="text-sm text-gray-600">50,000+ satisfied users</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Truck className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Wide Coverage</h4>
                  <p className="text-sm text-gray-600">Serving 20+ cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}