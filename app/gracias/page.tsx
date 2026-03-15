import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Formulario enviado — Gracias',
}

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-grid flex items-center justify-center px-4">
      <div className="text-center max-w-md">

        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 mb-6">
          <CheckCircle size={32} className="text-green-400" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          ¡Formulario recibido!
        </h1>

        <p className="text-gray-400 leading-relaxed mb-8">
          Gracias por tomarte el tiempo de completarlo.
          Analizaremos tu proyecto y te enviaremos una propuesta
          personalizada en las próximas <strong className="text-white">24 horas</strong>.
        </p>

        <div className="card p-5 mb-8 text-left space-y-3">
          <h2 className="text-sm font-semibold text-white">¿Qué sigue?</h2>
          {[
            { num: '1', texto: 'Revisamos tu formulario en detalle' },
            { num: '2', texto: 'Buscamos inspiración y definimos dirección creativa' },
            { num: '3', texto: 'Te enviamos propuesta con concepto visual y presupuesto' },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-600/20 text-brand-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {item.num}
              </span>
              <span className="text-sm text-gray-400">{item.texto}</span>
            </div>
          ))}
        </div>

        <Link href="/" className="btn-secondary inline-flex">
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>

      </div>
    </main>
  )
}
