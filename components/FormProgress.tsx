'use client'
import { cn } from '@/lib/utils'

interface FormProgressProps {
  currentStep: number
  totalSteps: number
  labels: string[]
}

export function FormProgress({ currentStep, totalSteps, labels }: FormProgressProps) {
  const percent = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 font-medium">
          Paso {currentStep} de {totalSteps}
        </span>
        <span className="text-xs text-brand-400 font-semibold">{percent}%</span>
      </div>

      {/* Barra de progreso */}
      <div className="h-1.5 w-full rounded-full bg-surface-border overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Etiqueta actual */}
      <p className="mt-3 text-sm font-semibold text-white">
        {labels[currentStep - 1]}
      </p>
    </div>
  )
}
