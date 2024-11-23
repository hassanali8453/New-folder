'use client'
import Link from 'next/link'
import React from 'react'
import { FaLaptop, FaCalendarAlt, FaBox, FaTruck, FaConciergeBell, FaUsers, FaGift, FaCreditCard, FaDrumstickBite, FaLeaf, FaMusic, FaPaw, FaSun, FaChild, FaCocktail } from 'react-icons/fa'

const services = [
    { id: 1, icon: <FaLaptop />, title: 'Online Ordering', description: 'Order your favorite dishes from the comfort of your home with delivery or pickup options.', color: 'bg-yellow-500' },
    { id: 2, icon: <FaCalendarAlt />, title: 'Reservations', description: 'Book a table in advance to enjoy a seamless and hassle-free dining experience.', color: 'bg-orange-500' },
    { id: 3, icon: <FaBox />, title: 'Takeout', description: 'Enjoy our delicious food from the comfort of your own home.', color: 'bg-green-500' },
    { id: 4, icon: <FaTruck />, title: 'Delivery', description: 'Get our dishes delivered right to your doorstep for your convenience.', color: 'bg-red-500' },
    { id: 5, icon: <FaConciergeBell />, title: 'Catering', description: 'Let us handle the food for your next event or party with our catering services.', color: 'bg-pink-500' },
    { id: 6, icon: <FaUsers />, title: 'Private Dining', description: 'Book our private room for special occasions, events, or business meetings.', color: 'bg-purple-500' },
    { id: 7, icon: <FaGift />, title: 'Loyalty Program', description: 'Join our loyalty program to earn rewards and discounts every time you dine with us.', color: 'bg-indigo-500' },
    { id: 8, icon: <FaCreditCard />, title: 'Gift Cards', description: 'Give the gift of a delicious meal with our gift cards for your friends and family.', color: 'bg-teal-500' },
    { id: 9, icon: <FaDrumstickBite />, title: 'Party Platters', description: 'Order large quantities of our dishes for your next gathering or celebration.', color: 'bg-yellow-600' },
    { id: 10, icon: <FaLeaf />, title: 'Dietary Options', description: 'We offer gluten-free, vegan, and other dietary options to cater to your needs.', color: 'bg-green-600' },
]

const specialServices = [
  { id: 1, icon: <FaMusic />, title: 'Live Music', description: 'Enjoy live music and entertainment while dining with us.' },
  { id: 2, icon: <FaPaw />, title: 'Pet-Friendly Dining', description: 'Our outdoor seating area welcomes your furry friends!' },
  { id: 3, icon: <FaSun />, title: 'Outdoor Seating', description: 'Dine in the fresh air at our cozy outdoor seating area.' },
  { id: 4, icon: <FaChild />, title: 'Kids\' Menu', description: 'We have a special menu for kids to keep them happy and full!' },
  { id: 5, icon: <FaCocktail />, title: 'Happy Hour', description: 'Join us for special deals during our daily happy hour!' },
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Introduction */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="font-myriad text-primary text-6xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl font-myriad text-gray-600">
            We offer a variety of services to make your dining experience special.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 animate-slideUp">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card flex flex-col items-center text-center p-8 ${service.color} text-white rounded-lg shadow-xl transition-all hover:scale-105`}
            >
              {/* Only make the first card clickable */}
              {index === 0 ? (
                <Link href="/Pages/contact" passHref>
                  <div className="cursor-pointer">
                    {/* Center the icon */}
                    <div className="flex items-center justify-center text-5xl mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="opacity-80">{service.description}</p>
                  </div>
                </Link>
              ) : (
                <div>
                  {/* Center the icon */}
                  <div className="flex items-center justify-center text-5xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="opacity-80">{service.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Special Services Section */}
        <div className="mt-16 text-center">
          <h2 className="text-5xl font-myriad text-primary mb-8">Special Services</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {specialServices.map(special => (
              <div key={special.id} className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md hover:bg-gray-100 transition-all">
                <div className="text-5xl text-primary mb-4">
                  {special.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{special.title}</h3>
                <p className="text-gray-600">{special.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage;
