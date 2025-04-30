import { Navbar } from "@/components/navbar"
import { VideoHero } from "@/components/video-hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <VideoHero />
    </main>
  )
}
