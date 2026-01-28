// pages/DerechosLegales.jsx (página principal)
"use client"
import { useState } from 'react'
import Link from "next/link";
import PrivacyPolicy from '@/components/PrivacyPolicy'
import TermsOfService from '@/components/TermsOfService'
import Copyright from '@/components/Copyright' // Tu componente anterior

function DerechosLegales() {
  const [activeSection, setActiveSection] = useState('copyright')

  const sections = [
    { id: 'copyright', label: 'Derechos Reservados', icon: '📜' },
    { id: 'privacy', label: 'Política de Privacidad', icon: '🔒' },
    { id: 'terms', label: 'Términos de Servicio', icon: '📋' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="animate-on-scroll">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
              Documentos <span className="text-pink-400">Legales</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Navegación entre secciones */}
      <div className="container mx-auto px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
            <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center justify-center py-3 px-6 rounded-xl transition duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  <span className="text-xl mr-2">{section.icon}</span>
                  <span className="font-semibold">{section.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contenido dinámico */}
          <div className="mb-8">
            {activeSection === 'copyright' && <Copyright />}
            {activeSection === 'privacy' && <PrivacyPolicy />}
            {activeSection === 'terms' && <TermsOfService />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 animate-on-scroll">
        <div className="container mx-auto px-6 text-center flex flex-col items-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full flex items-center justify-center hover:scale-110 transition duration-300">
              <img src="\imgs\logo-dya.png" alt="logo dya" />
            </div>
            <h3 className="text-xl font-bold">D&A Design Studio</h3>
          </div>
          
          <div className="space-y-2 mb-6">
            <p className="text-gray-400">
              © 2026 D&A Design Studio. San Luis Potosí, México
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition duration-300 hover:underline flex items-center justify-center"
            >
              <span className="mr-2">←</span>
              Volver al inicio
            </Link>
          </div>

          <div className="space-y-2">
            <p className="text-gray-400 text-sm">
              <a href="https://ramonsalas.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-white transition duration-300">
                Diseñado por <span className='underline'>Ramón Salas</span>
              </a>
            </p>
            <img 
              src="/imgs/logo RS white theme.png" 
              alt="logo RS" 
              className='w-20 rounded-xl mt-2 mx-auto hover:scale-110 transition duration-300' 
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DerechosLegales