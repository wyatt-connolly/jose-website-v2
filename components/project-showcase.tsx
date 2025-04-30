import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  type: string
  title: string
  location: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: "teriyaki-madness",
    type: "COMMERCIAL",
    title: "Teriyaki Madness Restaurant Remodel",
    location: "San Diego, CA",
    image: "/images/projects/teriyaki-madness.jpg",
    description:
      "AH Construction completed a comprehensive remodel of the Teriyaki Madness restaurant located in San Diego, CA. The goal of the remodel was to revitalize the restaurant's interior and exterior, creating a modern and inviting space that reflects the brand's vibrant and bold identity. The project was designed to enhance the customer experience, providing a more efficient layout and updated aesthetics that align with Teriyaki Madness' commitment to delivering delicious, high-quality food in a welcoming environment.",
  },
  {
    id: "victory-outreach",
    type: "COMMERCIAL",
    title: "Victory Outreach Church Remodel Design & 3D Rendering",
    location: "San Diego, CA",
    image: "/images/projects/victory-outreach.jpg",
    description:
      "AH Construction partnered with Victory Outreach Church in San Diego, CA, to deliver comprehensive building remodel design services, including detailed 3D renderings. The project's objective was to create a modern, functional space that supports the church's community-focused mission while enhancing both aesthetics and usability. The 3D renderings provided a visual blueprint of the proposed changes, allowing the client to see the finished design before construction began.",
  },
  {
    id: "stanton-optical",
    type: "COMMERCIAL",
    title: "Stanton Optical Building Remodel",
    location: "San Diego, CA",
    image: "/images/projects/stanton-optical.jpg",
    description:
      "AH Construction successfully completed a full building remodel for Stanton Optical in San Diego, CA. The project focused on updating the optical store's interior and exterior to create a more inviting, efficient, and modern environment for both customers and staff. Our goal was to enhance the store's functionality and aesthetic appeal, aligning it with Stanton Optical's vision of providing accessible and high-quality eye care services.",
  },
]

export function ProjectShowcase() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Some of Our Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row"
          >
            <div className="md:w-1/2 relative">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
              <div className="text-sm font-medium text-gray-500 mb-2">{project.type}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#b8a87e] mb-2">
                {project.title} in {project.location}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">{project.description}</p>
              <div>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center px-4 py-2 bg-[#b8a87e] hover:bg-[#a39569] text-white font-medium rounded transition-colors"
                >
                  See More <span className="ml-2">»</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-medium rounded transition-colors"
        >
          See More
        </Link>
      </div>
    </section>
  )
}
