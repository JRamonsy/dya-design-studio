import Link from "next/link"

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-blue-50 px-6">
      <div className="max-w-md w-full text-center bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10 space-y-6">
        <div className="text-6xl">😕</div>

        <h1 className="text-3xl font-bold text-slate-800">
          Página no encontrada
        </h1>

        <p className="text-slate-500">
          La página que estás buscando no existe o fue movida.
          Puedes regresar al inicio y seguir explorando nuestras promociones.
        </p>

        <Link href="/">
          <button className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold shadow hover:opacity-90 transition">
            Volver al inicio
          </button>
        </Link>
      </div>
    </main>
  )
}
