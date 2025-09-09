// components/CoreValues.tsx
export default function CoreValues() {
  const values = [
    {
      title: "Sustentabilidade",
      description: "Comprometemo-nos com práticas e materiais ecológicos em todos os projetos."
    },
    {
      title: "Inovação",
      description: "Buscamos constantemente novas soluções e abordagens criativas."
    },
    {
      title: "Integridade",
      description: "Mantemos os mais altos padrões éticos em todas as nossas operações."
    },
    {
      title: "Colaboração",
      description: "Trabalhamos em parceria com clientes e comunidades para resultados excepcionais."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Valores Essenciais
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Os nossos valores giram em torno da sustentabilidade, inovação, integridade e colaboração, 
          garantindo que criamos designs responsáveis.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-700 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}