export function Team() {
  const team = [
    {
      name: "Belarmino Santos",
      role: "Arquitecto Fundador",
      description:
        "Visionário por trás da BSArch, com mais de uma década de experiência em projectos arquitectónicos inovadores.",
      image: "/professional-architect-portrait-male.jpg",
    },
    {
      name: "Ana Ferreira",
      role: "Arquitecta Sénior",
      description:
        "Especialista em design sustentável e integração urbana, liderando projectos residenciais e comerciais.",
      image: "/professional-architect-portrait-female.jpg",
    },
    {
      name: "Carlos Mendes",
      role: "Designer de Interiores",
      description:
        "Responsável pela criação de espaços interiores que reflectem a identidade e funcionalidade de cada projecto.",
      image: "/professional-interior-designer-portrait-male.jpg",
    },
    {
      name: "Sofia Rodrigues",
      role: "Gestora de Projectos",
      description: "Coordena todos os aspectos dos projectos, garantindo qualidade, prazos e satisfação dos clientes.",
      image: "/professional-project-manager-portrait-female.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">As Mentes</h2>
          <div className="w-16 h-px bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A equipa criativa por trás de cada projecto, unindo talento, experiência e paixão pela arquitectura de
            excelência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-square mb-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-medium text-black">{member.name}</h3>
                <p className="text-md text-gray-500 uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-600 text-md leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl font-light text-black mb-4">A Nossa Filosofia</h3>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Acreditamos que a arquitectura é mais do que construção — é a arte de criar espaços que inspiram, conectam
              e transformam. Cada membro da nossa equipa contribui com a sua expertise única para materializar visões
              arquitectónicas que transcendem expectativas e definem o futuro do design em Angola.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
