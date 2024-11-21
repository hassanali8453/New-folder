"use client"
import { useEffect } from 'react';

const Aboutus = () => {
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-indigo-700 mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Altham Whistle Restaurant
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          The Tasty House, where every meal is a delight.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Restaurant Info Section */}
          <div className="animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">Restaurant Info</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Address:</strong> Burnley Road, Altham, Accrington, Lancashire, BB5 5UL</li>
                <li><strong>Type:</strong> Fast Food Restaurant</li>
                <li><strong>Opening Hours:</strong> 1:00 PM to 11:00 PM (7 days a week)</li>
                <li><strong>Trading Since:</strong> August 2021</li>
              </ul>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">Owner Message</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Altham Whistle! We strive to provide the tastiest and most satisfying fast food experience. Our goal is to serve you with high-quality meals made fresh every day.
              </p>
              <p className="text-gray-700">
                <strong>Owner:</strong> Mr. Adrian Venoin
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 animate__animated animate__fadeIn animate__delay-4s">
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">Contact Information</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Contact Number:</strong> 0141 611 27575</li>
            <li><strong>Email:</strong> <a href="mailto:clearbusinessdgdfgdfbyadrian@gmail.com" className="text-indigo-500 hover:underline">clearbusinessbyadrian@gmail.com</a></li>
            <li><strong>Online Orders Email:</strong> SAME</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
