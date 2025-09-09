import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Team } from "@/components/team"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import CoreValues from "@/components/CoreValor"
import ShapingTomorrow from "@/components/ShapingTomorrow"
import Testimonials from "@/components/Testimonials"
import Services from "@/components/Services"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <CoreValues/>
      <ShapingTomorrow/>
      <Services/>
      <Portfolio />
     <Testimonials/> 
      <Team />
      <Contact />
    </main>
  )
}
