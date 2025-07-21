"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-green-400">Yashasveeni</div>
              <div className="ml-2 text-sm">Spices</div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Driven by vision, anchored by values. Creating flavour solutions that transform the food industry.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Custom Seasoning</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Food Science</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-300">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VKL Spices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;