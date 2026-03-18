export interface FormData {
  // Paso 1 — El negocio
  nombreNegocio: string
  industria: string
  descripcion: string

  // Paso 2 — Estilo visual
  estiloVisual: string
  referencias: string
  coloresMarca: string

  // Paso 3 — La web
  tipoWeb: string
  funcionalidades: string[]
  plazo: string

  // Paso 4 — Contacto
  nombre: string
  email: string
  whatsapp: string
  extras: string
}
