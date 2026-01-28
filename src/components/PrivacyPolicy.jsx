"use client"
const PrivacyPolicy = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-on-scroll">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-blue-500">Política de</span> Privacidad
          </h1>
          <p className="text-gray-600">
            Última actualización: Enero 2026
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              🔒
            </span>
            1. Información que Recopilamos
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              En D&A Design Studio respetamos tu privacidad. Recopilamos información cuando:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Nos contactas para solicitar nuestros servicios
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Completes nuestro formulario de contacto
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Realizas una consulta por WhatsApp o correo electrónico
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-green-500">
            2. Uso de la Información
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>Utilizamos tu información para:</p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Procesar y responder a tus consultas
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Proporcionar los servicios solicitados
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Mejorar nuestros servicios y atención al cliente
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Enviar información relevante sobre nuestros servicios (solo si nos autorizas)
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-purple-500">
            3. Protección de Datos
          </h2>
          <div className="text-gray-600">
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
              personal contra accesos no autorizados, alteración, divulgación o destrucción.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-pink-500">
            4. Derechos ARCO
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>
              De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, 
              tienes derecho a:
            </p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Acceder a tus datos personales
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Rectificarlos si son inexactos o incompletos
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Cancelar su uso cuando consideres que no se requieren para nuestras finalidades
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Oponerte al tratamiento de los mismos para fines específicos
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-teal-500">
            5. Contacto para Asuntos de Privacidad
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6">
            <p className="text-gray-700 mb-3">
              Para ejercer tus derechos ARCO o realizar cualquier consulta sobre el tratamiento de tus datos:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-2">Email:</span>
                <span className="text-gray-600">dianaabigaildesignstudio@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-2">Teléfono:</span>
                <span className="text-gray-600">444 505 1812 y 444 436 8315</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy