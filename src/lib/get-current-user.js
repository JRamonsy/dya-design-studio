// src/lib/get-current-user.js
import { auth } from '@clerk/nextjs/server'
import { prisma } from './prisma'

export async function getCurrentUser() {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return null
    }
    
    // Buscar usuario en tu base de datos
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
      select: {
        id: true,
        clerkUserId: true,
        businessName: true,
        createdAt: true,
      }
    })
    
    return user
  } catch (error) {
    console.error('Error obteniendo usuario:', error)
    return null
  }
}

// Versión que incluye datos de Clerk también
export async function getFullUser() {
  try {
    const { userId, sessionClaims } = auth()
    
    if (!userId) {
      return null
    }
    
    // Datos de Clerk
    const clerkData = {
      id: userId,
      email: sessionClaims?.email,
      firstName: sessionClaims?.firstName,
      lastName: sessionClaims?.lastName,
      imageUrl: sessionClaims?.imageUrl,
    }
    
    // Datos de tu base de datos
    const dbUser = await prisma.user.findUnique({
      where: { clerkUserId: userId },
      select: {
        id: true,
        clerkUserId: true,
        businessName: true,
        createdAt: true,
        _count: {
          select: {
            offers: true,
            images: true,
          }
        }
      }
    })
    
    return {
      ...clerkData,
      ...dbUser,
    }
  } catch (error) {
    console.error('Error obteniendo usuario completo:', error)
    return null
  }
}