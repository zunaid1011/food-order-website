import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-600">123 Food Street, Cuisine City, FC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">support@foodiehub.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="text-red-500 h-6 w-6 mt-1" />
                <div>
                  <h4 className="font-semibold">Hours</h4>
                  <p className="text-gray-600">Mon-Sun: 10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows={4}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}