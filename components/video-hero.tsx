"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/construction-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Building Excellence</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Quality construction services for residential and commercial projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              View Our Projects
            </Link>
            <a
              href="/contact"
              className="bg-transparent hover:bg-white/10 border-2 border-white text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Logo Watermark */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-white text-5xl font-bold opacity-70">
          <span className="block">A H</span>
          <span className="block">CONSTRUCTION</span>
        </div>
      </div>
    </div>
  )
}
