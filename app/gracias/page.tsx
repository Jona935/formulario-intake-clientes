import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function GraciasPage() {
  return (
    <div className="bg-grid flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md w-full text-center">

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl
                        border border-blue-500/20 bg-blue-500/10">
          <CheckCircle size={28} className="text-blue-400" />
        </div>

        <h1 className="font-display text-3xl font-bold text-slate-100 mb-3">
          ¡Listo, lo tenemos!
        </h1>

        <p className="text-white/40 text-sm leading-relaxed mb-8 font-body">
          Revisamos tu proyecto y te enviamos una propuesta
          en las próximas <span className="text-white/70 font-semibold">24 horas</span>.
        </p>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 mb-8 text-left space-y-4">
          {[
            ['01', 'Analizamos tu formulario en detalle'],
            ['02', 'Definimos el concepto visual de tu marca'],
            ['03', 'Te enviamos propuesta + presupuesto'],
          ].map(([n, t]) => (
            <div key={n} className="flex items-center gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg
                               bg-blue-500/10 text-xs font-semibold text-blue-400 font-display">
                {n}
              </span>
              <span className="text-sm text-white/50 font-body">{t}</span>
            </div>
          ))}
        </div>

        <Link href="/" className="text-xs text-white/20 hover:text-white/40 transition-colors font-body">
          ← Llenar otro formulario
        </Link>

      </div>
    </div>
  )
}
