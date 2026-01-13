import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://dyadesignstudio.com"),

  title: {
    default: "D&A Design Studio | Diseño, Impresión y Tarjetas Digitales",
    template: "%s | D&A Design Studio",
  },

  description:
    "Transformamos tus ideas en diseños únicos y memorables. Playeras personalizadas, termos, vasos térmicos, diseño gráfico, invitaciones interactivas y tarjetas digitales.",

  keywords: [
    "D&A Design Studio",
    "diseño gráfico",
    "playeras personalizadas",
    "impresión DTF",
    "vasos térmicos personalizados",
    "termos personalizados",
    "tarjetas digitales",
    "invitaciones digitales",
    "diseño corporativo",
    "branding",
    "diseño para eventos",
  ],

  authors: [{ name: "D&A Design Studio" }],

  openGraph: {
    title: "D&A Design Studio",
    description:
      "Diseño e impresión profesional: playeras DTF, termos personalizados, diseño gráfico, invitaciones interactivas y tarjetas digitales.",
    url: "https://dyadesignstudio.com",
    siteName: "D&A Design Studio",
    images: [
      {
        url: "/imgs/logo-dya.png",
        width: 512,
        height: 512,
        alt: "D&A Design Studio Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },

  icons: {
    icon: "/imgs/logo-dya.png",
    shortcut: "/imgs/logo-dya.png",
    apple: "/imgs/logo-dya.png",
  },

  robots: {
    index: true,
    follow: true,
  },
}



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Layout/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
