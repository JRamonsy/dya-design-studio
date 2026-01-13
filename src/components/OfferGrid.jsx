"use client"

export default function OfferGrid({ offers }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {offers.map((offer) => (
        <article
          key={offer.id}
          className="border rounded-lg overflow-hidden"
        >
          {offer.images[0] && (
            <img
              src={offer.images[0].url}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
          )}

          <div className="p-4 space-y-2">
            <h3 className="font-bold">{offer.title}</h3>
            <p className="text-sm text-slate-500">
              {offer.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  )
}
