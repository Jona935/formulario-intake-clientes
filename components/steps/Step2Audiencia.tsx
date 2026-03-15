'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function Step2Audiencia({ register, errors }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="label-base" htmlFor="clienteIdeal">
          ¿Quién es tu cliente ideal? <span className="text-red-400">*</span>
        </label>
        <textarea
          id="clienteIdeal"
          {...register('clienteIdeal', { required: 'Campo requerido' })}
          className="input-base resize-none"
          rows={3}
          placeholder="Ej: Mujeres de 25-40 años, profesionistas, buscan productos naturales y sostenibles"
        />
        {errors.clienteIdeal && (
          <p className="mt-1.5 text-xs text-red-400">{errors.clienteIdeal.message}</p>
        )}
      </div>

      <div>
        <label className="label-base" htmlFor="problemasQueResuelves">
          ¿Cuáles son los principales problemas que resuelves?
        </label>
        <textarea
          id="problemasQueResuelves"
          {...register('problemasQueResuelves')}
          className="input-base resize-none"
          rows={3}
          placeholder="Lista 2-3 problemas principales de tu cliente que tú resuelves..."
        />
      </div>

      <div>
        <label className="label-base" htmlFor="comoLleganClientes">
          ¿Cómo llegan actualmente tus clientes a ti?
        </label>
        <input
          id="comoLleganClientes"
          {...register('comoLleganClientes')}
          className="input-base"
          placeholder="Ej: Redes sociales, boca a boca, búsqueda en Google..."
        />
      </div>
    </div>
  )
}
