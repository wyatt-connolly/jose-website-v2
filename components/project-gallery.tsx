"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type ProjectCategory = "all" | "bathroom" | "kitchen" | "house" | "outdoor" | "pavers" | "retaining-wall"

interface Project {
  id: string
  title: string
  category: ProjectCategory[]
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: "modern-house-renovation",
    title: "Modern House Renovation",
    category: ["house"],
    image: "/images/projects/gallery/house-1.jpg",
    description: "Complete renovation of a two-story house with modern design elements.",
  },
  {
    id: "retaining-wall-project",
    title: "Hillside Retaining Wall",
    category: ["retaining-wall", "outdoor"],
    image: "/images/projects/gallery/retaining-wall-1.jpg",
    description: "Custom retaining wall built to prevent erosion on a hillside property.",
  },
  {
    id: "luxury-pool-installation",
    title: "Luxury Pool Installation",
    category: ["outdoor"],
    image: "/images/projects/gallery/pool-1.jpg",
    description: "Custom pool design and installation with premium finishes.",
  },
  {
    id: "modern-bathroom-remodel",
    title: "Modern Bathroom Remodel",
    category: ["bathroom"],
    image: "/images/projects/gallery/bathroom-1.jpg",
    description: "Complete bathroom renovation with custom shower and premium fixtures.",
  },
  {
    id: "backyard-transformation",
    title: "Backyard Transformation",
    category: ["outdoor", "pavers"],
    image: "/images/projects/gallery/outdoor-1.jpg",
    description: "Complete backyard redesign with custom patio and landscaping.",
  },
  {
    id: "custom-home-construction",
    title: "Custom Home Construction",
    category: ["house"],
    image: "/images/projects/gallery/house-2.jpg",
    description: "New construction of a custom home with modern architectural design.",
  },
  {
    id: "luxury-bathroom-renovation",
    title: "Luxury Bathroom Renovation",
    category: ["bathroom"],
    image: "/images/projects/gallery/bathroom-2.jpg",
    description: "High-end bathroom renovation with freestanding tub and custom vanity.",
  },
  {
    id: "modern-kitchen-remodel",
    title: "Modern Kitchen Remodel",
    category: ["kitchen"],
    image: "/images/projects/gallery/kitchen-1.jpg",
    description: "Complete kitchen renovation with custom cabinetry and premium appliances.",
  },
  {
    id: "small-bathroom-renovation",
    title: "Small Bathroom Renovation",
    category: ["bathroom"],
    image: "/images/projects/gallery/bathroom-3.jpg",
    description: "Space-efficient bathroom renovation with modern fixtures and finishes.",
  },
  {
    id: "white-kitchen-remodel",
    title: "White Kitchen Remodel",
    category: ["kitchen"],
    image: "/images/projects/gallery/kitchen-2.jpg",
    description: "Bright and airy kitchen renovation with white cabinetry and quartz countertops.",
  },
  {
    id: "bar-area-renovation",
    title: "Bar Area Renovation",
    category: ["kitchen"],
    image: "/images/projects/gallery/bar-1.jpg",
    description: "Custom bar area with premium finishes and built-in wine refrigerator.",
  },
  {
    id: "living-room-renovation",
    title: "Living Room Renovation",
    category: ["house"],
    image: "/images/projects/gallery/living-1.jpg",
    description: "Open concept living room renovation with custom built-ins and hardwood flooring.",
  },
  {
    id: "green-kitchen-remodel",
    title: "Green Kitchen Remodel",
    category: ["kitchen"],
    image: "/images/projects/gallery/kitchen-3.jpg",
    description: "Bold kitchen renovation with green cabinetry and custom island.",
  },
  {
    id: "bathroom-vanity-upgrade",
    title: "Bathroom Vanity Upgrade",
    category: ["bathroom"],
    image: "/images/projects/gallery/bathroom-4.jpg",
    description: "Custom bathroom vanity with premium fixtures and finishes.",
  },
  {
    id: "outdoor-living-space",
    title: "Outdoor Living Space",
    category: ["outdoor"],
    image: "/images/projects/gallery/outdoor-2.jpg",
    description: "Custom outdoor living space with artificial turf and lounge area.",
  },
  {
    id: "backyard-patio-renovation",
    title: "Backyard Patio Renovation",
    category: ["outdoor", "pavers"],
    image: "/images/projects/gallery/patio-1.jpg",
    description: "Custom patio design with premium pavers and landscaping.",
  },
  {
    id: "modern-bathroom-design",
    title: "Modern Bathroom Design",
    category: ["bathroom"],
    image: "/images/projects/gallery/bathroom-5.jpg",
    description: "Sleek and modern bathroom design with premium fixtures and finishes.",
  },
]

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category.includes(activeCategory))

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "bathroom", label: "Bathroom" },
    { value: "house", label: "House" },
    { value: "kitchen", label: "Kitchen" },
    { value: "outdoor", label: "Outdoor" },
    { value: "pavers", label: "Pavers" },
    { value: "retaining-wall", label: "Retaining Wall" },
  ]

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.value
                ? "bg-[#c9b78d] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#c9b78d] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
