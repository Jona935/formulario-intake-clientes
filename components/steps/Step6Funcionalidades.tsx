'use client'
import type { UseFormRegister, FieldErrors } from 'react-hook-form'
import type { FormData } from '@/types/form'

interface Props {
  register: UseFormRegister<FormData>
  errors: FieldErrors<FormData>
}

const paginas = [
  'Inicio (Home)', 'Sobre nosotros', 'Servicios', 'Productos / Catálogo',
  'Precios / Tarifas', 'Portafolio / Casos de éxito', 'Blog / Artículos',
  'Contacto', 'FAQ', 'Equipo',
]

const funcionalidades = [
  'Formulario de contacto', 'Chat en vivo', 'Reservas / Citas online',
  'Tienda / Carrito de compras', 'Suscripción a newsletter',
  'Área de clientes / Login', 'Integración con WhatsApp',
  'Google Analytics / Meta Pixel', 'Mapa de ubicación', 'Blog con CMS',
]

const tonos = [
  { value: 'formal', label: 'Formal — lenguaje técnico y profesional' },
  { value: 'semiformal', label: 'Semi-formal — directo y claro (tú)' },
  { value: 'casual', label: 'Casual — cercano y coloquial' },
  { value: 'inspiracional', label: 'Inspiracional — aspiracional y emocional' },
]

export function Step6Funcionalidades({ register, errors }: Props) {
  return (
    <div className="space-y-6">

      {/* Páginas */}
      <div>
        <label className="label-base">¿Qué páginas necesitas? <span className="text-red-400">*</span></label>
        <div className="grid grid-cols-2 gap-2">
          {paginas.map((p) => (
            <label key={p} className="checkbox-option">
              <input
                type="checkbox"
                value={p}
                {...register('paginasRequeridas', { required: 'Selecciona al menos una página' })}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{p}</span>
            </label>
          ))}
        </div>
        {errors.paginasRequeridas && (
          <p className="mt-1.5 text-xs text-red-400">{String(errors.paginasRequeridas.message)}</p>
        )}
      </div>

      {/* Funcionalidades */}
      <div>
        <label className="label-base">¿Qué funcionalidades necesitas?</label>
        <div className="grid grid-cols-2 gap-2">
          {funcionalidades.map((f) => (
            <label key={f} className="checkbox-option">
              <input
                type="checkbox"
                value={f}
                {...register('funcionalidades')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{f}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tono */}
      <div>
        <label className="label-base">¿Cómo quieres hablarle a tus clientes?</label>
        <div className="space-y-2">
          {tonos.map((t) => (
            <label key={t.value} className="checkbox-option">
              <input
                type="radio"
                value={t.value}
                {...register('tonoComunicacion')}
                className="accent-brand-500"
              />
              <span className="text-sm text-gray-300">{t.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Mensaje destacado */}
      <div>
        <label className="label-base" htmlFor="mensajeDestacado">
          ¿Hay algún mensaje que SIEMPRE debe estar visible?
        </label>
        <input
          id="mensajeDestacado"
          {...register('mensajeDestacado')}
          className="input-base"
          placeholder="Ej: 'Envío gratis en CDMX' / '15 años de experiencia' / 'Disponible 24/7'"
        />
      </div>

    </div>
  )
}
