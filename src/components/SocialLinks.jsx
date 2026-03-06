"use client"

import { useState } from 'react'
import CustomDialog from '@/components/CustomDialog'
import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function SocialLinks() {
  // Estado para controlar qué diálogo está abierto
  const [activeDialog, setActiveDialog] = useState(null)

  // Configuración de cada red social
  const socialConfig = {
    facebook: {
      title: "Facebook en construcción 🚧",
      message: "¡Estamos preparando algo increíble en Facebook! Pronto podrás conectarte con nuestra comunidad y ver nuestros trabajos más recientes.",
      icon: <FaFacebookF className="text-6xl text-white" />,
      bgColor: "from-blue-500 to-blue-600",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      additionalInfo: "Mantente al pendiente en esta LandingPage para promociones y descuentos.",
    },
    instagram: {
      title: "Instagram próximamente 📸",
      message: "Nuestro perfil de Instagram está en desarrollo. Estamos curando contenido visual espectacular para mostrar nuestro proceso creativo, detrás de cámaras y resultados finales.",
      icon: <FaInstagram className="text-6xl text-white" />,
      bgColor: "from-pink-500 via-purple-500 to-orange-400",
      buttonColor: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
      additionalInfo: "Muy pronto podrás ver nuestro trabajo en stories y reels, por lo pronto mantente al pendiente en esta LandingPage para promociones y descuentos."
    }
  }

  // Funciones para abrir/cerrar diálogos
  const handleOpenDialog = (platform) => {
    setActiveDialog(platform)
  }

  const handleCloseDialog = () => {
    setActiveDialog(null)
  }

  // Función para redirigir a WhatsApp (opcional)
  const handleNotifyMe = () => {
    const platform = socialConfig[activeDialog]?.title || "red social"
    const message = `Hola, quiero recibir notificaciones cuando ${platform} esté listo!`
    window.open(`https://api.whatsapp.com/send?phone=4444368315&text=${encodeURIComponent(message)}`, '_blank')
    handleCloseDialog()
  }

  return (
    <section className="flex items-center justify-center gap-8">
      
      {/* Botón de Facebook */}
      <a
        // onClick={() => handleOpenDialog('facebook')}
        href="https://www.facebook.com/share/1CF98gSSZP/"       
        aria-label="Facebook"
        className="group flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 shadow-lg transition-all duration-300 hover:from-blue-400 hover:to-blue-500 hover:text-white hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
      >
        <div className="relative">
          <FaFacebookF className="text-6xl group-hover:scale-110 transition-transform duration-300" />
          {/* Badge de "próximamente" */}
          {/* <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Pronto
          </span> */}
        </div>
      </a>

      {/* Botón de Instagram */}
      <a
        // onClick={() => handleOpenDialog('instagram')}
        href='https://www.instagram.com/dadesign.studio?utm_source=qr&igsh=cWd6c3ExeXNmOWlz'
        aria-label="Instagram"
        className="group flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 text-pink-500 shadow-lg transition-all duration-300 hover:from-pink-400 hover:to-purple-500 hover:text-white hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-pink-300 cursor-pointer"
      >
        <div className="relative">
          <FaInstagram className="text-6xl group-hover:scale-110 transition-transform duration-300" />
          {/* Badge de "próximamente" */}
          {/*<span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            Pronto
          </span> */}
        </div>
      </a>

      {/* Diálogo para Facebook */}
      {activeDialog === 'facebook' && (
        <CustomDialog
          isOpen={activeDialog === 'facebook'}
          onClose={handleCloseDialog}
          title={socialConfig.facebook.title}
          message={socialConfig.facebook.message}
          icon={
            <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-r ${socialConfig.facebook.bgColor} shadow-lg`}>
              {socialConfig.facebook.icon}
            </div>
          }
          actions={
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleCloseDialog}
                className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                Entendido
              </button>
              <button
                onClick={handleNotifyMe}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                Notificarme
              </button>
            </div>
          }
          additionalInfo={socialConfig.facebook.additionalInfo}
        />
      )}

      {/* Diálogo para Instagram */}
      {activeDialog === 'instagram' && (
        <CustomDialog
          isOpen={activeDialog === 'instagram'}
          onClose={handleCloseDialog}
          title={socialConfig.instagram.title}
          message={socialConfig.instagram.message}
          icon={
            <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-r ${socialConfig.instagram.bgColor} shadow-lg`}>
              {socialConfig.instagram.icon}
            </div>
          }
          actions={
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleCloseDialog}
                className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
              >
                Entendido
              </button>
              <button
                onClick={handleNotifyMe}
                className={`flex-1 ${socialConfig.instagram.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg`}
              >
                Notificarme
              </button>
            </div>
          }
          additionalInfo={socialConfig.instagram.additionalInfo}
        />
      )}

    </section>
  )
}