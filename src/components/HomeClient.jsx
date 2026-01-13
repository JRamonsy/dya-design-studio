"use client";

import { useState, useEffect, useRef } from "react";
import Cardsection from "@/components/Cardsection";
import OfferSection from "@/components/OfferSection";
import ServiceModal from "@/components/ServiceModal";
import SocialLinks from "@/components/SocialLinks";



export const pinkButttonCss = "bg-pink-300 hover:bg-pink-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:scale-105 animate-bounce-slow"

export default function HomeClient() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

    // Datos de los servicios con imágenes
  const servicesData = [
    {
      id: 1,
      title: "Personalización",
      icon: "👕",
      color: "from-pink-100 to-pink-50",
      iconColor: "bg-pink-200",
      images: [
        "/imgs/img-tshirts-1.jpg",
        "/imgs/img-thermal-glasses-1.png",
        "/imgs/img-thermal-glasses-2.png",
        ""
      ],
      details: [
        "Playeras personalizadas en alta calidad DTF",
        "Vasos térmicos con diseños únicos y duraderos",
        "Termos personalizados para regalos empresariales",
        "Técnicas de impresión de última generación",
        "Materiales premium y acabados profesionales"
      ]
    },
    {
      id: 2,
      title: "Tarjetas de Presentación",
      icon: "💼",
      color: "from-blue-100 to-blue-50",
      iconColor: "bg-blue-200",
      images: [
        "",
        "",
        "",
        ""
      ],
      details: [
        "Diseños modernos y profesionales",
        "Diferentes tipos de papel y acabados",
        "Tipografía y colores que reflejan tu marca",
        "Diseños minimalistas o corporativos",
        "Entrega rápida y calidad garantizada"
      ]
    },
    {
      id: 3,
      title: "Invitaciones Digitales",
      icon: "📱",
      color: "from-purple-100 to-purple-50",
      iconColor: "bg-purple-200",
      images: [
        "",
        "",
        "",
        ""
      ],
      details: [
        "Invitaciones interactivas con animaciones",
        "Videos personalizados para eventos especiales",
        "Compatible con todas las plataformas",
        "Seguimiento de confirmaciones",
        "Diseños únicos para cada ocasión"
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add("animate-fade-in-up"));
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

    const closeModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  // Animación de entrada para elementos
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

     const handleVideoPlay = () => {
    setIsVideoPlaying(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  return (

    <section>
          <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header con animación */}
      <header className="animate-on-scroll">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="w-66 h-66 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center shadow-md p-4 hover:scale-105 transition duration-300">
                <img 
                  src="\imgs\logo-dya.png" 
                  alt="logo DyA Desing" 
                  className="ml-3 animate-float" 
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section con animación */}
      <section className="container mx-auto px-6 py-12 text-center animate-on-scroll">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 animate-fade-in-down">
          Creatividad que <span className="text-pink-400 animate-pulse">inspira</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Transformamos tus ideas en diseños únicos y memorables
        </p>
        <button className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:scale-105 animate-bounce-slow">
          <a href="https://api.whatsapp.com/send?phone=4444368315&text=Hola, me gustaría información del servicio de '' ''!">
            Contáctanos
          </a>
        </button>
      </section>

      {/* Services Section con animaciones */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-on-scroll">
            Nuestros <span className="text-blue-400">Servicios</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll cursor-pointer`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleServiceClick(service)}
              >
                <div className={`w-20 h-20 ${service.iconColor} rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {service.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx}>• {detail.split(' ').slice(0, 4).join(' ')}...</li>
                  ))}
                </ul>
                <div className="text-center mt-4">
                  <span className="text-pink-500 font-semibold text-sm hover:underline">
                    Ver más detalles →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Actualizada */}
      <section className="py-16 animate-on-scroll">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Conoce Nuestro <span className="text-pink-400">Trabajo</span>
          </h2>
          
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl p-6 shadow-lg">
              {!isVideoPlaying ? (
                <div 
                  className=" bg-gradient-to-br from-pink-200 to-blue-200 rounded-2xl flex items-center justify-center cursor-pointer hover:opacity-90 transition duration-300 relative overflow-hidden"
                  style={{ aspectRatio: '9/16' }}
                  onClick={handleVideoPlay}
                >
                  {/* Miniatura del video o placeholder */}
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition duration-300">
                      <span className="text-2xl text-pink-500">▶</span>
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">Ver video demostrativo</p>
                    <p className="text-gray-600 text-sm mt-2">Haz clic para reproducir</p>
                  </div>
                </div>
              ) : (
                <div className=" bg-black rounded-2xl overflow-hidden relative shadow-2xl"
                style={{ aspectRatio: '9/16' }}>
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    onEnded={handleVideoPause}
                    playsInline
                    /* Agrega estas propiedades para mejor rendimiento en móvil */
                    preload="metadata"
                    webkit-playsinline="true"
                  >
                    {/* Agrega múltiples formatos para mejor compatibilidad */}
                    <source src="/videos/demo-video.mp4" type="video/mp4" />
                    <source src="/videos/demo-video.webm" type="video/webm" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  
                  {/* Botón para cerrar el video */}
                  <button
                    onClick={handleVideoPause}
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition duration-300"
                  >
                    ✕
                  </button>
                  {/* Indicador de que es un Reel */}
                  <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                    🎬 Reel
                  </div>
                </div>
              )}
            </div>
            
            {/* Información adicional debajo del video */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Mira cómo transformamos ideas en diseños extraordinarios
              </p>
            </div>
          </div>
        </div>
      </section>

        <main className="px-6 py-16 md:px-12 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">

          <div className="max-w-7xl mx-auto text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
              Ofertas y Promociones
            </h1>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Descubre nuestras promociones especiales.
              Toca una imagen para conocer los detalles ✨
            </p>
          </div>

          <OfferSection />

        </main>


      <Cardsection/>

      <main className="relative px-6 py-20 md:px-12 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">

  {/* decoraciones suaves */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto text-center">
    <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-white/70 text-pink-600 font-medium shadow">
      Conecta con nosotros
    </span>

    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
      Síguenos en nuestras  
      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
        Redes Sociales
      </span>
    </h1>

    <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
      Descubre promociones, nuevos diseños y contenido exclusivo.
      Mantente al tanto de todo lo que preparamos para ti ✨
    </p>

    <div className="mt-12">
      <SocialLinks />
    </div>
  </div>
</main>




     

      {/* Contact Section con animación */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 animate-on-scroll">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Contáctanos
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition duration-300">
            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-xl hover:scale-[1.02] transition duration-300">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-pink-600">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Teléfonos</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>444 505 1812</p>
                    <p>444 436 8315</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl hover:scale-[1.02] transition duration-300">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center animate-bounce-slow">
                  <span className="text-blue-600">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">dianaabigaildesignstudio@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Envíanos un mensaje
              </h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 transform focus:scale-[1.02]"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 transform focus:scale-[1.02]"
                  />
                </div>
                <textarea 
                  placeholder="Mensaje"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-300 transform focus:scale-[1.02]"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-lg hover:scale-[1.02] transform"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 animate-on-scroll">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center hover:scale-110 transition duration-300">
              <span className="text-gray-800 font-bold">D&A</span>
            </div>
            <h3 className="text-xl font-bold">D&A Design Studio</h3>
          </div>
          <p className="text-gray-400">
            © 2025 D&A Design Studio. Todos los derechos reservados. 
          </p>
          <p className="text-gray-400">
            <a href="https://ramonsalas.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              Diseñado por <span className='underline'>Ramón Salas</span>
            </a>
          </p>
          <img 
            src="/imgs/logo RS white theme.png" 
            alt="logo RS" 
            className='w-20 rounded-xl mt-4 hover:scale-110 transition duration-300' 
          />
        </div>
      </footer>

      {/* Modal para servicios */}
      <ServiceModal 
        service={selectedService} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
    </section>












    // <>
    //   {/* TODO tu JSX de landing */}
      
    //   <main className="p-8">
    //     <h1 className="text-2xl mb-6">Ofertas</h1>
    //     <OfferSection />
    //   </main>

    //   <Cardsection />

    //   <ServiceModal
    //     service={selectedService}
    //     isOpen={isModalOpen}
    //     onClose={() => setIsModalOpen(false)}
    //   />
    // </>
  );
}
