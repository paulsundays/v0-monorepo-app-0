import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BCCBA Green - Marketplace de Créditos de Carbono",
  description: "Plataforma transparente para la compra y venta de créditos de carbono verificados en Latinoamérica",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ScrollToTop />
        <Header />
        <main className="transition-all duration-300 ease-in-out">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
