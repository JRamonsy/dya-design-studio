"use client"

import Link from "next/link"
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { pinkButttonCss } from "@/components/HomeClient"
import { blueButtonCss } from "@/components/Cardsection"

function Layout() {
  const { user } = useUser()
  const pathname = usePathname()

  const isLanding = pathname === "/"
  const isAdmin = pathname.startsWith("/admin")

  return (
    <header className="bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-between px-4 py-2 shadow-sm">

      {/* IZQUIERDA */}
      <div className="flex gap-2">
        {/* 🔓 Usuario NO logeado */}
        <SignedOut>
          {!isLanding && (
            <Link href="/">
              <button className={pinkButttonCss}>
                Landing Page
              </button>
            </Link>
          )}
        </SignedOut>

        {/* 🔐 Usuario logeado */}
        <SignedIn>
          {!isAdmin && (
            <Link href="/admin">
              <button className={pinkButttonCss}>
                Panel
              </button>
            </Link>
          )}

          {!isLanding && (
            <Link href="/">
              <button className="px-4 py-2 rounded-full text-sm bg-white/70 hover:bg-white text-slate-700 shadow transition">
                Ver Landing
              </button>
            </Link>
          )}
        </SignedIn>
      </div>

      {/* DERECHA */}
      <div className="flex items-center gap-3">
        <SignedOut>
          <Link href="/sign-in">
            <button className={blueButtonCss}>
              Iniciar sesión
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600 hidden sm:block">
              Hola, <strong>{user?.firstName || "Admin"}</strong>
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>

    </header>
  )
}

export default Layout
