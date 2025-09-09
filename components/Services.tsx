// components/Services.tsx
export default function Services() {
    const services = [
        {
            category: "Comercial",
            description: "Entregamos espaços comerciais adaptados à visão da sua marca, integrando estética funcional e sustentabilidade para um crescimento a longo prazo."
        },
        {
            category: "Planeamento Urbano",
            description: "Através do planeamento urbano estratégico, desenvolvemos ambientes inteligentes que ligam as necessidades da comunidade com soluções ecológicas, promovendo espaços de vida vibrantes."
        }
    ];

    return (
        <section className="py-16 px-4 bg-white" id="services">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Serviços
                </h2>

                <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                    Oferecemos soluções arquitetónicas completas com foco na sustentabilidade e no desenvolvimento urbano.
                </p>

                <div className="text-center mb-12">
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                        Explore
                    </button>
                </div>

            </div>
            <div className="flex flex-wrap flex-row max-w-9xl justify-center text-center mx-auto">
                {services.map((service, index) => (
                    <div key={index} className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >

                        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                            <div className="inline-block text-gray-900 mb-4">

                                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"></path>
                                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"></path>
                                </svg>
                            </div>
                            <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{service.category}</h3>
                            <p className="text-gray-500">{service.description}</p>
                        </div>

                    </div>
                ))}
            </div>


            {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                {service.category}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>*/}
        </section >
    );
}