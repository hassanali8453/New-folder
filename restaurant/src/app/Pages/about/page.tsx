'use client'
import Image from 'next/image'
import React from 'react'
import AboutPhoto from '@/Components/utils/assets/images/farhad-ibrahimzade-oubBY3kTyU8-unsplash.jpg'

const About = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Introduction */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className=" font-myriad text-primary text-6xl">
            Welcome to Our Restaurant
          </h1>
          <p className="mt-4 text-xl font-myriad text-gray-600">
            Serving delicious meals with love and passion for over 20 years.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-slideUp">
          <div>
            <h2 className="text-4xl font-myriad text-secondary mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our restaurant was founded with a passion for bringing people together over great food. 
              What started as a small family-owned restaurant has now grown into a beloved spot in the 
              community. We pride ourselves on using only the freshest ingredients and preparing dishes 
              that showcase the best of local cuisine.
            </p>
          </div>

          <div className="relative">
            <Image
              src={AboutPhoto}
              alt="Restaurant Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <h3 id='imgtxt' className="text-white text-2xl font-bold">Fresh Ingredients, Delicious Food</h3>
            </div>
          </div>
        </div>

        {/* Section 3: Our Values */}
        <div className="mt-16 text-center animate-fadeIn">
          <h2 className="text-5xl font-myriad  text-primary mb-8">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="text-gray-600">We are committed to sustainable practices in every aspect of our business.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-hand-holding-heart"></i>
              </div>
              <h3 className="text-xl font-semibold">Community</h3>
              <p className="text-gray-600">We care deeply about the community we serve and strive to give back.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl text-primary mb-4">
                <i className="fas fa-utensils"></i>
              </div>
              <h3 className="text-xl font-semibold">Quality</h3>
              <p className="text-gray-600">Quality is at the heart of everything we do, from our ingredients to our service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
