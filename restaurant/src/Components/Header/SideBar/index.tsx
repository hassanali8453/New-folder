import Link from 'next/link';
import React from 'react';
import { IoMdClose } from "react-icons/io";


interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-black bg-white p-2 rounded-full border"
      >
        <IoMdClose />
      </button>

      {/* Sidebar Content */}
      <nav className="mt-16 px-4">
        <ul className="space-y-4">
          <li>
            <Link href="#" className="w-full text-left py-2 px-4 text-[#982121] font-medium rounded">
                Home
            </Link>
          </li>
          <li>
            <Link href="#" className="w-full text-left py-2 px-4 text-[#982121] font-medium rounded">
                Opening Hours Page
            </Link>
          </li>
          <li>
            <Link href="#" className="w-full text-left py-2 px-4 text-[#982121] font-medium rounded">
                About Us
            </Link>
          </li>
          <li>
            <Link href="#" className="w-full text-left py-2 px-4 text-[#982121] font-medium rounded">
                Contact Us
            </Link>
          </li>
          <li>
            <Link href="#" className="w-full text-left py-2 px-4 text-[#982121] font-medium rounded">
                Our Menu & Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
