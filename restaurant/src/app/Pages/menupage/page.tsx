import Image from "next/image";
import React from "react";
import MenuPhoto from "@/Components/utils/assets/images/farhad-ibrahimzade-oubBY3kTyU8-unsplash.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Margherita Pizza",
    description:
      "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    price: "$12.99",
  },
  {
    name: "Spaghetti Carbonara",
    description:
      "Traditional Italian pasta with eggs, pancetta, and parmesan.",
    price: "$14.99",
  },
  {
    name: "Caesar Salad",
    description:
      "Crisp Romaine lettuce with Caesar dressing, croutons, and parmesan.",
    price: "$9.99",
  }
];

const MenuPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-8 md:px-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={MenuPhoto}
              alt={item.name}
              width={600}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-xl font-semibold text-gray-900 mt-4">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
