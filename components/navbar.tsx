"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex-shrink-0">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="A H Construction" width={50} height={50} className="h-10 w-auto" />
          </div>
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-black hover:text-gray-600 font-medium">
          Home
        </Link>

        <div className="relative group">
          <button
            className="flex items-center text-black hover:text-gray-600 font-medium"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {servicesOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
              <Link href="/services/residential" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Residential
              </Link>
              <Link href="/services/commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Commercial
              </Link>
              <Link href="/services/renovation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Renovation
              </Link>
            </div>
          )}
        </div>

        <Link href="/projects" className="text-black hover:text-gray-600 font-medium">
          Projects
        </Link>

        <div className="relative group">
          <button
            className="flex items-center text-black hover:text-gray-600 font-medium"
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {aboutOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
              <Link href="/about/company" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Our Company
              </Link>
              <Link href="/about/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Our Team
              </Link>
              <Link href="/about/history" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                History
              </Link>
            </div>
          )}
        </div>

        <Link href="/press" className="text-black hover:text-gray-600 font-medium">
          Press
        </Link>

        <Link href="/contact" className="text-black hover:text-gray-600 font-medium">
          Contact
        </Link>
      </div>

      <div className="hidden md:block">
        <a
          href="tel:+18583488585"
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded transition-colors"
        >
          Call (858) 348-8585
        </a>
      </div>

      <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col p-4">
            <Link href="/" className="py-2 text-black hover:text-gray-600 font-medium">
              Home
            </Link>
            <button
              className="flex items-center justify-between py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="pl-4">
                <Link href="/services/residential" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                  Residential
                </Link>
                <Link href="/services/commercial" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                  Commercial
                </Link>
                <Link href="/services/renovation" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                  Renovation
                </Link>
              </div>
            )}
            <Link href="/projects" className="py-2 text-black hover:text-gray-600 font-medium">
              Projects
            </Link>
            <button
              className="flex items-center justify-between py-2 text-black hover:text-gray-600 font-medium"
              onClick={() => setAboutOpen(!aboutOpen)}
            >
              About <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {aboutOpen && (
              <div className="pl-4">
                <Link href="/about/company" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                  Our Company
                </Link>
                <Link href="/about/team" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                  Our Team
                </Link>
                <Link href="/about/history" className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                  History
                </Link>
              </div>
            )}
            <Link href="/press" className="py-2 text-black hover:text-gray-600 font-medium">
              Press
            </Link>
            <Link href="/contact" className="py-2 text-black hover:text-gray-600 font-medium">
              Contact
            </Link>
            <a
              href="tel:+18583488585"
              className="mt-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded text-center transition-colors"
            >
              Call (858) 348-8585
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
