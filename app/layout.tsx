import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Open_Sans, Roboto_Mono } from 'next/font/google'
import "./globals.css"


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: "BSArch - Building Society for Architecture",
  description:
    "Mais do que um atelier; é um espaço de convergência entre design, arquitectura e pensamento estratégico. Fundado em 2017, em Luanda.",
  generator: "BSArch",
  keywords: ["arquitectura", "design", "Angola", "Luanda", "construção", "BSArch"],
  authors: [{ name: "Building Society for Architecture" }],
  openGraph: {
    title: "BSArch - Building Society for Architecture",
    description: "Expandindo os limites da prática arquitectónica em Angola",
    type: "website",
    locale: "pt_AO",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`font-sans ${openSans.variable} ${robotoMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
