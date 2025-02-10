import React from 'react';
import { Timer, Gift } from 'lucide-react';

const Discounts = () => {
  return (
    <section className="py-20 bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Special Offers</h2>
          <p className="text-red-100 text-lg">Limited time deals on selected items</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 flex items-center">
            <div className="mr-6">
              <Timer className="h-12 w-12 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Flash Sale</h3>
              <p className="text-gray-600 mb-4">Get 30% off on all puzzle boxes</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 flex items-center">
            <div className="mr-6">
              <Gift className="h-12 w-12 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Bundle Deal</h3>
              <p className="text-gray-600 mb-4">Buy 2 Get 1 Free on selected items</p>
              <button className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounts;