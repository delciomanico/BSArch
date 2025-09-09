import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <About />
        <Team />
        <Contact />
      </div>
    </main>
  )
}
