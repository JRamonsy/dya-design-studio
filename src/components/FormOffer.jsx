"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function FormOffer({ mode = "create", initialData = null }) {
  const router = useRouter()
  const isEdit = mode === "edit"

  const [title, setTitle] = useState(initialData?.title ?? "")
  const [description, setDescription] = useState(initialData?.description ?? "")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [preview, setPreview] = useState(null)
  const [offerCount, setOfferCount] = useState(0)

  // ✅ Cargar datos iniciales
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title ?? "")
      setDescription(initialData.description ?? "")
      if (initialData.images?.length > 0) {
        setPreview(initialData.images[0].url)
      }
    }

    // ✅ Contar ofertas actuales para limitar a 6
    if (!isEdit) {
      fetch("/api/offers")
        .then(res => res.json())
        .then(data => setOfferCount(data.length))
        .catch(err => console.error("Error fetching offers:", err))
    }
  }, [initialData, isEdit])

  // Preview al seleccionar un archivo
  function handleFileChange(e) {
    const file = e.target.files?.[0]
    if (file) {
      setPreview(URL.createObjectURL(file))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)

    const file = e.target.file?.files?.[0]
    if (file) formData.append("file", file)

    try {
      const res = await fetch(
        isEdit
          ? `/api/offers/${initialData.id}`
          : "/api/offers",
        {
          method: isEdit ? "PUT" : "POST",
          body: formData,
        }
      )

      if (!res.ok) {
        const data = await res.json()
        // ⚡ Límite de 6 ofertas
        if (data.error?.includes("Máximo 6 ofertas")) {
          setError("Solo puedes tener un máximo de 6 ofertas.")
        } else {
          setError(data.error || "Ocurrió un error")
        }
        throw new Error(data.error || "Error")
      }

      // Reset si es creación
      if (!isEdit) {
        setTitle("")
        setDescription("")
        e.target.reset()
        setPreview(null)
      }

      router.refresh()
      router.push("/admin/management")
    } catch (err) {
      console.error("FORM SUBMIT ERROR:", err)
    } finally {
      setLoading(false)
    }
  }

  // ⚡ Deshabilitar crear oferta si hay 6
  const disableCreate = !isEdit && offerCount >= 6

  return (
  <>
    {/* Overlay de carga */}
    {loading && (
      <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-slate-900 rounded-2xl px-8 py-6 flex flex-col items-center gap-4 shadow-xl">
          <div className="h-10 w-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          <p className="text-white text-sm font-medium">
            Guardando oferta…
          </p>
        </div>
      </div>
    )}

    {/* Card */}
    <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-8">
      {/* Preview */}
      {preview && (
        <div className="mb-6">
          <p className="text-sm text-slate-500 mb-2">Vista previa</p>
          <div className="overflow-hidden rounded-2xl border">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Título de la oferta
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Ej. 20% de descuento en mantenimiento"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Descripción
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe brevemente la promoción"
            className="w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        {/* Imagen */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Imagen de la oferta
          </label>

          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:rounded-full
              file:border-0
              file:bg-blue-50
              file:px-4 file:py-2
              file:text-sm file:font-semibold
              file:text-blue-600
              hover:file:bg-blue-100"
          />

          {isEdit && (
            <p className="text-xs text-slate-400 mt-1">
              Si no seleccionas una imagen nueva, se conservará la actual.
            </p>
          )}
        </div>

        {/* Mensajes */}
        {error && (
          <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-2">
            {error}
          </p>
        )}

        {disableCreate && (
          <p className="text-sm text-yellow-600 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-2">
            Ya alcanzaste el límite de 6 ofertas.
          </p>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={loading || disableCreate}
          className="
            w-full py-3 rounded-xl
            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white font-semibold
            hover:opacity-90
            disabled:opacity-40
            transition
          "
        >
          {isEdit ? "Actualizar oferta" : "Crear oferta"}
        </button>
      </form>
    </div>
  </>
)



}
