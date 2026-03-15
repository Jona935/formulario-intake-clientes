'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function Step1Negocio({ register, errors }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="label-base" htmlFor="nombreNegocio">
          Nombre del negocio <span className="text-red-400">*</span>
        </label>
        <input
          id="nombreNegocio"
          {...register('nombreNegocio', { required: 'Campo requerido' })}
          className="input-base"
          placeholder="Ej: La Cúspide Café"
        />
        {errors.nombreNegocio && (
          <p className="mt-1.5 text-xs text-red-400">{errors.nombreNegocio.message}</p>
        )}
      </div>

      <div>
        <label className="label-base" htmlFor="descripcionUnaLinea">
          ¿Qué hace tu negocio en una oración? <span className="text-red-400">*</span>
        </label>
        <input
          id="descripcionUnaLinea"
          {...register('descripcionUnaLinea', { required: 'Campo requerido' })}
          className="input-base"
          placeholder="Ej: Vendemos café de especialidad con servicio a domicilio en CDMX"
        />
        {errors.descripcionUnaLinea && (
          <p className="mt-1.5 text-xs text-red-400">{errors.descripcionUnaLinea.message}</p>
        )}
      </div>

      <div>
        <label className="label-base" htmlFor="industria">
          Industria / sector <span className="text-red-400">*</span>
        </label>
        <input
          id="industria"
          {...register('industria', { required: 'Campo requerido' })}
          className="input-base"
          placeholder="Ej: Restaurante, Consultora, Tienda online, Clínica..."
        />
        {errors.industria && (
          <p className="mt-1.5 text-xs text-red-400">{errors.industria.message}</p>
        )}
      </div>

      <div>
        <label className="label-base" htmlFor="propuestaValor">
          ¿Cuál es tu propuesta de valor? ¿Por qué elegirte a ti?
        </label>
        <textarea
          id="propuestaValor"
          {...register('propuestaValor')}
          className="input-base resize-none"
          rows={4}
          placeholder="Lo que te hace diferente y mejor que tu competencia..."
        />
      </div>
    </div>
  )
}
