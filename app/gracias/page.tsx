import Link from 'next/link'

export default function GraciasPage() {
  return (
    <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">

        {/* Ícono animado con CSS */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/5">
          <span className="font-display text-3xl italic text-amber-500">✓</span>
        </div>

        <h1 className="font-display text-4xl text-[#f5f0e8] mb-4">
          Listo, lo tenemos.
        </h1>

        <p className="text-white/40 text-sm leading-relaxed mb-10">
          Revisamos tu proyecto y te mandamos una propuesta a tu email
          en las próximas <span className="text-white/70">24 horas</span>.
        </p>

        <div className="space-y-3 text-left rounded-2xl border border-white/10 bg-white/5 p-6 mb-10">
          {[
            ['1', 'Analizamos tu formulario'],
            ['2', 'Definimos el concepto visual'],
            ['3', 'Te enviamos propuesta + presupuesto'],
          ].map(([n, t]) => (
            <div key={n} className="flex items-center gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-xs font-semibold text-amber-500">
                {n}
              </span>
              <span className="text-sm text-white/50">{t}</span>
            </div>
          ))}
        </div>

        <Link href="/" className="text-xs text-white/20 hover:text-white/40 transition-colors">
          ← Volver al inicio
        </Link>

      </div>
    </div>
  )
}
