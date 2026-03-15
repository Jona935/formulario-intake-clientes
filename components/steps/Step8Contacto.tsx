'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function Step8Contacto({ register, errors }: Props) {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-400 leading-relaxed">
        Último paso. ¿A dónde te enviamos la propuesta?
      </p>

      <div>
        <label className="label-base" htmlFor="nombreContacto">
          Tu nombre <span className="text-red-400">*</span>
        </label>
        <input
          id="nombreContacto"
          {...register('nombreContacto', { required: 'Campo requerido' })}
          className="input-base"
          placeholder="Tu nombre completo"
        />
        {errors.nombreContacto && (
          <p className="mt-1.5 text-xs text-red-400">{errors.nombreContacto.message}</p>
        )}
      </div>

      <div>
        <label className="label-base" htmlFor="emailContacto">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="emailContacto"
          type="email"
          {...register('emailContacto', {
            required: 'Campo requerido',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' },
          })}
          className="input-base"
          placeholder="tu@email.com"
        />
        {errors.emailContacto && (
          <p className="mt-1.5 text-xs text-red-400">{errors.emailContacto.message}</p>
        )}
      </div>

      <div>
        <label className="label-base" htmlFor="telefonoContacto">
          WhatsApp / Teléfono
        </label>
        <input
          id="telefonoContacto"
          type="tel"
          {...register('telefonoContacto')}
          className="input-base"
          placeholder="+52 55 1234 5678"
        />
      </div>

      <div className="rounded-lg border border-surface-border bg-brand-600/5 p-4 mt-2">
        <p className="text-xs text-gray-400 leading-relaxed">
          Al enviar este formulario aceptas que te contactemos para presentarte
          una propuesta para tu proyecto web. No compartimos tu información con terceros.
        </p>
      </div>
    </div>
  )
}
