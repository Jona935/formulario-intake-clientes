'use client'
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { FormData } from '@/types/form'
import { cn } from '@/lib/utils'

const industrias = [
  { emoji: '🍕', label: 'Restaurante' },
  { emoji: '🛒', label: 'Tienda' },
  { emoji: '💄', label: 'Belleza' },
  { emoji: '🏥', label: 'Salud' },
  { emoji: '💻', label: 'Tech' },
  { emoji: '🎨', label: 'Agencia' },
  { emoji: '📚', label: 'Educación' },
  { emoji: '🏗', label: 'Construcción' },
  { emoji: '✈️', label: 'Turismo' },
  { emoji: '⚖️', label: 'Legal' },
  { emoji: '🏋️', label: 'Fitness' },
  { emoji: '✦', label: 'Otro' },
]

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
  setValue: UseFormSetValue<FormData>
  watch: UseFormWatch<FormData>
}

export function Step1({ register, errors, setValue, watch }: Props) {
  const industriaActual = watch('industria')

  return (
    <div className="space-y-8">

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          Nombre del negocio
        </label>
        <input
          {...register('nombreNegocio', { required: true })}
          className="field text-lg"
          placeholder="Ej: La Cúspide Café"
          autoFocus
        />
        {errors.nombreNegocio && (
          <p className="text-xs text-red-400">Este campo es obligatorio</p>
        )}
      </div>

      <div className="space-y-3">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿En qué industria estás?
        </label>
        <div className="grid grid-cols-4 gap-2">
          {industrias.map((ind) => (
            <button
              key={ind.label}
              type="button"
              onClick={() => setValue('industria', ind.label, { shouldValidate: true })}
              className={cn(
                'select-card text-xs',
                industriaActual === ind.label && 'active'
              )}
            >
              <span className="text-2xl">{ind.emoji}</span>
              <span>{ind.label}</span>
            </button>
          ))}
        </div>
        <input type="hidden" {...register('industria', { required: true })} />
        {errors.industria && (
          <p className="text-xs text-red-400">Selecciona una industria</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          Descríbelo en 1-2 oraciones
        </label>
        <textarea
          {...register('descripcion', { required: true })}
          className="field resize-none"
          rows={3}
          placeholder="Ej: Vendemos café de especialidad con servicio a domicilio. Nuestro diferencial es la experiencia de barista en casa."
        />
        {errors.descripcion && (
          <p className="text-xs text-red-400">Cuéntanos un poco más</p>
        )}
      </div>

    </div>
  )
}
