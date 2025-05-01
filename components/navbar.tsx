"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsServicesOpen(!isServicesOpen)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm relative z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="PBH Builders Logo" width={60} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-[#c5b17e] font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-800 hover:text-[#c5b17e] font-medium">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block">
                <Link href="/services/residential" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Residential
                </Link>
                <Link href="/services/commercial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Commercial
                </Link>
                <Link href="/services/renovation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Renovation
                </Link>
              </div>
            </div>

            <Link href="/projects" className="text-gray-800 hover:text-[#c5b17e] font-medium">
              Projects
            </Link>

            <Link href="/about" className="text-gray-800 hover:text-[#c5b17e] font-medium">
              About
            </Link>

            <Link href="/press" className="text-gray-800 hover:text-[#c5b17e] font-medium">
              Press
            </Link>

            <Link href="/contact" className="text-gray-800 hover:text-[#c5b17e] font-medium">
              Contact
            </Link>
          </nav>

          {/* Call Button */}
          <Button className="hidden lg:flex bg-gray-700 hover:bg-gray-800">Call (858) 348-8585</Button>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image src="/logo.png" alt="PBH Builders Logo" width={60} height={40} className="h-10 w-auto" />
            </Link>
            <button onClick={closeMenu} className="p-2" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 mt-8">
            <Link href="/" className="text-xl py-2 border-b border-gray-100" onClick={closeMenu}>
              Home
            </Link>

            {/* Services with toggle */}
            <div>
              <button
                onClick={toggleServices}
                className="flex items-center justify-between w-full text-xl py-2 border-b border-gray-100"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="pl-4 py-2">
                  <Link href="/services/residential" className="block py-2 text-gray-700" onClick={closeMenu}>
                    Residential
                  </Link>
                  <Link href="/services/commercial" className="block py-2 text-gray-700" onClick={closeMenu}>
                    Commercial
                  </Link>
                  <Link href="/services/renovation" className="block py-2 text-gray-700" onClick={closeMenu}>
                    Renovation
                  </Link>
                </div>
              )}
            </div>

            <Link href="/projects" className="text-xl py-2 border-b border-gray-100" onClick={closeMenu}>
              Projects
            </Link>

            <Link href="/about" className="text-xl py-2 border-b border-gray-100" onClick={closeMenu}>
              About
            </Link>

            <Link href="/press" className="text-xl py-2 border-b border-gray-100" onClick={closeMenu}>
              Press
            </Link>

            <Link href="/contact" className="text-xl py-2 border-b border-gray-100" onClick={closeMenu}>
              Contact
            </Link>

            <Button className="mt-4 bg-gray-700 hover:bg-gray-800">Call (858) 348-8585</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
