import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
           @All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link href="/Pages/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="/Pages/contact" className="hover:underline me-4 md:me-6">Contact Us</Link>
        </li>
        <li>
            <Link href="/Pages/opening" className="hover:underline me-4 md:me-6">Opening Hours</Link>
        </li>
        <li>
            <Link href="/" className="hover:underline">Our Menu & Pricing</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer
