import { Check } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className="text-black">WHY</span> <span className="text-[#c9b78d]">CHOOSE</span> US
        </h2>
        <div className="w-32 h-1 bg-[#c9b78d] mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">
            Experienced and <span className="text-[#c9b78d]">Knowledgeable</span> Contractors
          </h3>

          <p className="text-gray-700">
            Building or remodeling your home can be overwhelming, which is why we&apos;ve simplified our process to make it
            as smooth and worry-free as possible. We guide you through every step, from initial consultation and design
            to project completion, ensuring the result meets and exceeds your expectations. We&apos;ll also offer advice on
            how to maintain your newly built or remodeled space to keep it looking fresh and new for years to come.
          </p>

          <p className="text-gray-700">
            Our team of contractors brings years of experience and industry knowledge to every project. We&apos;re equipped
            to handle any project and can offer valuable tips on how to navigate common construction challenges and make
            informed decisions that save time and money.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <ul className="space-y-4">
            {[
              "Local Expertise",
              "Innovative Designs",
              "Attention to Budget",
              "One-Stop Solution",
              "Green Building Practices",
              "Transparent Communication",
              "Expertise and Experience",
              "Timely Project Completion",
              "Licensed and Insured",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-[#c9b78d]" />
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-50 flex items-center">
        <a href="tel:6197195431" className="text-lg font-medium mr-4 hidden md:block">
          619-719-5431
        </a>
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
    </section>
  )
}
