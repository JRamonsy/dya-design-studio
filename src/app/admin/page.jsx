import Link from "next/link"
import { syncUser } from "@/lib/syncUser"
import { redirect } from "next/navigation"
import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"

export const greenButtonCss = "inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:scale-105 transform"

async function AdminPage() {
  const user = await currentUser()

  if (!user) {
    redirect("/sign-in")
  }

  // Sincronizamos el usuario local
  await syncUser()

  // Obtener métricas
  const totalOffers = await prisma.offer.count()
  const totalImages = await prisma.image.count()
  const latestOffer = await prisma.offer.findFirst({
    orderBy: { createdAt: "desc" },
    select: { title: true, createdAt: true },
  })

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">PANEL ADMINISTRADOR</h1>

      {/* Bienvenida */}
      <h2 className="text-xl text-gray-900">
        Bienvenid@ <span className="font-semibold">{user.firstName ?? user.email}</span>
      </h2>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded shadow">
          <p className="text-gray-400 text-sm">Ofertas creadas</p>
          <p className="text-4xl font-bold text-white">{totalOffers}</p>
        </div>
        <div className="bg-slate-800 p-6 rounded shadow">
          <p className="text-gray-400 text-sm">Imágenes subidas</p>
          <p className="text-4xl font-bold text-white">{totalImages}</p>
        </div>
        <div className="bg-slate-800 p-6 rounded shadow">
          <p className="text-gray-400 text-sm">Última oferta</p>
          <p className="text-lg font-semibold text-white">
            {latestOffer ? latestOffer.title : "Sin ofertas"}
          </p>
          {latestOffer && (
            <p className="text-gray-400 text-xs">
              {new Date(latestOffer.createdAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href="/admin/management"
          className={greenButtonCss}
        >
          Gestionar ofertas
        </Link>

        {totalOffers < 6 && (
          <Link
            href="/admin/management/newOffer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:scale-105 transform"
          >
            Crear nueva oferta
          </Link>
        )}

        {totalOffers >= 6 && (
          <p className="text-yellow-400 font-semibold mt-2 md:mt-0">
            Límite de 6 ofertas alcanzado
          </p>
        )}
      </div>
    </div>
  )
}

export default AdminPage
