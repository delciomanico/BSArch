// components/Testimonials.tsx
export default function Testimonials() {
  const testimonials = [
    {
      quote: "A BSA:ch ajudou-nos a concretizar a nossa visão respeitando o ambiente.",
      author: "J. N",
      role: "Projeto"
    },
    {
      quote: "A atenção aos detalhes e o compromisso com os materiais ecológicos são notáveis.",
      author: "A. C.",
      role: "Visão"
    },
    {
      quote: "A BSA:ch ajudou-nos a concretizar a nossa visão respeitando o ambiente.",
      author: "A. G.",
      role: "Cristiviéade"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Testemunhos de Clientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}