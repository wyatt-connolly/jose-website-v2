import Link from "next/link"

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">PBH Builders</span>
          </Link>

          <nav className="flex gap-6">
            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-[#c5b17e] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-[#c5b17e] transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
