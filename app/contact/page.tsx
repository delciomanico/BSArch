import { Navigation } from "@/components/navigation"
import { Contact } from "@/components/contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
    </main>
  )
}
