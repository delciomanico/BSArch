'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-light text-black">A Essência</h2>
              <div className="w-16 h-px bg-black"></div>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Building Society for Architecture é mais do que um atelier; é um espaço de convergência entre design,
                arquitectura e pensamento estratégico.
              </p>

              <p>
                Fundado em 2017, em Luanda, pelo arquitecto Belarmino Santos, o estúdio nasceu com a ambição de expandir
                os limites da prática arquitectónica em Angola, abraçando projectos de múltiplas escalas e contextos.
              </p>

              <p>
                Hoje, a BS Arquitectura projeta não apenas edifícios, mas também experiências — físicas e digitais. Um
                espaço onde ideias ganham forma, onde a criatividade se encontra com a técnica.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-2xl font-light text-black mb-2">2017</h3>
                <p className="text-gray-600">Ano de Fundação</p>
              </div>
              <div>
                <h3 className="text-2xl font-light text-black mb-2">Luanda</h3>
                <p className="text-gray-600">Sede Principal</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-transparent rounded-lg overflow-hidden">
              <DotLottieReact
                src="/animation/edificio.json"
                loop
                autoplay
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-black rounded-lg opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
