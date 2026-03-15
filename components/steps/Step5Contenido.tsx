'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function Step5Contenido({ register, errors }: Props) {
  return (
    <div className="space-y-6">

      {/* Textos */}
      <div>
        <label className="label-base">¿Tienes textos escritos para la web?</label>
        <div className="space-y-2">
          {[
            { value: 'si', label: 'Sí, tengo todo el contenido listo' },
            { value: 'algunos', label: 'Tengo algunos textos pero necesito ayuda' },
            { value: 'no', label: 'No tengo, necesito que se redacten' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('tieneTextos')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fotos */}
      <div>
        <label className="label-base">¿Tienes fotografías o imágenes?</label>
        <div className="space-y-2">
          {[
            { value: 'profesionales', label: 'Sí, tengo fotos profesionales' },
            { value: 'algunas', label: 'Tengo algunas fotos (calidad variable)' },
            { value: 'banco', label: 'No, usar banco de imágenes (Unsplash, etc.)' },
            { value: 'ninguna', label: 'Ninguna, necesito sesión fotográfica (externo)' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('tieneFotos')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Video */}
      <div>
        <label className="label-base">¿Necesitas video en la web?</label>
        <div className="space-y-2">
          {[
            { value: 'no', label: 'No necesito video' },
            { value: 'tengo', label: 'Sí, tengo el video listo' },
            { value: 'necesito', label: 'Sí, pero necesito uno producido (externo)' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('necesitaVideo')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

    </div>
  )
}
