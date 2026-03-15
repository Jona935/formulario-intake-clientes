'use client'
import type { UseFormRegister, FieldErrors, UseFormWatch } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
  watch: UseFormWatch<FormData>
}

export function Step7Alcance({ register, errors, watch }: Props) {
  const plazo = watch('plazo')

  return (
    <div className="space-y-6">

      {/* Idioma */}
      <div>
        <label className="label-base">¿En qué idioma(s) debe estar la web?</label>
        <div className="space-y-2">
          {[
            { value: 'español', label: 'Solo español' },
            { value: 'inglés', label: 'Solo inglés' },
            { value: 'ambos', label: 'Español e inglés' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('idioma')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Cantidad de páginas */}
      <div>
        <label className="label-base">¿Cuántas páginas aproximadamente?</label>
        <div className="space-y-2">
          {[
            { value: 'landing', label: '1 página (landing page)' },
            { value: 'basica', label: '3-5 páginas (web básica)' },
            { value: 'mediana', label: '6-10 páginas (web mediana)' },
            { value: 'compleja', label: 'Más de 10 páginas (web compleja)' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('cantidadPaginas')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Plazo */}
      <div>
        <label className="label-base">¿Cuándo necesitas la web lista?</label>
        <div className="space-y-2">
          {[
            { value: 'urgente', label: 'Urgente (menos de 1 semana)' },
            { value: 'normal', label: 'Normal (2-3 semanas)' },
            { value: 'sinprisa', label: 'Sin prisa (más de 1 mes)' },
            { value: 'fecha', label: 'Tengo una fecha específica' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('plazo')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>

        {plazo === 'fecha' && (
          <input
            {...register('fechaEspecifica')}
            className="input-base mt-3"
            placeholder="Ej: 15 de abril de 2025"
          />
        )}
      </div>

      {/* Dominio/Hosting */}
      <div>
        <label className="label-base">¿Tienes dominio y hosting?</label>
        <div className="space-y-2">
          {[
            { value: 'ambos', label: 'Sí, tengo ambos' },
            { value: 'solodominio', label: 'Solo tengo dominio' },
            { value: 'ninguno', label: 'No tengo nada, necesito ayuda' },
          ].map((opt) => (
            <label key={opt.value} className="checkbox-option">
              <input
                type="radio"
                value={opt.value}
                {...register('tieneDominioHosting')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Info adicional */}
      <div>
        <label className="label-base" htmlFor="informacionAdicional">
          ¿Algo más que debamos saber?
        </label>
        <textarea
          id="informacionAdicional"
          {...register('informacionAdicional')}
          className="input-base resize-none"
          rows={4}
          placeholder="Cualquier detalle relevante sobre tu negocio, proyecto o expectativas..."
        />
      </div>

    </div>
  )
}
