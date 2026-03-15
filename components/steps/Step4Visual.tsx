'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const estilosVisuales = [
  'Minimalista', 'Elegante / Lujoso', 'Colorido / Vibrante',
  'Oscuro / Dark mode', 'Moderno / Tech', 'Cálido / Orgánico',
  'Profesional / Corporativo', 'Divertido / Juvenil',
  'Artesanal / Handmade', 'Editorial / Revista',
]

export function Step4Visual({ register, errors }: Props) {
  return (
    <div className="space-y-6">

      {/* Logo */}
      <div>
        <label className="label-base">¿Ya tienes logo?</label>
        <div className="space-y-2">
          {[
            { value: 'si', label: 'Sí, lo tengo en alta resolución (PNG/SVG)' },
            { value: 'mejorar', label: 'Sí, pero necesito ayuda para mejorarlo' },
            { value: 'no', label: 'No tengo, necesito uno' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('tieneLogo')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Colores */}
      <div>
        <label className="label-base" htmlFor="coloresMarca">
          ¿Tienes colores de marca? ¿Cuáles?
        </label>
        <input
          id="coloresMarca"
          {...register('coloresMarca')}
          className="input-base"
          placeholder="Ej: azul #1A2E4A, dorado #C9A96E — o 'ayúdame a elegir'"
        />
      </div>

      {/* Estilo visual */}
      <div>
        <label className="label-base">
          ¿Cuál es el estilo visual que buscas? (puedes elegir varios)
        </label>
        <div className="grid grid-cols-2 gap-2">
          {estilosVisuales.map((estilo) => (
            <label key={estilo} className="checkbox-option">
              <input
                type="checkbox"
                value={estilo}
                {...register('estiloVisual')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{estilo}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tipografía */}
      <div>
        <label className="label-base" htmlFor="preferenciaTipografia">
          ¿Tienes preferencia de tipografía?
        </label>
        <input
          id="preferenciaTipografia"
          {...register('preferenciaTipografia')}
          className="input-base"
          placeholder="Ej: serif elegante, sans-serif moderno, o 'elige por mí'"
        />
      </div>

    </div>
  )
}
