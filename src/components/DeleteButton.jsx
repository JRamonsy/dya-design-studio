"use client"

import { useRouter } from "next/navigation"

export default function DeleteButton({ offerId }) {
  const router = useRouter()

  async function handleDelete() {
    const confirmed = confirm("¿Seguro que deseas eliminar esta oferta?")
    if (!confirmed) return

    try {
      const res = await fetch(`/api/offers/${offerId}`, {
        method: "DELETE",
        credentials: "include", // 🔹 Asegura envío de cookies
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 0 }, // 🔹 Evita caché en SSR
      })

      if (!res.ok) {
        const data = await res.json()
        alert(data.error || "Error al eliminar la oferta")
        return
      }

      router.refresh()
    } catch (error) {
      alert("Error al eliminar la oferta: " + error.message)
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-400 hover:underline"
    >
      Eliminar
    </button>
  )
}
