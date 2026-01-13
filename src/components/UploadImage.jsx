"use client";

import { useState } from "react";

export default function UploadImage({ offerId }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    formData.append("file", file);
    if (offerId) formData.append("offerId", offerId);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setSuccess(true);
      setFile(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleUpload}
      className="bg-white p-4 rounded-xl shadow space-y-3"
    >
      <h3 className="font-semibold text-slate-800">
        Subir imagen
      </h3>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && (
        <p className="text-green-600 text-sm">
          Imagen subida correctamente
        </p>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Subiendo..." : "Subir Imagen"}
      </button>
    </form>
  );
}
