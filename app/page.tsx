import Link from 'next/link'
import { ArrowRight, Clock, Sparkles, Shield, CheckCircle } from 'lucide-react'

const beneficios = [
  { icon: Clock, texto: 'Propuesta en 24 horas' },
  { icon: Sparkles, texto: 'Diseño único, nunca genérico' },
  { icon: Shield, texto: 'Stack moderno y escalable' },
]

const pasos = [
  { num: '01', titulo: 'Rellena el formulario', desc: 'Cuéntanos sobre tu negocio, tu audiencia y el estilo que buscas. 15-20 minutos.' },
  { num: '02', titulo: 'Recibimos tu brief', desc: 'Analizamos tus requerimientos y buscamos la mejor dirección creativa para tu marca.' },
  { num: '03', titulo: 'Propuesta en 24h', desc: 'Te enviamos un concepto visual y plan de trabajo con tiempos y costos claros.' },
  { num: '04', titulo: 'Construimos juntos', desc: 'Desarrollamos tu sitio con revisiones y comunicación constante hasta que quedes 100% satisfecho.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-grid">

      {/* Nav */}
      <nav className="border-b border-surface-border/50 px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <span className="font-semibold text-white text-sm tracking-wide">
            Web Studio
          </span>
          <Link href="/formulario" className="btn-primary text-xs px-4 py-2">
            Empezar <ArrowRight size={14} />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-600/10 px-4 py-1.5 text-xs font-medium text-brand-400 mb-8">
          <Sparkles size={12} />
          Páginas web a medida con IA
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Tu negocio merece una web{' '}
          <span className="text-gradient">que lo refleje</span>
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
          No creamos templates genéricos. Diseñamos y desarrollamos sitios web únicos,
          construidos sobre tu marca, tu audiencia y tus objetivos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/formulario" className="btn-primary text-base px-8 py-4">
            Iniciar mi proyecto <ArrowRight size={18} />
          </Link>
          <span className="text-sm text-gray-500">Sin compromiso • Propuesta gratis</span>
        </div>

        {/* Beneficios */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {beneficios.map(({ icon: Icon, texto }) => (
            <div key={texto} className="flex items-center gap-2 text-sm text-gray-400">
              <Icon size={15} className="text-brand-400 shrink-0" />
              {texto}
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-3">¿Cómo funciona?</h2>
          <p className="text-gray-500 text-sm">Un proceso simple y transparente de principio a fin</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {pasos.map((paso) => (
            <div key={paso.num} className="card p-6">
              <div className="text-4xl font-extrabold text-gradient opacity-60 mb-3 leading-none">
                {paso.num}
              </div>
              <h3 className="font-semibold text-white mb-2">{paso.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{paso.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-surface-border/50">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-400 mb-8">
            Completa el formulario en 15 minutos y recibe tu propuesta mañana.
          </p>
          <Link href="/formulario" className="btn-primary text-base px-10 py-4">
            Comenzar ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  )
}
