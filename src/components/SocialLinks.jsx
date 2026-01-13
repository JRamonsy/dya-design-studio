"use client"

import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <section className="flex items-center justify-center gap-8">
      
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="group flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110"
      >
        <FaFacebookF className="text-6xl" />
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="group flex h-28 w-28 items-center justify-center rounded-full bg-pink-100 text-pink-500 shadow-lg transition-all duration-300 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-400 hover:text-white hover:scale-110"
      >
        <FaInstagram className="text-6xl" />
      </a>

    </section>
  )
}
