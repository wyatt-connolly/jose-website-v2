export function ProcessSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            OUR <span className="text-[#c9b78d]">PROCESS</span>
          </h2>
          <div className="w-32 h-1 bg-[#c9b78d] mx-auto mt-4"></div>
        </div>

        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16">
          We understand that building or remodeling your home can be a daunting task, which is why we have streamlined
          our process to ensure that it is as smooth and stress-free as possible. Here&apos;s how it works:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#f9f3e8] rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Consultation</h3>
            <p className="text-gray-700">
              We&apos;ll schedule a consultation to discuss your vision, goals, and budget for your project.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#f9f3e8] rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Design</h3>
            <p className="text-gray-700">
              We&apos;ll schedule a consultation to discuss your vision, goals, and budget for your project.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#f9f3e8] rounded-full flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-700"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Completion</h3>
            <p className="text-gray-700">
              We&apos;ll schedule a consultation to discuss your vision, goals, and budget for your project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
