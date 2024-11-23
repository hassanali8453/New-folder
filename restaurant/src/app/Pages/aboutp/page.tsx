"use client"
import { useEffect } from 'react';

const AboutPage = () => {
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
          <div className="animate__animated animate__fadeIn animate__delay-2s">
          <div className="relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#89523b] rounded-full mt-2">
              <div className="w-2 h-2 bg-blue-200 rounded-full mx-auto mt-2"></div>
            </div>
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">Our Story</h2>
              <p>Welcome to our restaurant, where food, passion, and community come together. Our story began with a simple idea: to share delicious, homemade-style cuisine with our neighbors and friends.</p>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
          <div className="relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#89523b] rounded-full mt-2">
              <div className="w-2 h-2 bg-blue-200 rounded-full mx-auto mt-2"></div>
            </div>
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-4">
                We aim to create a warm and inviting space where everyone feels at home. Our chefs are dedicated to crafting dishes that not only taste amazing but also use only the freshest ingredients, sourced locally whenever possible.
              </p>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <div className="relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#89523b] rounded-full mt-2">
              <div className="w-2 h-2 bg-blue-200 rounded-full mx-auto mt-2"></div>
            </div>
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">Our Values</h2>
              <ul className='mb-2' >
                  <li>
                    <strong>Quality:</strong> We are committed to serving only the best.
                  </li>
                  <li>
                    <strong>Community:</strong> We believe in supporting local businesses and events.</li>
                  <li>
                    <strong>Hospitality:</strong> We strive to make every guest feel welcome and valued.</li>
                </ul>
            </div>
          </div>
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <div className="relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#89523b] rounded-full mt-2">
              <div className="w-2 h-2 bg-blue-200 rounded-full mx-auto mt-2"></div>
            </div>
              <h2 className="text-2xl font-bold text-indigo-500 mb-4">Our History</h2>
              <p className="text-gray-700 mb-4">
                From our humble beginnings to our current location, learn about our journey and how we have grown.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 shadow-lg animate__animated animate__fadeIn animate__delay-4s">
          <div className="relative bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#89523b] rounded-full mt-2">
              <div className="w-2 h-2 bg-blue-200 rounded-full mx-auto mt-2"></div>
            </div>

            <h2 className="text-2xl font-bold text-indigo-500 mb-4">Awards and Recognition</h2>
            <p className="mb-4">
              We are proud to have received [awards or recognition] for our efforts in providing excellent food and service.
            </p>
            
            <h2 className="text-2xl font-bold text-indigo-500 mb-4">Get in Touch</h2>
            <p className="mb-4">
              Contact us to learn more about our story, or to share your own experience with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
