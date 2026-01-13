// src/app/api/offers/[id]/route.js
export const runtime = "nodejs"

import { prisma } from "@/lib/prisma"
import cloudinary from "@/lib/cloudinary"
import { NextResponse } from "next/server"
import { currentUser } from "@clerk/nextjs/server"

async function getDbUser() {
  const clerkUser = await currentUser()
  if (!clerkUser) return null

  return prisma.user.findUnique({
    where: {
      clerkUserId: clerkUser.id,
    },
  })
}

// PUT /api/offers/[id]
export async function PUT(req, { params }) {
  try {
    const { id } = await params
    if (!id) return NextResponse.json({ error: "Missing offer id" }, { status: 400 })

    const dbUser = await getDbUser()
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const offer = await prisma.offer.findUnique({
      where: { id },
      include: { images: true },
    })

    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 })
    }

    // ✅ COMPARACIÓN CORRECTA
    if (offer.userId !== dbUser.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const formData = await req.formData()
    const title = formData.get("title")
    const description = formData.get("description")
    const file = formData.get("file")

    await prisma.offer.update({
      where: { id },
      data: { title, description },
    })

    if (file && file.size > 0) {
      if (offer.images.length > 0) {
        await cloudinary.uploader.destroy(offer.images[0].publicId)
        await prisma.image.delete({ where: { id: offer.images[0].id } })
      }

      const buffer = Buffer.from(await file.arrayBuffer())
      const uploaded = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "offers" },
          (err, result) => (err ? reject(err) : resolve(result))
        ).end(buffer)
      })

      await prisma.image.create({
        data: {
          url: uploaded.secure_url,
          publicId: uploaded.public_id,
          offerId: id,
          userId: dbUser.id,
        },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("PUT OFFER ERROR:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


// src/app/api/offers/[id]/route.js




export async function DELETE(req, { params }) {
  try {
    const { id } = await params
    if (!id) return NextResponse.json({ error: "Missing offer id" }, { status: 400 })

    const dbUser = await getDbUser()
    if (!dbUser) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const offer = await prisma.offer.findUnique({
      where: { id },
      include: { images: true },
    })

    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 })
    }

    // ✅ COMPARACIÓN CORRECTA
    if (offer.userId !== dbUser.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    for (const img of offer.images) {
      await cloudinary.uploader.destroy(img.publicId)
    }

    await prisma.image.deleteMany({ where: { offerId: id } })
    await prisma.offer.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE OFFER ERROR:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
