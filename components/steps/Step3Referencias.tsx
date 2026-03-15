'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function Step3Referencias({ register, errors }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="label-base" htmlFor="competidores">
          Lista 2-3 webs de tu competencia directa
        </label>
        <textarea
          id="competidores"
          {...register('competidores')}
          className="input-base resize-none"
          rows={3}
          placeholder="https://competidor1.com&#10;https://competidor2.com&#10;https://competidor3.com"
        />
        <p className="mt-1.5 text-xs text-gray-500">
          Las usamos para entender tu mercado, no para copiar.
        </p>
      </div>

      <div>
        <label className="label-base" htmlFor="diferencialVsCompetencia">
          ¿Qué tiene tu competencia que quieras superar o hacer diferente?
        </label>
        <textarea
          id="diferencialVsCompetencia"
          {...register('diferencialVsCompetencia')}
          className="input-base resize-none"
          rows={3}
          placeholder="¿Qué hacen mal? ¿Qué les falta? ¿En qué los superas?"
        />
      </div>

      <div>
        <label className="label-base" htmlFor="referenciasVisuales">
          Lista 3-5 webs que te gusten visualmente <span className="text-red-400">*</span>
        </label>
        <textarea
          id="referenciasVisuales"
          {...register('referenciasVisuales', { required: 'Necesitamos al menos 2 referencias' })}
          className="input-base resize-none"
          rows={5}
          placeholder="https://sitio1.com — Me gusta el minimalismo y el uso del espacio&#10;https://sitio2.com — Me gusta la paleta de colores&#10;https://sitio3.com — Me gusta cómo muestran sus productos"
        />
        {errors.referenciasVisuales && (
          <p className="mt-1.5 text-xs text-red-400">{errors.referenciasVisuales.message}</p>
        )}
        <p className="mt-1.5 text-xs text-gray-500">
          No tienen que ser de tu industria. Agrega por qué te gusta cada una.
        </p>
      </div>
    </div>
  )
}
