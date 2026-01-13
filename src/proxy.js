// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware();

// export const config = {
//   matcher: [
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//   ],
// };

// src/proxy.js
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// RUTAS PÚBLICAS (acceso sin login)
const publicRoutes = [
  '/',                          // Home
  '/sign-in(.*)',              // Login (tu página personalizada)
  '/api/upload(.*)',           // API de upload (si es pública)
  // Agrega otras públicas si tienes
]

// RUTAS PROTEGIDAS (requieren login)
const protectedRoutes = [
  '/admin(.*)',                // TODAS las rutas bajo /admin
  '/api/offers(.*)',           // APIs de offers (si quieres protegerlas)
]

const isPublicRoute = createRouteMatcher(publicRoutes)
const isProtectedRoute = createRouteMatcher(protectedRoutes)

export default clerkMiddleware(async (auth, request) => {
  // Si es ruta pública, permite acceso
  if (isPublicRoute(request)) {
    return // Acceso libre
  }
  
  // Si es ruta protegida, verifica autenticación
  if (isProtectedRoute(request)) {
    await auth.protect()
  }
  
  // Otras rutas (no listadas) son públicas por defecto
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

