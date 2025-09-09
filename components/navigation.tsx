"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-3xl font-bold text-black hover:text-gray-600 transition-colors"
            >
              BSArch
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className={` ${scrolled ? "text-black" : "text-white/60"}  hover:text-gray-400 px-3 py-2 text-lg font-medium transition-colors`}
              >
                O Portal
              </button>
              <button
                onClick={() => scrollToSection("about")}
                 className={` ${scrolled ? "text-black" : "text-white/60"}  hover:text-gray-400 px-3 py-2 text-lg font-medium transition-colors`}
              >
                A Essência
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                 className={` ${scrolled ? "text-black" : "text-white/60"}  hover:text-gray-400 px-3 py-2 text-lg font-medium transition-colors`}
              >
                Portfólio
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={` ${scrolled ? "text-black" : "text-white/60"}  hover:text-gray-400 px-3 py-2 text-lg font-medium transition-colors`}
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={` ${scrolled ? "text-black" : "text-white/60"}  hover:text-gray-400 px-3 py-2 text-lg font-medium transition-colors`}
              >
                Contactos
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              O Portal
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              A Essência
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              As Mentes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium w-full text-left"
            >
              A Ponte
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
