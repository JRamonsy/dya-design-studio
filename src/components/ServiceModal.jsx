"use client";

export default function ServiceModal({ service, isOpen, onClose }) {


  if (!isOpen || !service) return null;
// if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✕
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Galería de imágenes */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Galería de Trabajos</h4>
              <div className="grid grid-cols-2 gap-4">
                {service.images.map((img, index) => (
  img ? (
    <img
      key={index}
      src={img}
      alt={`${service.title} ejemplo ${index + 1}`}
      className="w-full h-32 object-cover rounded-lg shadow-md"
    />
  ) : (
    <div
      key={index}
      className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm"
    >
      Imagen próximamente
    </div>
  )
))}
              </div>
            </div>
            
            {/* Información detallada */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Detalles del Servicio</h4>
              <ul className="space-y-3 text-gray-600">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">¿Te interesa este servicio?</h5>
                <a
                  href={`https://api.whatsapp.com/send?phone=4444368315&text=Hola, me gustaría información sobre ${service.title}`}
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
//   if (!isOpen || !service) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//       <div className="bg-white rounded-xl max-w-4xl w-full p-6">
//         <button onClick={onClose} className="float-right text-xl">✕</button>
//         <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

//         <div className="grid grid-cols-2 gap-4">
//           {service.images.map((img, i) => (
//             <img key={i} src={img} className="rounded-lg" />
//           ))}
//         </div>
//       </div>
//     </div>
  );
}


// Componente de Modal para servicios
// export default Function ServiceModal ({ service, isOpen, onClose })  {
  
//   )
// }