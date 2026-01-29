// components/CustomDialog.jsx - Versión actualizada
import { useEffect, useRef } from 'react'

const CustomDialog = ({ 
  isOpen, 
  onClose, 
  title = "¡Próximamente!",
  message = "Mantente al pendiente!!!",
  icon = "🚀",
  actions,
  additionalInfo
}) => {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else {
      dialog.close()
      document.body.style.overflow = 'auto'
    }

    return () => {
      dialog.close()
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      handleClose()
    }
  }

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 m-auto hidden open:flex items-center justify-center p-4 bg-transparent backdrop:bg-black/50 animate-fade-in"
      style={{ maxWidth: '90vw', maxHeight: '90vh' }}
    >
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 max-w-md w-full transform animate-scale-in">
        
        {/* Icono */}
        <div className="flex justify-center mb-6">
          {typeof icon === 'string' ? (
            <div className="w-24 h-24 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full flex items-center justify-center animate-bounce-slow">
              <span className="text-4xl">{icon}</span>
            </div>
          ) : (
            <div className="animate-bounce-slow">
              {icon}
            </div>
          )}
        </div>

        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h2>

        {/* Mensaje */}
        <div className="text-center mb-6">
          <p className="text-gray-600 text-base md:text-lg mb-3">{message}</p>
          
          {additionalInfo && (
            <p className="text-gray-500 text-sm italic border-t border-gray-200 pt-3 mt-3">
              {additionalInfo}
            </p>
          )}
        </div>


        {/* Botones de acción personalizados o por defecto */}
        {actions ? (
          actions
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleClose}
              className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              Entendido
            </button>
            
            <button
              onClick={() => {
                handleClose()
                window.open('https://api.whatsapp.com/send?phone=4444368315&text=Hola, quiero recibir notificaciones cuando esté listo!', '_blank')
              }}
              className="flex-1 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
            >
              Notificarme
            </button>
          </div>
        )}

        {/* Info para cerrar */}
        <p className="text-gray-400 text-xs text-center mt-6">
          Presiona ESC o haz clic fuera para cerrar
        </p>
      </div>
    </dialog>
  )
}

export default CustomDialog