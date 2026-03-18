'use client'
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { FormData } from '@/types/form'
import { cn } from '@/lib/utils'

const estilos = [
  {
    id: 'elegante',
    label: 'Elegante',
    desc: 'Limpio, sofisticado, mucho espacio',
    palette: ['#f5f0e8', '#c4a882', '#2a2520'],
  },
  {
    id: 'vibrante',
    label: 'Vibrante',
    desc: 'Colores intensos, energético, llamativo',
    palette: ['#ff6b35', '#f7c59f', '#1a1a2e'],
  },
  {
    id: 'moderno',
    label: 'Moderno',
    desc: 'Tech, oscuro, geométrico',
    palette: ['#6366f1', '#0f172a', '#e2e8f0'],
  },
  {
    id: 'calido',
    label: 'Cálido',
    desc: 'Cercano, natural, orgánico',
    palette: ['#a37c5a', '#f0e6d3', '#2d4a3e'],
  },
  {
    id: 'lujoso',
    label: 'Lujoso',
    desc: 'Oscuro, dorado, premium',
    palette: ['#c9a84c', '#1a1510', '#e8e0d0'],
  },
  {
    id: 'fresco',
    label: 'Fresco',
    desc: 'Claro, minimalista, pastel',
    palette: ['#7ecec4', '#f0fafa', '#1a3a38'],
  },
]

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
  setValue: UseFormSetValue<FormData>
  watch: UseFormWatch<FormData>
}

export function Step2({ register, errors, setValue, watch }: Props) {
  const estiloActual = watch('estiloVisual')

  return (
    <div className="space-y-8">

      <div className="space-y-3">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿Qué estilo visual te representa?
        </label>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {estilos.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setValue('estiloVisual', e.id, { shouldValidate: true })}
              className={cn(
                'select-card items-start text-left gap-3 p-4',
                estiloActual === e.id && 'active'
              )}
            >
              {/* Mini paleta */}
              <div className="flex gap-1">
                {e.palette.map((c) => (
                  <span
                    key={c}
                    className="h-4 w-4 rounded-full border border-white/10"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm text-white/90">{e.label}</p>
                <p className="text-xs text-white/40 mt-0.5">{e.desc}</p>
              </div>
            </button>
          ))}
        </div>
        <input type="hidden" {...register('estiloVisual')} />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          Webs que te gusten (pon 1 o 2 links)
        </label>
        <textarea
          {...register('referencias')}
          className="field resize-none"
          rows={3}
          placeholder="https://ejemplo1.com — me gusta el estilo sobrio&#10;https://ejemplo2.com — me gustan los colores"
        />
        <p className="text-xs text-white/25">No tienen que ser de tu industria, solo webs que te llamen la atención</p>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿Tienes colores de marca?
        </label>
        <input
          {...register('coloresMarca')}
          className="field"
          placeholder="Ej: azul marino y dorado — o 'no tengo, ayúdame a elegir'"
        />
      </div>

    </div>
  )
}
