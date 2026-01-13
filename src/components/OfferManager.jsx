"use client"

import { useState } from "react"
import FormOffer from "./FormOffer"

export default function OfferManager({ offers = [] }) {
  const [selected, setSelected] = useState(null)

  if (!offers.length) {
    return <p>No hay ofertas aún</p>
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="border p-4 rounded cursor-pointer hover:bg-slate-800"
            onClick={() => setSelected(offer)}
          >
            <h3 className="font-bold">{offer.title}</h3>
            <p className="text-xs text-slate-400">
              {offer.description}
            </p>
          </div>
        ))}
      </div>

      <div>
        {selected ? (
          <FormOffer
            mode="edit"
            initialData={selected}
            onSuccess={() => alert("Oferta actualizada")}
          />
        ) : (
          <p className="text-slate-400">
            Selecciona una oferta para editar
          </p>
        )}
      </div>
    </div>
  )
}
