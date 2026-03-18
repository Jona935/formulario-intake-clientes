import type { Metadata } from 'next'
import { Instrument_Serif, DM_Sans } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-instrument',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm',
})

export const metadata: Metadata = {
  title: 'Cuéntanos sobre tu proyecto',
  description: 'Completa el formulario y recibe tu propuesta en 24 horas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
