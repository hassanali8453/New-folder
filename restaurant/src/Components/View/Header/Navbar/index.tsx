"use client";
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';
import { IoMdMenu } from "react-icons/io";
import Sidebar from '../SideBar';
import 'animate.css';



const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white bg-opacity-80 fixed w-full animate__animated animate__fadeIn z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-300">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h1 id='logo' className="text-2xl whitespace-nowrap font-bold text-[#7B3F00]">Altham Whistle</h1>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button id="contect" className='text-[#7B3F00] font-bold'>0141 611 2775</button>
                        <button id='menubtn' onClick={toggleSidebar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden">
                            <IoMdMenu />
                        </button>
                    </div>
                    <div id='navbutton' className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 font-medium rtl:space-x-reverse md:flex-row md:mt-0">
                            <li>
                                <Link href="#" className="block py-2 px-3 text-black rounded md:p-0" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded md:p-0">Opening Hours</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded md:p-0">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded md:p-0">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 px-3 rounded md:p-0">Our Menu & Pricing</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* SideBar For Mobile */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default NavBar;
