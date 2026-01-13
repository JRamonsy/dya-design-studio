import { prisma } from "@/lib/prisma"
import FormOffer from "@/components/FormOffer"

export default async function EditOfferPage({ params }) {
  // ✅ params es PROMISE en Next 15/16
  const { offerId } = await params

  if (!offerId) {
    throw new Error("Missing offerId param")
  }

  const offer = await prisma.offer.findUnique({
    where: { id: offerId },
    include: {
      images: true,
    },
  })

  if (!offer) {
    return <p className="p-8">Oferta no encontrada</p>
  }

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Editar oferta</h1>

      <FormOffer
        mode="edit"
        initialData={offer}
      />
    </div>
  )
}
