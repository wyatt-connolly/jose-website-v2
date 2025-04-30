import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Define the Project interface
interface Project {
  id: string
  title: string
  category: string[]
  image: string
  description: string
  fullDescription?: string
  gallery?: string[]
}

const projects: Project[] = [
    {
    id: "modern-house-renovation",
    title: "Modern House Renovation",
    category: ["house"],
    image: "/images/projects/gallery/house-1.jpg",
    description: "Complete renovation of a two-story house with modern design elements.",
    fullDescription:
      "This comprehensive renovation project transformed an outdated home into a modern masterpiece. Our team completely redesigned the interior layout to create an open-concept living space, installed new hardwood flooring throughout, updated all fixtures and finishes, and modernized the kitchen and bathrooms. The exterior received a fresh new look with updated siding, a new roof, and landscaping improvements.",
    gallery: [
      "/images/projects/gallery/house-1.jpg",
      "/images/projects/gallery/kitchen-1.jpg",
      "/images/projects/gallery/bathroom-1.jpg",
      "/images/projects/gallery/living-1.jpg",
    ],
  },
  {
    id: "retaining-wall-project",
    title: "Hillside Retaining Wall",
    category: ["retaining-wall", "outdoor"],
    image: "/images/projects/gallery/retaining-wall-1.jpg",
    description: "Custom retaining wall built to prevent erosion on a hillside property.",
    fullDescription:
      "This challenging project involved designing and constructing a robust retaining wall to prevent erosion on a steep hillside property. Our team engineered a solution that not only provides structural integrity but also enhances the aesthetic appeal of the landscape. The wall was constructed using high-quality materials that blend seamlessly with the natural surroundings while providing long-lasting durability.",
    gallery: [
      "/images/projects/gallery/retaining-wall-1.jpg",
      "/images/projects/gallery/outdoor-1.jpg",
      "/images/projects/gallery/outdoor-2.jpg",
    ],
  },
  // Additional project details would be added here for all projects
]

type ProjectPageParams = {
  params: {
    projectId: string;
  };
};

export default function ProjectDetailPage({ params }: ProjectPageParams) {
  const project = projects.find((p) => p.id === params.projectId)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((cat) => (
              <span key={cat} className="bg-[#c9b78d] text-white px-3 py-1 rounded-full text-sm font-medium">
                {cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
              </span>
            ))}
          </div>
          <p className="text-xl text-gray-700">{project.description}</p>
        </div>

        {project.fullDescription && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <p className="text-gray-700">{project.fullDescription}</p>
          </div>
        )}

        {project.gallery && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-64 w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-[#c9b78d] hover:bg-[#b8a87e] text-white font-medium rounded transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
