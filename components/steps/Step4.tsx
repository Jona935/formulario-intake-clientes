'use client'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

export function Step4({ register, errors }: Props) {
  return (
    <div className="space-y-6">

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          Tu nombre
        </label>
        <input
          {...register('nombre', { required: true })}
          className="field"
          placeholder="¿Cómo te llamamos?"
          autoFocus
        />
        {errors.nombre && <p className="text-xs text-red-400">Necesitamos tu nombre</p>}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          Email <span className="text-amber-600">*</span>
        </label>
        <input
          {...register('email', {
            required: true,
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '' },
          })}
          type="email"
          className="field"
          placeholder="tu@email.com"
        />
        {errors.email && <p className="text-xs text-red-400">Revisa tu email</p>}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          WhatsApp <span className="text-white/20 normal-case font-normal">(opcional)</span>
        </label>
        <input
          {...register('whatsapp')}
          type="tel"
          className="field"
          placeholder="+52 55 1234 5678"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium tracking-widest text-white/30 uppercase">
          ¿Algo más que debamos saber?
        </label>
        <textarea
          {...register('extras')}
          className="field resize-none"
          rows={3}
          placeholder="Cualquier detalle que creas importante…"
        />
      </div>

      <p className="text-xs text-white/20 leading-relaxed pt-2">
        Al enviar, aceptas que te contactemos para presentarte una propuesta.
        No compartimos tu información.
      </p>

    </div>
  )
}
