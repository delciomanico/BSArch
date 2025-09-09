"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Residência Contemporânea",
    category: "Residencial",
    year: "2024",
    location: "Luanda, Angola",
    image: "/img/placeholder.jpg",
    description: "Uma abordagem contemporânea à habitação urbana, integrando sustentabilidade e design inovador.",
  },
  {
    id: 2,
    title: "Centro Comercial Maianga",
    category: "Comercial",
    year: "2023",
    location: "Maianga, Luanda",
    image: "/img/placeholder2.jpg",
    description: "Complexo comercial que redefine a experiência de compras na região central de Luanda.",
  },
  {
    id: 3,
    title: "Escritórios Corporativos",
    category: "Corporativo",
    year: "2023",
    location: "Luanda, Angola",
    image: "/img/placeholder.jpg",
    description: "Espaços de trabalho que promovem colaboração e produtividade através do design inteligente.",
  },
  {
    id: 4,
    title: "Villa Privada",
    category: "Residencial",
    year: "2022",
    location: "Talatona, Luanda",
    image: "/img/placeholder2.jpg",
    description: "Residência privada que combina luxo, conforto e integração com a paisagem natural.",
  },
  {
    id: 5,
    title: "Edifício Institucional",
    category: "Institucional",
    year: "2022",
    location: "Luanda, Angola",
    image: "/img/placeholder.jpg",
    description: "Projeto institucional que reflete transparência e modernidade na arquitetura pública.",
  },
  {
    id: 6,
    title: "Complexo Habitacional",
    category: "Habitacional",
    year: "2021",
    location: "Viana, Luanda",
   image: "/img/placeholder2.jpg",
    description: "Desenvolvimento habitacional que prioriza qualidade de vida e sustentabilidade urbana.",
  },
]

const categories = ["Todos", "Residencial", "Comercial", "Corporativo", "Institucional", "Habitacional"]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Portfólio</h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos nossos projectos mais representativos, demonstrando a diversidade e qualidade do nosso
            trabalho.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-black text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-600 hover:bg-gray-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-md font-medium">{project.category}</p>
                  <h3 className="text-lg font-light">{project.title}</h3>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-md text-gray-500">{project.year}</span>
                </div>
                <p className="text-md text-gray-600">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-light text-black mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-600">{selectedProject.location}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-md">
                      {selectedProject.category}
                    </span>
                    <p className="text-gray-500 mt-1">{selectedProject.year}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
