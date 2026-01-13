import FormOffer from "@/components/FormOffer"
import { currentUser } from "@clerk/nextjs/server"
import Link from "next/link";
import { redirect } from "next/navigation"
import { IoMdArrowRoundBack } from "react-icons/io";
import { redButtonCss } from "../page";

async function NewOfferPage() {
  // const user = await currentUser()

  // if (!user) {
  //   redirect("/sign-in")
  // }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 px-6 py-12">
      <Link href="/admin/management">
        <button className={redButtonCss}> <IoMdArrowRoundBack className="text-3xl" /> </button>
      </Link>
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800">
            Crear nueva oferta
          </h1>
          <p className="text-slate-500 mt-2">
            Agrega una promoción que se mostrará en tu landing page
          </p>
        </header>

        <FormOffer />

        {/* 🧠 Recomendaciones */}
        <section className="mt-12 bg-white/70 backdrop-blur rounded-3xl p-8 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">
            Recomendaciones para una mejor visualización
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
            {/* Título */}
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">
                🏷️ Título
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Máximo recomendado: <strong>40 caracteres</strong></li>
                <li>Usa frases cortas y claras</li>
                <li>Evita textos largos o con símbolos excesivos</li>
              </ul>
              <p className="text-xs text-slate-400">
                El título se muestra en modales y debe leerse rápido.
              </p>
            </div>

            {/* Descripción */}
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">
                📝 Descripción
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Máximo recomendado: <strong>120–160 caracteres</strong></li>
                <li>Explica el beneficio principal</li>
                <li>No repitas el título</li>
              </ul>
              <p className="text-xs text-slate-400">
                Se muestra al tocar la imagen, principalmente en celulares.
              </p>
            </div>

            {/* Imagen */}
            <div className="space-y-2">
              <h3 className="font-medium text-slate-800">
                🖼️ Imagen
              </h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Formato recomendado: <strong>JPG o PNG</strong></li>
                <li>Proporción ideal: <strong>1:1 o 4:5</strong></li>
                <li>Peso máximo sugerido: <strong>1 MB</strong></li>
              </ul>
              <p className="text-xs text-slate-400">
                La imagen se muestra sin texto, asegúrate de que sea clara.
              </p>
            </div>
          </div>

          {/* Extra */}
          <div className="mt-6 text-center text-xs text-slate-400">
            💡 Tip: La mayoría de los usuarios verá las ofertas desde su celular.
            Prioriza imágenes limpias, con buen contraste y sin textos pequeños.
          </div>
        </section>

        
      </div>
    </main>
  )
}

export default NewOfferPage
