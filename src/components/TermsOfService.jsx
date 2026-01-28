"use client"
const TermsOfService = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-on-scroll">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-purple-500">Términos de</span> Servicio
          </h1>
          <p className="text-gray-600">
            Última actualización: Enero 2026
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              📋
            </span>
            1. Aceptación de los Términos
          </h2>
          <div className="text-gray-600">
            <p>
              Al utilizar los servicios de D&A Design Studio, aceptas estar sujeto a estos términos y condiciones. 
              Si no estás de acuerdo con alguna parte de estos términos, no utilices nuestros servicios.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-pink-500">
            2. Servicios Ofrecidos
          </h2>
          <div className="text-gray-600 space-y-3">
            <p>Nuestros servicios incluyen:</p>
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Diseño y personalización de productos
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Creación de tarjetas de presentación físicas y digitales
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Desarrollo de invitaciones digitales interactivas
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                Asesoría en diseño gráfico y branding
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-blue-500">
            3. Proceso de Trabajo
          </h2>
          <div className="text-gray-600 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">a) Consulta Inicial</h3>
              <p>Reunión o comunicación para entender tus necesidades y expectativas.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">b) Propuesta y Cotización</h3>
              <p>Presentación de propuesta detallada con costos y tiempos de entrega.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">c) Aprobación y Anticipo</h3>
              <p>Firma de acuerdo y pago del 50% de anticipo para iniciar el proyecto.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">d) Desarrollo y Revisiones</h3>
              <p>Creación del diseño con revisiones incluidas según el paquete contratado.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">e) Entrega Final</h3>
              <p>Entrega de archivos y productos con pago del saldo pendiente.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-green-500">
            4. Política de Pagos
          </h2>
          <div className="text-gray-600 space-y-3">
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Se requiere 50% de anticipo para iniciar cualquier proyecto
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                El saldo restante se paga al momento de la entrega final
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Aceptamos transferencias bancarias y pagos en efectivo
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Los precios no incluyen IVA a menos que se especifique lo contrario
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-teal-500">
            5. Propiedad Intelectual
          </h2>
          <div className="text-gray-600">
            <p>
              Los derechos de autor de los diseños creados por D&A Design Studio se transfieren al cliente 
              una vez que se ha completado el pago total. Nos reservamos el derecho de mostrar los trabajos 
              realizados en nuestro portafolio a menos que se acuerde lo contrario por escrito.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-orange-500">
            6. Revisiones y Modificaciones
          </h2>
          <div className="text-gray-600 space-y-3">
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Incluimos 3 revisiones en todos nuestros paquetes básicos
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Revisiones adicionales tienen costo extra
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                Los cambios radicales en el concepto inicial pueden generar cargos adicionales
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-red-500">
            7. Cancelaciones y Reembolsos
          </h2>
          <div className="text-gray-600 space-y-3">
            <ul className="space-y-2 pl-6">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                El anticipo no es reembolsable una vez iniciado el trabajo
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                En caso de cancelación, se entregará el trabajo realizado hasta ese momento
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                No realizamos reembolsos por servicios ya prestados
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-indigo-500">
            8. Tiempos de Entrega
          </h2>
          <div className="text-gray-600">
            <p>
              Los tiempos de entrega varían según la complejidad del proyecto y se establecen en la propuesta 
              inicial. Nos esforzamos por cumplir con los plazos acordados, pero no garantizamos tiempos exactos 
              debido a factores fuera de nuestro control.
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            ¿Tienes dudas sobre nuestros términos?
          </h3>
          <p className="text-gray-600 mb-4">
            Contáctanos para aclarar cualquier aspecto de nuestros términos de servicio
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=4444368315&text=Hola, tengo dudas sobre los términos de servicio"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
            <a
              href="mailto:dianaabigaildesignstudio@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 text-center"
            >
              Enviar Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService