import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-gray-600 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 md:w-2/5">
        <Image
          src="/images/blue-chair.jpg"
          alt="Modern blue chair"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Get Started On Your Construction Or Remodeling Project?
          </h2>
          <p className="text-white/90 mb-8">
            Contact PBH Builders Inc. today to schedule your consultation. We look forward to working with you to create
            the home of your dreams.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#c9b78d] hover:bg-[#b8a87e] text-white px-6 py-3 rounded font-medium transition-colors"
            >
              CONTACT US
            </Link>

            <Link
              href="/appointment"
              className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded font-medium transition-colors flex items-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
