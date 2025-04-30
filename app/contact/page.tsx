import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dark-luxury-interior.png"
            alt="Luxury Interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Feel Free To Contact Us</h1>
            <p className="text-lg">
              We invite you to browse our expansive gallery, showcasing the superior construction and remodeling work
              we&apos;ve accomplished for our diverse clientele throughout San Diego. Our portfolio offers a comprehensive
              view into our varied projects, illustrating our expertise in multiple domains.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <Mail className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-700 uppercase">INFO@PBHBUILDERS.COM</p>
            </div>

            {/* Phone Card */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <Phone className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">(619) 719-5431</p>
            </div>

            {/* Address Card */}
            <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
              <div className="mb-4">
                <MapPin className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-700">4715 30TH ST SUITE #3, SAN DIEGO CA 92116</p>
            </div>
          </div>
        </div>
      </section>


    </main>
  )
}
