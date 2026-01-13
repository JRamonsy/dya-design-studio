import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const formData = await req.formData();
  const file = formData.get("file");
  const offerId = formData.get("offerId");

  if (!file) {
    return NextResponse.json(
      { error: "No file provided" },
      { status: 400 }
    );
  }

  // Buscar usuario DB
  const dbUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
    include: { images: true },
  });

  if (!dbUser) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  // 🔥 LÍMITE DE 5 IMÁGENES
  if (dbUser.images.length >= 5) {
    return NextResponse.json(
      { error: "Image limit reached (max 5)" },
      { status: 403 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: `landing/${dbUser.id}`,
        },
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      )
      .end(buffer);
  });

  const image = await prisma.image.create({
    data: {
      publicId: uploadResult.public_id,
      url: uploadResult.secure_url,
      userId: dbUser.id,
      offerId: offerId || null,
    },
  });

  return NextResponse.json(image, { status: 201 });
}
