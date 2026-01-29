

export const blueButtonCss = "inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:scale-105 transform"

const Cardsection = () => {
  return (

    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50 animate-on-scroll ">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              <span className="text-blue-500">Tarjetas Digitales</span> Modernas
            </h2>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto">
              Lleva tu presentación al siguiente nivel con nuestras tarjetas digitales interactivas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Información */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center mr-3">
                    📱
                  </span>
                  ¿Por qué elegir tarjetas digitales?
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Comparte instantáneamente por WhatsApp, email o redes sociales
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Actualiza tu información en tiempo real
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Incluye enlaces directos a tus redes y portafolio
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Ecológicas y sin costos de impresión
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Diseños completamente personalizables
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-2xl p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  ¿Listo para modernizar tu presentación?
                </h4>
                <a
                  href="https://mexicodigitalcards.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={blueButtonCss}
                >
                  Ver Ejemplos y Precios
                </a>
                <p className="text-sm text-gray-600 mt-3">
                  Descubre nuestro catálogo completo en México Digital Cards
                </p>
              </div>
            </div>

            {/* Imagen ilustrativa */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-2 shadow-lg transform hover:scale-105 transition duration-300">
                <div className="w-94 h-94 rounded-xl overflow-hidden">
                  <img
                    src="/imgs/digital-cards.png"
                    alt="Ejemplo de tarjeta digital"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Características adicionales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm font-semibold text-gray-700">Instantáneo</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">🌍</div>
              <p className="text-sm font-semibold text-gray-700">Global</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">🔄</div>
              <p className="text-sm font-semibold text-gray-700">Actualizable</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <div className="text-2xl mb-2">💚</div>
              <p className="text-sm font-semibold text-gray-700">Ecológico</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Cardsection