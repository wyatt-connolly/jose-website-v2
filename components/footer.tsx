import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Image src="/logo-white.svg" alt="PBH Builders Inc." width={50} height={50} className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">BUILDERS INC</span>
            </div>

            <p className="text-gray-400 mb-6">
              We&apos;re dedicated to providing our clients with exceptional construction and remodeling services that meet
              their unique needs and preferences.
            </p>

            <Link
              href="/appointment"
              className="bg-[#c9b78d] hover:bg-[#b8a87e] text-white px-4 py-2 rounded font-medium transition-colors flex items-center w-fit"
            >
              <Calendar className="mr-2 h-5 w-5" />
              BOOK AN APPOINTMENT
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  TESTIMONIAL
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#c9b78d] mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">info@pbhbuilders.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#c9b78d] mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">Address: 3735 30TH ST SUITE #3, San Diego, CA 92104</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-[#c9b78d] mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">Phone: (619) 719-5431</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024, PBH Builders Inc.</p>
          <div className="flex mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
              Privacy policy
            </Link>
            <span className="text-gray-600 mx-2">and</span>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
              terms and conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="tel:6197195431"
          className="bg-[#c9b78d] hover:bg-[#b8a87e] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all"
          aria-label="Call us"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </footer>
  )
}
