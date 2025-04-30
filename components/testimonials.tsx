"use client"

import { useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jen M.",
    location: "SAN DIEGO, CA",
    image: "/images/testimonials/jen.jpg",
    text: '"I cannot thank PBH Builders enough for making my dream home a reality! From the initial design consultation to the final walk-through, their team was professional, knowledgeable, and attentive to every detail. The execution was perfect. They took the time to understand my unique needs and preferences and delivered a home that exceeded my expectations."',
  },
  {
    id: 2,
    name: "Tom S.",
    location: "LA JOLLA, CA",
    image: "/images/testimonials/tom.jpg",
    text: '"If you\'re looking for a team that is committed to delivering high-quality workmanship, look no further than PBH Builders! They built a beautiful outdoor living space for us that is now the envy of our neighborhood. The PBH Builders team was dedicated to ensuring that every detail was perfect, and the final result speaks for itself. Highly recommended!"',
  },
  {
    id: 3,
    name: "Sarah L.",
    location: "DEL MAR, CA",
    image: "/images/testimonials/sarah.jpg",
    text: '"Working with PBH Builders on our kitchen renovation was a fantastic experience. Their attention to detail and commitment to quality craftsmanship is unmatched. The team was responsive, professional, and kept us informed throughout the entire process. Our new kitchen is absolutely stunning and exactly what we envisioned."',
  },
  {
    id: 4,
    name: "Michael R.",
    location: "ENCINITAS, CA",
    image: "/images/testimonials/michael.jpg",
    text: '"PBH Builders transformed our outdated bathroom into a modern spa-like retreat. Their team was punctual, respectful of our home, and completed the project on time and within budget. The quality of work is exceptional, and we couldn\'t be happier with the results. We will definitely be using them for future projects!"',
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const showTestimonial = (index: number) => {
    setActiveIndex(index)
  }

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            WHAT OUR <span className="text-[#c9b78d]">CLIENTS SAY</span>
          </h2>
          <div className="w-32 h-1 bg-[#c9b78d] mx-auto mt-4"></div>
        </div>

        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
          We understand that building or remodeling your home can be a daunting task, which is why we have streamlined
          our process to ensure that it is as smooth and stress-free as possible. Here&apos;s how it works:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(activeIndex, activeIndex + 2).map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="text-[#c9b78d] text-6xl font-serif absolute top-4 left-4 opacity-20">&apos;</div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => showTestimonial(index)}
              className={`w-2 h-2 mx-1 rounded-full ${index === activeIndex ? "bg-[#c9b78d]" : "bg-gray-300"}`}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevTestimonial}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            &larr;
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Next testimonials"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}
