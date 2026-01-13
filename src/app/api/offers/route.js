// src/app/api/offers/route.js
export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import cloudinary from "@/lib/cloudinary"

// GET /api/offers
export async function GET() {
  const offers = await prisma.offer.findMany({
    include: { images: true },
    orderBy: { createdAt: "desc" },
    take: 6, // ✅ Limita a máximo 6 ofertas
  })

  return NextResponse.json(offers)
}

// POST /api/offers
export async function POST(req) {
  try {
    const clerkUser = await currentUser()
    if (!clerkUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Crear o recuperar usuario local
    const user = await prisma.user.upsert({
      where: { clerkUserId: clerkUser.id },
      update: {},
      create: {
        clerkUserId: clerkUser.id,
        businessName: clerkUser.firstName ?? "Sin nombre",
      },
    })

    // Limitar máximo 6 ofertas
    const totalOffers = await prisma.offer.count()
    if (totalOffers >= 6) {
      return NextResponse.json(
        { error: "Máximo 6 ofertas permitidas" },
        { status: 400 }
      )
    }

    const formData = await req.formData()
    const title = formData.get("title")
    const description = formData.get("description")
    const file = formData.get("file")

    if (!title || !file) {
      return NextResponse.json(
        { error: "Título e imagen son requeridos" },
        { status: 400 }
      )
    }

    // Subir imagen a Cloudinary
    const buffer = Buffer.from(await file.arrayBuffer())
    const uploaded = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "offers" },
        (err, result) => {
          if (err) reject(err)
          resolve(result)
        }
      ).end(buffer)
    })

    // Crear oferta
    const offer = await prisma.offer.create({
      data: {
        title,
        description,
        userId: user.id,
        images: {
          create: {
            url: uploaded.secure_url,
            publicId: uploaded.public_id,
            userId: user.id,
          },
        },
      },
      include: { images: true },
    })

    return NextResponse.json(offer)
  } catch (error) {
    console.error("POST OFFER ERROR:", error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
