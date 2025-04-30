import Image from "next/image"
import { ProjectGallery } from "@/components/project-gallery"
import { ProcessSection } from "@/components/process-section"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image src="/images/projects/project-header.jpg" alt="Project Gallery" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Project Gallery</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We invite you to browse our expansive gallery, showcasing the superior construction and remodeling work
            we&apos;ve accomplished for our diverse clientele throughout San Diego. Our portfolio offers a comprehensive view
            into our varied projects, illustrating our expertise in multiple domains.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-4">
            You&apos;ll find examples of custom homes weve meticulously crafted from the ground up, the embodiment of our
            clients&apos; dreams realized in brick and mortar; we also feature extensive home additions, where we&apos;ve
            seamlessly integrated new spaces into existing structures, enhancing functionality while respecting the
            original architectural style.
          </p>
        </div>

        <ProjectGallery />
      </div>

      {/* Decorative wave divider */}
      <div className="relative h-24 bg-[#f9f3e8] overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <ProcessSection />

   
    </main>
  )
}
