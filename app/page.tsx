import { VideoHero } from "@/components/video-hero"
import { WhoWeAre } from "@/components/who-we-are"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProjectShowcase } from "@/components/project-showcase"
import { CtaSection } from "@/components/cta-section"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <VideoHero />
      <WhoWeAre />
      <WhyChooseUs />
      <ProjectShowcase />
      <CtaSection />
      <Testimonials />
      <ContactForm /> 
    </main>
  )
}
