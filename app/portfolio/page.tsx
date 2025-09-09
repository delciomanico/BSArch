import { Navigation } from "@/components/navigation"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Portfolio />
        <Contact />
      </div>
    </main>
  )
}
