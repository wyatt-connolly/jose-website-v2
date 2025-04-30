export function CompanyIntro() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Commercial General Contractor in San Diego, CA
      </h2>

      <div className="space-y-6 text-gray-700">
        <p className="text-lg">
          AH Construction is a trusted partner for businesses and organizations in San Diego, CA. As a general
          contractor, we specialize in providing a range of services designed to ensure that your commercial spaces are
          built to meet your exact specifications. Our team has extensive experience conceptualizing, budgeting, and
          scheduling projects from start to finish, as well as a proven track record of delivering high-quality results
          within competitive timelines.
        </p>

        <p className="text-lg">
          Whether you are looking to build or renovate an existing space, our team is here to help you get the job done
          right. With a focus on design-build/design-assist, predevelopment consulting, competitive building approaches,
          and more, we have the tools and expertise you need to achieve your goals. So if you&apos;re looking for a
          reliable general contractor in San Diego and beyond, look no further than AH Construction! Whatever your needs
          may be – from tenant improvements and common area renovations to preconstruction management and more – we are
          here to help. So why wait? Contact us today to learn more about how we can help transform your vision into
          reality.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href="/about"
          className="inline-flex items-center px-6 py-3 bg-[#b8a87e] hover:bg-[#a39569] text-white font-medium rounded transition-colors"
        >
          Learn More <span className="ml-2">→</span>
        </a>
      </div>
    </section>
  )
}
