export interface FormData {
  // Paso 1 — Negocio
  nombreNegocio: string
  descripcionUnaLinea: string
  industria: string
  propuestaValor: string

  // Paso 2 — Audiencia
  clienteIdeal: string
  problemasQueResuelves: string
  comoLleganClientes: string

  // Paso 3 — Referencias
  competidores: string
  diferencialVsCompetencia: string
  referenciasVisuales: string

  // Paso 4 — Identidad visual
  tieneLogo: 'si' | 'mejorar' | 'no'
  coloresMarca: string
  estiloVisual: string[]
  preferenciaTipografia: string

  // Paso 5 — Contenido
  tieneTextos: 'si' | 'algunos' | 'no'
  tieneFotos: 'profesionales' | 'algunas' | 'banco' | 'ninguna'
  necesitaVideo: 'no' | 'tengo' | 'necesito'

  // Paso 6 — Funcionalidades
  paginasRequeridas: string[]
  funcionalidades: string[]
  tonoComunicacion: 'formal' | 'semiformal' | 'casual' | 'inspiracional'
  objetivoPrincipal: string
  mensajeDestacado: string

  // Paso 7 — Alcance
  idioma: string
  cantidadPaginas: 'landing' | 'basica' | 'mediana' | 'compleja'
  plazo: 'urgente' | 'normal' | 'sinprisa' | 'fecha'
  fechaEspecifica: string
  tieneDominioHosting: 'ambos' | 'solodominio' | 'ninguno'
  informacionAdicional: string

  // Contacto
  nombreContacto: string
  emailContacto: string
  telefonoContacto: string
}
