import Image from "next/image"

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image src="/modern-office.png" alt="About Us Hero" fill className="object-cover brightness-75" />
        </div>
        <h1 className="text-5xl font-bold text-white z-10 relative">About Us</h1>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-muted-foreground">WHO</span> <span className="text-black">WE ARE</span>
            </h2>
            <div className="w-24 h-1 bg-[#c5b17e] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Premier Construction and <span className="text-[#c5b17e]">Remodeling Solutions</span> in San Diego
              </h3>

              <p>
                At our core, we understand the importance of forging strong relationships within our local community.
                With deep roots in San Diego for several years, PBH Builders, Inc. embraces the spirit of collaboration
                and engagement, working closely with clients to understand their unique vision and deliver outstanding
                results.
              </p>

              <p>
                Our team of skilled professionals possesses a wealth of construction industry knowledge and expertise,
                enabling us to offer innovative home improvement solutions tailored to your specific requirements.
              </p>

              <p>
                When you choose our all-in-one service, you can rest assured that every aspect of your project will be
                meticulously managed. From the initial consultation to the final touches, we handle every step of the
                process with utmost care and dedication. Whether you&apos;re seeking indoor or exterior projects or
                renovations, our team possesses the necessary skills and experience to exceed your expectations.
              </p>

              <div className="flex items-center gap-2">
                <span className="font-semibold">License:</span> 1102758
              </div>
            </div>

            <div className="space-y-4">
              <Image
                src="/neutral-modern-living-room.png"
                alt="Modern Living Room"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
              <Image
                src="/contemporary-interior.png"
                alt="Contemporary Interior"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 mt-16">
            <Image src="/generic-business-accreditation-logo.png" alt="BBB" width={60} height={60} />
            <Image src="/angi-logo.png" alt="Angi" width={60} height={60} />
            <Image src="/porch-logo.png" alt="Porch" width={60} height={60} />
            <Image src="/yelp-logo.png" alt="Yelp" width={60} height={60} />
            <Image src="/google-logo.png" alt="Google" width={60} height={60} />
            <Image src="/green-certification-badge.png" alt="Certification" width={60} height={60} />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-black">WHAT&apos;S</span> <span className="text-[#c5b17e]">OUR STORY</span>
            </h2>
            <div className="w-24 h-1 bg-[#c5b17e] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                With quality craftsmanship and <span className="text-[#c5b17e]">excellent service</span>, we bring your
                dreams to life
              </h3>

              <p>
                Welcome to PBH Builders Inc., the go-to builders and remodeling company for all your home construction
                needs in San Diego. We&apos;re a team of experienced contractors committed to providing exceptional
                craftsmanship, unmatched customer service, and competitive pricing.
              </p>

              <p>
                Our company has been serving the San Diego area for several years, and we take pride in delivering
                top-quality workmanship for each project we undertake. We believe in working closely with our clients to
                understand their unique needs and preferences, and we use that information to create custom plans that
                meet their vision, goals, and budget.
              </p>

              <p>
                At PBH Builders Inc., we are committed to using only the best materials and the latest techniques to
                ensure that your project is built to last. We understand that every project is unique, and we work
                closely with our clients to ensure that every detail is taken care of from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>

              <Image
                src="/modern-kitchen-renovation.png"
                alt="Kitchen Renovation"
                width={300}
                height={300}
                className="rounded-lg shadow-md w-full col-span-2"
              />
              <Image
                src="/modern-living-room-chair.png"
                alt="Living Room"
                width={200}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
              <Image
                src="/placeholder.svg?height=200&width=200&query=contemporary bathroom design"
                alt="Bathroom Design"
                width={200}
                height={200}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
