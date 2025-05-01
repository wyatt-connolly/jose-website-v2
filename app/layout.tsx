import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PBH Builders - San Diego Construction & Remodeling",
  description: "Premier construction and remodeling solutions in San Diego",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
