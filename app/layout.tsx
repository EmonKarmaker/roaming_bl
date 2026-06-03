import type { Metadata } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Roaming Bangladesh | B2B Travel Marketplace',
  description: 'One platform for Flights, Hotels, Visa, Tours & Umrah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans antialiased bg-white">{children}</body>
    </html>
  )
}
