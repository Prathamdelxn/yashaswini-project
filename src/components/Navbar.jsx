"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav
      className={`fixed top-0 w-full py-2 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm shadow-md"
        }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - aligned to left */}
          <div className="relative h-20 w-30 ">
            <Image
              src="/images/yashasveeni-logo-resized.png"
              alt="Yashasveeni Logo"
              fill
              style={{ objectFit: 'contain' }}
              className="" // If you really need the red background
            />
          </div>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-10 lg:space-x-12 text-sm">
              <a href="#"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                Home
              </a>
              <a href="#about"
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                About
              </a>
              <a href="#solutions"
                onClick={() => scrollToSection('solutions')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                Solutions
              </a>
              <a href="#career"
                onClick={() => scrollToSection('career')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                Career
              </a>
              {/* <a href="#contact"
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                Contact Us
              </a> */}
            </div>
          </div>

          {/* Contact Button - aligned to right */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button - aligned to right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Solutions
            </a>
            <a
              href="#career"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Career
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar