import Image from "next/image"

export function WhoWeAre() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-[#c9b78d]">WHO</span> WE ARE
        </h2>
        <div className="w-32 h-1 bg-[#c9b78d] mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
            <Image src="/images/kitchen-remodel.jpg" alt="Kitchen Remodel" fill className="object-cover" />
            <div className="absolute top-2 left-2 bg-white/80 px-2 py-1 text-xs">Picture1</div>
          </div>
          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg">
            <Image src="/images/exterior-project.jpg" alt="Exterior Project" fill className="object-cover" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold">
            Premier Construction and
            <span className="text-[#c9b78d]"> Remodeling Solutions</span> in San Diego
          </h3>

          <p className="text-gray-700">
            At our core, we understand the importance of forging strong relationships within our local community. With
            deep roots in San Diego for several years, PBH Builders, Inc. embraces the spirit of collaboration and
            engagement, working closely with clients to understand their unique vision and deliver outstanding results.
            Our team of skilled professionals possesses a wealth of construction industry knowledge and expertise,
            enabling us to offer innovative home improvement solutions tailored to your specific requirements.
          </p>

          <p className="text-gray-700">
            When you choose our all-in-one service, you can rest assured that every aspect of your project will be
            meticulously managed. From the initial consultation to the final touches, we handle every step of the
            process with utmost care and dedication. Whether you&apos;re seeking indoor or exterior projects or renovations,
            our team possesses the necessary skills and experience to exceed your expectations.
          </p>

          <div className="border-l-4 border-[#c9b78d] pl-4 mt-6">
            <p className="text-gray-700">
              <span className="font-semibold">License:</span> 1102758
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-b border-gray-200 py-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <Image
            src="/logos/google-guaranteed.png"
            alt="Google Guaranteed"
            width={100}
            height={50}
            className="h-12 w-auto"
          />
          <Image src="/logos/thumbtack.png" alt="Thumbtack" width={100} height={50} className="h-10 w-auto" />
          <Image src="/logos/bbb.png" alt="BBB" width={100} height={50} className="h-12 w-auto" />
          <Image src="/logos/angi.png" alt="Angi" width={100} height={50} className="h-10 w-auto" />
          <Image src="/logos/porch.png" alt="Porch" width={100} height={50} className="h-10 w-auto" />
          <Image src="/logos/yelp.png" alt="Yelp" width={100} height={50} className="h-10 w-auto" />
        </div>
      </div>
    </section>
  )
}
