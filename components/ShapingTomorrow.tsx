// components/ShapingTomorrow.tsx
export default function ShapingTomorrow() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-[80%] mx-auto p-10 grid grid-cols-2 bg-[url('/img/ftuy3.jpg')] bg-cover bg-fixed bg-center">
       <div className="p-8 flex justify-end text-right">
         <h2 className="max-w-[50%] text-5xl font-bold text-right mb-12 text-gray-800">
          Moldar a Cidade do Amanhã
        </h2>
       </div>
        
        <div className="bg-white/20 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Compromisso com a Sustentabilidade
          </h3>
          
          <p className="text-gray-600 mb-4">
            A nossa visão gira em torno da criação de ambientes urbanos que promovam uma vida sustentável, 
            ao mesmo tempo que atendem às necessidades de estilo de vida dos indivíduos e das comunidades modernas. 
            Ambicionamos redefinir a arquitectura em Angola, integrando práticas amigas do ambiente em cada projecto, 
            enriquecendo espaços onde as pessoas possam prosperar.
          </p>
          
          <p className="text-gray-600 mb-4">
            A BSArch visualiza o futuro do desenvolvimento urbano como uma combinação perfeita de design elegante 
            e consciência ambiental, criando legados duradouros que ecoam por todas as comunidades.
          </p>
          
          <p className="text-gray-600">
            À medida que crescemos, o nosso compromisso continua forte — criando espaços esteticamente agradáveis, 
            eficientes e sustentáveis que realmente atendam aos desafios arquitetônicos atuais.
          </p>
        </div>
      </div>
    </section>
  );
}