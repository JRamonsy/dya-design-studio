import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { greenButtonCss } from "../page"
import DeleteButton from "@/components/DeleteButton"

export default async function ManagementPage() {
  const offers = await prisma.offer.findMany({
    orderBy: { createdAt: "desc" },
    include: { images: true },
  })

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Gestión de ofertas</h1>

        <div className="flex items-center gap-4">
          {offers.length < 6 ? (
            <Link href="/admin/management/newOffer">
              <button className={greenButtonCss}>Crear Oferta</button>
            </Link>
          ) : (
            <p className="text-yellow-400 font-semibold">
              Límite de 6 ofertas alcanzado
            </p>
          )}
        </div>
      </div>

      {/* Grid de ofertas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Imagen de la oferta */}
            {offer.images?.[0]?.url ? (
              <img
                src={offer.images[0].url}
                alt={offer.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-56 bg-slate-700 flex items-center justify-center text-gray-400">
                Sin imagen
              </div>
            )}

            {/* Overlay con título y descripción */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 text-white">
              <h2 className="text-lg font-semibold">{offer.title}</h2>
              <p className="text-sm mt-1 line-clamp-2">
                {offer.description ?? "Sin descripción"}
              </p>
            </div>

            {/* Botones flotantes */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                href={`/admin/management/${offer.id}`}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow"
              >
                Editar
              </Link>
              <DeleteButton offerId={offer.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
