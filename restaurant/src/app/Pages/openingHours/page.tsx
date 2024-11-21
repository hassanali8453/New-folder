import { FC } from "react";
import { FaClock } from "react-icons/fa"; // Using react-icons for a clock icon.

const OpeningHours: FC = () => {
  return (
    <div className="bg-white min-h-screen md:py-60 sm:py-72 lg:py-52 xl:py-96  py-80">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Restaurant Opening Hours</h2>
        <div className="flex justify-center items-center space-x-3 mb-8">
          <FaClock className="text-4xl text-yellow-500" />
          <p className="text-xl text-gray-600">
            We are open daily from <strong>1:00 PM to 11:00 PM</strong>
          </p>
        </div>

        {/* Opening hours list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Monday - Sunday</h3>
            <p className="text-lg text-gray-500 mt-2">
              <strong>1:00 PM - 11:00 PM</strong>
            </p>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Special Hours</h3>
            <p className="text-lg text-gray-500 mt-2">
              Our special holiday hours may vary.
            </p>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700">Events</h3>
            <p className="text-lg text-gray-500 mt-2">
              We host special events occasionally. Check our social media for updates.
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Ready to Enjoy?</h3>
          <p className="text-lg text-gray-600 mb-4">
            Join us any day between 1:00 PM to 11:00 PM for a delightful experience.
          </p>
          <a
            href="/reservation"
            className="inline-block px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
