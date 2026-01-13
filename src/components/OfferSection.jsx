"use client"
import { useEffect, useState } from "react"

export default function OfferSection() {
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeOffer, setActiveOffer] = useState(null)

  useEffect(() => {
    fetch("/api/offers")
      .then(res => res.json())
      .then(data => setOffers(data))
      .finally(() => setLoading(false))
  }, [])

  /* 🌀 Skeleton */
  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-64 rounded-3xl bg-slate-800/60 animate-pulse"
          />
        ))}
      </div>
    )
  }

  /* 🌙 Sin ofertas */
  if (!offers.length) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-24 space-y-4">
        <h2 className="text-3xl font-bold ">
          Próximamente ✨
        </h2>
        <p className="text-slate-400 max-w-md">
          Estamos preparando promociones especiales para ti.
          Mantente al pendiente, muy pronto habrá novedades.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* 🖼️ Grid de imágenes */}
      <section className="
      grid
      gap-8
      place-items-center
      grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
      ">
        {offers.map(offer => (
          <button
            key={offer.id}
            onClick={() => setActiveOffer(offer)}
            className="
            group relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl focus:outline-none
            "
          >
            <img
              src={offer.images?.[0]?.url}
              alt={offer.title}
              className="h-128 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs text-slate-600 shadow">
              Ver detalles
            </div>


            {/* overlay sutil */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
          </button>
        ))}
      </section>

      {/* 🧠 MODAL */}
      {activeOffer && (
        <div
          onClick={() => setActiveOffer(null)}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 space-y-4 animate-fade-in"
          >
            <h3 className="text-2xl font-semibold">
              {activeOffer.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeOffer.description}
            </p>

            <button
              onClick={() => setActiveOffer(null)}
              className="w-full mt-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  )
}
