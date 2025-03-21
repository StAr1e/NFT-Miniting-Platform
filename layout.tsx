import type React from "react"
import "@/app/globals.css"

import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "NFTMint - Create, Collect, and Sell Digital Art",
  description: "A professional NFT minting platform for artists and collectors.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'