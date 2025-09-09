"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-screen object-cover brightness-50"
      >
        <source src="/hero-fundo.mp4" type="video/mp4" />
      </video>
         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/70">
    <div className="text-center text-white">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-9xl font-light text-black tracking-tight ">BSArch</h1>
            <div className="w-24 h-px bg-black mx-auto"></div>
            <p className="text-lg md:text-3xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
              Building Society for Architecture
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-2xl md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mais do que um atelier; é um espaço de convergência entre design, arquitectura e pensamento estratégico.
              Fundado em 2017, em Luanda, expandindo os limites da prática arquitectónica em Angola.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={scrollToAbout} className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-1xl">
                Descobrir Mais
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-1xl"
              >
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </div>
    
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
    </div>
  </div>
    </section>
  )
}
