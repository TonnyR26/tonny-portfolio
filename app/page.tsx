import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"
import Timeline from "@/components/Timeline"
import ParticlesClient from "@/components/ParticlesComponent"

export default function Home() {
  return (
    <main className="relative">
      {/* Particules en arrière-plan */}
      <div className="absolute inset-0 -z-10">
        <ParticlesClient />
      </div>

      {/* Contenu au-dessus */}
      <div className="relative z-10">
        <Hero />
        <ProjectsSection />
        <Timeline />
      </div>
    </main>
  )
}
