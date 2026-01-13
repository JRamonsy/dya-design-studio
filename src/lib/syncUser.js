import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function syncUser() {
  const user = await currentUser();

  if (!user) {
    throw new Error("No authenticated user");
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (existingUser) {
    return existingUser;
  }

  return await prisma.user.create({
    data: {
      clerkUserId: user.id,
    },
  });
}
