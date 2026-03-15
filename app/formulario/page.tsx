import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { MultiStepForm } from '@/components/MultiStepForm'

export const metadata: Metadata = {
  title: 'Cuéntanos sobre tu proyecto',
  description: 'Completa el formulario y recibe tu propuesta en 24 horas.',
}

export default function FormularioPage() {
  return (
    <main className="min-h-screen bg-grid py-12 px-4">
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            Volver
          </Link>

          <h1 className="text-2xl font-bold text-white mb-2">
            Cuéntanos sobre tu proyecto
          </h1>
          <p className="text-sm text-gray-500">
            15-20 minutos · Entre más detalle, mejor resultado
          </p>
        </div>

        {/* Card del formulario */}
        <div className="card p-8">
          <MultiStepForm />
        </div>

      </div>
    </main>
  )
}
