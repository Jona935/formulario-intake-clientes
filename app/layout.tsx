import type { Metadata } from 'next'
import { Sora, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Cuéntanos sobre tu proyecto',
  description: 'Completa el formulario y recibe tu propuesta en 24 horas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sora.variable} ${jakarta.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
