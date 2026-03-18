'use client'
import { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch } from 'react-hook-form'
import { FormData } from '@/types/form'
import { cn } from '@/lib/utils'

const tiposWeb = [
  { id: 'landing', emoji: '🎯', label: 'Landing page', desc: 'Una sola página para presentarte' },
  { id: 'sitio',   emoji: '📄', label: 'Sitio completo', desc: '3-6 páginas (inicio, servicios, contacto…)' },
  { id: 'tienda',  emoji: '🛍️', label: 'Tienda online', desc: 'Catálogo y carrito de compras' },
  { id: 'blog',    emoji: '✍️', label: 'Blog / Portal', desc: 'Contenido, artículos, noticias' },
]

const funcionalidadesOpts = [
  { id: 'contacto',    label: '📬 Formulario de contacto' },
  { id: 'whatsapp',    label: '💬 Botón de WhatsApp' },
  { id: 'reservas',    label: '📅 Reservas / citas' },
  { id: 'newsletter',  label: '📧 Newsletter' },
  { id: 'mapa',        label: '📍 Mapa / ubicación' },
  { id: 'galeria',     label: '🖼️ Galería de fotos' },
  { id: 'reseñas',     label: '⭐ Reseñas / testimonios' },
  { id: 'analytics',   label: '📊 Analytics' },
]

const plazos = [
  { id: 'urgente',   label: '🔥 Lo antes posible' },
  { id: 'normal',    label: '📆 2-3 semanas' },
  { id: 'sinprisa',  label: '😌 Sin fecha fija' },
]

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
  setValue: UseFormSetValue<FormData>
  watch: UseFormWatch<FormData>
}

export function Step3({ register, errors, setValue, watch }: Props) {
  const tipoActual = watch('tipoWeb')
  const funcActuales = watch('funcionalidades') ?? []
  const plazoActual = watch('plazo')

  const toggleFunc = (id: string) => {
    const next = funcActuales.includes(id)
      ? funcActuales.filter((f) => f !== id)
      : [...funcActuales, id]
    setValue('funcionalidades', next)
  }

  return (
    <div className="space-y-8">

      <div className="space-y-3">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿Qué tipo de web necesitas?
        </label>
        <div className="grid grid-cols-2 gap-3">
          {tiposWeb.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setValue('tipoWeb', t.id, { shouldValidate: true })}
              className={cn('select-card items-start text-left p-4 gap-2', tipoActual === t.id && 'active')}
            >
              <span className="text-2xl">{t.emoji}</span>
              <div>
                <p className="font-semibold text-sm text-white/90">{t.label}</p>
                <p className="text-xs text-white/40 mt-0.5">{t.desc}</p>
              </div>
            </button>
          ))}
        </div>
        <input type="hidden" {...register('tipoWeb')} />
      </div>

      <div className="space-y-3">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿Qué funcionalidades necesitas?
        </label>
        <div className="flex flex-wrap gap-2">
          {funcionalidadesOpts.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => toggleFunc(f.id)}
              className={cn('chip', funcActuales.includes(f.id) && 'active')}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input type="hidden" {...register('funcionalidades')} />
      </div>

      <div className="space-y-3">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿Para cuándo la necesitas?
        </label>
        <div className="flex gap-2 flex-wrap">
          {plazos.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setValue('plazo', p.id)}
              className={cn('chip text-sm px-5 py-2.5', plazoActual === p.id && 'active')}
            >
              {p.label}
            </button>
          ))}
        </div>
        <input type="hidden" {...register('plazo')} />
      </div>

    </div>
  )
}
